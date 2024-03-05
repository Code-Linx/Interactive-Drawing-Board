const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let drawing = false;

canvas.addEventListener("mousedown", () => {
  drawing = true;
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

function draw(event) {
  if (!drawing) return;

  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#000";

  ctx.lineTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
}
