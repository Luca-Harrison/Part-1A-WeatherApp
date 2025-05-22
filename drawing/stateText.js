class StateText extends StateObject { // Allow text to be added to the state
    constructor(txt, x, y, s, c) {

        // Only required to set the fill colour of the text
        super(c, colour(0), colour(0), 0);

        this.txt = txt;

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.s = s * height / 100;
    }

    // Setters
    setS(s) {
        this.s = s * height / 100;
    }
    setText(txt) {
        this.txt = txt;
    }


    draw() {

        // Draw the text
        text(this.txt, this.x, this.y, this.s);
    }
}