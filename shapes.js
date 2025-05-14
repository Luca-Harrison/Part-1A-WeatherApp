function rect(x, y, w, h) {
  ctx.fillRect(x, y, w, h);
}

function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function fill(fillObj) {
  ctx.fillStyle = fillObj;
}
