class SettingState extends DefaultState {
    constructor(state, redMode) {
    super(state, redMode);

    // Header
    this.addRRect(5, 2, 90, 10, 4, colour(180, 200, 220));
    this.addText("Settings", 28, 9, 12, colour(0, 0, 0));

    // Bottom Bar
    this.addRRect(5, 90, 90, 9.5, 4, colour(180, 200, 220));


    const groups = [
        {
          label: "Display Settings",
          items: [
            { name: "Red Mode", description: redMode ? "On" : "Off", control: "toggle", onToggle: () => this.toggleRedMode() },
            { name: "Temperature Units", description: "°C / °F", control: "toggle" },
            { name: "Time Units", description: "24h / 12h", control: "toggle" }
          ]
        },
        {
          label: "Other",
          items: [
            { name: "Language", description: "English", control: "dropdown" },
            { name: "Notifications", description: "Enabled", control: "toggle" }
          ]
        }
    ];

    let currY = 20;
    const groupMargin = 5;
    const itemHeight = 12;

    groups.forEach(group => {
        this.addButton(7, currY - 1, 86, itemHeight*group.items.length + 1, 4, colour(40), colour(15), colour(100), 2);
        this.addText(group.label, 10, currY, 4, colour(255,255,255));
        group.items.forEach(item => {
            this.addText(item.name, 12, currY += 7, 3, colour(220));
            item.label = this.addText(item.description, 12, currY += 4, 3, colour(180, 200, 220));

            if (item.control === "toggle") {
                item.toggle = this.addButton(75, currY - 5, 14, 5, 3, colour(180), colour(120), colour(220));
                item.toggleCircle = this.addRRect(75, currY - 5, 7, 5, 2, colour(255, 255, 255), colour(255, 255, 255), 1);
                item.toggled = false;
                item.toggle.addScript(() => { 
                    item.toggled = !item.toggled;
                    if(item.onToggle) item.onToggle(); 
                    item.toggleCircle.setX(item.toggled ? 82 : 75);
                    console.log(item.label)
                    item.label.setText(redMode ? "On" : "Off");
                });
            } 
        });

        currY += 10;
    });

    this.exc();
  }
}
