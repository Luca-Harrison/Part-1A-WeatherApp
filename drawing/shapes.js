function colour(r, g = r, b = r, a = 1) {
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}

function fill(fillObj) {
  ctx.fillStyle = fillObj;
}

function stroke(strokeObj) {
  ctx.strokeStyle = strokeObj;
}

function strokeWidth(w) {
  ctx.lineWidth = w;
}

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.fillRect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}

function circle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function rRect(x, y, w, h, r) {
  ctx.beginPath();
  
  ctx.moveTo(x+r, y);
  ctx.arcTo(x+w, y, x+w, y+r, r);
  ctx.arcTo(x+w, y+h, x+w-r, y+h, r);
  ctx.arcTo(x, y+h, x, y+h-r, r);
  ctx.arcTo(x, y, x+r, y, r);

  ctx.fill();
  ctx.stroke();
}

function text(txt, x, y, s) {
  ctx.font = `${s}px 'Open Sans'`;
  ctx.fillText(txt, x, y);
}

function image(img, x, y, w, h) {
  ctx.drawImage(img, x, y, w, h);
}