class LocationState extends DefaultState {
  constructor(state, redMode) {
    super(state, redMode);
    // addButton(x, y, w, h, r, fillColour, hoverColour, strokeColour, strokeWidth)
    // addText(txt, x, y, size, fillColour)


    // Search bar to search for locations
    this.TextBox = this.addTextbox("Location", 5, 5, 90, 7, 5, colour(180, 200, 220), colour(160, 180, 200), colour(80));
    this.addImage("images/search.svg", 85, 7, 6, 3);
    this.addImage("images/bars.svg", 8, 7, 6, 3);

    let redModeSlider = this.addSlider(10, 15, 50, 2, 2, colour(180, 200, 220), colour(160, 180, 200), colour(80));
    redModeSlider.addScript(() => {
      this.setRedMode(redModeSlider.val);
    });

    // Each individual location button 
    let locations = [["Cambridge", "Cambridgeshire"], ["Girton", "Cambridgeshire"],
    ["London", "Greater London"], ["Manchester", "Greater Manchester"], ["Plymouth", "Devon"],
    ["Rochester", "Kent"], ["Peterborough", "Cambridgeshire"]];



    let inc = 10;
    this.location_button = [];
    this.location_names_1 = [];
    this.location_names_2 = [];
    for (let i = 0; i < 7; i++) {


      this.location_button[i] = this.addButton(5, 20 + inc * i, 90, inc - 1, 4, colour(180, 200, 220), colour(160, 180, 200));
      this.location_button[i].addScript(() => {
        changeLocation(locations[i][0]);
        this.state.changeState(new WeatherState(this.state, this.redMode));
      })
      this.location_names_1[i] = this.addText(locations[i][0], 23, 24 + inc * i, 2, colour(0));
      this.location_names_2[i] = this.addText(locations[i][1], 23, 27 + inc * i, 1.5, colour(80, 80, 80));
      this.addImage("images/location.svg", 10, 23 + inc * i, 8, 4);
    }
    this.exc();
  }

  script() {
    let usrtext = this.TextBox.txt;
    let locations = getLocationSuggestions(usrtext);
    let inc = 10;
    // If the user has not typed anything, show all locations
    if (locations.length == 0) {
      for (let i = 0; i < 7; i++) {
        this.location_button[i].visible = true;
      }

    }
    // If the user has typed something, show only matching locations
    else {
      for (let i = 0; i < 7; i++) {
        if (locations.includes(i)) {
          this.location_button[i].setH(inc - 1);
          console.log(i);
        }
        else {
          this.location_button[i].setH(0);
          this.location_names_2[i].setText("");
        }
      }
    }



  }
}
