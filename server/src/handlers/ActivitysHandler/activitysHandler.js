const { createActivityWithCountries, getAllActivities } = require("../../Controllers/ActivitysControllers/activitysController")

const postActivityHandler = async (req, res) => {
  try {
    const response = await  createActivityWithCountries( req,res)
    res.status(200).json(response)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const getActivityAll = async (req, res) => {
  try {
    const allActivitys = await getAllActivities();
    res.status(200).json(allActivitys);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


module.exports = {postActivityHandler, getActivityAll}