class StateController {
    constructor() {
      this.currentState = new TestState(this, false);
    }
    changeState(newState) {
      this.currentState = newState;
    }
    update() {
      this.currentState.update();
    }
  }