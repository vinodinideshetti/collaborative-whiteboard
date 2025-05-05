const colorPicker = document.getElementById('colorPicker');
const brushSizeSlider = document.getElementById('brushSize');

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");
const socket = io();

let drawing = false;
let prev = null;

// Mouse down: start drawing
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  prev = { x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop };
});

// Mouse up or leave: stop drawing
canvas.addEventListener("mouseup", () => {
  drawing = false;
  prev = null;
});
canvas.addEventListener("mouseout", () => {
  drawing = false;
  prev = null;
});

// Mouse move: draw and emit
canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  const current = {
    x: e.clientX - canvas.offsetLeft,
    y: e.clientY - canvas.offsetTop,
  };

  const color = colorPicker.value;
  const size = brushSizeSlider.value;

  drawLine(prev, current, color, size, true);
  prev = current;
});

// Socket receives drawing from another tab
socket.on("drawing", (data) => {
  const previousSize = ctx.lineWidth;
  ctx.lineWidth = data.size || 2; // fallback if size not sent
  drawLine(data.from, data.to, data.color || "#000", data.size, false);
  ctx.lineWidth = previousSize;
});

// Draw line function
function drawLine(from, to, color, size, emit) {
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(to.x, to.y);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.closePath();

  if (!emit) return;

  socket.emit("drawing", {
    from,
    to,
    color,
    size
  });
}

// Clear canvas and inform others
function clearBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  socket.emit("clear");
}

// Save board as image
function saveBoard() {
  const link = document.createElement('a');
  link.download = 'whiteboard.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

// Listen for clear event
socket.on("clear", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
