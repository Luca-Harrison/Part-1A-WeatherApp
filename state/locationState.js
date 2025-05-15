class LocationState extends DefaultState {
    constructor(state, redMode) {
        super(state, redMode); 

        this.addRRect(5, 5, 90, 7, 7, colour(180, 200, 220));

        this.exc()
    }
}