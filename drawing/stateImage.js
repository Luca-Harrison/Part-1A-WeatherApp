class StateImage extends StateObject {
    constructor(img, x, y, w, h) {
        super(colour(0), colour(0), colour(0), colour(0));

        this.img = img;
        this.x = x * width / 100;
        this.y = y * height / 100;
        this.w = w * width / 100;
        this.h = h * height / 100;
    }
    setW(w) {
        this.w = w * width / 100;
    }
    setH(h) {
        this.h = h * height / 100;
    }
    draw() {
        
    }
}