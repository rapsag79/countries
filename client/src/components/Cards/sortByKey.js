// Función para ordenar un array de objetos de forma ascendente o descendente
// según una clave específica
function sortByKey(array, key, order) {
  if (!Array.isArray(array)) {
    throw new Error('El primer parámetro debe ser un array.');
  }

  if (typeof key !== 'string') {
    throw new Error('El segundo parámetro debe ser una cadena que represente la clave de ordenación.');
  }

  if (order !== 'asc' && order !== 'desc') {
    throw new Error('El tercer parámetro debe ser "asc" o "desc".');
  }

  return array.slice().sort((a, b) => {
    const x = a[key];
    const y = b[key];
    if (order === 'asc') {
      return x < y ? -1 : x > y ? 1 : 0;
    } else {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
}


// Función para filtrar un array de objetos por continente
// function filterByContinent(array, continent) {
//   return array.filter(item => item.continent === continent);
// }

// Función para filtrar un array de objetos por tipo de actividad turística
function filterCountriesWithActivities(array) {
  return array.filter(item => item.Activities && item.Activities.length > 0);
}





// Ejemplo de uso
const data = [
  {
    "id": "MEX",
    "name": "Mexico",
    "flags": "https://flagcdn.com/w320/mx.png",
    "continent": "North America",
    "capital": "Mexico City",
    "subregion": "North America",
    "area": 1964375,
    "population": 128932753,
    "Activities": [
      {
        "id": 1,
        "name": "moto-cross",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "MEX",
          "ActivityId": 1
        }
      },
      {
        "id": 2,
        "name": "Caminata",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "MEX",
          "ActivityId": 2
        }
      },
      {
        "id": 3,
        "name": "Ciclistmo",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "MEX",
          "ActivityId": 3
        }
      }
    ]
  },
  {
    "id": "VEN",
    "name": "Venezuela",
    "flags": "https://flagcdn.com/w320/ve.png",
    "continent": "South America",
    "capital": "Caracas",
    "subregion": "South America",
    "area": 916445,
    "population": 28435943,
    "Activities": [
      {
        "id": 1,
        "name": "moto-cross",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "VEN",
          "ActivityId": 1
        }
      },
      {
        "id": 2,
        "name": "Caminata",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "VEN",
          "ActivityId": 2
        }
      },
      {
        "id": 3,
        "name": "Ciclistmo",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "VEN",
          "ActivityId": 3
        }
      }
    ]
  },
  {
    "id": "COL",
    "name": "Colombia",
    "flags": "https://flagcdn.com/w320/co.png",
    "continent": "South America",
    "capital": "Bogotá",
    "subregion": "South America",
    "area": 1141748,
    "population": 50882884,
    "Activities": [
      {
        "id": 1,
        "name": "moto-cross",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "COL",
          "ActivityId": 1
        }
      },
      {
        "id": 2,
        "name": "Caminata",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "COL",
          "ActivityId": 2
        }
      },
      {
        "id": 3,
        "name": "Ciclistmo",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "COL",
          "ActivityId": 3
        }
      }
    ]
  },
  {
    "id": "ARG",
    "name": "Argentina",
    "flags": "https://flagcdn.com/w320/ar.png",
    "continent": "South America",
    "capital": "Buenos Aires",
    "subregion": "South America",
    "area": 2780400,
    "population": 45376763,
    "Activities": [
      {
        "id": 1,
        "name": "moto-cross",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "ARG",
          "ActivityId": 1
        }
      },
      {
        "id": 2,
        "name": "Caminata",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "ARG",
          "ActivityId": 2
        }
      },
      {
        "id": 3,
        "name": "Ciclistmo",
        "difficulty": "medio",
        "duration": "120",
        "season": "primavera",
        "CountrieActivity": {
          "CountryId": "ARG",
          "ActivityId": 3
        }
      }
    ]
  },
  {
    "id": "FRA",
    "name": "France",
    "flags": "https://flagcdn.com/w320/fr.png",
    "continent": "Europe",
    "capital": "Paris",
    "subregion": "Western Europe",
    "area": 551695,
    "population": 67391582,
    "Activities": [
      {
        "id": 4,
        "name": "montañismo",
        "difficulty": "medio",
        "duration": "120",
        "season": "Primavera",
        "CountrieActivity": {
          "CountryId": "FRA",
          "ActivityId": 4
        }
      }
    ]
  },
  {
    "id": "VNM",
    "name": "Vietnam",
    "flags": "https://flagcdn.com/w320/vn.png",
    "continent": "Asia",
    "capital": "Hanoi",
    "subregion": "South-Eastern Asia",
    "area": 331212,
    "population": 97338583,
    "Activities": [
      {
        "id": 4,
        "name": "montañismo",
        "difficulty": "medio",
        "duration": "120",
        "season": "Primavera",
        "CountrieActivity": {
          "CountryId": "VNM",
          "ActivityId": 4
        }
      }
    ]
  },
  {
    "id": "MRT",
    "name": "Mauritania",
    "flags": "https://flagcdn.com/w320/mr.png",
    "continent": "Africa",
    "capital": "Nouakchott",
    "subregion": "Western Africa",
    "area": 1030700,
    "population": 4649660,
    "Activities": [
      {
        "id": 4,
        "name": "montañismo",
        "difficulty": "medio",
        "duration": "120",
        "season": "Primavera",
        "CountrieActivity": {
          "CountryId": "MRT",
          "ActivityId": 4
        }
      }
    ]
  },
  {
    "id": "DZA",
    "name": "Algeria",
    "flags": "https://flagcdn.com/w320/dz.png",
    "continent": "Africa",
    "capital": "Algiers",
    "subregion": "Northern Africa",
    "area": 2381741,
    "population": 510713,
    "Activities": [
      {
        "id": 4,
        "name": "montañismo",
        "difficulty": "medio",
        "duration": "120",
        "season": "Primavera",
        "CountrieActivity": {
          "CountryId": "DZA",
          "ActivityId": 4
        }
      }
    ]
  },
  {
    "id": "SLV",
    "name": "El Salvador",
    "flags": "https://flagcdn.com/w320/sv.png",
    "continent": "North America",
    "capital": "San Salvador",
    "subregion": "Central America",
    "area": 21041,
    "population": 6486201,
    "Activities": [
      {
        "id": 4,
        "name": "montañismo",
        "difficulty": "medio",
        "duration": "120",
        "season": "Primavera",
        "CountrieActivity": {
          "CountryId": "SLV",
          "ActivityId": 4
        }
      }
    ]
  },
  {
    "id": "CIV",
    "name": "Ivory Coast",
    "flags": "https://flagcdn.com/w320/ci.png",
    "continent": "Africa",
    "capital": "Yamoussoukro",
    "subregion": "Western Africa",
    "area": 322463,
    "population": 26378275,
    "Activities": []
  },
  {
    "id": "CHE",
    "name": "Switzerland",
    "flags": "https://flagcdn.com/w320/ch.png",
    "continent": "Europe",
    "capital": "Bern",
    "subregion": "Western Europe",
    "area": 41284,
    "population": 17500657,
    "Activities": []
  },
  {
    "id": "BRA",
    "name": "Brazil",
    "flags": "https://flagcdn.com/w320/br.png",
    "continent": "South America",
    "capital": "Brasília",
    "subregion": "South America",
    "area": 8515767,
    "population": 212559409,
    "Activities": []
  },
  {
    "id": "MUS",
    "name": "Mauritius",
    "flags": "https://flagcdn.com/w320/mu.png",
    "continent": "Africa",
    "capital": "Port Louis",
    "subregion": "Eastern Africa",
    "area": 2040,
    "population": 1265740,
    "Activities": []
  },
  {
    "id": "CMR",
    "name": "Cameroon",
    "flags": "https://flagcdn.com/w320/cm.png",
    "continent": "Africa",
    "capital": "Yaoundé",
    "subregion": "Middle Africa",
    "area": 475442,
    "population": 26545864,
    "Activities": []
  },
  {
    "id": "ZWE",
    "name": "Zimbabwe",
    "flags": "https://flagcdn.com/w320/zw.png",
    "continent": "Africa",
    "capital": "Harare",
    "subregion": "Eastern Africa",
    "area": 390757,
    "population": 14862927,
    "Activities": []
  },
  {
    "id": "EGY",
    "name": "Egypt",
    "flags": "https://flagcdn.com/w320/eg.png",
    "continent": "Africa",
    "capital": "Cairo",
    "subregion": "Northern Africa",
    "area": 1002450,
    "population": 102334403,
    "Activities": []
  },
  {
    "id": "GRD",
    "name": "Grenada",
    "flags": "https://flagcdn.com/w320/gd.png",
    "continent": "North America",
    "capital": "St. George's",
    "subregion": "Caribbean",
    "area": 344,
    "population": 112519,
    "Activities": []
  },
  {
    "id": "IOT",
    "name": "British Indian Ocean Territory",
    "flags": "https://flagcdn.com/w320/io.png",
    "continent": "Asia",
    "capital": "Diego Garcia",
    "subregion": "Eastern Africa",
    "area": 60,
    "population": 3000,
    "Activities": []
  },
  {
    "id": "ALA",
    "name": "Åland Islands",
    "flags": "https://flagcdn.com/w320/ax.png",
    "continent": "Europe",
    "capital": "Mariehamn",
    "subregion": "Northern Europe",
    "area": 1580,
    "population": 29458,
    "Activities": []
  },
  {
    "id": "ROU",
    "name": "Romania",
    "flags": "https://flagcdn.com/w320/ro.png",
    "continent": "Europe",
    "capital": "Bucharest",
    "subregion": "Southeast Europe",
    "area": 238391,
    "population": 19286123,
    "Activities": []
  },
  {
    "id": "NIC",
    "name": "Nicaragua",
    "flags": "https://flagcdn.com/w320/ni.png",
    "continent": "North America",
    "capital": "Managua",
    "subregion": "Central America",
    "area": 130373,
    "population": 6624554,
    "Activities": []
  },
  {
    "id": "AGO",
    "name": "Angola",
    "flags": "https://flagcdn.com/w320/ao.png",
    "continent": "Africa",
    "capital": "Luanda",
    "subregion": "Middle Africa",
    "area": 1246700,
    "population": 32866268,
    "Activities": []
  },
  {
    "id": "TTO",
    "name": "Trinidad and Tobago",
    "flags": "https://flagcdn.com/w320/tt.png",
    "continent": "North America",
    "capital": "Port of Spain",
    "subregion": "Caribbean",
    "area": 5130,
    "population": 1399491,
    "Activities": []
  },
  {
    "id": "JEY",
    "name": "Jersey",
    "flags": "https://flagcdn.com/w320/je.png",
    "continent": "Europe",
    "capital": "Saint Helier",
    "subregion": "Northern Europe",
    "area": 116,
    "population": 100800,
    "Activities": []
  },
  {
    "id": "SYR",
    "name": "Syria",
    "flags": "https://flagcdn.com/w320/sy.png",
    "continent": "Asia",
    "capital": "Damascus",
    "subregion": "Western Asia",
    "area": 185180,
    "population": 17500657,
    "Activities": []
  },
  {
    "id": "GGY",
    "name": "Guernsey",
    "flags": "https://flagcdn.com/w320/gg.png",
    "continent": "Europe",
    "capital": "St. Peter Port",
    "subregion": "Northern Europe",
    "area": 78,
    "population": 62999,
    "Activities": []
  },
  {
    "id": "FRA",
    "name": "France",
    "flags": "https://flagcdn.com/w320/fr.png",
    "continent": "Europe",
    "capital": "Paris",
    "subregion": "Western Europe",
    "area": 551695,
    "population": 67391582,
    "Activities": []
  },
  {
    "id": "ASM",
    "name": "American Samoa",
    "flags": "https://flagcdn.com/w320/as.png",
    "continent": "Oceania",
    "capital": "Pago Pago",
    "subregion": "Polynesia",
    "area": 199,
    "population": 55197,
    "Activities": []
  },
  {
    "id": "MAF",
    "name": "Saint Martin",
    "flags": "https://flagcdn.com/w320/mf.png",
    "continent": "North America",
    "capital": "Marigot",
    "subregion": "Caribbean",
    "area": 53,
    "population": 38659,
    "Activities": []
  },
  {
    "id": "PRK",
    "name": "North Korea",
    "flags": "https://flagcdn.com/w320/kp.png",
    "continent": "Asia",
    "capital": "Pyongyang",
    "subregion": "Eastern Asia",
    "area": 120538,
    "population": 25778815,
    "Activities": []
  },
  {
    "id": "KGZ",
    "name": "Kyrgyzstan",
    "flags": "https://flagcdn.com/w320/kg.png",
    "continent": "Asia",
    "capital": "Bishkek",
    "subregion": "Central Asia",
    "area": 199951,
    "population": 6591600,
    "Activities": []
  },
  {
    "id": "KHM",
    "name": "Cambodia",
    "flags": "https://flagcdn.com/w320/kh.png",
    "continent": "Asia",
    "capital": "Phnom Penh",
    "subregion": "South-Eastern Asia",
    "area": 181035,
    "population": 16718971,
    "Activities": []
  },
  {
    "id": "GUF",
    "name": "French Guiana",
    "flags": "https://flagcdn.com/w320/gf.png",
    "continent": "South America",
    "capital": "Cayenne",
    "subregion": "South America",
    "area": 83534,
    "population": 254541,
    "Activities": []
  },
  {
    "id": "KWT",
    "name": "Kuwait",
    "flags": "https://flagcdn.com/w320/kw.png",
    "continent": "Asia",
    "capital": "Kuwait City",
    "subregion": "Western Asia",
    "area": 17818,
    "population": 4270563,
    "Activities": []
  },
  {
    "id": "TCA",
    "name": "Turks and Caicos Islands",
    "flags": "https://flagcdn.com/w320/tc.png",
    "continent": "North America",
    "capital": "Cockburn Town",
    "subregion": "Caribbean",
    "area": 948,
    "population": 38718,
    "Activities": []
  },
  {
    "id": "UGA",
    "name": "Uganda",
    "flags": "https://flagcdn.com/w320/ug.png",
    "continent": "Africa",
    "capital": "Kampala",
    "subregion": "Eastern Africa",
    "area": 241550,
    "population": 45741000,
    "Activities": []
  },
  {
    "id": "VNM",
    "name": "Vietnam",
    "flags": "https://flagcdn.com/w320/vn.png",
    "continent": "Asia",
    "capital": "Hanoi",
    "subregion": "South-Eastern Asia",
    "area": 331212,
    "population": 97338583,
    "Activities": []
  },
  {
    "id": "CPV",
    "name": "Cape Verde",
    "flags": "https://flagcdn.com/w320/cv.png",
    "continent": "Africa",
    "capital": "Praia",
    "subregion": "Western Africa",
    "area": 4033,
    "population": 555988,
    "Activities": []
  },
  {
    "id": "UNK",
    "name": "Kosovo",
    "flags": "https://flagcdn.com/w320/xk.png",
    "continent": "Europe",
    "capital": "Pristina",
    "subregion": "Southeast Europe",
    "area": 10908,
    "population": 1775378,
    "Activities": []
  },
  {
    "id": "KEN",
    "name": "Kenya",
    "flags": "https://flagcdn.com/w320/ke.png",
    "continent": "Africa",
    "capital": "Nairobi",
    "subregion": "Eastern Africa",
    "area": 580367,
    "population": 53771300,
    "Activities": []
  },
  {
    "id": "CAN",
    "name": "Canada",
    "flags": "https://flagcdn.com/w320/ca.png",
    "continent": "North America",
    "capital": "Ottawa",
    "subregion": "North America",
    "area": 9984670,
    "population": 38005238,
    "Activities": []
  },
  {
    "id": "CXR",
    "name": "Christmas Island",
    "flags": "https://flagcdn.com/w320/cx.png",
    "continent": "Asia",
    "capital": "Flying Fish Cove",
    "subregion": "Australia and New Zealand",
    "area": 135,
    "population": 2072,
    "Activities": []
  },
  {
    "id": "BHS",
    "name": "Bahamas",
    "flags": "https://flagcdn.com/w320/bs.png",
    "continent": "North America",
    "capital": "Nassau",
    "subregion": "Caribbean",
    "area": 13943,
    "population": 393248,
    "Activities": []
  },
  {
    "id": "GHA",
    "name": "Ghana",
    "flags": "https://flagcdn.com/w320/gh.png",
    "continent": "Africa",
    "capital": "Accra",
    "subregion": "Western Africa",
    "area": 238533,
    "population": 31072945,
    "Activities": []
  },
  {
    "id": "PSE",
    "name": "Palestine",
    "flags": "https://flagcdn.com/w320/ps.png",
    "continent": "Asia",
    "capital": "Ramallah",
    "subregion": "Western Asia",
    "area": 6220,
    "population": 4803269,
    "Activities": []
  },
  {
    "id": "DZA",
    "name": "Algeria",
    "flags": "https://flagcdn.com/w320/dz.png",
    "continent": "Africa",
    "capital": "Algiers",
    "subregion": "Northern Africa",
    "area": 2381741,
    "population": 510713,
    "Activities": []
  },
  {
    "id": "SLV",
    "name": "El Salvador",
    "flags": "https://flagcdn.com/w320/sv.png",
    "continent": "North America",
    "capital": "San Salvador",
    "subregion": "Central America",
    "area": 21041,
    "population": 6486201,
    "Activities": []
  },
  {
    "id": "IND",
    "name": "India",
    "flags": "https://flagcdn.com/w320/in.png",
    "continent": "Asia",
    "capital": "New Delhi",
    "subregion": "Southern Asia",
    "area": 3287590,
    "population": 1380004385,
    "Activities": []
  },
  {
    "id": "MRT",
    "name": "Mauritania",
    "flags": "https://flagcdn.com/w320/mr.png",
    "continent": "Africa",
    "capital": "Nouakchott",
    "subregion": "Western Africa",
    "area": 1030700,
    "population": 4649660,
    "Activities": []
  },
  {
    "id": "ISL",
    "name": "Iceland",
    "flags": "https://flagcdn.com/w320/is.png",
    "continent": "Europe",
    "capital": "Reykjavik",
    "subregion": "Northern Europe",
    "area": 103000,
    "population": 366425,
    "Activities": []
  },
  {
    "id": "CHL",
    "name": "Chile",
    "flags": "https://flagcdn.com/w320/cl.png",
    "continent": "South America",
    "capital": "Santiago",
    "subregion": "South America",
    "area": 756102,
    "population": 19116209,
    "Activities": []
  },
  {
    "id": "MTQ",
    "name": "Martinique",
    "flags": "https://flagcdn.com/w320/mq.png",
    "continent": "North America",
    "capital": "Fort-de-France",
    "subregion": "Caribbean",
    "area": 1128,
    "population": 378243,
    "Activities": []
  },
  {
    "id": "LUX",
    "name": "Luxembourg",
    "flags": "https://flagcdn.com/w320/lu.png",
    "continent": "Europe",
    "capital": "Luxembourg",
    "subregion": "Western Europe",
    "area": 2586,
    "population": 632275,
    "Activities": []
  },
  {
    "id": "PHL",
    "name": "Philippines",
    "flags": "https://flagcdn.com/w320/ph.png",
    "continent": "Asia",
    "capital": "Manila",
    "subregion": "South-Eastern Asia",
    "area": 342353,
    "population": 109581085,
    "Activities": []
  },
  {
    "id": "SXM",
    "name": "Sint Maarten",
    "flags": "https://flagcdn.com/w320/sx.png",
    "continent": "North America",
    "capital": "Philipsburg",
    "subregion": "Caribbean",
    "area": 34,
    "population": 40812,
    "Activities": []
  },
  {
    "id": "ABW",
    "name": "Aruba",
    "flags": "https://flagcdn.com/w320/aw.png",
    "continent": "North America",
    "capital": "Oranjestad",
    "subregion": "Caribbean",
    "area": 180,
    "population": 106766,
    "Activities": []
  },
  {
    "id": "CUW",
    "name": "Curaçao",
    "flags": "https://flagcdn.com/w320/cw.png",
    "continent": "North America",
    "capital": "Willemstad",
    "subregion": "Caribbean",
    "area": 444,
    "population": 155014,
    "Activities": []
  },
  {
    "id": "MLT",
    "name": "Malta",
    "flags": "https://flagcdn.com/w320/mt.png",
    "continent": "Europe",
    "capital": "Valletta",
    "subregion": "Southern Europe",
    "area": 316,
    "population": 525285,
    "Activities": []
  },
  {
    "id": "KIR",
    "name": "Kiribati",
    "flags": "https://flagcdn.com/w320/ki.png",
    "continent": "Oceania",
    "capital": "South Tarawa",
    "subregion": "Micronesia",
    "area": 811,
    "population": 119446,
    "Activities": []
  },
  {
    "id": "BWA",
    "name": "Botswana",
    "flags": "https://flagcdn.com/w320/bw.png",
    "continent": "Africa",
    "capital": "Gaborone",
    "subregion": "Southern Africa",
    "area": 582000,
    "population": 2351625,
    "Activities": []
  },
  {
    "id": "CAF",
    "name": "Central African Republic",
    "flags": "https://flagcdn.com/w320/cf.png",
    "continent": "Africa",
    "capital": "Bangui",
    "subregion": "Middle Africa",
    "area": 622984,
    "population": 4829764,
    "Activities": []
  },
  {
    "id": "NZL",
    "name": "New Zealand",
    "flags": "https://flagcdn.com/w320/nz.png",
    "continent": "Oceania",
    "capital": "Wellington",
    "subregion": "Australia and New Zealand",
    "area": 270467,
    "population": 5084300,
    "Activities": []
  },
  {
    "id": "CZE",
    "name": "Czechia",
    "flags": "https://flagcdn.com/w320/cz.png",
    "continent": "Europe",
    "capital": "Prague",
    "subregion": "Central Europe",
    "area": 78865,
    "population": 10698896,
    "Activities": []
  },
  {
    "id": "GNQ",
    "name": "Equatorial Guinea",
    "flags": "https://flagcdn.com/w320/gq.png",
    "continent": "Africa",
    "capital": "Malabo",
    "subregion": "Middle Africa",
    "area": 28051,
    "population": 1402985,
    "Activities": []
  },
  {
    "id": "SSD",
    "name": "South Sudan",
    "flags": "https://flagcdn.com/w320/ss.png",
    "continent": "Africa",
    "capital": "Juba",
    "subregion": "Middle Africa",
    "area": 619745,
    "population": 11193729,
    "Activities": []
  },
  {
    "id": "ISR",
    "name": "Israel",
    "flags": "https://flagcdn.com/w320/il.png",
    "continent": "Asia",
    "capital": "Jerusalem",
    "subregion": "Western Asia",
    "area": 20770,
    "population": 9216900,
    "Activities": []
  },
  {
    "id": "BRB",
    "name": "Barbados",
    "flags": "https://flagcdn.com/w320/bb.png",
    "continent": "North America",
    "capital": "Bridgetown",
    "subregion": "Caribbean",
    "area": 430,
    "population": 287371,
    "Activities": []
  },
  {
    "id": "VAT",
    "name": "Vatican City",
    "flags": "https://flagcdn.com/w320/va.png",
    "continent": "Europe",
    "capital": "Vatican City",
    "subregion": "Southern Europe",
    "area": 0,
    "population": 451,
    "Activities": []
  },
  {
    "id": "GRL",
    "name": "Greenland",
    "flags": "https://flagcdn.com/w320/gl.png",
    "continent": "North America",
    "capital": "Nuuk",
    "subregion": "North America",
    "area": 2166086,
    "population": 56367,
    "Activities": []
  },
  {
    "id": "PRY",
    "name": "Paraguay",
    "flags": "https://flagcdn.com/w320/py.png",
    "continent": "South America",
    "capital": "Asunción",
    "subregion": "South America",
    "area": 406752,
    "population": 7132530,
    "Activities": []
  },
  {
    "id": "MDA",
    "name": "Moldova",
    "flags": "https://flagcdn.com/w320/md.png",
    "continent": "Europe",
    "capital": "Chișinău",
    "subregion": "Eastern Europe",
    "area": 33846,
    "population": 2617820,
    "Activities": []
  },
  {
    "id": "AFG",
    "name": "Afghanistan",
    "flags": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
    "continent": "Asia",
    "capital": "Kabul",
    "subregion": "Southern Asia",
    "area": 652230,
    "population": 2837743,
    "Activities": []
  },
  {
    "id": "UKR",
    "name": "Ukraine",
    "flags": "https://flagcdn.com/w320/ua.png",
    "continent": "Europe",
    "capital": "Kyiv",
    "subregion": "Eastern Europe",
    "area": 603500,
    "population": 44134693,
    "Activities": []
  },
  {
    "id": "TKL",
    "name": "Tokelau",
    "flags": "https://flagcdn.com/w320/tk.png",
    "continent": "Oceania",
    "capital": "Fakaofo",
    "subregion": "Polynesia",
    "area": 12,
    "population": 1411,
    "Activities": []
  },
  {
    "id": "YEM",
    "name": "Yemen",
    "flags": "https://flagcdn.com/w320/ye.png",
    "continent": "Asia",
    "capital": "Sana'a",
    "subregion": "Western Asia",
    "area": 527968,
    "population": 29825968,
    "Activities": []
  },
  {
    "id": "PRI",
    "name": "Puerto Rico",
    "flags": "https://flagcdn.com/w320/pr.png",
    "continent": "North America",
    "capital": "San Juan",
    "subregion": "Caribbean",
    "area": 8870,
    "population": 3194034,
    "Activities": []
  },
  {
    "id": "MHL",
    "name": "Marshall Islands",
    "flags": "https://flagcdn.com/w320/mh.png",
    "continent": "Oceania",
    "capital": "Majuro",
    "subregion": "Micronesia",
    "area": 181,
    "population": 59194,
    "Activities": []
  },
  {
    "id": "TLS",
    "name": "Timor-Leste",
    "flags": "https://flagcdn.com/w320/tl.png",
    "continent": "Oceania",
    "capital": "Dili",
    "subregion": "South-Eastern Asia",
    "area": 14874,
    "population": 1318442,
    "Activities": []
  },
  {
    "id": "IDN",
    "name": "Indonesia",
    "flags": "https://flagcdn.com/w320/id.png",
    "continent": "Asia",
    "capital": "Jakarta",
    "subregion": "South-Eastern Asia",
    "area": 1904569,
    "population": 273523621,
    "Activities": []
  },
  {
    "id": "CRI",
    "name": "Costa Rica",
    "flags": "https://flagcdn.com/w320/cr.png",
    "continent": "North America",
    "capital": "San José",
    "subregion": "Central America",
    "area": 51100,
    "population": 5094114,
    "Activities": []
  },
  {
    "id": "MLI",
    "name": "Mali",
    "flags": "https://flagcdn.com/w320/ml.png",
    "continent": "Africa",
    "capital": "Bamako",
    "subregion": "Western Africa",
    "area": 1240192,
    "population": 20250834,
    "Activities": []
  },
  {
    "id": "SHN",
    "name": "Saint Helena, Ascension and Tristan da Cunha",
    "flags": "https://flagcdn.com/w320/sh.png",
    "continent": "Africa",
    "capital": "Jamestown",
    "subregion": "Western Africa",
    "area": 394,
    "population": 53192,
    "Activities": []
  },
  {
    "id": "GLP",
    "name": "Guadeloupe",
    "flags": "https://flagcdn.com/w320/gp.png",
    "continent": "North America",
    "capital": "Basse-Terre",
    "subregion": "Caribbean",
    "area": 1628,
    "population": 400132,
    "Activities": []
  },
  {
    "id": "AUS",
    "name": "Australia",
    "flags": "https://flagcdn.com/w320/au.png",
    "continent": "Oceania",
    "capital": "Canberra",
    "subregion": "Australia and New Zealand",
    "area": 7692024,
    "population": 25687041,
    "Activities": []
  },
  {
    "id": "TON",
    "name": "Tonga",
    "flags": "https://flagcdn.com/w320/to.png",
    "continent": "Oceania",
    "capital": "Nuku'alofa",
    "subregion": "Polynesia",
    "area": 747,
    "population": 105697,
    "Activities": []
  },
  {
    "id": "THA",
    "name": "Thailand",
    "flags": "https://flagcdn.com/w320/th.png",
    "continent": "Asia",
    "capital": "Bangkok",
    "subregion": "South-Eastern Asia",
    "area": 513120,
    "population": 69799978,
    "Activities": []
  },
  {
    "id": "FRO",
    "name": "Faroe Islands",
    "flags": "https://flagcdn.com/w320/fo.png",
    "continent": "Europe",
    "capital": "Tórshavn",
    "subregion": "Northern Europe",
    "area": 1393,
    "population": 48865,
    "Activities": []
  },
  {
    "id": "NOR",
    "name": "Norway",
    "flags": "https://flagcdn.com/w320/no.png",
    "continent": "Europe",
    "capital": "Oslo",
    "subregion": "Northern Europe",
    "area": 323802,
    "population": 5379475,
    "Activities": []
  },
  {
    "id": "MNE",
    "name": "Montenegro",
    "flags": "https://flagcdn.com/w320/me.png",
    "continent": "Europe",
    "capital": "Podgorica",
    "subregion": "Southeast Europe",
    "area": 13812,
    "population": 621718,
    "Activities": []
  },
  {
    "id": "MCO",
    "name": "Monaco",
    "flags": "https://flagcdn.com/w320/mc.png",
    "continent": "Europe",
    "capital": "Monaco",
    "subregion": "Western Europe",
    "area": 2,
    "population": 39244,
    "Activities": []
  },
  {
    "id": "SJM",
    "name": "Svalbard and Jan Mayen",
    "flags": "https://flagcdn.com/w320/sj.png",
    "continent": "Europe",
    "capital": "Longyearbyen",
    "subregion": "Northern Europe",
    "area": -1,
    "population": 2562,
    "Activities": []
  },
  {
    "id": "JPN",
    "name": "Japan",
    "flags": "https://flagcdn.com/w320/jp.png",
    "continent": "Asia",
    "capital": "Tokyo",
    "subregion": "Eastern Asia",
    "area": 377930,
    "population": 125836021,
    "Activities": []
  },
  {
    "id": "GUY",
    "name": "Guyana",
    "flags": "https://flagcdn.com/w320/gy.png",
    "continent": "South America",
    "capital": "Georgetown",
    "subregion": "South America",
    "area": 214969,
    "population": 786559,
    "Activities": []
  },
  {
    "id": "AND",
    "name": "Andorra",
    "flags": "https://flagcdn.com/w320/ad.png",
    "continent": "Europe",
    "capital": "Andorra la Vella",
    "subregion": "Southern Europe",
    "area": 468,
    "population": 77265,
    "Activities": []
  },
  {
    "id": "NFK",
    "name": "Norfolk Island",
    "flags": "https://flagcdn.com/w320/nf.png",
    "continent": "Oceania",
    "capital": "Kingston",
    "subregion": "Australia and New Zealand",
    "area": 36,
    "population": 2302,
    "Activities": []
  },
  {
    "id": "SPM",
    "name": "Saint Pierre and Miquelon",
    "flags": "https://flagcdn.com/w320/pm.png",
    "continent": "North America",
    "capital": "Saint-Pierre",
    "subregion": "North America",
    "area": 242,
    "population": 6069,
    "Activities": []
  },
  {
    "id": "NRU",
    "name": "Nauru",
    "flags": "https://flagcdn.com/w320/nr.png",
    "continent": "Oceania",
    "capital": "Yaren",
    "subregion": "Micronesia",
    "area": 21,
    "population": 10834,
    "Activities": []
  },
  {
    "id": "MYT",
    "name": "Mayotte",
    "flags": "https://flagcdn.com/w320/yt.png",
    "continent": "Africa",
    "capital": "Mamoudzou",
    "subregion": "Eastern Africa",
    "area": 374,
    "population": 226915,
    "Activities": []
  },
  {
    "id": "LAO",
    "name": "Laos",
    "flags": "https://flagcdn.com/w320/la.png",
    "continent": "Asia",
    "capital": "Vientiane",
    "subregion": "South-Eastern Asia",
    "area": 236800,
    "population": 7275556,
    "Activities": []
  },
  {
    "id": "BDI",
    "name": "Burundi",
    "flags": "https://flagcdn.com/w320/bi.png",
    "continent": "Africa",
    "capital": "Gitega",
    "subregion": "Eastern Africa",
    "area": 27834,
    "population": 11890781,
    "Activities": []
  },
  {
    "id": "DMA",
    "name": "Dominica",
    "flags": "https://flagcdn.com/w320/dm.png",
    "continent": "North America",
    "capital": "Roseau",
    "subregion": "Caribbean",
    "area": 751,
    "population": 71991,
    "Activities": []
  },
  {
    "id": "ECU",
    "name": "Ecuador",
    "flags": "https://flagcdn.com/w320/ec.png",
    "continent": "South America",
    "capital": "Quito",
    "subregion": "South America",
    "area": 276841,
    "population": 17643060,
    "Activities": []
  },
  {
    "id": "REU",
    "name": "Réunion",
    "flags": "https://flagcdn.com/w320/re.png",
    "continent": "Africa",
    "capital": "Saint-Denis",
    "subregion": "Eastern Africa",
    "area": 2511,
    "population": 840974,
    "Activities": []
  },
  {
    "id": "TWN",
    "name": "Taiwan",
    "flags": "https://flagcdn.com/w320/tw.png",
    "continent": "Asia",
    "capital": "Taipei",
    "subregion": "Eastern Asia",
    "area": 36193,
    "population": 23503349,
    "Activities": []
  },
  {
    "id": "LIE",
    "name": "Liechtenstein",
    "flags": "https://flagcdn.com/w320/li.png",
    "continent": "Europe",
    "capital": "Vaduz",
    "subregion": "Western Europe",
    "area": 160,
    "population": 38137,
    "Activities": []
  },
  {
    "id": "DOM",
    "name": "Dominican Republic",
    "flags": "https://flagcdn.com/w320/do.png",
    "continent": "North America",
    "capital": "Santo Domingo",
    "subregion": "Caribbean",
    "area": 48671,
    "population": 10847904,
    "Activities": []
  },
  {
    "id": "LKA",
    "name": "Sri Lanka",
    "flags": "https://flagcdn.com/w320/lk.png",
    "continent": "Asia",
    "capital": "Sri Jayawardenepura Kotte",
    "subregion": "Southern Asia",
    "area": 65610,
    "population": 21919000,
    "Activities": []
  },
  {
    "id": "TUN",
    "name": "Tunisia",
    "flags": "https://flagcdn.com/w320/tn.png",
    "continent": "Africa",
    "capital": "Tunis",
    "subregion": "Northern Africa",
    "area": 163610,
    "population": 11818618,
    "Activities": []
  },
  {
    "id": "SRB",
    "name": "Serbia",
    "flags": "https://flagcdn.com/w320/rs.png",
    "continent": "Europe",
    "capital": "Belgrade",
    "subregion": "Southeast Europe",
    "area": 88361,
    "population": 6908224,
    "Activities": []
  },
  {
    "id": "GIB",
    "name": "Gibraltar",
    "flags": "https://flagcdn.com/w320/gi.png",
    "continent": "Europe",
    "capital": "Gibraltar",
    "subregion": "Southern Europe",
    "area": 6,
    "population": 33691,
    "Activities": []
  },
  {
    "id": "BHR",
    "name": "Bahrain",
    "flags": "https://flagcdn.com/w320/bh.png",
    "continent": "Asia",
    "capital": "Manama",
    "subregion": "Western Asia",
    "area": 765,
    "population": 1701583,
    "Activities": []
  },
  {
    "id": "HRV",
    "name": "Croatia",
    "flags": "https://flagcdn.com/w320/hr.png",
    "continent": "Europe",
    "capital": "Zagreb",
    "subregion": "Southeast Europe",
    "area": 56594,
    "population": 4047200,
    "Activities": []
  },
  {
    "id": "FSM",
    "name": "Micronesia",
    "flags": "https://flagcdn.com/w320/fm.png",
    "continent": "Oceania",
    "capital": "Palikir",
    "subregion": "Micronesia",
    "area": 702,
    "population": 115021,
    "Activities": []
  },
  {
    "id": "DNK",
    "name": "Denmark",
    "flags": "https://flagcdn.com/w320/dk.png",
    "continent": "Europe",
    "capital": "Copenhagen",
    "subregion": "Northern Europe",
    "area": 43094,
    "population": 5831404,
    "Activities": []
  },
  {
    "id": "NLD",
    "name": "Netherlands",
    "flags": "https://flagcdn.com/w320/nl.png",
    "continent": "Europe",
    "capital": "Amsterdam",
    "subregion": "Western Europe",
    "area": 41850,
    "population": 16655799,
    "Activities": []
  },
  {
    "id": "BFA",
    "name": "Burkina Faso",
    "flags": "https://flagcdn.com/w320/bf.png",
    "continent": "Africa",
    "capital": "Ouagadougou",
    "subregion": "Western Africa",
    "area": 272967,
    "population": 20903278,
    "Activities": []
  },
  {
    "id": "ETH",
    "name": "Ethiopia",
    "flags": "https://flagcdn.com/w320/et.png",
    "continent": "Africa",
    "capital": "Addis Ababa",
    "subregion": "Eastern Africa",
    "area": 1104300,
    "population": 114963583,
    "Activities": []
  },
  {
    "id": "TKM",
    "name": "Turkmenistan",
    "flags": "https://flagcdn.com/w320/tm.png",
    "continent": "Asia",
    "capital": "Ashgabat",
    "subregion": "Central Asia",
    "area": 488100,
    "population": 6031187,
    "Activities": []
  },
  {
    "id": "BRN",
    "name": "Brunei",
    "flags": "https://flagcdn.com/w320/bn.png",
    "continent": "Asia",
    "capital": "Bandar Seri Begawan",
    "subregion": "South-Eastern Asia",
    "area": 5765,
    "population": 437483,
    "Activities": []
  },
  {
    "id": "CUB",
    "name": "Cuba",
    "flags": "https://flagcdn.com/w320/cu.png",
    "continent": "North America",
    "capital": "Havana",
    "subregion": "Caribbean",
    "area": 109884,
    "population": 11326616,
    "Activities": []
  },
  {
    "id": "MAC",
    "name": "Macau",
    "flags": "https://flagcdn.com/w320/mo.png",
    "continent": "Asia",
    "capital": null,
    "subregion": "Eastern Asia",
    "area": 30,
    "population": 649342,
    "Activities": []
  },
  {
    "id": "MAR",
    "name": "Morocco",
    "flags": "https://flagcdn.com/w320/ma.png",
    "continent": "Africa",
    "capital": "Rabat",
    "subregion": "Northern Africa",
    "area": 446550,
    "population": 36910558,
    "Activities": []
  },
  {
    "id": "KNA",
    "name": "Saint Kitts and Nevis",
    "flags": "https://flagcdn.com/w320/kn.png",
    "continent": "North America",
    "capital": "Basseterre",
    "subregion": "Caribbean",
    "area": 261,
    "population": 53192,
    "Activities": []
  },
  {
    "id": "VGB",
    "name": "British Virgin Islands",
    "flags": "https://flagcdn.com/w320/vg.png",
    "continent": "North America",
    "capital": "Road Town",
    "subregion": "Caribbean",
    "area": 151,
    "population": 30237,
    "Activities": []
  },
  {
    "id": "COG",
    "name": "Republic of the Congo",
    "flags": "https://flagcdn.com/w320/cg.png",
    "continent": "Africa",
    "capital": "Brazzaville",
    "subregion": "Middle Africa",
    "area": 342000,
    "population": 89561404,
    "Activities": []
  },
  {
    "id": "LBR",
    "name": "Liberia",
    "flags": "https://flagcdn.com/w320/lr.png",
    "continent": "Africa",
    "capital": "Monrovia",
    "subregion": "Western Africa",
    "area": 111369,
    "population": 5057677,
    "Activities": []
  },
  {
    "id": "SWZ",
    "name": "Eswatini",
    "flags": "https://flagcdn.com/w320/sz.png",
    "continent": "Africa",
    "capital": "Mbabane",
    "subregion": "Southern Africa",
    "area": 17364,
    "population": 1160164,
    "Activities": []
  },
  {
    "id": "MDV",
    "name": "Maldives",
    "flags": "https://flagcdn.com/w320/mv.png",
    "continent": "Asia",
    "capital": "Malé",
    "subregion": "Southern Asia",
    "area": 300,
    "population": 540542,
    "Activities": []
  },
  {
    "id": "COK",
    "name": "Cook Islands",
    "flags": "https://flagcdn.com/w320/ck.png",
    "continent": "Oceania",
    "capital": "Avarua",
    "subregion": "Polynesia",
    "area": 236,
    "population": 18100,
    "Activities": []
  },
  {
    "id": "BLZ",
    "name": "Belize",
    "flags": "https://flagcdn.com/w320/bz.png",
    "continent": "North America",
    "capital": "Belmopan",
    "subregion": "Central America",
    "area": 22966,
    "population": 397621,
    "Activities": []
  },
  {
    "id": "BGD",
    "name": "Bangladesh",
    "flags": "https://flagcdn.com/w320/bd.png",
    "continent": "Asia",
    "capital": "Dhaka",
    "subregion": "Southern Asia",
    "area": 147570,
    "population": 164689383,
    "Activities": []
  },
  {
    "id": "SGS",
    "name": "South Georgia",
    "flags": "https://flagcdn.com/w320/gs.png",
    "continent": "Antarctica",
    "capital": "King Edward Point",
    "subregion": null,
    "area": 3903,
    "population": 30,
    "Activities": []
  },
  {
    "id": "TZA",
    "name": "Tanzania",
    "flags": "https://flagcdn.com/w320/tz.png",
    "continent": "Africa",
    "capital": "Dodoma",
    "subregion": "Eastern Africa",
    "area": 945087,
    "population": 59734213,
    "Activities": []
  },
  {
    "id": "PAN",
    "name": "Panama",
    "flags": "https://flagcdn.com/w320/pa.png",
    "continent": "North America",
    "capital": "Panama City",
    "subregion": "Central America",
    "area": 75417,
    "population": 4314768,
    "Activities": []
  },
  {
    "id": "HUN",
    "name": "Hungary",
    "flags": "https://flagcdn.com/w320/hu.png",
    "continent": "Europe",
    "capital": "Budapest",
    "subregion": "Central Europe",
    "area": 93028,
    "population": 9749763,
    "Activities": []
  },
  {
    "id": "PRT",
    "name": "Portugal",
    "flags": "https://flagcdn.com/w320/pt.png",
    "continent": "Europe",
    "capital": "Lisbon",
    "subregion": "Southern Europe",
    "area": 92090,
    "population": 10305564,
    "Activities": []
  },
  {
    "id": "BEN",
    "name": "Benin",
    "flags": "https://flagcdn.com/w320/bj.png",
    "continent": "Africa",
    "capital": "Porto-Novo",
    "subregion": "Western Africa",
    "area": 112622,
    "population": 12123198,
    "Activities": []
  },
  {
    "id": "GRC",
    "name": "Greece",
    "flags": "https://flagcdn.com/w320/gr.png",
    "continent": "Europe",
    "capital": "Athens",
    "subregion": "Southern Europe",
    "area": 131990,
    "population": 10715549,
    "Activities": []
  },
  {
    "id": "BLR",
    "name": "Belarus",
    "flags": "https://flagcdn.com/w320/by.png",
    "continent": "Europe",
    "capital": "Minsk",
    "subregion": "Eastern Europe",
    "area": 207600,
    "population": 9398861,
    "Activities": []
  },
  {
    "id": "BES",
    "name": "Caribbean Netherlands",
    "flags": "https://flagcdn.com/w320/bq.png",
    "continent": "North America",
    "capital": "Kralendijk",
    "subregion": "Caribbean",
    "area": 328,
    "population": 25987,
    "Activities": []
  },
  {
    "id": "TGO",
    "name": "Togo",
    "flags": "https://flagcdn.com/w320/tg.png",
    "continent": "Africa",
    "capital": "Lomé",
    "subregion": "Western Africa",
    "area": 56785,
    "population": 8278737,
    "Activities": []
  },
  {
    "id": "LTU",
    "name": "Lithuania",
    "flags": "https://flagcdn.com/w320/lt.png",
    "continent": "Europe",
    "capital": "Vilnius",
    "subregion": "Northern Europe",
    "area": 65300,
    "population": 2794700,
    "Activities": []
  },
  {
    "id": "AIA",
    "name": "Anguilla",
    "flags": "https://flagcdn.com/w320/ai.png",
    "continent": "North America",
    "capital": "The Valley",
    "subregion": "Caribbean",
    "area": 91,
    "population": 13452,
    "Activities": []
  },
  {
    "id": "FJI",
    "name": "Fiji",
    "flags": "https://flagcdn.com/w320/fj.png",
    "continent": "Oceania",
    "capital": "Suva",
    "subregion": "Melanesia",
    "area": 18272,
    "population": 896444,
    "Activities": []
  },
  {
    "id": "MWI",
    "name": "Malawi",
    "flags": "https://flagcdn.com/w320/mw.png",
    "continent": "Africa",
    "capital": "Lilongwe",
    "subregion": "Eastern Africa",
    "area": 118484,
    "population": 19129955,
    "Activities": []
  },
  {
    "id": "GEO",
    "name": "Georgia",
    "flags": "https://flagcdn.com/w320/ge.png",
    "continent": "Asia",
    "capital": "Tbilisi",
    "subregion": "Western Asia",
    "area": 69700,
    "population": 3714000,
    "Activities": []
  },
  {
    "id": "QAT",
    "name": "Qatar",
    "flags": "https://flagcdn.com/w320/qa.png",
    "continent": "Asia",
    "capital": "Doha",
    "subregion": "Western Asia",
    "area": 11586,
    "population": 2881060,
    "Activities": []
  },
  {
    "id": "MMR",
    "name": "Myanmar",
    "flags": "https://flagcdn.com/w320/mm.png",
    "continent": "Asia",
    "capital": "Naypyidaw",
    "subregion": "South-Eastern Asia",
    "area": 676578,
    "population": 54409794,
    "Activities": []
  },
  {
    "id": "ESP",
    "name": "Spain",
    "flags": "https://flagcdn.com/w320/es.png",
    "continent": "Europe",
    "capital": "Madrid",
    "subregion": "Southern Europe",
    "area": 505992,
    "population": 47351567,
    "Activities": []
  },
  {
    "id": "BMU",
    "name": "Bermuda",
    "flags": "https://flagcdn.com/w320/bm.png",
    "continent": "North America",
    "capital": "Hamilton",
    "subregion": "North America",
    "area": 54,
    "population": 63903,
    "Activities": []
  },
  {
    "id": "ERI",
    "name": "Eritrea",
    "flags": "https://flagcdn.com/w320/er.png",
    "continent": "Africa",
    "capital": "Asmara",
    "subregion": "Eastern Africa",
    "area": 117600,
    "population": 5352000,
    "Activities": []
  },
  {
    "id": "IRL",
    "name": "Ireland",
    "flags": "https://flagcdn.com/w320/ie.png",
    "continent": "Europe",
    "capital": "Dublin",
    "subregion": "Northern Europe",
    "area": 70273,
    "population": 4994724,
    "Activities": []
  },
  {
    "id": "TUR",
    "name": "Turkey",
    "flags": "https://flagcdn.com/w320/tr.png",
    "continent": "Asia",
    "capital": "Ankara",
    "subregion": "Western Asia",
    "area": 783562,
    "population": 84339067,
    "Activities": []
  },
  {
    "id": "RWA",
    "name": "Rwanda",
    "flags": "https://flagcdn.com/w320/rw.png",
    "continent": "Africa",
    "capital": "Kigali",
    "subregion": "Eastern Africa",
    "area": 26338,
    "population": 12952209,
    "Activities": []
  },
  {
    "id": "NER",
    "name": "Niger",
    "flags": "https://flagcdn.com/w320/ne.png",
    "continent": "Africa",
    "capital": "Niamey",
    "subregion": "Western Africa",
    "area": 1267000,
    "population": 24206636,
    "Activities": []
  },
  {
    "id": "BIH",
    "name": "Bosnia and Herzegovina",
    "flags": "https://flagcdn.com/w320/ba.png",
    "continent": "Europe",
    "capital": "Sarajevo",
    "subregion": "Southeast Europe",
    "area": 51209,
    "population": 3280815,
    "Activities": []
  },
  {
    "id": "NIU",
    "name": "Niue",
    "flags": "https://flagcdn.com/w320/nu.png",
    "continent": "Oceania",
    "capital": "Alofi",
    "subregion": "Polynesia",
    "area": 260,
    "population": 1470,
    "Activities": []
  },
  {
    "id": "BOL",
    "name": "Bolivia",
    "flags": "https://flagcdn.com/w320/bo.png",
    "continent": "South America",
    "capital": "Sucre",
    "subregion": "South America",
    "area": 1098581,
    "population": 11673029,
    "Activities": []
  },
  {
    "id": "TUV",
    "name": "Tuvalu",
    "flags": "https://flagcdn.com/w320/tv.png",
    "continent": "Oceania",
    "capital": "Funafuti",
    "subregion": "Polynesia",
    "area": 26,
    "population": 11792,
    "Activities": []
  },
  {
    "id": "SOM",
    "name": "Somalia",
    "flags": "https://flagcdn.com/w320/so.png",
    "continent": "Africa",
    "capital": "Mogadishu",
    "subregion": "Eastern Africa",
    "area": 637657,
    "population": 15893219,
    "Activities": []
  },
  {
    "id": "ZAF",
    "name": "South Africa",
    "flags": "https://flagcdn.com/w320/za.png",
    "continent": "Africa",
    "capital": "Pretoria",
    "subregion": "Southern Africa",
    "area": 1221037,
    "population": 59308690,
    "Activities": []
  },
  {
    "id": "MSR",
    "name": "Montserrat",
    "flags": "https://flagcdn.com/w320/ms.png",
    "continent": "North America",
    "capital": "Plymouth",
    "subregion": "Caribbean",
    "area": 102,
    "population": 4922,
    "Activities": []
  },
  {
    "id": "DEU",
    "name": "Germany",
    "flags": "https://flagcdn.com/w320/de.png",
    "continent": "Europe",
    "capital": "Berlin",
    "subregion": "Western Europe",
    "area": 357114,
    "population": 83240525,
    "Activities": []
  },
  {
    "id": "BGR",
    "name": "Bulgaria",
    "flags": "https://flagcdn.com/w320/bg.png",
    "continent": "Europe",
    "capital": "Sofia",
    "subregion": "Southeast Europe",
    "area": 110879,
    "population": 6927288,
    "Activities": []
  },
  {
    "id": "LSO",
    "name": "Lesotho",
    "flags": "https://flagcdn.com/w320/ls.png",
    "continent": "Africa",
    "capital": "Maseru",
    "subregion": "Southern Africa",
    "area": 30355,
    "population": 2142252,
    "Activities": []
  },
  {
    "id": "AUT",
    "name": "Austria",
    "flags": "https://flagcdn.com/w320/at.png",
    "continent": "Europe",
    "capital": "Vienna",
    "subregion": "Central Europe",
    "area": 83871,
    "population": 8917205,
    "Activities": []
  },
  {
    "id": "JOR",
    "name": "Jordan",
    "flags": "https://flagcdn.com/w320/jo.png",
    "continent": "Asia",
    "capital": "Amman",
    "subregion": "Western Asia",
    "area": 89342,
    "population": 10203140,
    "Activities": []
  },
  {
    "id": "CYP",
    "name": "Cyprus",
    "flags": "https://flagcdn.com/w320/cy.png",
    "continent": "Europe",
    "capital": "Nicosia",
    "subregion": "Southern Europe",
    "area": 9251,
    "population": 1207361,
    "Activities": []
  },
  {
    "id": "LVA",
    "name": "Latvia",
    "flags": "https://flagcdn.com/w320/lv.png",
    "continent": "Europe",
    "capital": "Riga",
    "subregion": "Northern Europe",
    "area": 64559,
    "population": 1901548,
    "Activities": []
  },
  {
    "id": "ATA",
    "name": "Antarctica",
    "flags": "https://flagcdn.com/w320/aq.png",
    "continent": "Antarctica",
    "capital": null,
    "subregion": null,
    "area": 14000000,
    "population": 1000,
    "Activities": []
  },
  {
    "id": "WSM",
    "name": "Samoa",
    "flags": "https://flagcdn.com/w320/ws.png",
    "continent": "Oceania",
    "capital": "Apia",
    "subregion": "Polynesia",
    "area": 2842,
    "population": 198410,
    "Activities": []
  },
  {
    "id": "SAU",
    "name": "Saudi Arabia",
    "flags": "https://flagcdn.com/w320/sa.png",
    "continent": "Asia",
    "capital": "Riyadh",
    "subregion": "Western Asia",
    "area": 2149690,
    "population": 34813867,
    "Activities": []
  },
  {
    "id": "ARM",
    "name": "Armenia",
    "flags": "https://flagcdn.com/w320/am.png",
    "continent": "Asia",
    "capital": "Yerevan",
    "subregion": "Western Asia",
    "area": 29743,
    "population": 2963234,
    "Activities": []
  },
  {
    "id": "VIR",
    "name": "United States Virgin Islands",
    "flags": "https://flagcdn.com/w320/vi.png",
    "continent": "North America",
    "capital": "Charlotte Amalie",
    "subregion": "Caribbean",
    "area": 347,
    "population": 106290,
    "Activities": []
  },
  {
    "id": "COM",
    "name": "Comoros",
    "flags": "https://flagcdn.com/w320/km.png",
    "continent": "Africa",
    "capital": "Moroni",
    "subregion": "Eastern Africa",
    "area": 1862,
    "population": 869595,
    "Activities": []
  },
  {
    "id": "SUR",
    "name": "Suriname",
    "flags": "https://flagcdn.com/w320/sr.png",
    "continent": "South America",
    "capital": "Paramaribo",
    "subregion": "South America",
    "area": 163820,
    "population": 586634,
    "Activities": []
  },
  {
    "id": "COD",
    "name": "DR Congo",
    "flags": "https://flagcdn.com/w320/cd.png",
    "continent": "Africa",
    "capital": "Kinshasa",
    "subregion": "Middle Africa",
    "area": 2344858,
    "population": 89561404,
    "Activities": []
  },
  {
    "id": "WLF",
    "name": "Wallis and Futuna",
    "flags": "https://flagcdn.com/w320/wf.png",
    "continent": "Oceania",
    "capital": "Mata-Utu",
    "subregion": "Polynesia",
    "area": 142,
    "population": 11750,
    "Activities": []
  },
  {
    "id": "SEN",
    "name": "Senegal",
    "flags": "https://flagcdn.com/w320/sn.png",
    "continent": "Africa",
    "capital": "Dakar",
    "subregion": "Western Africa",
    "area": 196722,
    "population": 16743930,
    "Activities": []
  },
  {
    "id": "MNP",
    "name": "Northern Mariana Islands",
    "flags": "https://flagcdn.com/w320/mp.png",
    "continent": "Oceania",
    "capital": "Saipan",
    "subregion": "Micronesia",
    "area": 464,
    "population": 57557,
    "Activities": []
  },
  {
    "id": "PAK",
    "name": "Pakistan",
    "flags": "https://flagcdn.com/w320/pk.png",
    "continent": "Asia",
    "capital": "Islamabad",
    "subregion": "Southern Asia",
    "area": 881912,
    "population": 220892331,
    "Activities": []
  },
  {
    "id": "BLM",
    "name": "Saint Barthélemy",
    "flags": "https://flagcdn.com/w320/bl.png",
    "continent": "North America",
    "capital": "Gustavia",
    "subregion": "Caribbean",
    "area": 21,
    "population": 4255,
    "Activities": []
  },
  {
    "id": "GUM",
    "name": "Guam",
    "flags": "https://flagcdn.com/w320/gu.png",
    "continent": "Oceania",
    "capital": "Hagåtña",
    "subregion": "Micronesia",
    "area": 549,
    "population": 168783,
    "Activities": []
  },
  {
    "id": "ARG",
    "name": "Argentina",
    "flags": "https://flagcdn.com/w320/ar.png",
    "continent": "South America",
    "capital": "Buenos Aires",
    "subregion": "South America",
    "area": 2780400,
    "population": 45376763,
    "Activities": []
  },
  {
    "id": "KOR",
    "name": "South Korea",
    "flags": "https://flagcdn.com/w320/kr.png",
    "continent": "Asia",
    "capital": "Seoul",
    "subregion": "Eastern Asia",
    "area": 100210,
    "population": 51780579,
    "Activities": []
  },
  {
    "id": "GMB",
    "name": "Gambia",
    "flags": "https://flagcdn.com/w320/gm.png",
    "continent": "Africa",
    "capital": "Banjul",
    "subregion": "Western Africa",
    "area": 10689,
    "population": 2416664,
    "Activities": []
  },
  {
    "id": "PCN",
    "name": "Pitcairn Islands",
    "flags": "https://flagcdn.com/w320/pn.png",
    "continent": "Oceania",
    "capital": "Adamstown",
    "subregion": "Polynesia",
    "area": 47,
    "population": 56,
    "Activities": []
  },
  {
    "id": "STP",
    "name": "São Tomé and Príncipe",
    "flags": "https://flagcdn.com/w320/st.png",
    "continent": "Africa",
    "capital": "São Tomé",
    "subregion": "Middle Africa",
    "area": 964,
    "population": 219161,
    "Activities": []
  },
  {
    "id": "NGA",
    "name": "Nigeria",
    "flags": "https://flagcdn.com/w320/ng.png",
    "continent": "Africa",
    "capital": "Abuja",
    "subregion": "Western Africa",
    "area": 923768,
    "population": 206139587,
    "Activities": []
  },
  {
    "id": "HTI",
    "name": "Haiti",
    "flags": "https://flagcdn.com/w320/ht.png",
    "continent": "North America",
    "capital": "Port-au-Prince",
    "subregion": "Caribbean",
    "area": 27750,
    "population": 11402533,
    "Activities": []
  },
  {
    "id": "PNG",
    "name": "Papua New Guinea",
    "flags": "https://flagcdn.com/w320/pg.png",
    "continent": "Oceania",
    "capital": "Port Moresby",
    "subregion": "Melanesia",
    "area": 462840,
    "population": 8947027,
    "Activities": []
  },
  {
    "id": "SLB",
    "name": "Solomon Islands",
    "flags": "https://flagcdn.com/w320/sb.png",
    "continent": "Oceania",
    "capital": "Honiara",
    "subregion": "Melanesia",
    "area": 28896,
    "population": 686878,
    "Activities": []
  },
  {
    "id": "SDN",
    "name": "Sudan",
    "flags": "https://flagcdn.com/w320/sd.png",
    "continent": "Africa",
    "capital": "Khartoum",
    "subregion": "Northern Africa",
    "area": 1886068,
    "population": 43849269,
    "Activities": []
  },
  {
    "id": "ARE",
    "name": "United Arab Emirates",
    "flags": "https://flagcdn.com/w320/ae.png",
    "continent": "Asia",
    "capital": "Abu Dhabi",
    "subregion": "Western Asia",
    "area": 83600,
    "population": 9890400,
    "Activities": []
  },
  {
    "id": "HMD",
    "name": "Heard Island and McDonald Islands",
    "flags": "https://flagcdn.com/w320/hm.png",
    "continent": "Antarctica",
    "capital": null,
    "subregion": null,
    "area": 412,
    "population": 0,
    "Activities": []
  },
  {
    "id": "ITA",
    "name": "Italy",
    "flags": "https://flagcdn.com/w320/it.png",
    "continent": "Europe",
    "capital": "Rome",
    "subregion": "Southern Europe",
    "area": 301336,
    "population": 59554023,
    "Activities": []
  },
  {
    "id": "OMN",
    "name": "Oman",
    "flags": "https://flagcdn.com/w320/om.png",
    "continent": "Asia",
    "capital": "Muscat",
    "subregion": "Western Asia",
    "area": 309500,
    "population": 5106622,
    "Activities": []
  },
  {
    "id": "MNG",
    "name": "Mongolia",
    "flags": "https://flagcdn.com/w320/mn.png",
    "continent": "Asia",
    "capital": "Ulan Bator",
    "subregion": "Eastern Asia",
    "area": 1564110,
    "population": 3278292,
    "Activities": []
  },
  {
    "id": "MKD",
    "name": "North Macedonia",
    "flags": "https://flagcdn.com/w320/mk.png",
    "continent": "Europe",
    "capital": "Skopje",
    "subregion": "Southeast Europe",
    "area": 25713,
    "population": 2077132,
    "Activities": []
  },
  {
    "id": "MDG",
    "name": "Madagascar",
    "flags": "https://flagcdn.com/w320/mg.png",
    "continent": "Africa",
    "capital": "Antananarivo",
    "subregion": "Eastern Africa",
    "area": 587041,
    "population": 27691019,
    "Activities": []
  },
  {
    "id": "CYM",
    "name": "Cayman Islands",
    "flags": "https://flagcdn.com/w320/ky.png",
    "continent": "North America",
    "capital": "George Town",
    "subregion": "Caribbean",
    "area": 264,
    "population": 65720,
    "Activities": []
  },
  {
    "id": "EST",
    "name": "Estonia",
    "flags": "https://flagcdn.com/w320/ee.png",
    "continent": "Europe",
    "capital": "Tallinn",
    "subregion": "Northern Europe",
    "area": 45227,
    "population": 1331057,
    "Activities": []
  },
  {
    "id": "BTN",
    "name": "Bhutan",
    "flags": "https://flagcdn.com/w320/bt.png",
    "continent": "Asia",
    "capital": "Thimphu",
    "subregion": "Southern Asia",
    "area": 38394,
    "population": 771612,
    "Activities": []
  },
  {
    "id": "CHN",
    "name": "China",
    "flags": "https://flagcdn.com/w320/cn.png",
    "continent": "Asia",
    "capital": "Beijing",
    "subregion": "Eastern Asia",
    "area": 9706961,
    "population": 1402112000,
    "Activities": []
  },
  {
    "id": "POL",
    "name": "Poland",
    "flags": "https://flagcdn.com/w320/pl.png",
    "continent": "Europe",
    "capital": "Warsaw",
    "subregion": "Central Europe",
    "area": 312679,
    "population": 37950802,
    "Activities": []
  },
  {
    "id": "MYS",
    "name": "Malaysia",
    "flags": "https://flagcdn.com/w320/my.png",
    "continent": "Asia",
    "capital": "Kuala Lumpur",
    "subregion": "South-Eastern Asia",
    "area": 330803,
    "population": 32365998,
    "Activities": []
  },
  {
    "id": "MEX",
    "name": "Mexico",
    "flags": "https://flagcdn.com/w320/mx.png",
    "continent": "North America",
    "capital": "Mexico City",
    "subregion": "North America",
    "area": 1964375,
    "population": 128932753,
    "Activities": []
  },
  {
    "id": "PER",
    "name": "Peru",
    "flags": "https://flagcdn.com/w320/pe.png",
    "continent": "South America",
    "capital": "Lima",
    "subregion": "South America",
    "area": 1285216,
    "population": 32971846,
    "Activities": []
  },
  {
    "id": "RUS",
    "name": "Russia",
    "flags": "https://flagcdn.com/w320/ru.png",
    "continent": "Europe",
    "capital": "Moscow",
    "subregion": "Eastern Europe",
    "area": 17098242,
    "population": 144104080,
    "Activities": []
  },
  {
    "id": "UMI",
    "name": "United States Minor Outlying Islands",
    "flags": "https://flagcdn.com/w320/um.png",
    "continent": "Oceania",
    "capital": null,
    "subregion": "North America",
    "area": 34,
    "population": 300,
    "Activities": []
  },
  {
    "id": "HND",
    "name": "Honduras",
    "flags": "https://flagcdn.com/w320/hn.png",
    "continent": "North America",
    "capital": "Tegucigalpa",
    "subregion": "Central America",
    "area": 112492,
    "population": 9904608,
    "Activities": []
  },
  {
    "id": "FIN",
    "name": "Finland",
    "flags": "https://flagcdn.com/w320/fi.png",
    "continent": "Europe",
    "capital": "Helsinki",
    "subregion": "Northern Europe",
    "area": 338424,
    "population": 5530719,
    "Activities": []
  },
  {
    "id": "UZB",
    "name": "Uzbekistan",
    "flags": "https://flagcdn.com/w320/uz.png",
    "continent": "Asia",
    "capital": "Tashkent",
    "subregion": "Central Asia",
    "area": 447400,
    "population": 34232050,
    "Activities": []
  },
  {
    "id": "KAZ",
    "name": "Kazakhstan",
    "flags": "https://flagcdn.com/w320/kz.png",
    "continent": "Asia",
    "capital": "Nur-Sultan",
    "subregion": "Central Asia",
    "area": 2724900,
    "population": 18754440,
    "Activities": []
  },
  {
    "id": "NAM",
    "name": "Namibia",
    "flags": "https://flagcdn.com/w320/na.png",
    "continent": "Africa",
    "capital": "Windhoek",
    "subregion": "Southern Africa",
    "area": 825615,
    "population": 2540916,
    "Activities": []
  },
  {
    "id": "JAM",
    "name": "Jamaica",
    "flags": "https://flagcdn.com/w320/jm.png",
    "continent": "North America",
    "capital": "Kingston",
    "subregion": "Caribbean",
    "area": 10991,
    "population": 2961161,
    "Activities": []
  },
  {
    "id": "LCA",
    "name": "Saint Lucia",
    "flags": "https://flagcdn.com/w320/lc.png",
    "continent": "North America",
    "capital": "Castries",
    "subregion": "Caribbean",
    "area": 616,
    "population": 183629,
    "Activities": []
  },
  {
    "id": "FLK",
    "name": "Falkland Islands",
    "flags": "https://flagcdn.com/w320/fk.png",
    "continent": "South America",
    "capital": "Stanley",
    "subregion": "South America",
    "area": 12173,
    "population": 2563,
    "Activities": []
  },
  {
    "id": "SMR",
    "name": "San Marino",
    "flags": "https://flagcdn.com/w320/sm.png",
    "continent": "Europe",
    "capital": "City of San Marino",
    "subregion": "Southern Europe",
    "area": 61,
    "population": 33938,
    "Activities": []
  },
  {
    "id": "DJI",
    "name": "Djibouti",
    "flags": "https://flagcdn.com/w320/dj.png",
    "continent": "Africa",
    "capital": "Djibouti",
    "subregion": "Eastern Africa",
    "area": 23200,
    "population": 988002,
    "Activities": []
  },
  {
    "id": "URY",
    "name": "Uruguay",
    "flags": "https://flagcdn.com/w320/uy.png",
    "continent": "South America",
    "capital": "Montevideo",
    "subregion": "South America",
    "area": 181034,
    "population": 3473727,
    "Activities": []
  },
  {
    "id": "AZE",
    "name": "Azerbaijan",
    "flags": "https://flagcdn.com/w320/az.png",
    "continent": "Asia",
    "capital": "Baku",
    "subregion": "Western Asia",
    "area": 86600,
    "population": 10110116,
    "Activities": []
  },
  {
    "id": "SVK",
    "name": "Slovakia",
    "flags": "https://flagcdn.com/w320/sk.png",
    "continent": "Europe",
    "capital": "Bratislava",
    "subregion": "Central Europe",
    "area": 49037,
    "population": 5458827,
    "Activities": []
  },
  {
    "id": "IRN",
    "name": "Iran",
    "flags": "https://flagcdn.com/w320/ir.png",
    "continent": "Asia",
    "capital": "Tehran",
    "subregion": "Southern Asia",
    "area": 1648195,
    "population": 83992953,
    "Activities": []
  },
  {
    "id": "VUT",
    "name": "Vanuatu",
    "flags": "https://flagcdn.com/w320/vu.png",
    "continent": "Oceania",
    "capital": "Port Vila",
    "subregion": "Melanesia",
    "area": 12189,
    "population": 307150,
    "Activities": []
  },
  {
    "id": "SVN",
    "name": "Slovenia",
    "flags": "https://flagcdn.com/w320/si.png",
    "continent": "Europe",
    "capital": "Ljubljana",
    "subregion": "Central Europe",
    "area": 20273,
    "population": 2100126,
    "Activities": []
  },
  {
    "id": "PLW",
    "name": "Palau",
    "flags": "https://flagcdn.com/w320/pw.png",
    "continent": "Oceania",
    "capital": "Ngerulmud",
    "subregion": "Micronesia",
    "area": 459,
    "population": 18092,
    "Activities": []
  },
  {
    "id": "MOZ",
    "name": "Mozambique",
    "flags": "https://flagcdn.com/w320/mz.png",
    "continent": "Africa",
    "capital": "Maputo",
    "subregion": "Eastern Africa",
    "area": 801590,
    "population": 31255435,
    "Activities": []
  },
  {
    "id": "GTM",
    "name": "Guatemala",
    "flags": "https://flagcdn.com/w320/gt.png",
    "continent": "North America",
    "capital": "Guatemala City",
    "subregion": "Central America",
    "area": 108889,
    "population": 16858333,
    "Activities": []
  },
  {
    "id": "ZMB",
    "name": "Zambia",
    "flags": "https://flagcdn.com/w320/zm.png",
    "continent": "Africa",
    "capital": "Lusaka",
    "subregion": "Eastern Africa",
    "area": 752612,
    "population": 18383956,
    "Activities": []
  },
  {
    "id": "SGP",
    "name": "Singapore",
    "flags": "https://flagcdn.com/w320/sg.png",
    "continent": "Asia",
    "capital": "Singapore",
    "subregion": "South-Eastern Asia",
    "area": 710,
    "population": 5685807,
    "Activities": []
  },
  {
    "id": "NPL",
    "name": "Nepal",
    "flags": "https://flagcdn.com/w320/np.png",
    "continent": "Asia",
    "capital": "Kathmandu",
    "subregion": "Southern Asia",
    "area": 147181,
    "population": 29136808,
    "Activities": []
  },
  {
    "id": "GNB",
    "name": "Guinea-Bissau",
    "flags": "https://flagcdn.com/w320/gw.png",
    "continent": "Africa",
    "capital": "Bissau",
    "subregion": "Western Africa",
    "area": 36125,
    "population": 1967998,
    "Activities": []
  },
  {
    "id": "IMN",
    "name": "Isle of Man",
    "flags": "https://flagcdn.com/w320/im.png",
    "continent": "Europe",
    "capital": "Douglas",
    "subregion": "Northern Europe",
    "area": 572,
    "population": 85032,
    "Activities": []
  },
  {
    "id": "ALB",
    "name": "Albania",
    "flags": "https://flagcdn.com/w320/al.png",
    "continent": "Europe",
    "capital": "Tirana",
    "subregion": "Southeast Europe",
    "area": 28748,
    "population": 2837743,
    "Activities": []
  },
  {
    "id": "NCL",
    "name": "New Caledonia",
    "flags": "https://flagcdn.com/w320/nc.png",
    "continent": "Oceania",
    "capital": "Nouméa",
    "subregion": "Melanesia",
    "area": 18575,
    "population": 271960,
    "Activities": []
  },
  {
    "id": "HKG",
    "name": "Hong Kong",
    "flags": "https://flagcdn.com/w320/hk.png",
    "continent": "Asia",
    "capital": "City of Victoria",
    "subregion": "Eastern Asia",
    "area": 1104,
    "population": 7500700,
    "Activities": []
  },
  {
    "id": "TCD",
    "name": "Chad",
    "flags": "https://flagcdn.com/w320/td.png",
    "continent": "Africa",
    "capital": "N'Djamena",
    "subregion": "Middle Africa",
    "area": 1284000,
    "population": 16425859,
    "Activities": []
  },
  {
    "id": "LBY",
    "name": "Libya",
    "flags": "https://flagcdn.com/w320/ly.png",
    "continent": "Africa",
    "capital": "Tripoli",
    "subregion": "Northern Africa",
    "area": 1759540,
    "population": 6871287,
    "Activities": []
  },
  {
    "id": "USA",
    "name": "United States",
    "flags": "https://flagcdn.com/w320/us.png",
    "continent": "North America",
    "capital": "Washington, D.C.",
    "subregion": "North America",
    "area": 9372610,
    "population": 329484123,
    "Activities": []
  },
  {
    "id": "PYF",
    "name": "French Polynesia",
    "flags": "https://flagcdn.com/w320/pf.png",
    "continent": "Oceania",
    "capital": "Papeetē",
    "subregion": "Polynesia",
    "area": 4167,
    "population": 280904,
    "Activities": []
  },
  {
    "id": "SYC",
    "name": "Seychelles",
    "flags": "https://flagcdn.com/w320/sc.png",
    "continent": "Africa",
    "capital": "Victoria",
    "subregion": "Eastern Africa",
    "area": 452,
    "population": 98462,
    "Activities": []
  },
  {
    "id": "GIN",
    "name": "Guinea",
    "flags": "https://flagcdn.com/w320/gn.png",
    "continent": "Africa",
    "capital": "Conakry",
    "subregion": "Western Africa",
    "area": 245857,
    "population": 13132792,
    "Activities": []
  },
  {
    "id": "GBR",
    "name": "United Kingdom",
    "flags": "https://flagcdn.com/w320/gb.png",
    "continent": "Europe",
    "capital": "London",
    "subregion": "Northern Europe",
    "area": 242900,
    "population": 67215293,
    "Activities": []
  },
  {
    "id": "SLE",
    "name": "Sierra Leone",
    "flags": "https://flagcdn.com/w320/sl.png",
    "continent": "Africa",
    "capital": "Freetown",
    "subregion": "Western Africa",
    "area": 71740,
    "population": 7976985,
    "Activities": []
  },
  {
    "id": "CCK",
    "name": "Cocos (Keeling) Islands",
    "flags": "https://flagcdn.com/w320/cc.png",
    "continent": "Asia",
    "capital": "West Island",
    "subregion": "Australia and New Zealand",
    "area": 14,
    "population": 544,
    "Activities": []
  },
  {
    "id": "BVT",
    "name": "Bouvet Island",
    "flags": "https://flagcdn.com/w320/bv.png",
    "continent": "Antarctica",
    "capital": null,
    "subregion": null,
    "area": 49,
    "population": 0,
    "Activities": []
  },
  {
    "id": "ATG",
    "name": "Antigua and Barbuda",
    "flags": "https://flagcdn.com/w320/ag.png",
    "continent": "North America",
    "capital": "Saint John's",
    "subregion": "Caribbean",
    "area": 442,
    "population": 97928,
    "Activities": []
  },
  {
    "id": "GAB",
    "name": "Gabon",
    "flags": "https://flagcdn.com/w320/ga.png",
    "continent": "Africa",
    "capital": "Libreville",
    "subregion": "Middle Africa",
    "area": 267668,
    "population": 2225728,
    "Activities": []
  },
  {
    "id": "BEL",
    "name": "Belgium",
    "flags": "https://flagcdn.com/w320/be.png",
    "continent": "Europe",
    "capital": "Brussels",
    "subregion": "Western Europe",
    "area": 30528,
    "population": 11555997,
    "Activities": []
  },
  {
    "id": "VCT",
    "name": "Saint Vincent and the Grenadines",
    "flags": "https://flagcdn.com/w320/vc.png",
    "continent": "North America",
    "capital": "Kingstown",
    "subregion": "Caribbean",
    "area": 389,
    "population": 110947,
    "Activities": []
  },
  {
    "id": "LBN",
    "name": "Lebanon",
    "flags": "https://flagcdn.com/w320/lb.png",
    "continent": "Asia",
    "capital": "Beirut",
    "subregion": "Western Asia",
    "area": 10452,
    "population": 6825442,
    "Activities": []
  },
  {
    "id": "ESH",
    "name": "Western Sahara",
    "flags": "https://flagcdn.com/w320/eh.png",
    "continent": "Africa",
    "capital": "El Aaiún",
    "subregion": "Northern Africa",
    "area": 266000,
    "population": 510713,
    "Activities": []
  },
  {
    "id": "SWE",
    "name": "Sweden",
    "flags": "https://flagcdn.com/w320/se.png",
    "continent": "Europe",
    "capital": "Stockholm",
    "subregion": "Northern Europe",
    "area": 450295,
    "population": 10353442,
    "Activities": []
  }
];

// Ordenar por nombre de forma ascendente
// console.log(sortByKey(data, 'name', 'asc'));
// Ejemplo de uso:
// const sortedArrayAsc = sortByKey(data, 'population', 'asc');
// console.log(sortedArrayAsc);

// const sortedArrayDesc = sortByKey(data, 'population', 'desc');
// console.log(sortedArrayDesc);

// // Ordenar por edad de forma descendente
// console.log(sortByKey(data, 'capital', 'asc'));


// // Filtrar por continente 'Europe'
// console.log(filterByContinent(data, 'Asia'));

// // Filtrar por tipo de actividad turística 'Skiing'
// console.log(filterByActivity(data, 'Ciclismo'));

// const countriesWithActivities = filterCountriesWithActivities(data);
// console.log(countriesWithActivities);


function filterCountriesByActivity(array, activityName) {
  const countriesWithActivities = filterCountriesWithActivities(data);
  return countriesWithActivities.filter(country => country.Activities.some(activity => activity.name.toLowerCase() === activityName.toLowerCase()));
}

const countriesWithMotoCross = filterCountriesByActivity(data, "montañismo");
console.log(countriesWithMotoCross);
