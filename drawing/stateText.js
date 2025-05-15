class StateText extends StateObject {
    constructor(txt, x, y, s, c) {
        super(c, colour(0), colour(0), 0);

        this.txt = txt;

        this.x = x * width / 100;
        this.y = y * height / 100;
        this.s = s * width / 100;
    }
    setS(s) {
        this.s = s * width / 100;
    }
    setText(txt) {
        this.text = txt;
    }
    draw() {
        text(this.txt, this.x, this.y, this.s);
    }
}