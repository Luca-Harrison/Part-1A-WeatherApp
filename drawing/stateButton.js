class Button extends StateObject { // Class to create a button within a state
    constructor(x, y, w, h, r, fillColour = colour(0), hoverColour = colour(0), strokeColour = colour(0, 0, 0, 0), strokeWidth = 0) {
        super(fillColour, hoverColour, strokeColour, strokeWidth);

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.w = w * width / 100;
        this.h = h * height / 100;
        this.r = r * width / 100;

        this.scripts = [];
    }
    
    // Setters
    setW(w) {
        this.w = w * width / 100;
    }
    setH(h) {
        this.h = h * height / 100;
    }

    addScript(f) { // Method to attach scripts to buttons
        this.scripts.push(f);
    }
    checkState() { // Check whether the button is being press and if so set the state to on
        let click = mouse.click && 
                     mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;

        if (click) setTimeout(() => {
            for (let i = 0; i < this.scripts.length; i++) 
                this.scripts[i]();
            }, 30); 
            // Time out required so that buttons that move dependent on other buttons can't 
            // move into a button press and be triggered on the same frame. (This would 
            // create unpredictable behavior).
            

        this.state = mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;
    }
    draw() { // Method to draw the objects required
        rRect(this.x, this.y, this.w, this.h, this.r);
    }
}