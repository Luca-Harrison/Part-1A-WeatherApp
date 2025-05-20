class LocationState extends DefaultState {
    constructor(state, redMode) {
        super(state, redMode); 
        // addButton(x, y, w, h, r, fillColour, hoverColour, strokeColour, strokeWidth)
        // addText(txt, x, y, size, fillColour)


        // Search bar to search for locations
        this.addButton(5, 5, 90, 7, 5, colour(180, 200, 220), colour(160, 180, 200));
        this.addText("Location", 18, 9.5, 2.5, colour(80, 80, 80)); 
        this.addImage("images/search.svg", 85, 7, 6, 3); 
        this.addImage("images/bars.svg", 8, 7, 6, 3); 

        // Each individual location button 
        let locations = [["Cambridge", "Cambridgeshire"], ["Girton", "Cambridgeshire"], 
            ["London", "Greater London"], ["Manchester", "Greater Manchester"], ["Plymouth", "Devon"], 
            ["Rochester", "Kent"], ["Peterborough", "Cambridgeshire"]]; 

        let inc = 10;
        for (let i = 0; i < 7; i ++) {
            this.addButton(5, 20 + inc * i, 90, inc - 1, 4, colour(180, 200, 220), colour(160, 180, 200));
            this.addText(locations[i][0], 25, 24 + inc * i, 2, colour(0)); 
            this.addText(locations[i][1], 25, 27 + inc * i, 1.5, colour(80, 80, 80)); 
            this.addImage("images/location.svg", )
        }

        this.exc(); 
    }
}