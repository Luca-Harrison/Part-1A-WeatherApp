class Toggle extends StateObject {
    constructor(x, y, w, h, r, fillColour = colour(0), strokeColour = colour(0, 0, 0, 0), strokeWidth = 0) {
        super(fillColour, colour(0), strokeColour, strokeWidth);
    }
}