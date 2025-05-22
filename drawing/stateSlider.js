class StateSlider extends StateObject {    
    constructor(x, y, w, h, r, fillColour = colour(0), hoverColour = colour(0), strokeColour = colour(0, 0, 0, 0)) {
        super(fillColour, hoverColour, strokeColour, 0);

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.w = w * width / 100;
        this.h = h * height / 100;
        this.r = r * width / 100;

        this.val = 1;

        this.scripts = [];

        this.addScript(() => {
            this.val = (mouse.x - this.x - this.h /2) / (this.w - this.h / 2);
            this.val = this.val < 0 ? 0 : this.val;
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
        let click = mouse.click && 
                     mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;

        if (click) setTimeout(() => {
            for (let i = 0; i < this.scripts.length; i++) 
                this.scripts[i]();
            }, 30);
            

        this.state = mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;
    }
    draw() {
        stroke(`rgb(0, 0, 0, 0)`);
        
        fill(`rgb(${this.strokeColour.r}, ${this.redMode * this.strokeColour.g}, ${this.redMode * this.strokeColour.b}, ${this.strokeColour.a})`);

        rRect(this.x, this.y + 0.4 * this.h, this.w, 0.2 * this.h, 0.1 * this.h);
        
        if (this.state == 0) fill(`rgb(${this.defaultColour.r}, ${this.redMode * this.defaultColour.g}, ${this.redMode * this.defaultColour.b}, ${this.defaultColour.a})`);
        else fill(`rgb(${this.altColour.r}, ${this.redMode * this.altColour.g}, ${this.redMode * this.altColour.b}, ${this.altColour.a})`);

        rRect(this.x + this.val * (this.w - this.h /2), this.y, this.h, this.h, this.r);
    }
}