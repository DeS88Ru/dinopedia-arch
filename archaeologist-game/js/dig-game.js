// Мини-игра "Раскопки" (Три в ряд)

class DigGame {
    constructor(canvasId, onComplete, onFail) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.onComplete = onComplete;
        this.onFail = onFail;
        
        // Настройки игры
        this.gridSize = 35;
        this.cols = 8;
        this.rows = 8;
        
        // Состояние игры
        this.grid = [];
        this.selectedCell = null;
        this.score = 0;
        this.targetScore = 500;
        this.moves = 20;
        this.isPlaying = false;
        this.isAnimating = false;
        this.animationId = null;
        
        // Инициализация размеров canvas
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Обработчики событий
        this.setupControls();
    }
    
    resize() {
        const maxWidth = Math.min(window.innerWidth - 40, 600);
        const maxHeight = Math.min(window.innerHeight - 200, 600);
        
        this.canvas.width = maxWidth;
        this.canvas.height = maxHeight;
        
        this.gridSize = Math.floor(Math.min(
            this.canvas.width / this.cols,
            this.canvas.height / this.rows
        )) - 2;
    }
    
    setupControls() {
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.handleClick({
                clientX: touch.clientX,
                clientY: touch.clientY
            });
        });
    }
    
    start(level = 1) {
        this.level = level;
        this.score = 0;
        this.moves = 20 + level * 2;
        this.targetScore = 500 + level * 100;
        this.selectedCell = null;
        this.isPlaying = true;
        this.isAnimating = false;
        
        // Генерация сетки
        this.generateGrid();
        
        // Проверка на готовые совпадения и их удаление
        this.removeMatches(false);
        
        // Обновление UI
        this.updateUI();
        
        // Запуск отрисовки
        this.draw();
    }
    
    generateGrid() {
        this.grid = [];
        for (let row = 0; row < this.rows; row++) {
            this.grid[row] = [];
            for (let col = 0; col < this.cols; col++) {
                this.grid[row][col] = this.randomElement();
            }
        }
    }
    
    randomElement() {
        const index = Math.floor(Math.random() * gameElements.length);
        return gameElements[index];
    }
    
    handleClick(e) {
        if (!this.isPlaying || this.isAnimating) return;
        
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        const col = Math.floor(x / (this.gridSize + 2));
        const row = Math.floor(y / (this.gridSize + 2));
        
        if (row >= 0 && row < this.rows && col >= 0 && col < this.cols) {
            this.selectCell(row, col);
        }
    }
    
    selectCell(row, col) {
        if (!this.selectedCell) {
            // Первая ячейка выбрана
            this.selectedCell = { row, col };
        } else {
            // Вторая ячейка выбрана - пробуем поменять
            const dr = Math.abs(row - this.selectedCell.row);
            const dc = Math.abs(col - this.selectedCell.col);
            
            // Проверяем, что ячейки соседние
            if ((dr === 1 && dc === 0) || (dr === 0 && dc === 1)) {
                this.swapCells(this.selectedCell.row, this.selectedCell.col, row, col);
            }
            this.selectedCell = null;
        }
        
        this.draw();
    }
    
    async swapCells(row1, col1, row2, col2) {
        this.isAnimating = true;
        
        // Меняем местами
        const temp = this.grid[row1][col1];
        this.grid[row1][col1] = this.grid[row2][col2];
        this.grid[row2][col2] = temp;
        
        this.draw();
        
        // Проверяем на совпадения
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const matches = this.findMatches();
        if (matches.length > 0) {
            // Есть совпадения - удаляем
            this.moves--;
            await this.removeMatches(true);
        } else {
            // Нет совпадений - возвращаем обратно
            const temp = this.grid[row1][col1];
            this.grid[row1][col1] = this.grid[row2][col2];
            this.grid[row2][col2] = temp;
            this.draw();
        }
        
        this.isAnimating = false;
        this.updateUI();
        this.checkGameState();
    }
    
    findMatches() {
        const matches = [];
        
        // Горизонтальные совпадения
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols - 2; col++) {
                const type = this.grid[row][col].type;
                let matchLength = 1;
                
                while (col + matchLength < this.cols && 
                       this.grid[row][col + matchLength].type === type) {
                    matchLength++;
                }
                
                if (matchLength >= 3) {
                    for (let i = 0; i < matchLength; i++) {
                        matches.push({ row, col: col + i });
                    }
                }
            }
        }
        
        // Вертикальные совпадения
        for (let col = 0; col < this.cols; col++) {
            for (let row = 0; row < this.rows - 2; row++) {
                const type = this.grid[row][col].type;
                let matchLength = 1;
                
                while (row + matchLength < this.rows && 
                       this.grid[row + matchLength][col].type === type) {
                    matchLength++;
                }
                
                if (matchLength >= 3) {
                    for (let i = 0; i < matchLength; i++) {
                        matches.push({ row: row + i, col });
                    }
                }
            }
        }
        
        // Удаляем дубликаты
        const unique = [];
        const seen = new Set();
        matches.forEach(m => {
            const key = `${m.row},${m.col}`;
            if (!seen.has(key)) {
                seen.add(key);
                unique.push(m);
            }
        });
        
        return unique;
    }
    
    async removeMatches(addScore) {
        let hasMatches = true;
        
        while (hasMatches) {
            const matches = this.findMatches();
            
            if (matches.length === 0) {
                hasMatches = false;
                break;
            }
            
            // Начисление очков
            if (addScore) {
                const matchCount = matches.length;
                let points = 0;
                
                if (matchCount >= 5) points = 35;
                else if (matchCount >= 4) points = 25;
                else if (matchCount >= 3) points = 10;
                
                this.score += points * matchCount / 3;
            }
            
            // Удаляем совпадения
            matches.forEach(m => {
                this.grid[m.row][m.col] = null;
            });
            
            this.draw();
            await new Promise(resolve => setTimeout(resolve, 200));
            
            // Падение элементов
            this.dropElements();
            this.draw();
            await new Promise(resolve => setTimeout(resolve, 300));
            
            // Заполнение пустых мест
            this.fillEmpty();
            this.draw();
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        this.updateUI();
    }
    
    dropElements() {
        for (let col = 0; col < this.cols; col++) {
            let writeRow = this.rows - 1;
            
            for (let row = this.rows - 1; row >= 0; row--) {
                if (this.grid[row][col] !== null) {
                    this.grid[writeRow][col] = this.grid[row][col];
                    if (writeRow !== row) {
                        this.grid[row][col] = null;
                    }
                    writeRow--;
                }
            }
        }
    }
    
    fillEmpty() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (this.grid[row][col] === null) {
                    this.grid[row][col] = this.randomElement();
                }
            }
        }
    }
    
    draw() {
        // Очистка
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Рисуем фон
        this.ctx.fillStyle = '#f5f5dc';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Рисуем сетку
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const x = col * (this.gridSize + 2);
                const y = row * (this.gridSize + 2);
                
                // Фон ячейки
                this.ctx.fillStyle = (row + col) % 2 === 0 ? '#fff' : '#f0f0f0';
                this.ctx.fillRect(x, y, this.gridSize, this.gridSize);
                
                // Выделение выбранной ячейки
                if (this.selectedCell && 
                    this.selectedCell.row === row && 
                    this.selectedCell.col === col) {
                    this.ctx.strokeStyle = '#667eea';
                    this.ctx.lineWidth = 3;
                    this.ctx.strokeRect(x + 2, y + 2, this.gridSize - 4, this.gridSize - 4);
                }
                
                // Рисуем элемент
                if (this.grid[row][col]) {
                    this.drawEmoji(
                        this.grid[row][col].icon,
                        x + this.gridSize / 2,
                        y + this.gridSize / 2,
                        this.gridSize * 0.7
                    );
                }
            }
        }
    }
    
    drawEmoji(emoji, x, y, size) {
        this.ctx.font = `${size}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(emoji, x, y);
    }
    
    updateUI() {
        document.getElementById('dig-score').textContent = `Очки: ${Math.floor(this.score)}`;
        document.getElementById('dig-target').textContent = `Цель: ${this.targetScore}`;
        document.getElementById('dig-moves').textContent = `Ходы: ${this.moves}`;
    }
    
    checkGameState() {
        if (this.score >= this.targetScore) {
            this.win();
        } else if (this.moves <= 0) {
            this.lose();
        }
    }
    
    win() {
        this.isPlaying = false;
        this.showMessage('🎉 Отлично! Цель достигнута!', 'success');
        
        setTimeout(() => {
            this.onComplete(Math.floor(this.score));
        }, 1500);
    }
    
    lose() {
        this.isPlaying = false;
        this.showMessage('😔 Не хватило ходов!', 'error');
        
        setTimeout(() => {
            this.onFail();
        }, 1500);
    }
    
    showMessage(text, type) {
        const messageEl = document.getElementById('dig-message');
        messageEl.textContent = text;
        messageEl.style.display = 'block';
        messageEl.style.color = type === 'success' ? '#27ae60' : '#e74c3c';
        
        setTimeout(() => {
            messageEl.style.display = 'none';
        }, 1500);
    }
}
