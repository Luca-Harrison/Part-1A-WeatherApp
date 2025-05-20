class StateController {
    constructor() {
      this.currentState = new PlanetState(this, false);
    }
    changeState(newState) {
      this.currentState = newState;
    }
    update() {
      this.currentState.update();
    }
  }