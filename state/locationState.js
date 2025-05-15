class LocationState extends DefaultState {
    constructor(state, redMode) {
        super(state, redMode); 

        // Search bar to search for locations
        this.addButton(5, 5, 90, 7, 7, colour(180, 200, 220));

        // Each individual location button 
        let inc = 10;
        for (let i = 0; i < 7; i ++) {
            this.addButton(5, 20 + inc * i, 90, inc - 1, 4, colour(180, 200, 220));
            this.addText("A", 5, 21 + inc * i, 10, colour(0)); 
        }

        this.exc(); 
    }
}