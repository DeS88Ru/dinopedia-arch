package ru.des88.dinopedia;

import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLElement;
import org.teavm.jso.dom.events.MouseEvent;
import org.teavm.jso.dom.events.TouchEvent;
import org.teavm.jso.dom.events.Touch;
import org.teavm.jso.dom.events.EventListener;
import org.teavm.jso.core.JSArrayReader;
import ru.des88.dinopedia.core.UIHelper;
import ru.des88.dinopedia.data.GameElement;

/**
 * Мини-игра «Раскопки» — головоломка «Три в ряд».
 * Поля: 9×9 (уровни 1–3), 12×12 (4–6), 16×16 (7+).
 * Элементы: кости динозавра (целевые), камни, кирпичи, кусты.
 * Цель: набрать 500–1000 очков, собирая ряды из 3+ элементов.
 */
public class DigGame {
    private final HTMLCanvasElement canvas;
    private final CanvasRenderingContext2D ctx;
    private final PathGame.IntCallback onCompleteCallback;
    private final Runnable onFailCallback;

    private int gridSize = 9;
    private int cellSize = 40;
    private int padding = 4;

    private GameElement[][] grid;
    private int selectedRow = -1;
    private int selectedCol = -1;
    private int score = 0;
    private int targetScore = 500;
    private int moves = 25;
    private int bonesCollected = 0;
    private int level = 1;
    private boolean playing = false;
    private boolean animating = false;

    public DigGame(HTMLCanvasElement canvas, PathGame.IntCallback onComplete, Runnable onFail) {
        this.canvas = canvas;
        this.ctx = (CanvasRenderingContext2D) canvas.getContext("2d");
        this.onCompleteCallback = onComplete;
        this.onFailCallback = onFail;
        setupInput();
    }

    // === START ===

    public void start(int lvl) {
        level = lvl;
        if (lvl <= 3) gridSize = 9;
        else if (lvl <= 6) gridSize = 12;
        else gridSize = 16;

        targetScore = Math.min(1000, 500 + level * 50);
        moves = 20 + level * 2;
        score = 0;
        bonesCollected = 0;
        selectedRow = -1;
        selectedCol = -1;
        playing = true;
        animating = false;

        resize();
        generateGrid();
        removeInitialMatches();
        updateUI();
        draw();
    }

    private void resize() {
        int maxDim = Math.min(Math.min(UIHelper.windowWidth() - 40, UIHelper.windowHeight() - 180), 700);
        cellSize = Math.max(24, Math.min(50, (maxDim - padding * (gridSize + 1)) / gridSize));
        int dim = cellSize * gridSize + padding * (gridSize + 1);
        canvas.setWidth(dim);
        canvas.setHeight(dim);
    }

    // === GRID ===

    private void generateGrid() {
        grid = new GameElement[gridSize][gridSize];
        for (int r = 0; r < gridSize; r++)
            for (int c = 0; c < gridSize; c++)
                grid[r][c] = GameElement.random();
    }

    private void removeInitialMatches() {
        int safety = 100;
        while (findMatches().length > 0 && safety-- > 0) {
            int[][] matches = findMatches();
            for (int[] m : matches) {
                grid[m[0]][m[1]] = GameElement.random();
            }
        }
    }

    // === INPUT ===

    private void setupInput() {
        canvas.onClick(e -> handleClick(e.getClientX(), e.getClientY()));
        canvas.addEventListener("touchstart", (EventListener<TouchEvent>) e -> {
            e.preventDefault();
            JSArrayReader<Touch> touches = e.getChangedTouches();
            if (touches.getLength() > 0) {
                Touch t = touches.get(0);
                handleClick(t.getClientX(), t.getClientY());
            }
        });
    }

    private void handleClick(double clientX, double clientY) {
        if (!playing || animating) return;
        double rect = canvas.getBoundingClientRect().getLeft();
        double rectTop = canvas.getBoundingClientRect().getTop();
        double scaleX = canvas.getWidth() / (double) canvas.getBoundingClientRect().getWidth();
        double scaleY = canvas.getHeight() / (double) canvas.getBoundingClientRect().getHeight();
        double x = (clientX - rect) * scaleX;
        double y = (clientY - rectTop) * scaleY;

        int total = cellSize + padding;
        int col = (int)((x - padding) / total);
        int row = (int)((y - padding) / total);
        if (row < 0 || row >= gridSize || col < 0 || col >= gridSize) return;

        selectCell(row, col);
    }

    private void selectCell(int row, int col) {
        if (selectedRow < 0) {
            selectedRow = row;
            selectedCol = col;
        } else {
            int dr = Math.abs(row - selectedRow);
            int dc = Math.abs(col - selectedCol);
            if ((dr == 1 && dc == 0) || (dr == 0 && dc == 1)) {
                trySwap(selectedRow, selectedCol, row, col);
            }
            selectedRow = -1;
            selectedCol = -1;
        }
        draw();
    }

    // === GAME LOGIC ===

    private void trySwap(int r1, int c1, int r2, int c2) {
        animating = true;
        GameElement tmp = grid[r1][c1];
        grid[r1][c1] = grid[r2][c2];
        grid[r2][c2] = tmp;
        draw();
        Window.setTimeout(() -> {
            int[][] matches = findMatches();
            if (matches.length > 0) {
                moves--;
                processMatches();
            } else {
                // Swap back
                GameElement t2 = grid[r1][c1];
                grid[r1][c1] = grid[r2][c2];
                grid[r2][c2] = t2;
                draw();
                animating = false;
                updateUI();
            }
        }, 200);
    }

    private int[][] findMatches() {
        boolean[][] matched = new boolean[gridSize][gridSize];
        int count = 0;

        // Horizontal
        for (int r = 0; r < gridSize; r++) {
            int c = 0;
            while (c < gridSize - 2) {
                String type = grid[r][c].type;
                int len = 1;
                while (c + len < gridSize && grid[r][c + len].type.equals(type)) len++;
                if (len >= 3) {
                    for (int i = 0; i < len; i++) {
                        if (!matched[r][c + i]) { matched[r][c + i] = true; count++; }
                    }
                }
                c += len;
            }
        }
        // Vertical
        for (int c = 0; c < gridSize; c++) {
            int r = 0;
            while (r < gridSize - 2) {
                String type = grid[r][c].type;
                int len = 1;
                while (r + len < gridSize && grid[r + len][c].type.equals(type)) len++;
                if (len >= 3) {
                    for (int i = 0; i < len; i++) {
                        if (!matched[r + i][c]) { matched[r + i][c] = true; count++; }
                    }
                }
                r += len;
            }
        }

        int[][] result = new int[count][2];
        int idx = 0;
        for (int r = 0; r < gridSize; r++)
            for (int c = 0; c < gridSize; c++)
                if (matched[r][c]) { result[idx][0] = r; result[idx][1] = c; idx++; }
        return result;
    }

    private void processMatches() {
        int[][] matches = findMatches();
        if (matches.length == 0) {
            animating = false;
            updateUI();
            checkState();
            return;
        }

        int mc = matches.length;
        int points;
        if (mc >= 5) points = 35;
        else if (mc >= 4) points = 25;
        else points = 10;

        int boneCount = 0;
        for (int[] m : matches) {
            if (grid[m[0]][m[1]].isTarget) boneCount++;
        }
        score += points * (mc / 3) + boneCount * 5;
        bonesCollected += boneCount;

        for (int[] m : matches) grid[m[0]][m[1]] = null;
        draw();

        Window.setTimeout(() -> {
            dropElements();
            draw();
            Window.setTimeout(() -> {
                fillEmpty();
                draw();
                Window.setTimeout(() -> processMatches(), 200);
            }, 200);
        }, 250);
    }

    private void dropElements() {
        for (int c = 0; c < gridSize; c++) {
            int writeRow = gridSize - 1;
            for (int r = gridSize - 1; r >= 0; r--) {
                if (grid[r][c] != null) {
                    grid[writeRow][c] = grid[r][c];
                    if (writeRow != r) grid[r][c] = null;
                    writeRow--;
                }
            }
        }
    }

    private void fillEmpty() {
        for (int r = 0; r < gridSize; r++)
            for (int c = 0; c < gridSize; c++)
                if (grid[r][c] == null) grid[r][c] = GameElement.random();
    }

    // === RENDER ===

    private void draw() {
        ctx.clearRect(0, 0, canvas.getWidth(), canvas.getHeight());
        ctx.setFillStyle("#f5f0e0");
        ctx.fillRect(0, 0, canvas.getWidth(), canvas.getHeight());

        int total = cellSize + padding;
        for (int r = 0; r < gridSize; r++) {
            for (int c = 0; c < gridSize; c++) {
                int x = padding + c * total;
                int y = padding + r * total;

                ctx.setFillStyle((r + c) % 2 == 0 ? "#e8e0cc" : "#ddd5c0");
                ctx.fillRect(x, y, cellSize, cellSize);

                if (r == selectedRow && c == selectedCol) {
                    ctx.setStrokeStyle("#FFD700");
                    ctx.setLineWidth(3);
                    ctx.strokeRect(x + 2, y + 2, cellSize - 4, cellSize - 4);
                }

                if (grid[r][c] != null) {
                    GameElement el = grid[r][c];
                    if (el.isTarget) {
                        ctx.setFillStyle("rgba(255, 215, 0, 0.15)");
                        ctx.fillRect(x, y, cellSize, cellSize);
                    }
                    ctx.setFont((int)(cellSize * 0.7) + "px Arial");
                    ctx.setTextAlign("center");
                    ctx.setTextBaseline("middle");
                    ctx.fillText(el.icon, x + cellSize / 2.0, y + cellSize / 2.0);
                }
            }
        }
    }

    // === UI ===

    private void updateUI() {
        UIHelper.setText("dig-score", "Очки: " + score);
        UIHelper.setText("dig-target", "Цель: " + targetScore);
        UIHelper.setText("dig-moves", "Ходы: " + moves);
        UIHelper.setText("dig-size", "Поле: " + gridSize + "×" + gridSize);
        UIHelper.setText("dig-bones", "🦴 " + bonesCollected);
    }

    private void checkState() {
        if (score >= targetScore) {
            win();
        } else if (moves <= 0) {
            lose();
        }
    }

    private void win() {
        playing = false;
        showMessage("🎉 Отлично! " + score + " очков!", true);
        Window.setTimeout(() -> onCompleteCallback.call(score), 1500);
    }

    private void lose() {
        playing = false;
        showMessage("😔 Не хватило ходов!", false);
        Window.setTimeout(() -> onFailCallback.run(), 1500);
    }

    private void showMessage(String text, boolean success) {
        HTMLElement el = UIHelper.byId("dig-message");
        if (el == null) return;
        el.withText(text);
        UIHelper.setStyle(el, "display", "block");
        UIHelper.setStyle(el, "color", success ? "#27ae60" : "#e74c3c");
        Window.setTimeout(() -> UIHelper.setStyle(el, "display", "none"), 1500);
    }
}
