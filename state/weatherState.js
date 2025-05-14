class WeatherState extends DefaultState {
    constructor(state, redMode) {
      super(state, redMode);
      
      this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
      this.addRRect(5, 70, 90, 105, 4, colour(180, 200, 220));
      
      this.exc();
    }
  }