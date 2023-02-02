const express = require("express");
// Express Bibliothek muss installiert sein.

const skillRoutes = require("./src/skills/routes");
const projectRoutes = require("./src/projects/routes");
const userRoutes = require("./src/users/routes");
// Pfad für Routes von der Haupt-Website festlegen -> Endpunkt Routes

const cors = require("cors");
// CORS-Bibliothek (Cross-Origin Resource Sharing) muss installiert sein.



require("dotenv").config();
// Dotenv-Bibliothek muss installiert sein. Umgebungsvariablen sind setzbar. Brauchen wir für die Datenbankanbindung (db.js)

const app = express();
// Instanziierung von Express
 
const port = process.env.PORT || 3000;
// Port setzen.

app.use(express.json());
// Nutzung von Middleware -> express.json

app.use(cors());
// Nutzung von CORS Middleware für alle Routes

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Route für den Root-Pfad "/" setzen.

app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/users", userRoutes);
// Jeweilige Routes für die Endpunkte.

app.listen(port, () => console.log(`app listening on port ${port}`));
// Server -> Listener starten. Listener sucht jetzt nach der Portnummer (3000). Wenn Server & Listener bereit: Ausgabe in der Konsole.