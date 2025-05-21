class StateController {
    constructor() {
      this.currentState = new LocationState(this, 1);
    }
    changeState(newState) {
      this.currentState = newState;
    }
    update() {
      this.currentState.update();
    }
  }