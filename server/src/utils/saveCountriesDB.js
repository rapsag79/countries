// funcion para filtrar países por continente

const filterContynentent= async (req, res) => {
    const { continent } = req.query;
    try {
        const countries = await Countries.findAll({
            where: { continent: continent }
        });
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// funcion para filtrar países por tipo de actividad turística
const filterActivity = async (req, res) => {
    const { activityType } = req.query;
    try {
        const countries = await Countries.findAll({
            include: {
                model: Activities,
                where: { type: activityType }
            }
        });
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// funcion para obtener países ordenados alfabéticamente
const orderAlphabetic = async (req, res) => {
    try {
        const countries = await Countries.findAll({
            order: [['name', 'ASC']]
        });
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// funcion para obtener países ordenados por población
const orderPopulation = async (req, res) => {
    try {
        const countries = await Countries.findAll({
            order: [['population', 'DESC']]
        });
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
