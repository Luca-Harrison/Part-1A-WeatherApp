class TemperatureState extends DefaultState {
    constructor(state, redMode) {
      super(state, redMode);
      
      this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
      this.addRRect(5, 70, 90, 105, 4, colour(180, 200, 220));
      
      this.addButton(7, 3, 10, 5, 2, colour(20), colour(10));
      
      this.objectList[2].addScript( () => {
        state.changeState(new WeatherState(this.state, this.redMode));
      } );
      
      this.exc();
    }
  }