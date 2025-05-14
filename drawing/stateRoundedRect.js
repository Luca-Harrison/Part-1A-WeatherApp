class RoundedRect extends StateObject {
    constructor(x, y, w, h, r, fillColour = colour(0), strokeColour = colour(0, 0, 0, 0), strokeWidth = 0) {
        super(fillColour, colour(0), strokeColour, strokeWidth);

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.w = w * width / 100;
        this.h = h * height / 100;
        this.r = r * width / 100;
    }
    draw() {
        rRect(this.x, this.y, this.w, this.h, this.r);
    }
}