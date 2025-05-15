class TestState extends DefaultState {
    constructor(state, redMode) {
        super(state, redMode);

        this.addText('Hi', 5, 5, 2, colour(100));

        this.exc();
    }
}