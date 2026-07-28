// Система хранения данных (localStorage для демо, с возможностью расширения до сервера)

const Storage = {
    // Ключ для localStorage
    STORAGE_KEY: 'archaeologist_game_progress',
    
    // Текущий пользователь
    currentUser: null,
    
    // Инициализация хранилища
    init() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
        return this.getDefaultData();
    },
    
    // Данные по умолчанию
    getDefaultData() {
        return {
            users: {},
            currentUserId: null,
            settings: {
                sound: true,
                music: true,
                hints: true
            }
        };
    },
    
    // Сохранение данных
    save(data) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    },
    
    // Регистрация пользователя
    register(email, password) {
        const data = this.init();
        
        if (data.users[email]) {
            return { success: false, message: 'Пользователь с таким email уже существует' };
        }
        
        data.users[email] = {
            email: email,
            password: password, // В реальном проекте пароли должны хешироваться!
            profile: {
                name: email.split('@')[0],
                level: 1,
                totalScore: 0,
                gamesPlayed: 0,
                gamesWon: 0
            },
            collection: {}, // { dinosaurId: count }
            unlockedLevels: 1,
            createdAt: new Date().toISOString()
        };
        
        // Инициализируем коллекцию для всех динозавров
        dinosaurs.forEach(dino => {
            data.users[email].collection[dino.id] = 0;
        });
        
        this.save(data);
        return { success: true, message: 'Регистрация успешна!' };
    },
    
    // Вход пользователя
    login(email, password) {
        const data = this.init();
        
        if (!data.users[email]) {
            return { success: false, message: 'Пользователь не найден' };
        }
        
        if (data.users[email].password !== password) {
            return { success: false, message: 'Неверный пароль' };
        }
        
        this.currentUser = data.users[email];
        data.currentUserId = email;
        this.save(data);
        
        return { success: true, message: 'Вход выполнен!' };
    },
    
    // Выход
    logout() {
        const data = this.init();
        data.currentUserId = null;
        this.currentUser = null;
        this.save(data);
    },
    
    // Проверка авторизации
    isLoggedIn() {
        const data = this.init();
        return data.currentUserId !== null;
    },
    
    // Загрузка прогресса текущего пользователя
    loadProgress() {
        const data = this.init();
        if (data.currentUserId && data.users[data.currentUserId]) {
            this.currentUser = data.users[data.currentUserId];
            return this.currentUser;
        }
        return null;
    },
    
    // Обновление прогресса
    updateProgress(updates) {
        const data = this.init();
        if (this.currentUser && data.users[this.currentUser.email]) {
            // Объединяем обновления с текущими данными
            data.users[this.currentUser.email] = {
                ...data.users[this.currentUser.email],
                ...updates
            };
            
            // Глубокое объединение для вложенных объектов
            if (updates.profile) {
                data.users[this.currentUser.email].profile = {
                    ...data.users[this.currentUser.email].profile,
                    ...updates.profile
                };
            }
            
            if (updates.collection) {
                data.users[this.currentUser.email].collection = {
                    ...data.users[this.currentUser.email].collection,
                    ...updates.collection
                };
            }
            
            this.currentUser = data.users[this.currentUser.email];
            this.save(data);
        }
    },
    
    // Добавление динозавра в коллекцию
    addDinosaur(dinosaurId) {
        const data = this.init();
        if (this.currentUser && data.users[this.currentUser.email]) {
            const currentCount = data.users[this.currentUser.email].collection[dinosaurId] || 0;
            data.users[this.currentUser.email].collection[dinosaurId] = currentCount + 1;
            this.currentUser = data.users[this.currentUser.email];
            this.save(data);
            return currentCount + 1;
        }
        return 0;
    },
    
    // Получение количества звёзд для динозавра
    getStars(dinosaurId) {
        if (!this.currentUser) return 0;
        const count = this.currentUser.collection[dinosaurId] || 0;
        if (count >= 25) return 3;
        if (count >= 10) return 2;
        if (count >= 1) return 1;
        return 0;
    },
    
    // Разблокировка уровня
    unlockLevel(level) {
        const data = this.init();
        if (this.currentUser && data.users[this.currentUser.email]) {
            const currentMax = data.users[this.currentUser.email].unlockedLevels || 1;
            if (level > currentMax) {
                data.users[this.currentUser.email].unlockedLevels = level;
                this.currentUser = data.users[this.currentUser.email];
                this.save(data);
            }
        }
    },
    
    // Демо-режим (без регистрации)
    enableDemoMode() {
        this.currentUser = {
            email: 'demo@archaeologist.game',
            profile: {
                name: 'Демо-игрок',
                level: 1,
                totalScore: 0,
                gamesPlayed: 0,
                gamesWon: 0
            },
            collection: {},
            unlockedLevels: 1,
            isDemo: true
        };
        
        // Инициализируем коллекцию
        dinosaurs.forEach(dino => {
            this.currentUser.collection[dino.id] = 0;
        });
    },
    
    // Сброс прогресса
    resetProgress() {
        if (confirm('Вы уверены, что хотите сбросить весь прогресс?')) {
            localStorage.removeItem(this.STORAGE_KEY);
            this.currentUser = null;
            location.reload();
        }
    }
};
