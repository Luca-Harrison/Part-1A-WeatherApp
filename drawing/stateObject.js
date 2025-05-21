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
        
        stroke(`rgb(${this.strokeColour.r}, ${this.redMode * this.strokeColour.g}, ${this.redMode * this.strokeColour.b}, ${this.strokeColour.a})`);
        if (this.state == 0) fill(`rgb(${this.defaultColour.r}, ${this.redMode * this.defaultColour.g}, ${this.redMode * this.defaultColour.b}, ${this.defaultColour.a})`);
        else fill(`rgb(${this.altColour.r}, ${this.redMode * this.altColour.g}, ${this.redMode * this.altColour.b}, ${this.altColour.a})`);

        this.draw();

    }
}