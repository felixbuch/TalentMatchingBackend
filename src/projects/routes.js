const { Router } = require("express");
const controller = require("./controller");

const multer = require('multer');
const upload = multer();
// Middleware zum Auslesen der FormData nutzen

const router = Router();

router.post("/", upload.none(), controller.addProject); // Endpunkt: Ist hier spezifisch für die Nutzung der Multer-Middleware (ohne File-Upload)

module.exports = router;