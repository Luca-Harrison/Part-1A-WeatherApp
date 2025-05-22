class SettingState extends DefaultState {
    constructor(state, redMode) {
    super(state, redMode);

    let tempUnits = false; //false for c, true for f
    let timeUnits = false; //false for 24h, true for 12h
    let notificationsEnabled = false;

    // Header
    this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
    this.addText("Settings",31,9,4.6,colour(0,0,0))

    const groups = [
        {
          label: "Display Settings",
          items: [
            { name: "Red Mode", description: Math.ceil(100-redMode*100) + "%", control: "slider", onSliderChange: (self, val) => {
              this.setRedMode(1-val); self.label.setText(Math.ceil(val*100) + "%");
            }},
            { name: "Temperature Units", description: getTempUnits(), control: "toggle", onToggle: (self) => {
              changeTempUnits(getTempUnits() == "C" ? "F" : "C"); console.log(getTempUnits() == "C"); self.label.setText(getTempUnits());
            }},
            { name: "Time Format", description: getTimeFormat()+"h", control: "toggle", onToggle: (self) => {
              changeTimeFormat((getTimeFormat() == "12" ? "24" : "12")); self.label.setText(getTimeFormat()+"h");
            }}
          ]
        },
        {
          label: "Other",
          items: [
            { name: "Notifications", description: getNotifications() ? "Enabled" : "Disabled", control: "toggle", defaultOn: true, onToggle: (self) => {
              changeNotifications(!getNotifications()); self.label.setText(getNotifications() ? "Enabled" : "Disabled")
            }}
          ]
        }
    ];

    let currY = 20;
    const itemHeight = 12.2;

    groups.forEach(group => {
        this.addButton(7, currY - 1, 86, itemHeight*group.items.length + 1, 4, colour(40), colour(15), colour(100), 2);
        this.addText(group.label, 10, currY, 4, colour(255,255,255));
        group.items.forEach(item => {
            this.addText(item.name, 12, currY += 7, 3, colour(220));
            item.label = this.addText(item.description, 12, currY += 4, 3, colour(180, 200, 220));

            if(item.control == "toggle"){
                item.toggle = this.addButton(75, currY-5, 14, 5, 3, colour(180), colour(120), colour(220));
                item.toggleCircle = this.addRRect(item.defaultOn ? 82 : 75, currY-5, 7, 5, 2, colour(255, 255, 255), colour(255, 255, 255), 1);
                item.toggled = false;
                item.toggle.addScript(() => { 
                    item.toggled = !item.toggled;
                    if(item.onToggle) item.onToggle(item); 
                    item.toggleCircle.setX(item.toggled ? (item.defaultOn ? 75 : 82) : (item.defaultOn ? 82 : 75));
                });
            } 
            
            if(item.control == "slider"){
              item.slider = this.addSlider(35, currY-2, 50, 2, 2, colour(180, 200, 220), colour(160, 180, 200), colour(80));
              item.slider.val = 0;
              item.slider.addScript(() => { if(item.onSliderChange) item.onSliderChange(item, item.slider.val) });
            }

        });

        currY += 10;
    });


    this.addNavigationBar();
    this.exc();
  }
}

