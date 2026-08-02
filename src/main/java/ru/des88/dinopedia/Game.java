package ru.des88.dinopedia;

import org.teavm.jso.browser.Window;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLElement;
import ru.des88.dinopedia.core.GameStorage;
import ru.des88.dinopedia.core.UIHelper;
import ru.des88.dinopedia.data.Dinosaur;
import ru.des88.dinopedia.data.Dinosaurs;

/**
 * Главный класс игры. Управляет экранами, навигацией и игровым процессом.
 * Вся логика экранов (кроме canvas-мини-игр) реализована здесь через DOM API.
 */
public class Game {
    private PathGame pathGame;
    private DigGame digGame;
    private int currentLevel = 1;
    private Dinosaur foundDinosaur;
    private int introIndex = 0;

    private static final String[] INTRO_TEXTS = {
        "Привет, юный исследователь! Меня зовут профессор Камневедов. Я — археолог!",
        "Археологи — это учёные, которые раскапывают древние сокровища и изучают историю Земли.",
        "Мы находим окаменелости динозавров, которые жили миллионы лет назад!",
        "Хочешь отправиться со мной в удивительный мир динозавров?",
        "Тогда вперёд! Нас ждут раскопки и древние тайны! 🦕"
    };

    public void start() {
        buildAllScreens();
        if (GameStorage.isLoggedIn()) {
            showScreen("menu-screen");
            updatePlayerInfo();
        } else {
            showScreen("auth-screen");
        }
    }

    // ===================================================================
    //  SCREEN BUILDING
    // ===================================================================

    private void buildAllScreens() {
        HTMLElement app = UIHelper.byId("app");

        app.appendChild(createScreen("auth-screen", AUTH_HTML));
        app.appendChild(createScreen("intro-screen", INTRO_HTML));
        app.appendChild(createScreen("menu-screen", MENU_HTML));
        app.appendChild(createScreen("level-select-screen", LEVEL_SELECT_HTML));
        app.appendChild(createScreen("path-game-screen", PATH_GAME_HTML));
        app.appendChild(createScreen("dig-game-screen", DIG_GAME_HTML));
        app.appendChild(createScreen("discovery-screen", DISCOVERY_HTML));
        app.appendChild(createScreen("encyclopedia-screen", ENCYCLOPEDIA_HTML));
        app.appendChild(createScreen("dino-detail-screen", DETAIL_HTML));
        app.appendChild(createScreen("profile-screen", PROFILE_HTML));
        app.appendChild(createScreen("settings-screen", SETTINGS_HTML));

        setupAuthHandlers();
        setupIntroHandlers();
        setupMenuHandlers();
        setupNavigationHandlers();

        HTMLCanvasElement pathCanvas = (HTMLCanvasElement) UIHelper.byId("path-canvas");
        pathGame = new PathGame(pathCanvas, score -> onPathComplete(score), () -> onPathFail());

        HTMLCanvasElement digCanvas = (HTMLCanvasElement) UIHelper.byId("dig-canvas");
        digGame = new DigGame(digCanvas, score -> onDigComplete(score), () -> onDigFail());
    }

    private HTMLElement createScreen(String id, String innerHTML) {
        HTMLElement div = UIHelper.create("div");
        div.withAttr("id", id);
        div.getClassList().add("screen");
        div.setInnerHTML(innerHTML);
        return div;
    }

    // ===================================================================
    //  AUTH SCREEN
    // ===================================================================

    private static final String AUTH_HTML =
        "<div class=\"panel\">" +
        "<h1>🦕 Археолог: Энциклопедия динозавров</h1>" +
        "<div class=\"auth-form\">" +
        "<input type=\"email\" id=\"email-input\" placeholder=\"Email\" >" +
        "<input type=\"password\" id=\"password-input\" placeholder=\"Пароль\" >" +
        "<button id=\"login-btn\">Войти</button>" +
        "<button id=\"register-btn\">Регистрация</button>" +
        "<p class=\"demo-note\">Демо-режим: играйте без регистрации!</p>" +
        "<button id=\"demo-btn\" class=\"btn-secondary\">Играть демо</button>" +
        "</div></div>";

    private void setupAuthHandlers() {
        UIHelper.byId("login-btn").onClick(e -> handleLogin());
        UIHelper.byId("register-btn").onClick(e -> handleRegister());
        UIHelper.byId("demo-btn").onClick(e -> handleDemo());
    }

    private void handleLogin() {
        String email = UIHelper.getInputValue("email-input");
        String password = UIHelper.getInputValue("password-input");
        if (email.isEmpty() || password.isEmpty()) {
            UIHelper.alert("Введите email и пароль");
            return;
        }
        if (GameStorage.login(email, password)) {
            startIntro();
        } else {
            UIHelper.alert("Неверный email или пароль");
        }
    }

    private void handleRegister() {
        String email = UIHelper.getInputValue("email-input");
        String password = UIHelper.getInputValue("password-input");
        if (email.isEmpty() || password.isEmpty()) {
            UIHelper.alert("Введите email и пароль");
            return;
        }
        if (password.length() < 6) {
            UIHelper.alert("Пароль должен быть не менее 6 символов");
            return;
        }
        if (GameStorage.register(email, password)) {
            startIntro();
        } else {
            UIHelper.alert("Пользователь с таким email уже существует");
        }
    }

    private void handleDemo() {
        GameStorage.enableDemo();
        startIntro();
    }

    // ===================================================================
    //  INTRO SCREEN
    // ===================================================================

    private static final String INTRO_HTML =
        "<div class=\"intro-panel\">" +
        "<div class=\"intro-character\">" +
        "<img src=\"assets/arc.png\" alt=\"Археолог\" id=\"char-img\" " +
        "onerror=\"this.onerror=null;this.src='assets/arc.svg';\">" +
        "</div>" +
        "<div class=\"intro-dialogue\">" +
        "<div id=\"intro-text\" class=\"intro-text\"></div>" +
        "<button id=\"intro-next-btn\" class=\"btn\">Далее ▶</button>" +
        "</div></div>";

    private void setupIntroHandlers() {
        UIHelper.byId("intro-next-btn").onClick(e -> advanceIntro());
    }

    private void startIntro() {
        introIndex = 0;
        updatePlayerInfo();
        showScreen("intro-screen");
        renderIntroText();
    }

    private void renderIntroText() {
        UIHelper.setText("intro-text", INTRO_TEXTS[introIndex]);
        UIHelper.byId("intro-next-btn").withText(
            introIndex < INTRO_TEXTS.length - 1 ? "Далее ▶" : "В путь! 🦕");
    }

    private void advanceIntro() {
        introIndex++;
        if (introIndex >= INTRO_TEXTS.length) {
            showScreen("level-select-screen");
            generateLevelsGrid();
            return;
        }
        renderIntroText();
    }

    // ===================================================================
    //  MENU SCREEN
    // ===================================================================

    private static final String MENU_HTML =
        "<div class=\"panel\">" +
        "<h1>🦕 Археолог</h1>" +
        "<div class=\"player-info\">" +
        "<span id=\"player-name\">Игрок</span> &nbsp;|&nbsp; <span id=\"player-level\">Уровень: 1</span>" +
        "</div>" +
        "<div class=\"menu-buttons\">" +
        "<button id=\"play-btn\">🎮 Играть</button>" +
        "<button id=\"encyclopedia-btn\">📖 Энциклопедия</button>" +
        "<button id=\"profile-btn\">👤 Профиль</button>" +
        "<button id=\"settings-btn\">⚙️ Настройки</button>" +
        "<button id=\"logout-btn\" class=\"btn-danger\">🚪 Выход</button>" +
        "</div></div>";

    private void setupMenuHandlers() {
        UIHelper.byId("play-btn").onClick(e -> {
            showScreen("level-select-screen");
            generateLevelsGrid();
        });
        UIHelper.byId("encyclopedia-btn").onClick(e -> renderEncyclopedia());
        UIHelper.byId("profile-btn").onClick(e -> renderProfile());
        UIHelper.byId("settings-btn").onClick(e -> showScreen("settings-screen"));
        UIHelper.byId("logout-btn").onClick(e -> {
            GameStorage.logout();
            showScreen("auth-screen");
        });
    }

    private void updatePlayerInfo() {
        GameStorage.Profile p = GameStorage.current();
        if (p != null) {
            UIHelper.setText("player-name", p.name);
            UIHelper.setText("player-level", "Уровень: " + p.level);
        }
    }

    // ===================================================================
    //  LEVEL SELECT
    // ===================================================================

    private static final String LEVEL_SELECT_HTML =
        "<div class=\"panel\">" +
        "<h2>Выберите уровень</h2>" +
        "<div id=\"levels-grid\" class=\"levels-grid\"></div>" +
        "<button id=\"back-to-menu-1\" class=\"btn-secondary\">← Назад</button>" +
        "</div>";

    private void generateLevelsGrid() {
        HTMLElement grid = UIHelper.byId("levels-grid");
        grid.clear();
        int maxLevels = 10;
        int unlocked = GameStorage.current() != null ? GameStorage.current().unlockedLevels : 1;

        for (int i = 1; i <= maxLevels; i++) {
            HTMLElement btn = UIHelper.create("button");
            final int level = i;
            if (i > unlocked) {
                btn.getClassList().add("locked");
                btn.withText("🔒");
            } else {
                btn.withText("Уровень " + i);
                btn.onClick(e -> startLevel(level));
            }
            grid.appendChild(btn);
        }
    }

    private void startLevel(int level) {
        currentLevel = level;
        showScreen("path-game-screen");
        pathGame.start(level);
    }

    // ===================================================================
    //  PATH GAME SCREEN
    // ===================================================================

    private static final String PATH_GAME_HTML =
        "<div class=\"game-header\">" +
        "<span id=\"path-lives\">❤️❤️❤️</span>" +
        "<span id=\"path-score\">Очки: 0</span>" +
        "<span class=\"game-hint\">Заберитесь наверх по лестницам!</span>" +
        "</div>" +
        "<canvas id=\"path-canvas\"></canvas>" +
        "<div class=\"mobile-controls\">" +
        "<button id=\"left-btn\">◀</button>" +
        "<button id=\"up-btn\">▲</button>" +
        "<button id=\"down-btn\">▼</button>" +
        "<button id=\"right-btn\">▶</button>" +
        "</div>" +
        "<div id=\"path-message\" class=\"game-message\"></div>";

    // ===================================================================
    //  DIG GAME SCREEN
    // ===================================================================

    private static final String DIG_GAME_HTML =
        "<div class=\"game-header\">" +
        "<span id=\"dig-score\">Очки: 0</span>" +
        "<span id=\"dig-target\">Цель: 500</span>" +
        "<span id=\"dig-moves\">Ходы: 20</span>" +
        "<span id=\"dig-size\">Поле: 9×9</span>" +
        "<span id=\"dig-bones\">🦴 0</span>" +
        "</div>" +
        "<canvas id=\"dig-canvas\"></canvas>" +
        "<div id=\"dig-message\" class=\"game-message\"></div>";

    // ===================================================================
    //  GAME COMPLETION CALLBACKS
    // ===================================================================

    private void onPathComplete(int score) {
        GameStorage.Profile p = GameStorage.current();
        if (p != null && !p.isDemo) {
            p.totalScore += score;
            p.gamesPlayed++;
            p.gamesWon++;
            GameStorage.save();
        }
        Window.setTimeout(() -> {
            showScreen("dig-game-screen");
            digGame.start(currentLevel);
        }, 500);
    }

    private void onPathFail() {
        GameStorage.Profile p = GameStorage.current();
        if (p != null && !p.isDemo) {
            p.gamesPlayed++;
            GameStorage.save();
        }
        if (UIHelper.confirm("Хотите попробовать ещё раз?")) {
            pathGame.start(currentLevel);
        } else {
            showScreen("menu-screen");
        }
    }

    private void onDigComplete(int score) {
        GameStorage.Profile p = GameStorage.current();
        if (p != null && !p.isDemo) {
            p.totalScore += score;
            p.gamesPlayed++;
            p.gamesWon++;
            GameStorage.unlockLevel(currentLevel + 1);
            GameStorage.save();
        }
        findDinosaur();
    }

    private void onDigFail() {
        GameStorage.Profile p = GameStorage.current();
        if (p != null && !p.isDemo) {
            p.gamesPlayed++;
            GameStorage.save();
        }
        if (UIHelper.confirm("Хотите попробовать ещё раз?")) {
            digGame.start(currentLevel);
        } else {
            showScreen("menu-screen");
        }
    }

    // ===================================================================
    //  DISCOVERY SCREEN
    // ===================================================================

    private static final String DISCOVERY_HTML =
        "<div class=\"panel discovery-panel\">" +
        "<h2>🎉 Отличная работа!</h2>" +
        "<div id=\"dino-found\" class=\"dinosaur-display\"></div>" +
        "<p id=\"dino-info\"></p>" +
        "<button id=\"continue-btn\">Продолжить</button>" +
        "</div>";

    private void findDinosaur() {
        foundDinosaur = Dinosaurs.random();
        int count = GameStorage.addDinosaur(foundDinosaur.id);

        UIHelper.setText("dino-found", foundDinosaur.icon);
        UIHelper.setHTML("dino-info",
            "<strong>" + foundDinosaur.name + "</strong><br>" +
            "<em>" + foundDinosaur.latinName + "</em><br>" +
            "<small>Найдено раз: " + count + "</small>");
        showScreen("discovery-screen");
    }

    // ===================================================================
    //  ENCYCLOPEDIA SCREEN
    // ===================================================================

    private static final String ENCYCLOPEDIA_HTML =
        "<div class=\"panel encyclopedia-panel\">" +
        "<h2>📖 Энциклопедия динозавров</h2>" +
        "<div id=\"collection-progress\">Найдено: 0/25</div>" +
        "<div id=\"dinosaurs-grid\" class=\"dinosaurs-grid\"></div>" +
        "<button id=\"back-to-menu-2\" class=\"btn-secondary\">← Назад</button>" +
        "</div>";

    private void renderEncyclopedia() {
        showScreen("encyclopedia-screen");
        HTMLElement grid = UIHelper.byId("dinosaurs-grid");
        grid.clear();

        int foundCount = 0;
        for (Dinosaur dino : Dinosaurs.all()) {
            int count = GameStorage.getDinoCount(dino.id);
            int stars = GameStorage.getStars(dino.id);
            if (count > 0) foundCount++;

            HTMLElement card = UIHelper.create("div");
            card.getClassList().add("dino-card");

            if (count == 0) {
                card.getClassList().add("locked");
                card.setInnerHTML("<div class=\"dino-icon\">❓</div><div class=\"dino-stars\"></div>");
            } else {
                StringBuilder starsStr = new StringBuilder();
                for (int s = 0; s < stars; s++) starsStr.append("⭐");
                card.setInnerHTML(
                    "<div class=\"dino-icon\">" + dino.icon + "</div>" +
                    "<div class=\"dino-stars\">" + starsStr + "</div>" +
                    "<div class=\"dino-name\">" + dino.name + "</div>");
                final int dinoId = dino.id;
                card.onClick(e -> showDinoDetail(dinoId));
            }
            grid.appendChild(card);
        }
        UIHelper.setText("collection-progress", "Найдено: " + foundCount + "/" + Dinosaurs.count());
    }

    // ===================================================================
    //  DINO DETAIL SCREEN
    // ===================================================================

    private static final String DETAIL_HTML =
        "<div class=\"panel detail-panel\">" +
        "<button id=\"close-detail\" class=\"close-btn\">✕</button>" +
        "<div id=\"detail-content\"></div>" +
        "</div>";

    private void showDinoDetail(int dinoId) {
        Dinosaur dino = Dinosaurs.get(dinoId);
        int count = GameStorage.getDinoCount(dinoId);
        int stars = GameStorage.getStars(dinoId);

        StringBuilder starsStr = new StringBuilder();
        for (int s = 0; s < stars; s++) starsStr.append("⭐");

        StringBuilder html = new StringBuilder();
        html.append("<div style=\"text-align:center\">");
        html.append("<div style=\"font-size:72px\">").append(dino.icon).append("</div>");
        html.append("<h2>").append(dino.name).append("</h2>");
        html.append("<p style=\"color:#888\"><em>").append(dino.latinName).append("</em></p>");
        html.append("<p style=\"color:gold;font-size:22px\">").append(starsStr).append("</p>");
        html.append("<p><strong>Найдено раз:</strong> ").append(count).append("</p>");
        html.append("</div>");
        html.append("<h3>📖 О динозавре</h3><p>").append(dino.shortInfo).append("</p>");

        if (stars >= 2) {
            html.append("<h3>📚 Подробная статья</h3><p>").append(dino.fullArticle).append("</p>");
        } else {
            html.append("<p style=\"color:#999;font-style:italic\">Найдите этого динозавра 10 раз, чтобы прочитать подробную статью!</p>");
        }
        if (stars >= 3) {
            html.append("<div class=\"fact-box\"><strong>💡 Интересный факт:</strong><br>").append(dino.funFact).append("</div>");
        }
        html.append("<p style=\"margin-top:16px\"><strong>Категория:</strong> ").append(dino.category).append("</p>");

        UIHelper.setHTML("detail-content", html.toString());
        showScreen("dino-detail-screen");
    }

    // ===================================================================
    //  PROFILE SCREEN
    // ===================================================================

    private static final String PROFILE_HTML =
        "<div class=\"panel\">" +
        "<h2>👤 Профиль игрока</h2>" +
        "<div id=\"profile-stats\"></div>" +
        "<button id=\"back-to-menu-3\" class=\"btn-secondary\">← Назад</button>" +
        "</div>";

    private void renderProfile() {
        showScreen("profile-screen");
        GameStorage.Profile p = GameStorage.current();
        if (p == null) {
            UIHelper.setHTML("profile-stats", "<p>Нет данных</p>");
            return;
        }
        int foundCount = 0;
        int totalFound = 0;
        for (int c : p.collection) {
            if (c > 0) foundCount++;
            totalFound += c;
        }
        StringBuilder sb = new StringBuilder();
        sb.append("<div class=\"stat-item\"><strong>Имя:</strong> ").append(p.name).append("</div>");
        sb.append("<div class=\"stat-item\"><strong>Уровень:</strong> ").append(p.level).append("</div>");
        sb.append("<div class=\"stat-item\"><strong>Всего очков:</strong> ").append(p.totalScore).append("</div>");
        sb.append("<div class=\"stat-item\"><strong>Сыграно игр:</strong> ").append(p.gamesPlayed).append("</div>");
        sb.append("<div class=\"stat-item\"><strong>Выиграно игр:</strong> ").append(p.gamesWon).append("</div>");
        sb.append("<div class=\"stat-item\"><strong>Найдено динозавров:</strong> ").append(foundCount).append("/").append(Dinosaurs.count()).append("</div>");
        sb.append("<div class=\"stat-item\"><strong>Всего находок:</strong> ").append(totalFound).append("</div>");
        sb.append("<div class=\"stat-item\"><strong>Открыто уровней:</strong> ").append(p.unlockedLevels).append("</div>");
        UIHelper.setHTML("profile-stats", sb.toString());
    }

    // ===================================================================
    //  SETTINGS SCREEN
    // ===================================================================

    private static final String SETTINGS_HTML =
        "<div class=\"panel settings-panel\">" +
        "<h2>⚙️ Настройки</h2>" +
        "<label><input type=\"checkbox\" id=\"sound-toggle\" checked> Звук</label>" +
        "<label><input type=\"checkbox\" id=\"music-toggle\" checked> Музыка</label>" +
        "<label><input type=\"checkbox\" id=\"hints-toggle\" checked> Подсказки</label>" +
        "<button id=\"back-to-menu-4\" class=\"btn-secondary\">← Назад</button>" +
        "</div>";

    // ===================================================================
    //  NAVIGATION
    // ===================================================================

    private void setupNavigationHandlers() {
        UIHelper.byId("back-to-menu-1").onClick(e -> showScreen("menu-screen"));
        UIHelper.byId("back-to-menu-2").onClick(e -> showScreen("menu-screen"));
        UIHelper.byId("back-to-menu-3").onClick(e -> showScreen("menu-screen"));
        UIHelper.byId("back-to-menu-4").onClick(e -> showScreen("menu-screen"));
        UIHelper.byId("close-detail").onClick(e -> showScreen("encyclopedia-screen"));
        UIHelper.byId("continue-btn").onClick(e -> {
            showScreen("menu-screen");
            updatePlayerInfo();
        });
    }

    private void showScreen(String screenId) {
        UIHelper.showScreen(screenId);
    }
}
