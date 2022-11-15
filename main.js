const { app, BrowserWindow, Menu, dialog } = require("electron");

let mainWindow;
app.on("ready", () => {
  mainWindow = new BrowserWindow({ show: false });
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.setTitle("Notify App");
  mainWindow.loadURL("https://app.tviara.tk");
  mainWindow.on("close", function (e) {
    const choice = dialog.showMessageBoxSync(this, {
      type: "question",
      buttons: ["Yes", "No"],
      title: "Confirm",
      message: "Are you sure you want to quit?",
    });
    if (choice === 1) {
      e.preventDefault();
    }
  });
});

const menuTemplate = [
  {
    label: "Settings",
    submenu: [
      {
        label: "Quit",
        click() {
          app.quit();
        },
      },
    ],
  },
];
