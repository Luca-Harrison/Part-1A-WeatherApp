class TestState extends DefaultState {
    constructor(state, redMode) {
        super(state, redMode);

        let settingState = this.addButton(5, 2, 90, 9, 4, colour(250), colour(100));

        this.addText('Settings State', 5, 5, 10, colour(0));

        settingState.addScript(() => {
            state.changeState(new SettingState(state, redMode));
        });

        this.exc();
    }
}