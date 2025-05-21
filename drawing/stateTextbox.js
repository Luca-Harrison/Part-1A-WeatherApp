class StateTextbox extends StateObject {
    constructor(defaultText, x, y, w, h, r, fillColour = colour(0), hoverColour = colour(0), strokeColour = colour(0, 0, 0, 0), strokeWidth = 0) {
        super(fillColour, hoverColour, strokeColour, strokeWidth);

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.w = w * width / 100;
        this.h = h * height / 100;
        this.r = r * width / 100;

        this.txt = defaultText;

        this.typing = false;

        this.scripts = [];

        this.addScript(() => {
            this.typing = !this.typing;
        });
    }
    setW(w) {
        this.w = w * width / 100;
    }
    setH(h) {
        this.h = h * height / 100;
    }
    addScript(f) {
        this.scripts.push(f);
    }
    checkState() {
        this.click = mouse.click && 
                     mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;

        if (this.click) setTimeout(() => {
            for (let i = 0; i < this.scripts.length; i++) 
                this.scripts[i]();
            }, 30);
            

        this.state = mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;
    }
    draw() {
        rRect(this.x, this.y, this.w, this.h, this.r);
    }
}