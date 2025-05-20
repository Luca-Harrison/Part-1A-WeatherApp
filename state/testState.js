class TestState extends DefaultState {
    constructor(state, redMode) {
        super(state, redMode);

        let settingState = this.addButton(5, 2, 90, 9, 4, colour(250), colour(100));
        let locationState = this.addButton(5, 12, 90, 9, 4, colour(250), colour(100));
        let weatherState = this.addButton(5, 22, 90, 9, 4, colour(250), colour(100));
        let planetState = this.addButton(5, 32, 90, 9, 4, colour(250), colour(100));
        let temperatureState = this.addButton(5, 42, 90, 9, 4, colour(250), colour(100));

        this.addText('Settings State', 7, 8, 10, colour(0));
        this.addText('Location State', 7, 18, 10, colour(0));
        this.addText('Weather State', 7, 28, 10, colour(0));
        this.addText('Planet State', 7, 38, 10, colour(0));
        this.addText('Temperature State', 7, 48, 10, colour(0));

        let bottomBar = this.addRRect(5, 93, 90, 105, 4, colour(180, 200, 220));

        this.addButton(6, 94, 28, 6, 2, colour(180, 200, 220), colour(160, 180, 200));
        this.addButton(36, 94, 28, 6, 2, colour(180, 200, 220), colour(160, 180, 200));
        this.addButton(66, 94, 28, 6, 2, colour(180, 200, 220), colour(160, 180, 200));
        this.addImage('SettingsImage.png', 16, 95, 8, 4);
        this.addImage('CloudImage.png', 44, 92, 12, 10);
        this.addImage('SettingsImage.png', 76, 95, 8, 4);

        settingState.addScript(() => {
            state.changeState(new SettingState(state, redMode));
        });
        locationState.addScript(() => {
            state.changeState(new LocationState(state, redMode));
        });
        weatherState.addScript(() => {
            state.changeState(new WeatherState(state, redMode));
        });
        planetState.addScript(() => {
            state.changeState(new PlanetState(state, redMode));
        });
        temperatureState.addScript(() => {
            state.changeState(new TemperatureState(state, redMode));
        });

        this.exc();
    }
}