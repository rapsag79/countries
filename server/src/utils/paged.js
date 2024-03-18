// const applyFiltersAndPaginate = require('./filter.js');

// const data = [/* Tu array de objetos */];
// const filters = {
//     sortByName: 'a', // Ejemplo de filtro por orden alfabético
//     // Agrega más filtros según sea necesario
// };
// const pageNumber = 1;
// const itemsPerPage = 10;

// const paginatedData = applyFiltersAndPaginate(data, filters, pageNumber, itemsPerPage);
// console.log(paginatedData); // Aquí obtendrás los datos paginados según los filtros aplicados


// function generatePagedJS(dataArray, itemsPerPage = 10) {
//     // Dividir el array en partes según el número de elementos por página
//     const pages = [];
//     for (let i = 0; i < dataArray.length; i += itemsPerPage) {
//         const page = dataArray.slice(i, i + itemsPerPage);
//         pages.push(page);
//     }

//     // Función para mostrar una página específica
//     function showPage(pageNumber) {
//         if (pageNumber >= 1 && pageNumber <= pages.length) {
//             const pageContent = pages[pageNumber - 1];
//             console.log(pageContent); // Aquí puedes realizar cualquier acción necesaria con el contenido de la página
//         } else {
//             console.log("Página fuera de rango.");
//         }
//     }

//     return {
//         showPage: showPage
//     };
// }

// module.exports = generatePagedJS

// // Ejemplo de uso
// const dataArray = [
//     {
//         "id": "KEN",
//         "name": "Kenya",
//         "flags": "https://flagcdn.com/ke.svg",
//         "continent": "Africa",
//         "capital": "Nairobi",
//         "subregion": "Eastern Africa",
//         "area": 580367,
//         "population": 53771300
//     },
//     // Resto de los objetos...
// ];



// async function generatePagedJS(apiURL, itemsPerPage) {
//     // Obtener los datos de la API externa
//     const response = await fetch(apiURL);
//     const dataArray = await response.json();

//     // Dividir el array en partes según el número de elementos por página
//     const pages = [];
//     for (let i = 0; i < dataArray.length; i += itemsPerPage) {
//         const page = dataArray.slice(i, i + itemsPerPage);
//         pages.push(page);
//     }

//     // Función para mostrar una página específica
//     function showPage(pageNumber) {
//         if (pageNumber >= 1 && pageNumber <= pages.length) {
//             const pageContent = pages[pageNumber - 1];
//             console.log(pageContent); // Aquí puedes realizar cualquier acción necesaria con el contenido de la página
//         } else {
//             console.log("Página fuera de rango.");
//         }
//     }

//     return {
//         showPage: showPage
//     };
// }

// module.exports = generatePagedJS;

// Ejemplo de uso
// const apiURL = 'URL_DE_TU_API';
// const itemsPerPage = 10;
// generatePagedJS(apiURL, itemsPerPage).then(pagedJS => {
//     // Mostrar la primera página
//     pagedJS.showPage(1);
// });


const axios = require('axios');

async function generatePagedJS(apiURL, itemsPerPage) {
    try {
        // Obtener los datos de la API externa utilizando Axios
      const response = await axios.get(apiURL);
      console.log(response);
        const dataArray = response.json();

        // Dividir el array en partes según el número de elementos por página
        const pages = [];
        for (let i = 0; i < dataArray.length; i += itemsPerPage) {
            const page = dataArray.slice(i, i + itemsPerPage);
            pages.push(page);
        }

        // Función para mostrar una página específica
        function showPage(pageNumber) {
            if (pageNumber >= 1 && pageNumber <= pages.length) {
                const pageContent = pages[pageNumber - 1];
                // console.log(pageContent); // Aquí puedes realizar cualquier acción necesaria con el contenido de la página
            } else {
                console.log("Página fuera de rango.");
            }
        }

        return {
            showPage: showPage
        };
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        // Manejar el error según sea necesario
    }
}

module.exports = generatePagedJS