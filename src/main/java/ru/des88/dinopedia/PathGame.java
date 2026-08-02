package ru.des88.dinopedia;

import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.dom.events.KeyboardEvent;
import ru.des88.dinopedia.core.UIHelper;

/**
 * Мини-игра «Путь к раскопкам» — платформер с лестницами и катящимися камнями.
 * Игрок должен забраться наверх по лестницам, уклоняясь от камней.
 */
public class PathGame {
    private static final double BASE_W = 800;
    private static final double BASE_H = 600;
    private static final int PLATFORM_COUNT = 5;
    private static final double PLATFORM_THICKNESS = 12;
    private static final double PLAYER_R = 16;
    private static final double STONE_R = 16;
    private static final double PLAYER_SPEED = 3.5;
    private static final double CLIMB_SPEED = 2.8;

    private final HTMLCanvasElement canvas;
    private final CanvasRenderingContext2D ctx;
    private final HTMLDocument doc = Window.current().getDocument();
    private final IntCallback onCompleteCallback;
    private final Runnable onFailCallback;

    private double scaleX, scaleY;
    private Platform[] platforms;
    private Ladder[] ladders;
    private Stone[] stones;
    private Player player;
    private int lives = 3;
    private int score = 0;
    private int level = 1;
    private boolean playing = false;
    private double invulnTimer = 0;
    private double lastTime = 0;
    private int animId = -1;

    // Input state
    private boolean keyLeft, keyRight, keyUp, keyDown;

    public interface IntCallback { void call(int value); }

    private static class Platform {
        final double y, x1, x2;
        final int index;
        final boolean gapRight;
        Platform(double y, double x1, double x2, int index, boolean gapRight) {
            this.y = y; this.x1 = x1; this.x2 = x2; this.index = index; this.gapRight = gapRight;
        }
    }

    private static class Ladder {
        final double x, yTop, yBottom;
        final int lowerIndex, upperIndex;
        Ladder(double x, double yTop, double yBottom, int lower, int upper) {
            this.x = x; this.yTop = yTop; this.yBottom = yBottom;
            this.lowerIndex = lower; this.upperIndex = upper;
        }
    }

    private static class Stone {
        double x, y, vx, vy;
        int platformIndex;
        boolean falling;
    }

    private static class Player {
        double x, y;
        Ladder onLadder;
        int platformIndex;
    }

    public PathGame(HTMLCanvasElement canvas, IntCallback onComplete, Runnable onFail) {
        this.canvas = canvas;
        this.ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
        this.onCompleteCallback = onComplete;
        this.onFailCallback = onFail;
        resize();
        setupInput();
    }

    private void resize() {
        int maxW = Math.min(UIHelper.windowWidth() - 40, 800);
        int maxH = Math.min(UIHelper.windowHeight() - 220, 600);
        canvas.setWidth(maxW);
        canvas.setHeight(maxH);
        scaleX = canvas.getWidth() / BASE_W;
        scaleY = canvas.getHeight() / BASE_H;
    }

    private double sx(double v) { return v * scaleX; }
    private double sy(double v) { return v * scaleY; }

    // === INPUT ===

    private void setupInput() {
        doc.addEventListener("keydown", (EventListener<KeyboardEvent>) e -> {
            if (!playing) return;
            String k = e.getKey();
            if (k.equals("ArrowLeft") || k.equals("a") || k.equals("A")) { keyLeft = true; e.preventDefault(); }
            else if (k.equals("ArrowRight") || k.equals("d") || k.equals("D")) { keyRight = true; e.preventDefault(); }
            else if (k.equals("ArrowUp") || k.equals("w") || k.equals("W")) { keyUp = true; e.preventDefault(); }
            else if (k.equals("ArrowDown") || k.equals("s") || k.equals("S")) { keyDown = true; e.preventDefault(); }
        });
        doc.addEventListener("keyup", (EventListener<KeyboardEvent>) e -> {
            String k = e.getKey();
            if (k.equals("ArrowLeft") || k.equals("a") || k.equals("A")) keyLeft = false;
            else if (k.equals("ArrowRight") || k.equals("d") || k.equals("D")) keyRight = false;
            else if (k.equals("ArrowUp") || k.equals("w") || k.equals("W")) keyUp = false;
            else if (k.equals("ArrowDown") || k.equals("s") || k.equals("S")) keyDown = false;
        });

        bindMobileButton("left-btn", () -> keyLeft = true, () -> keyLeft = false);
        bindMobileButton("right-btn", () -> keyRight = true, () -> keyRight = false);
        bindMobileButton("up-btn", () -> keyUp = true, () -> keyUp = false);
        bindMobileButton("down-btn", () -> keyDown = true, () -> keyDown = false);
    }

    private void bindMobileButton(String id, Runnable onPress, Runnable onRelease) {
        HTMLElement btn = UIHelper.byId(id);
        if (btn == null) return;
        btn.onTouchStart(e -> { e.preventDefault(); onPress.run(); });
        btn.onTouchEnd(e -> { e.preventDefault(); onRelease.run(); });
        btn.onMouseDown(e -> onPress.run());
        btn.onMouseUp(e -> onRelease.run());
        btn.onMouseLeave(e -> onRelease.run());
    }

    // === START ===

    public void start(int lvl) {
        level = lvl;
        lives = 3;
        score = 0;
        invulnTimer = 0;
        playing = true;
        resize();
        generateLevel();
        spawnStones();

        Platform bottom = platforms[platforms.length - 1];
        player = new Player();
        player.x = (bottom.x1 + bottom.x2) / 2;
        player.y = bottom.y - PLAYER_R;
        player.onLadder = null;
        player.platformIndex = platforms.length - 1;

        updateUI();
        lastTime = System.currentTimeMillis();
        loop();
    }

    private void generateLevel() {
        platforms = new Platform[PLATFORM_COUNT];
        double topMargin = 60;
        double bottomMargin = 40;
        double usableH = BASE_H - topMargin - bottomMargin;
        double gap = usableH / (PLATFORM_COUNT - 1);

        for (int i = 0; i < PLATFORM_COUNT; i++) {
            double y = topMargin + i * gap;
            boolean gapRight = i % 2 == 0;
            double gapWidth = 90;
            double x1, x2;
            if (gapRight) { x1 = 20; x2 = BASE_W - 20 - gapWidth; }
            else { x1 = 20 + gapWidth; x2 = BASE_W - 20; }
            platforms[i] = new Platform(y, x1, x2, i, gapRight);
        }

        // Ladders: 2 between each pair
        int ladderCount = (PLATFORM_COUNT - 1) * 2;
        ladders = new Ladder[ladderCount];
        int idx = 0;
        for (int i = 0; i < PLATFORM_COUNT - 1; i++) {
            Platform pLower = platforms[i + 1];
            Platform pUpper = platforms[i];
            double lx1 = clamp(pLower.x1 + 60 + Math.random() * 80, pLower.x1 + 25, pLower.x2 - 25);
            double lx2 = clamp(pLower.x1 + 280 + Math.random() * 120, pLower.x1 + 25, pLower.x2 - 25);
            ladders[idx++] = new Ladder(lx1, pUpper.y, pLower.y, i + 1, i);
            ladders[idx++] = new Ladder(lx2, pUpper.y, pLower.y, i + 1, i);
        }
    }

    private static double clamp(double v, double min, double max) {
        return Math.max(min, Math.min(max, v));
    }

    private void spawnStones() {
        int count = 2 + (int)(level * 1.5);
        double baseSpeed = 1.5 + level * 0.3;
        stones = new Stone[count];
        for (int i = 0; i < count; i++) {
            int pi = (int)(Math.random() * PLATFORM_COUNT);
            Platform p = platforms[pi];
            Stone s = new Stone();
            s.x = p.x1 + Math.random() * (p.x2 - p.x1);
            s.y = p.y - STONE_R;
            s.vx = (Math.random() < 0.5 ? -1 : 1) * (baseSpeed + Math.random() * 0.5);
            s.platformIndex = pi;
            s.falling = false;
            stones[i] = s;
        }
    }

    // === UPDATE ===

    private void update(double dt) {
        if (!playing) return;
        double sf = dt / 16.67;
        if (invulnTimer > 0) invulnTimer -= dt;
        updatePlayer(sf);
        updateStones(sf);
        checkCollisions();
    }

    private void updatePlayer(double sf) {
        if (player.onLadder != null) {
            if (keyUp) player.y -= CLIMB_SPEED * sf;
            if (keyDown) player.y += CLIMB_SPEED * sf;
            Ladder l = player.onLadder;
            if (player.y <= l.yTop - PLAYER_R + 2) {
                player.y = l.yTop - PLAYER_R;
                player.onLadder = null;
                player.platformIndex = l.upperIndex;
            }
            if (player.y >= l.yBottom - PLAYER_R) {
                player.y = l.yBottom - PLAYER_R;
                player.onLadder = null;
                player.platformIndex = l.lowerIndex;
            }
            if (keyLeft || keyRight) {
                int idx = player.y <= l.yTop + 5 ? l.upperIndex : l.lowerIndex;
                player.onLadder = null;
                player.platformIndex = idx;
                player.y = platforms[idx].y - PLAYER_R;
            }
        } else {
            Platform p = platforms[player.platformIndex];
            if (keyLeft) player.x -= PLAYER_SPEED * sf;
            else if (keyRight) player.x += PLAYER_SPEED * sf;
            if (player.x < p.x1 + PLAYER_R) player.x = p.x1 + PLAYER_R;
            if (player.x > p.x2 - PLAYER_R) player.x = p.x2 - PLAYER_R;
            if (keyUp || keyDown) {
                Ladder l = findLadder(player.x, player.platformIndex, keyUp);
                if (l != null) {
                    player.onLadder = l;
                    player.x = l.x;
                }
            }
            if (player.platformIndex == 0) win();
        }
    }

    private Ladder findLadder(double x, int platformIndex, boolean up) {
        for (Ladder l : ladders) {
            if (up && l.lowerIndex == platformIndex && Math.abs(x - l.x) < 25) return l;
            if (!up && l.upperIndex == platformIndex && Math.abs(x - l.x) < 25) return l;
        }
        return null;
    }

    private void updateStones(double sf) {
        for (Stone s : stones) {
            if (s.falling) {
                s.vy += 0.3 * sf;
                s.y += s.vy * sf;
                Platform tp = platforms[s.platformIndex];
                if (s.y >= tp.y - STONE_R) {
                    if (s.x >= tp.x1 && s.x <= tp.x2) {
                        s.y = tp.y - STONE_R;
                        s.falling = false;
                        s.vy = 0;
                        s.vx = (Math.random() < 0.5 ? -1 : 1) * Math.abs(s.vx);
                    } else if (s.platformIndex < PLATFORM_COUNT - 1) {
                        s.platformIndex++;
                    } else {
                        respawnStone(s);
                    }
                }
            } else {
                Platform p = platforms[s.platformIndex];
                s.x += s.vx * sf;
                if (s.x <= p.x1 + STONE_R || s.x >= p.x2 - STONE_R) {
                    if (s.platformIndex < PLATFORM_COUNT - 1) {
                        s.falling = true;
                        s.vy = 0;
                        s.platformIndex++;
                        s.x = s.x <= p.x1 + STONE_R ? p.x1 - 5 : p.x2 + 5;
                    } else {
                        s.vx = -s.vx;
                        s.x = clamp(s.x, p.x1 + STONE_R, p.x2 - STONE_R);
                    }
                }
            }
        }
    }

    private void respawnStone(Stone s) {
        Platform top = platforms[0];
        s.x = top.x1 + Math.random() * (top.x2 - top.x1);
        s.y = top.y - STONE_R;
        s.vx = (Math.random() < 0.5 ? -1 : 1) * (1.5 + level * 0.3);
        s.platformIndex = 0;
        s.falling = false;
        s.vy = 0;
    }

    private void checkCollisions() {
        if (invulnTimer > 0) return;
        for (Stone s : stones) {
            double dx = player.x - s.x;
            double dy = player.y - s.y;
            if (Math.sqrt(dx * dx + dy * dy) < PLAYER_R + STONE_R - 4) {
                hitStone(s);
                return;
            }
        }
    }

    private void hitStone(Stone s) {
        lives--;
        score = Math.max(0, score - 30);
        invulnTimer = 1500;
        respawnStone(s);
        updateUI();
        if (lives <= 0) lose();
    }

    // === RENDER ===

    private void draw() {
        ctx.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());

        // Background gradient
        ctx.setFillStyle("#87CEEB");
        ctx.fillRect(0, 0, canvas.getWidth(), sy(BASE_H * 0.5));
        ctx.setFillStyle("#90EE90");
        ctx.fillRect(0, sy(BASE_H * 0.5), canvas.getWidth(), sy(BASE_H * 0.5));

        // Platforms
        for (Platform p : platforms) {
            ctx.setFillStyle("#8B4513");
            ctx.fillRect(sx(p.x1), sy(p.y), sx(p.x2 - p.x1), sy(PLATFORM_THICKNESS));
            ctx.setFillStyle("#228B22");
            ctx.fillRect(sx(p.x1), sy(p.y), sx(p.x2 - p.x1), sy(4));
        }

        // Ladders
        for (Ladder l : ladders) {
            double x = sx(l.x), yT = sy(l.yTop), yB = sy(l.yBottom), w = sx(18);
            ctx.setFillStyle("#DAA520");
            ctx.fillRect(x - w / 2, yT, 4, yB - yT);
            ctx.fillRect(x + w / 2 - 4, yT, 4, yB - yT);
            ctx.setStrokeStyle("#B8860B");
            ctx.setLineWidth(2);
            for (double y = yT + 6; y < yB; y += 12) {
                ctx.beginPath();
                ctx.moveTo(x - w / 2, y);
                ctx.lineTo(x + w / 2, y);
                ctx.stroke();
            }
        }

        // Finish zone
        ctx.setFillStyle("rgba(255, 215, 0, 0.35)");
        ctx.fillRect(0, 0, canvas.getWidth(), sy(50));
        ctx.setFillStyle("#FFD700");
        ctx.setFont("bold " + Math.max(14, (int)sy(18)) + "px Arial");
        ctx.setTextAlign("center");
        ctx.fillText("🏁 ФИНИШ 🏁", canvas.getWidth() / 2.0, sy(32));

        // Stones
        for (Stone s : stones) {
            drawEmoji("🪨", sx(s.x), sy(s.y), sy(STONE_R * 2));
        }

        // Player (blink if invulnerable)
        if (player != null) {
            boolean blink = invulnTimer > 0 && ((int)(invulnTimer / 150)) % 2 == 0;
            if (!blink) {
                drawEmoji("🧗", sx(player.x), sy(player.y), sy(PLAYER_R * 2));
            }
        }
    }

    private void drawEmoji(String emoji, double x, double y, double size) {
        ctx.setFont((int)Math.max(8, size) + "px Arial");
        ctx.setTextAlign("center");
        ctx.setTextBaseline("middle");
        ctx.fillText(emoji, x, y);
    }

    // === UI ===

    private void updateUI() {
        StringBuilder hearts = new StringBuilder();
        for (int i = 0; i < Math.max(0, lives); i++) hearts.append("❤️");
        UIHelper.setText("path-lives", hearts.toString());
        UIHelper.setText("path-score", "Очки: " + score);
    }

    // === GAME LOOP ===

    private void loop() {
        if (!playing) return;
        double now = System.currentTimeMillis();
        double dt = Math.min(now - lastTime, 50);
        lastTime = now;
        update(dt);
        draw();
        Window.requestAnimationFrame(t -> loop());
    }

    private void win() {
        playing = false;
        score += 100;
        updateUI();
        showMessage("🎉 Победа! Путь к раскопкам пройден!", true);
        Window.setTimeout(() -> onCompleteCallback.call(score), 1800);
    }

    private void lose() {
        playing = false;
        showMessage("💀 Игра окончена! Попробуйте снова.", false);
        Window.setTimeout(() -> onFailCallback.run(), 1800);
    }

    private void showMessage(String text, boolean success) {
        HTMLElement el = UIHelper.byId("path-message");
        if (el == null) return;
        el.withText(text);
        UIHelper.setStyle(el, "display", "block");
        UIHelper.setStyle(el, "color", success ? "#27ae60" : "#e74c3c");
        Window.setTimeout(() -> UIHelper.setStyle(el, "display", "none"), 1800);
    }
}
