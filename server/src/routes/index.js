const router = require("express").Router()
const activity = require("./ActivityRoutes/activitysRoutes");
const countrie = require("./CountriesRoutes/contriesRoutes");



router.use("/countries", countrie)
router.use("/activities", activity)

module.exports = router;
