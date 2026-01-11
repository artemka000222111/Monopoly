// Данные игры
const game = {
    players: [],
    currentPlayerIndex: 0,
    diceValue: 0,
    board: [],
    gameId: null
};

// Элементы DOM
const startScreen = document.getElementById('start-screen');
const board = document.getElementById('board');
const currentPlayerSpan = document.getElementById('current-player');
const balanceSpan = document.getElementById('balance');
const propertiesSpan = document.getElementById('properties');
const rollDiceButton = document.getElementById('roll-dice');
const endTurnButton = document.getElementById('end-turn');
const buyPropertyButton = document.getElementById('buy-property');
const payRentButton = document.getElementById('pay-rent');
const messageDiv = document.getElementById('message');

// Создание поля
function createBoard() {
    const cells = [
        { type: 'corner', label: 'Старт' },
        { type: 'property', label: 'Ул. Пушкина', price: 100, rent: 10, owner: null },
        { type: 'chance', label: 'Шанс' },
        { type: 'property', label: 'Ул. Лермонтова', price: 120, rent: 12, owner: null },
        { type: 'tax', label: 'Налог', amount: 50 },
        // ... остальные клетки (можно добавить больше)
    ];

    cells.forEach((cell, index) => {
        const cellDiv = document.createElement('div');
        cellDiv.className = `cell ${cell.type}`;
        cellDiv.dataset.index = index;
        cellDiv.innerHTML = `<div class="label">${cell.label}</div>`;
        board.appendChild(cellDiv);