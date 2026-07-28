// Основное приложение

class ArchaeologistGame {
    constructor() {
        // Состояние приложения
        this.currentScreen = 'auth-screen';
        this.currentLevel = 1;
        this.pathGame = null;
        this.digGame = null;
        this.foundDinosaur = null;
        
        // Инициализация
        this.init();
    }
    
    init() {
        // Проверка сохранённой сессии
        if (Storage.isLoggedIn()) {
            Storage.loadProgress();
            this.showScreen('menu-screen');
        } else {
            this.showScreen('auth-screen');
        }
        
        // Создание экземпляров игр
        this.pathGame = new PathGame(
            'path-canvas',
            (score) => this.onPathGameComplete(score),
            () => this.onPathGameFail()
        );
        
        this.digGame = new DigGame(
            'dig-canvas',
            (score) => this.onDigGameComplete(score),
            () => this.onDigGameFail()
        );
        
        // Настройка обработчиков событий
        this.setupEventListeners();
        
        // Обновление UI
        this.updatePlayerInfo();
    }
    
    setupEventListeners() {
        // Авторизация
        document.getElementById('login-btn').addEventListener('click', () => this.handleLogin());
        document.getElementById('register-btn').addEventListener('click', () => this.handleRegister());
        document.getElementById('demo-btn').addEventListener('click', () => this.handleDemo());
        
        // Главное меню
        document.getElementById('play-btn').addEventListener('click', () => this.showScreen('level-select-screen'));
        document.getElementById('encyclopedia-btn').addEventListener('click', () => this.showEncyclopedia());
        document.getElementById('profile-btn').addEventListener('click', () => this.showProfile());
        document.getElementById('settings-btn').addEventListener('click', () => this.showScreen('settings-screen'));
        document.getElementById('logout-btn').addEventListener('click', () => this.handleLogout());
        
        // Навигация назад
        document.getElementById('back-to-menu-1').addEventListener('click', () => this.showScreen('menu-screen'));
        document.getElementById('back-to-menu-2').addEventListener('click', () => this.showScreen('menu-screen'));
        document.getElementById('back-to-menu-3').addEventListener('click', () => this.showScreen('menu-screen'));
        document.getElementById('back-to-menu-4').addEventListener('click', () => this.showScreen('menu-screen'));
        document.getElementById('close-detail').addEventListener('click', () => this.showScreen('encyclopedia-screen'));
        
        // Продолжение после находки
        document.getElementById('continue-btn').addEventListener('click', () => this.showScreen('menu-screen'));
        
        // Настройки
        document.getElementById('sound-toggle').addEventListener('change', (e) => {
            Storage.updateProgress({ settings: { sound: e.target.checked } });
        });
        document.getElementById('music-toggle').addEventListener('change', (e) => {
            Storage.updateProgress({ settings: { music: e.target.checked } });
        });
        document.getElementById('hints-toggle').addEventListener('change', (e) => {
            Storage.updateProgress({ settings: { hints: e.target.checked } });
        });
        
        // Генерация уровней
        this.generateLevelsGrid();
    }
    
    // === АВТОРИЗАЦИЯ ===
    
    handleLogin() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            alert('Введите email и пароль');
            return;
        }
        
        const result = Storage.login(email, password);
        if (result.success) {
            this.showScreen('menu-screen');
            this.updatePlayerInfo();
        } else {
            alert(result.message);
        }
    }
    
    handleRegister() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!email || !password) {
            alert('Введите email и пароль');
            return;
        }
        
        if (password.length < 6) {
            alert('Пароль должен быть не менее 6 символов');
            return;
        }
        
        const result = Storage.register(email, password);
        if (result.success) {
            this.showScreen('menu-screen');
            this.updatePlayerInfo();
        } else {
            alert(result.message);
        }
    }
    
    handleDemo() {
        Storage.enableDemoMode();
        this.showScreen('menu-screen');
        this.updatePlayerInfo();
    }
    
    handleLogout() {
        Storage.logout();
        this.showScreen('auth-screen');
    }
    
    // === НАВИГАЦИЯ ===
    
    showScreen(screenId) {
        // Скрываем все экраны
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Показываем нужный экран
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = screenId;
        }
        
        // Обновляем контент экрана
        if (screenId === 'encyclopedia-screen') {
            this.renderEncyclopedia();
        } else if (screenId === 'profile-screen') {
            this.renderProfile();
        } else if (screenId === 'level-select-screen') {
            this.generateLevelsGrid();
        }
    }
    
    updatePlayerInfo() {
        if (Storage.currentUser) {
            document.getElementById('player-name').textContent = Storage.currentUser.profile.name;
            document.getElementById('player-level').textContent = `Уровень: ${Storage.currentUser.profile.level}`;
        }
    }
    
    // === УРОВНИ ===
    
    generateLevelsGrid() {
        const grid = document.getElementById('levels-grid');
        grid.innerHTML = '';
        
        const maxLevels = 10; // Можно увеличить
        const unlockedLevels = Storage.currentUser?.unlockedLevels || 1;
        
        for (let i = 1; i <= maxLevels; i++) {
            const btn = document.createElement('button');
            btn.className = 'level-btn';
            btn.textContent = `${i}`;
            
            if (i > unlockedLevels) {
                btn.classList.add('locked');
                btn.textContent = '🔒';
                btn.disabled = true;
            } else {
                btn.addEventListener('click', () => this.startLevel(i));
            }
            
            grid.appendChild(btn);
        }
    }
    
    startLevel(level) {
        this.currentLevel = level;
        this.showScreen('path-game-screen');
        this.pathGame.start(level);
    }
    
    // === МИНИ-ИГРА "ПУТЬ К РАСКОПКАМ" ===
    
    onPathGameComplete(score) {
        // Обновляем прогресс
        if (Storage.currentUser && !Storage.currentUser.isDemo) {
            Storage.updateProgress({
                profile: {
                    totalScore: (Storage.currentUser.profile.totalScore || 0) + score,
                    gamesPlayed: (Storage.currentUser.profile.gamesPlayed || 0) + 1,
                    gamesWon: (Storage.currentUser.profile.gamesWon || 0) + 1
                }
            });
        }
        
        // Переходим к раскопкам
        setTimeout(() => {
            this.showScreen('dig-game-screen');
            this.digGame.start(this.currentLevel);
        }, 500);
    }
    
    onPathGameFail() {
        if (Storage.currentUser && !Storage.currentUser.isDemo) {
            Storage.updateProgress({
                profile: {
                    gamesPlayed: (Storage.currentUser.profile.gamesPlayed || 0) + 1
                }
            });
        }
        
        // Предложить попробовать снова
        if (confirm('Хотите попробовать ещё раз?')) {
            this.pathGame.start(this.currentLevel);
        } else {
            this.showScreen('menu-screen');
        }
    }
    
    // === МИНИ-ИГРА "РАСКОПКИ" ===
    
    onDigGameComplete(score) {
        // Обновляем прогресс
        if (Storage.currentUser && !Storage.currentUser.isDemo) {
            Storage.updateProgress({
                profile: {
                    totalScore: (Storage.currentUser.profile.totalScore || 0) + score,
                    gamesPlayed: (Storage.currentUser.profile.gamesPlayed || 0) + 1,
                    gamesWon: (Storage.currentUser.profile.gamesWon || 0) + 1
                }
            });
        }
        
        // Разблокируем следующий уровень
        if (Storage.currentUser && !Storage.currentUser.isDemo) {
            Storage.unlockLevel(this.currentLevel + 1);
        }
        
        // Находим динозавра
        this.findDinosaur();
    }
    
    onDigGameFail() {
        if (Storage.currentUser && !Storage.currentUser.isDemo) {
            Storage.updateProgress({
                profile: {
                    gamesPlayed: (Storage.currentUser.profile.gamesPlayed || 0) + 1
                }
            });
        }
        
        // Предложить попробовать снова
        if (confirm('Хотите попробовать ещё раз?')) {
            this.digGame.start(this.currentLevel);
        } else {
            this.showScreen('menu-screen');
        }
    }
    
    // === НАХОДКА ДИНОЗАВРА ===
    
    findDinosaur() {
        // Случайный динозавр
        const randomIndex = Math.floor(Math.random() * dinosaurs.length);
        this.foundDinosaur = dinosaurs[randomIndex];
        
        // Добавляем в коллекцию
        const count = Storage.addDinosaur(this.foundDinosaur.id);
        
        // Показываем экран находки
        this.showDiscoveryScreen(count);
    }
    
    showDiscoveryScreen(count) {
        const display = document.getElementById('dinosaur-found');
        const name = document.getElementById('dinosaur-name');
        
        display.textContent = this.foundDinosaur.icon;
        name.innerHTML = `
            <strong>${this.foundDinosaur.name}</strong><br>
            <em>${this.foundDinosaur.latinName}</em><br>
            <small>Найдено раз: ${count}</small>
        `;
        
        this.showScreen('discovery-screen');
    }
    
    // === ЭНЦИКЛОПЕДИЯ ===
    
    showEncyclopedia() {
        this.showScreen('encyclopedia-screen');
    }
    
    renderEncyclopedia() {
        const grid = document.getElementById('dinosaurs-grid');
        const progress = document.getElementById('collection-progress');
        grid.innerHTML = '';
        
        let foundCount = 0;
        
        dinosaurs.forEach(dino => {
            const stars = Storage.getStars(dino.id);
            const count = Storage.currentUser?.collection[dino.id] || 0;
            
            if (count > 0) foundCount++;
            
            const card = document.createElement('div');
            card.className = 'dino-card';
            
            if (count === 0) {
                card.classList.add('locked');
                card.innerHTML = `
                    <div class="dino-icon">❓</div>
                    <div class="dino-stars"></div>
                `;
            } else {
                card.innerHTML = `
                    <div class="dino-icon">${dino.icon}</div>
                    <div class="dino-stars">${'⭐'.repeat(stars)}</div>
                `;
                card.addEventListener('click', () => this.showDinosaurDetail(dino.id));
            }
            
            grid.appendChild(card);
        });
        
        progress.textContent = `Найдено: ${foundCount}/${dinosaurs.length}`;
    }
    
    showDinosaurDetail(dinosaurId) {
        const dino = dinosaurs.find(d => d.id === dinosaurId);
        if (!dino) return;
        
        const count = Storage.currentUser?.collection[dinosaurId] || 0;
        const stars = Storage.getStars(dinosaurId);
        
        const content = document.getElementById('detail-content');
        content.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 80px;">${dino.icon}</div>
                <h2>${dino.name}</h2>
                <p style="color: #666;"><em>${dino.latinName}</em></p>
                <p style="color: gold; font-size: 24px;">${'⭐'.repeat(stars)}</p>
                <p><strong>Найдено раз:</strong> ${count}</p>
            </div>
            
            <h3>📖 О динозавре</h3>
            <p>${dino.shortInfo}</p>
            
            ${stars >= 2 ? `
                <h3>📚 Подробная статья</h3>
                <p>${dino.fullArticle}</p>
            ` : '<p style="color: #999; font-style: italic;">Найдите этого динозавра 10 раз, чтобы прочитать подробную статью!</p>'}
            
            ${stars >= 3 ? `
                <div class="fact-box">
                    <strong>💡 Интересный факт:</strong><br>
                    ${dino.funFact}
                </div>
            ` : ''}
            
            <p style="margin-top: 20px;"><strong>Категория:</strong> ${dino.category}</p>
        `;
        
        this.showScreen('dinosaur-detail-screen');
    }
    
    // === ПРОФИЛЬ ===
    
    showProfile() {
        this.showScreen('profile-screen');
    }
    
    renderProfile() {
        const stats = document.getElementById('profile-stats');
        const profile = Storage.currentUser?.profile;
        const collection = Storage.currentUser?.collection || {};
        
        if (!profile) {
            stats.innerHTML = '<p>Нет данных</p>';
            return;
        }
        
        // Подсчёт найденных динозавров
        let foundCount = 0;
        let totalFound = 0;
        Object.values(collection).forEach(count => {
            if (count > 0) foundCount++;
            totalFound += count;
        });
        
        stats.innerHTML = `
            <div class="stat-item"><strong>Имя:</strong> ${profile.name}</div>
            <div class="stat-item"><strong>Уровень:</strong> ${profile.level}</div>
            <div class="stat-item"><strong>Всего очков:</strong> ${profile.totalScore || 0}</div>
            <div class="stat-item"><strong>Сыграно игр:</strong> ${profile.gamesPlayed || 0}</div>
            <div class="stat-item"><strong>Выиграно игр:</strong> ${profile.gamesWon || 0}</div>
            <div class="stat-item"><strong>Найдено динозавров:</strong> ${foundCount}/${dinosaurs.length}</div>
            <div class="stat-item"><strong>Всего находок:</strong> ${totalFound}</div>
            <div class="stat-item"><strong>Открыто уровней:</strong> ${Storage.currentUser.unlockedLevels || 1}</div>
        `;
    }
}

// Запуск приложения
const game = new ArchaeologistGame();
