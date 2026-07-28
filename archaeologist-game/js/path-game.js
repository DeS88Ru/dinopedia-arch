// Мини-игра "Путь к раскопкам" (платформер/уклонение)

class PathGame {
    constructor(canvasId, onComplete, onFail) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.onComplete = onComplete;
        this.onFail = onFail;
        
        // Настройки игры
        this.gridSize = 40;
        this.cols = 15;
        this.rows = 10;
        
        // Состояние игры
        this.player = null;
        this.boulders = [];
        this.lives = 3;
        this.score = 0;
        this.level = 1;
        this.isPlaying = false;
        this.animationId = null;
        
        // Инициализация размеров canvas
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Управление
        this.setupControls();
    }
    
    resize() {
        const maxWidth = Math.min(window.innerWidth - 40, 800);
        const maxHeight = Math.min(window.innerHeight - 200, 600);
        
        this.canvas.width = maxWidth;
        this.canvas.height = maxHeight;
        
        this.gridSize = Math.floor(Math.min(
            this.canvas.width / this.cols,
            this.canvas.height / this.rows
        ));
    }
    
    setupControls() {
        // Клавиатура
        document.addEventListener('keydown', (e) => {
            if (!this.isPlaying) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    this.movePlayer(-1, 0);
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    this.movePlayer(1, 0);
                    break;
                case 'ArrowUp':
                case 'w':
                case 'W':
                    this.movePlayer(0, -1);
                    break;
                case 'ArrowDown':
                case 's':
                case 'S':
                    this.movePlayer(0, 1);
                    break;
            }
        });
        
        // Мобильные кнопки
        const leftBtn = document.getElementById('left-btn');
        const rightBtn = document.getElementById('right-btn');
        const jumpBtn = document.getElementById('jump-btn');
        
        if (leftBtn) {
            leftBtn.addEventListener('click', () => this.movePlayer(-1, 0));
            leftBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.movePlayer(-1, 0);
            });
        }
        
        if (rightBtn) {
            rightBtn.addEventListener('click', () => this.movePlayer(1, 0));
            rightBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.movePlayer(1, 0);
            });
        }
        
        if (jumpBtn) {
            jumpBtn.addEventListener('click', () => this.movePlayer(0, -1));
            jumpBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.movePlayer(0, -1);
            });
        }
    }
    
    start(level = 1) {
        this.level = level;
        this.lives = 3;
        this.score = 0;
        this.boulders = [];
        this.isPlaying = true;
        
        // Позиция игрока (внизу по центру)
        this.player = {
            x: Math.floor(this.cols / 2),
            y: this.rows - 1,
            emoji: '🏃'
        };
        
        // Генерация булыжников в зависимости от уровня сложности
        this.spawnBoulders();
        
        // Обновление UI
        this.updateUI();
        
        // Запуск игрового цикла
        this.gameLoop();
    }
    
    spawnBoulders() {
        const boulderCount = 3 + this.level * 2;
        const speed = 0.5 + this.level * 0.2;
        
        for (let i = 0; i < boulderCount; i++) {
            this.boulders.push({
                x: Math.floor(Math.random() * this.cols),
                y: -Math.floor(Math.random() * 5),
                speed: speed + Math.random() * 0.3,
                emoji: '🪨'
            });
        }
    }
    
    movePlayer(dx, dy) {
        if (!this.isPlaying) return;
        
        const newX = this.player.x + dx;
        const newY = this.player.y + dy;
        
        // Проверка границ
        if (newX >= 0 && newX < this.cols && newY >= 0 && newY < this.rows) {
            this.player.x = newX;
            this.player.y = newY;
            
            // Проверка победы (достиг верха)
            if (this.player.y === 0) {
                this.win();
            }
        }
    }
    
    update() {
        if (!this.isPlaying) return;
        
        // Движение булыжников
        this.boulders.forEach(boulder => {
            boulder.y += boulder.speed;
            
            // Респаун булыжника сверху
            if (boulder.y >= this.rows) {
                boulder.y = -2;
                boulder.x = Math.floor(Math.random() * this.cols);
            }
            
            // Проверка столкновения
            if (
                Math.abs(boulder.x - this.player.x) < 0.8 &&
                Math.abs(boulder.y - this.player.y) < 0.8
            ) {
                this.hitByBoulder(boulder);
            }
        });
    }
    
    hitByBoulder(boulder) {
        this.lives--;
        this.score = Math.max(0, this.score - 50);
        
        // Отбрасываем булыжник
        boulder.y = -2;
        boulder.x = Math.floor(Math.random() * this.cols);
        
        this.updateUI();
        
        if (this.lives <= 0) {
            this.lose();
        }
    }
    
    draw() {
        // Очистка
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Рисуем фон (лестницы и землю)
        this.drawBackground();
        
        // Рисуем булыжники
        this.boulders.forEach(boulder => {
            this.drawEmoji(
                boulder.emoji,
                boulder.x * this.gridSize + this.gridSize / 2,
                boulder.y * this.gridSize + this.gridSize / 2,
                this.gridSize * 0.8
            );
        });
        
        // Рисуем игрока
        if (this.player) {
            this.drawEmoji(
                this.player.emoji,
                this.player.x * this.gridSize + this.gridSize / 2,
                this.player.y * this.gridSize + this.gridSize / 2,
                this.gridSize * 0.9
            );
        }
        
        // Рисуем финишную линию
        this.ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.gridSize);
    }
    
    drawBackground() {
        // Рисуем лестницы
        this.ctx.fillStyle = '#8B4513';
        for (let row = 1; row < this.rows; row++) {
            const y = row * this.gridSize;
            this.ctx.fillRect(0, y, this.canvas.width, 4);
        }
        
        // Рисуем землю внизу
        this.ctx.fillStyle = '#228B22';
        this.ctx.fillRect(0, (this.rows - 1) * this.gridSize, this.canvas.width, this.gridSize);
    }
    
    drawEmoji(emoji, x, y, size) {
        this.ctx.font = `${size}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(emoji, x, y);
    }
    
    updateUI() {
        document.getElementById('path-lives').textContent = '❤️'.repeat(this.lives);
        document.getElementById('path-score').textContent = `Очки: ${this.score}`;
    }
    
    gameLoop() {
        if (!this.isPlaying) return;
        
        this.update();
        this.draw();
        
        this.animationId = requestAnimationFrame(() => this.gameLoop());
    }
    
    win() {
        this.isPlaying = false;
        cancelAnimationFrame(this.animationId);
        this.score += 100;
        this.showMessage('🎉 Победа! Уровень пройден!', 'success');
        
        setTimeout(() => {
            this.onComplete(this.score);
        }, 1500);
    }
    
    lose() {
        this.isPlaying = false;
        cancelAnimationFrame(this.animationId);
        this.showMessage('💀 Игра окончена!', 'error');
        
        setTimeout(() => {
            this.onFail();
        }, 1500);
    }
    
    showMessage(text, type) {
        const messageEl = document.getElementById('path-message');
        messageEl.textContent = text;
        messageEl.style.display = 'block';
        messageEl.style.color = type === 'success' ? '#27ae60' : '#e74c3c';
        
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 1500);
    }
}
