const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      send: "/api/send",
    };

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    const buildPath = path.join(__dirname, "../../frontend", "build");
    this.app.use(express.static(buildPath));

    this.app.get("*", (req, res) => {
      const indexPath = path.join(buildPath, "index.html");
      res.sendFile(indexPath);
    });
  }

  routes() {
    this.app.use(this.paths.send, require("../routes/send"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
