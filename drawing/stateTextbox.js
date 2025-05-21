class StateTextbox extends StateObject {
    constructor(defaultText, x, y, w, h, r, fillColour = colour(0), hoverColour = colour(0), textColour, strokeColour = colour(0, 0, 0, 0), strokeWidth = 0) {
        super(fillColour, hoverColour, strokeColour, strokeWidth);

        this.textColour = textColour;

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.w = w * width / 100;
        this.h = h * height / 100;
        this.r = r * width / 100;

        this.txt = defaultText;

        this.startedTyping = false;
        this.typing = false;

        this.scripts = [];
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
        if (mouse.click) this.typing = false;

        let click = mouse.click && 
                     mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;

        if (click) {
            this.typing = true;
            if (!this.startedTyping) {
                this.txt = '';
                this.startedTyping = true;
            }
            setTimeout(() => {
            for (let i = 0; i < this.scripts.length; i++) 
                this.scripts[i]();
            }, 30);
        }
            

        this.state = this.typing;
    }
    draw() {
        rRect(this.x, this.y, this.w, this.h, this.r);

        fill(`rgb(${this.textColour.r}, ${this.redMode * this.textColour.g}, ${this.redMode * this.textColour.b}, ${this.textColour.a})`);

        text(this.txt, this.x + 0.15 * this.w, this.y + 0.7 * this.h, 0.5 * this.h);

        if (this.typing && type.click) {
            this.txt += type.cur;
        }
    }
}