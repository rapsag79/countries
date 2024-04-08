

const paginate =  ({countries}) => {
        const page = req.query.page || 1;
        const limit = 10;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const countriesForPage = countries.slice(startIndex, endIndex);
      
        return countriesForPage;
}

module.exports = paginate;