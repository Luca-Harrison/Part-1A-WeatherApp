class DefaultState {
    constructor(state, redMode) {
      this.objectList = [];
      
      this.state = state;
      this.redMode = redMode;
    }
    
    // addButton(x, y, w, h, r, c1, c2) {
    //   let btn = new Button(x, y, w, h, r, c1, c2);
    //   this.objectList.push(btn);
    //   return btn;
    // }
    
    addRRect(x, y, w, h, r, fillColour = colour(0), strokeColour = colour(0, 0, 0, 0), strokeWidth = 0) {
      let rct = new RoundedRect(x, y, w, h, r, fillColour, strokeColour, strokeWidth);
      this.objectList.push(rct);
      return rct;
    }
    
    exc() {
      for (let i = 0; i < this.objectList.length; i ++)
        this.objectList[i].setRedMode(this.redMode);
    }
    toggleRedMode() {
      this.redMode = !this.redMode;
      this.exc();
    }
    update() {
      for (let i = 0; i < this.objectList.length; i ++)
        this.objectList[i].update();
    }
  }