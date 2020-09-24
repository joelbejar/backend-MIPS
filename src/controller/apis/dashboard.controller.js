const dashboardServcies = require("../../services/dashboard/dashboard.services"),

DashboardController = {};


DashboardController.getStates = async (req, res) => {
  try{
    const getStates = await dashboardServcies.getStates(req);

      if (!getStates)
      return res.status(404).json({
        message: "Not records found",
      });
    else res.status(200).json({ data: getStates });
  } catch (error) {
    console.log(error.stack);
    return res.status(500).json({ error: error.stack });
  }
}


module.exports = DashboardController;
