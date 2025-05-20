class LocationState extends DefaultState {
    constructor(state, redMode) {
        super(state, redMode); 
        // addButton(x, y, w, h, r, fillColour, hoverColour, strokeColour, strokeWidth)
        // addText(txt, x, y, size, fillColour)


        // Search bar to search for locations
        this.addButton(5, 5, 90, 7, 5, colour(180, 200, 220), colour(160, 180, 200));
        this.addText("Location", 18, 9.5, 3, colour(0)); 
        this.addImage("search.svg", 85, 7, 6, 3); 

        // Each individual location button 
        let locations = ["Cambridge", "Girton", "London", "Manchester", "Plymouth"]
        let inc = 10;
        for (let i = 0; i < 7; i ++) {
            this.addButton(5, 20 + inc * i, 90, inc - 1, 4, colour(180, 200, 220));
            this.addText("A", 8, 26 + inc * i, 10, colour(0)); 
        }

        this.exc(); 
    }
}