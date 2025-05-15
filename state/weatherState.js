class WeatherState extends DefaultState {
    constructor(state, redMode) {
      super(state, redMode);
      
      this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
      this.addText("Weather",26,9,12,colour(0,0,0))
      let bottomBar = this.addRRect(5, 90, 90, 9.5, 4, colour(180, 200, 220));

      const names = ["Quality of Stargazing","Temperature","Cloud Cover","Rain","Visability","Fog Level","Light Level"];
      let data = { "Quality of Stargazing":"Excellent","Temperature":"15\u{00B0}C","Cloud Cover":"6%","Rain":"4% Chance","Visability":"20Km","Fog Level":"Low","Light Level":"Dark"}
      
      let inc = 76.5 / 7;
      for (let i = 0; i < 7; i ++) {
        this.addButton(7, 13.5 + inc * i, 86, inc - 1, 4, colour(40), colour(15), colour(100), 2);
        this.addText(names[i],12,16 + inc * i,4.5,colour(180, 200, 220))
        this.addText(data[names[i]],10,21 + inc * i,8,colour(180, 200, 220))
      }

      this.toggleButton = this.addButton(7, 94, 10, 5, 2, colour(200, 220, 240), colour(160, 180, 200));

      this.toggleButton.addScript( () => {
        this.toggleRedMode();
      } );

      this.exc();
    }
  }