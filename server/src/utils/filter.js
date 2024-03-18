function applyFiltersAndPaginate(data, filters, pageNumber, itemsPerPage) {
    // Aplicar filtros
    let filteredData = data.filter(obj => {
        // Filtro por orden alfabético del nombre
        if (filters.sortByName) {
            return obj.name.toLowerCase().includes(filters.sortByName.toLowerCase());
        }
        // Filtro por continente
        if (filters.filterByContinent) {
            return obj.continent.toLowerCase() === filters.filterByContinent.toLowerCase();
        }
        // Filtro por población
        if (filters.filterByPopulation) {
            return obj.population >= filters.filterByPopulation.min && obj.population <= filters.filterByPopulation.max;
        }
        // Filtro por actividad (si aplica)
        // Agrega más condiciones según sea necesario para otros filtros
        return true; // Retornar verdadero si no se aplica ningún filtro
    });

    // Aplicar paginación
    let startIndex = (pageNumber - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let paginatedData = filteredData.slice(startIndex, endIndex);

    return paginatedData;
}

module.exports = applyFiltersAndPaginate;
