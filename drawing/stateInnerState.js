class InnerState extends stateObject {
    constructor(x, y, w, h) {
        super(colour(0), colour(0), colour(0), 0);
    }
    setW(w) {
        this.w = w * width / 100;
    }
    setH(h) {
        this.h = h * height / 100;
    }
}