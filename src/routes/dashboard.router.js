const router = require("express").Router();
const dashboardController = require("../controller/apis/dashboard.controller");
router
  .get("/", dashboardController.getStates)

module.exports = router;