class StateObject {
    constructor(defaultColour, altColour, strokeColour, strokeWidth) {

        this.defaultColour = defaultColour;
        this.altColour = altColour;
        this.strokeColour = strokeColour;
        this.strokeWidth = strokeWidth;

        this.redMode = false;
        this.state = 0;

    }
    setX(x) {
        this.x = x * width / 100;
    }
    setY(y) {
        this.y = y * height / 100;
    }
    setRedMode(setVal) {

      this.redMode = setVal;

    }
    draw() {}
    checkState() {}
    update() {

        this.checkState();

        strokeWidth(this.strokeWidth);
        if (this.redMode) {
            stroke(`rgb(${this.strokeColour.r}, 0, 0, ${this.strokeColour.a})`)
            if (this.state == 0) fill(`rgb(${this.defaultColour.r}, 0, 0, ${this.defaultColour.a})`);
            else fill(`rgb(${this.altColour.r}, 0, 0, ${this.altColour.a})`);
        } else {
            stroke(`rgb(${this.strokeColour.r}, ${this.strokeColour.g}, ${this.strokeColour.b}, ${this.strokeColour.a})`);
            if (this.state == 0) fill(`rgb(${this.defaultColour.r}, ${this.defaultColour.g}, ${this.defaultColour.b}, ${this.defaultColour.a})`);
            else fill(`rgb(${this.altColour.r}, ${this.altColour.g}, ${this.altColour.b}, ${this.altColour.a})`);
        }

        this.draw();

    }
}