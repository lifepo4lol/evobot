const fs = require("fs");
let config;

try {
  config = require("../config.json");
} catch (error) {
  config = null;
}

module.exports = {
  name: "pruning",
  description: "algo de mensajes no c",
  execute(message) {
    if (!config) return;
    config.PRUNING = !config.PRUNING;

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), (err) => {
      if (err) {
        console.log(err);
        return message.channel.send("puta madre no se escribio bien la mierda esa en el codigo ahre").catch(console.error);
      }

      return message.channel
        .send(`Message pruning is ${config.PRUNING ? "**avilitado**" : "**apagado**"}`)
        .catch(console.error);
    });
  }
};
