class RainState extends DefaultState {

    constructor(state, redMode,value) {
        super(state, redMode);

        this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
        this.addText("Rain Chance",25,8.5,4.6,colour(0,0,0))

        this.addBasicContent()

        this.addText("Rain Chance", 21, 25,5,colour(180, 200, 220));
        this.addText(value + "%", 35.5, 31,6,colour(180, 200, 220));
        //Adds bottom navigation bar
        this.addNavigationBar();
        this.exc();
    }
}
