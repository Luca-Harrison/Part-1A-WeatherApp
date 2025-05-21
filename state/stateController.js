class StateController {
    constructor() {
      this.currentState = new LocationState(this, false);
    }
    changeState(newState) {
      this.currentState = newState;
    }
    update() {
      this.currentState.update();
    }
  }