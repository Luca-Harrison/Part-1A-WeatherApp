class StateImage extends StateObject {
    constructor(src, x, y, w, h) {
        super(colour(0), colour(0), colour(0), colour(0));

        this.img = new Image();
        this.img.src = src;
        this.imageLoaded = false;

        this.img.addEventListener("load", () => {
            this.imageLoaded = true;
        })

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
        if (this.imageLoaded) {
            image(this.img, this.x, this.y, this.w, this.h);
        }
    }
}