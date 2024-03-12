const { getAllActivity, createActivityBD } = require("../../controllers/controllerActivity/controllerActivity");

const getActivityHandler = async (req, res) => {

  try {
    const activitys = await getAllActivity();
    res.status(200).json(activitys);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActivityHandler = async (req, res) => {
  const {name} = req.body

  try {
    const newActivity = await createActivityBD({nombre})
    res.status(200).json(newActivity)
  } catch {
    res.status(400).json({error:error.message})
  }
}

module.exports = { getActivityHandler, postActivityHandler };