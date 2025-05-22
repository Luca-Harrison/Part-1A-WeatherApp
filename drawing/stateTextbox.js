class StateTextbox extends StateObject { // Class to allow textboxes to be added to states
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

    // Setters
    setW(w) {
        this.w = w * width / 100;
    }
    setH(h) {
        this.h = h * height / 100;
    }

    // Allow scripts to be added
    addScript(f) {
        this.scripts.push(f);
    }

    // Turn on typing mode if it is pressed (Turn off if mouse pressed not on object)
    checkState() {
        if (mouse.click) this.typing = false;

        let click = mouse.click && 
                     mouse.x >= this.x && mouse.x <= this.x + this.w &&
                     mouse.y >= this.y && mouse.y <= this.y + this.h;

        if (click) {
            this.typing = true;

            // Remove default text when first typing
            if (!this.startedTyping) {
                this.txt = '';
                this.startedTyping = true;
            }
            setTimeout(() => {
            for (let i = 0; i < this.scripts.length; i++) 
                this.scripts[i]();
            }, 30);
        }
            

        // Set the typing state to on
        this.state = this.typing;
    }
    draw() {
        // Draw the textbox
        rRect(this.x, this.y, this.w, this.h, this.r);

        // Set the text colour
        fill(`rgb(${this.textColour.r}, ${this.redMode * this.textColour.g}, ${this.redMode * this.textColour.b}, ${this.textColour.a})`);

        text(this.txt, this.x + 0.15 * this.w, this.y + 0.7 * this.h, 0.5 * this.h);

        // Update the text if a key is pressed
        if (this.typing && type.click) {
            this.txt += type.cur;
        }
    }
}