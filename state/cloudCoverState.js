class CloudCoverState extends DefaultState {

    constructor(state, redMode) {
        super(state, redMode);

        this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
        this.addText("Cloud Cover",25,9,4.6,colour(0,0,0))
        this.addImage('graphs1.png', 8,40,84,27.6);

        //Adds bottom navigation bar
        this.addNavigationBar();
        this.exc();
    }
}
