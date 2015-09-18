var figlet = require("figlet");
figlet.text("Creature Sorry. Love you. ", function(error, data) {
    if (error)
      console.error(error);
    else
      console.log(data);
  });
