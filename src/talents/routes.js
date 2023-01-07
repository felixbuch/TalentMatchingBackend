const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getTalents);
router.post("/enter", controller.enterSkill);
router.post("/", controller.addTalent);

module.exports = router;