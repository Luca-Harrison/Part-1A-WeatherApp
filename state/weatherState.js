class WeatherState extends DefaultState {

    constructor(state, redMode) {
      super(state, redMode);
      
      this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
      this.addText("Weather",31,9,4.6,colour(0,0,0))

      const names = ["Quality of Stargazing","Temperature","Cloud Cover","Rain","Visibility","Fog Level","Light Level"];
      let data = { "Quality of Stargazing":"","Temperature":"","Cloud Cover":"","Rain":"","Visibility":"","Fog Level":"","Light Level":""}
      let rawData = { "Quality of Stargazing":"Excellent","Temperature":"15","Cloud Cover":"6","Rain":"100","Visibility":"20","Fog Level":"Low","Light Level":"Dark"}

      //Formats data so that it can be displayed in a readable way
      function formatData(){
        data["Quality of Stargazing"] = rawData["Quality of Stargazing"];
        data["Temperature"] = rawData["Temperature"] + "\u{00B0}"
        data["Cloud Cover"] = rawData["Cloud Cover"] + "%"
        data["Rain"] = rawData["Rain"] + "% Chance";
        data["Visibility"] = rawData["Visibility"] + "Km";
        data["Fog Level"] = rawData["Fog Level"];
        data["Light Level"] = rawData["Light Level"];
      }

      formatData();

      let inc = 79 / 7;
      for (let i = 0; i < 7; i ++) {
        this.addButton(7, 13.5 + inc * i, 86, inc - 1, 4, colour(40), colour(15), colour(100), 2);
        this.addText(names[i],11,16.2 + inc * i,3,colour(180, 200, 220))
        this.addText(data[names[i]],9,22.4 + inc * i,6,colour(180, 200, 220))
      }


      //Function to update the data
      /**
       * @param newData - Object containing values as text
       * Valid attribute names are: Quality of Stargazing, Temperature, Cloud Cover, Rain
       * Visibility, Fog Level, Light Level
       */
      function updateData(newData) {
        for (let key in newData){
          if (key in data){
            rawData[key] = newData[key]
          } else {
            console.log(key + " is not a valid key in data dictionary")
          }
        }
        formatData();
      }

    this.addNavigationBar();

    this.exc();
  }
}
