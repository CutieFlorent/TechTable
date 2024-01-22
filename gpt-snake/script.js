// Snake Game Logic

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const snakeSize = 20;
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
];

let food = { x: 0, y: 0 };

let dx = 0;
let dy = -snakeSize;

function drawSnakePart(snakePart) {
  ctx.fillStyle = "green";
  ctx.strokeStyle = "darkgreen";
  ctx.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize);
  ctx.strokeRect(snakePart.x, snakePart.y, snakeSize, snakeSize);
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);

  const hasEatenFood = snake[0].x === food.x && snake[0].y === food.y;

  if (hasEatenFood) {
    generateFood();
  } else {
    snake.pop();
  }
}

function generateFood() {
  const maxX = canvas.width - snakeSize;
  const maxY = canvas.height - snakeSize;
  food.x = Math.floor((Math.random() * maxX) / snakeSize) * snakeSize;
  food.y = Math.floor((Math.random() * maxY) / snakeSize) * snakeSize;
}

function changeDirection(event) {
  const LEFT_KEY = 37;
  const RIGHT_KEY = 39;
  const UP_KEY = 38;
  const DOWN_KEY = 40;

  const keyPressed = event.keyCode;

  const goingUp = dy === -snakeSize;
  const goingDown = dy === snakeSize;
  const goingRight = dx === snakeSize;
  const goingLeft = dx === -snakeSize;

  if (keyPressed === LEFT_KEY && !goingRight) {
    dx = -snakeSize;
    dy = 0;
  }

  if (keyPressed === UP_KEY && !goingDown) {
    dx = 0;
    dy = -snakeSize;
  }

  if (keyPressed === RIGHT_KEY && !goingLeft) {
    dx = snakeSize;
    dy = 0;
  }

  if (keyPressed === DOWN_KEY && !goingUp) {
    dx = 0;
    dy = snakeSize;
  }
}

function isGameOver() {
  for (let i = 4; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }

  const hitLeftWall = snake[0].x < 0;
  const hitRightWall = snake[0].x > canvas.width - snakeSize;
  const hitTopWall = snake[0].y < 0;
  const hitBottomWall = snake[0].y > canvas.height - snakeSize;

  return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

function gameLoop() {
  if (isGameOver()) {
    alert("Game Over!");
    document.location.reload();
    return;
  }

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    moveSnake();
    drawSnake();

    gameLoop();
  }, 100);
}

generateFood();
gameLoop();
document.addEventListener("keydown", changeDirection);
