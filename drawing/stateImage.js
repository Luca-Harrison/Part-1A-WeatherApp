class StateImage extends StateObject { // Class to add images to states
    constructor(src, x, y, w, h) {
        super(colour(0), colour(0), colour(0), colour(0)); // Colours arn't used

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

        this.visible = true;
    }
    
    // Setters
    setW(w) {
        this.w = w * width / 100;
    }
    setH(h) {
        this.h = h * height / 100;
    }

    show()      { this.visible = true;  } // Allow hiding and showing of images
    hide()      { this.visible = false; }

    draw() { // Draw image after it has loaded (and is visible)
        if (this.imageLoaded && this.visible) {
            image(this.img, this.x, this.y, this.w, this.h);
        }
    }
}