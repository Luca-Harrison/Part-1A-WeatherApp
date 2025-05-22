class PlanetState extends DefaultState {
    constructor(state, redMode) {
      super(state, redMode);


      // top bar and title
      this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
      this.addText('Star Information', 15, 9, 4.6, colour(0));



      // setup arrays and offsets
      let buttons = [];
      let texts = [];
      let graphs = [];
      let buttonMode = -1;
      let planets = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Betelgeuse"]
      let OFFSET = 5;
      let OFFSETGRAPH = 7;
      let inc = 56 / 7;


      // make 7 buttons
      for (let i = 0; i < 7; i ++) {
        buttons[i] = this.addButton(7, 13.5 + inc * i, 86, inc - 1, 4, colour(40), colour(15), colour(100), 3);
        texts[i] = this.addText(planets[i], 10,13.5 + OFFSET + inc * i, 3.5, colour(250));
        graphs[i] = this.addImage('graphs'+(i%2+1)+'.png', 10,13.5 +OFFSETGRAPH + inc * i, 70, 23);
        graphs[i].hide();
        buttonMode = 0;
      }


      // logic for collapsable buttons
      for (let i = 0; i < 7; i ++) {

        buttons[i].addScript( () => {
          if (buttonMode != i) {
            buttons[i].setH(3 * inc - 1 + 8);
            buttons[i].setY(13.5 + inc * i);
            texts[i].setY(13.5 + OFFSET + inc * i);
            graphs[i].show();




            for (let j = 0; j < i; j ++) {
              buttons[j].setH(inc - 1);
              buttons[j].setY(13.5 + inc * j);
              texts[j].setY(13.5 + OFFSET + inc * j);
              graphs[j].hide();


            }
            for (let j = i + 1; j < 7; j ++) {
              buttons[j].setH(inc - 1);
              buttons[j].setY(21.5 + inc * (j + 2));
              texts[j].setY(21.5 + OFFSET + inc * (j + 2));
              graphs[j].hide();
            }


            buttonMode = i;
          } else {
            buttons[i].setH(inc - 1);
            buttons[i].setY(13.5 + inc * i);
            texts[i].setY(13.5 + OFFSET + inc * i);
            graphs[i].hide();

            for (let j = 0; j < 7; j ++) {
              buttons[j].setY(13.5 + inc * j);
              texts[j].setY(13.5 + OFFSET + inc * j);
              graphs[j].hide();
            }


            buttonMode = -1;
          }
        } );

      }

      // add navigation bar
      this.addNavigationBar();

      
      
      
      this.exc();
    }
  }


