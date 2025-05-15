class WeatherState extends DefaultState {
    constructor(state, redMode) {
      super(state, redMode);
      
      this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
      let bottomBar = this.addRRect(5, 70, 90, 105, 4, colour(180, 200, 220));

      let buttonMode = -1;
      
      let inc = 56 / 7;
      for (let i = 0; i < 7; i ++) {
        this.addButton(7, 13.5 + inc * i, 86, inc - 1, 4, colour(40), colour(15), colour(100), 2);
      }

      this.toggleButton = this.addButton(7, 94, 10, 5, 2, colour(200, 220, 240), colour(160, 180, 200));

      this.toggleButton.addScript( () => {
        this.toggleRedMode();
      } );



      this.exc();
    }
  }