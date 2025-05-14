class Button extends StateObject {
    constructor(x, y, w, h, r, fillColour = colour(0), hoverColour = colour(0), strokeColour = colour(0, 0, 0, 0), strokeWidth = 0) {
        super(fillColour, hoverColour, strokeColour, strokeWidth);

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.w = w * width / 100;
        this.h = h * height / 100;
        this.r = r * width / 100;
    }
    script() {}
    checkState() {
        this.click = mouse.click && 
                     mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;

        if (this.click) this.script();

        this.state = mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;
    }
    draw() {
        rRect(this.x, this.y, this.w, this.h, this.r);
    }
}