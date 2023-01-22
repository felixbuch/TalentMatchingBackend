const { Router } = require("express");
const controller = require("./controller");

// Middleware zum Auslesen der FormData nutzen

const multer = require('multer');
const upload = multer();

const router = Router();

router.post("/", upload.none(), controller.addUser); // Endpunkt: Ist hier spezifisch für die Nutzung der Multer-Middleware (ohne File-Upload)

module.exports = router;