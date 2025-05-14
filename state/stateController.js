class StateController {
    constructor() {
      this.currentState = new WeatherState(this, false);
    }
    changeState(newState) {
      this.currentState = newState;
    }
    update() {
      this.currentState.update();
    }
  }