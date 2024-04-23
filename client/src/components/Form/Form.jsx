// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { validateForm } from '../Validate/validateForm';

// import styles from"./Form.module.css"

// const Formulario = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     difficulty: '',
//     duration: '',
//     season: '',
//     countriesId: []
//   });

//   const [errors, setErrors] = useState({
//     name: '',
//     difficulty: '',
//     duration: '',
//     season: '',
//     countriesId: ''
//   });

//   const [allCountries, setAllCountries] = useState([]);
//   const [isFormDisabled, setIsFormDisabled] = useState(false); // Estado para bloquear el formulario temporalmente

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/countries');
//         setAllCountries(response.data);
//       } catch (error) {
//         console.error('Error al obtener países:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const capitalizeFirstLetter = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     const capitalizedValue = capitalizeFirstLetter(value); // Convertir la primera letra a mayúscula
//     setFormData({
//       ...formData,
//       [name]: capitalizedValue
//     });
//     setErrors({
//       ...errors,
//       [name]: validateForm(name, capitalizedValue)
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     let formErrors = {};
//     Object.keys(formData).forEach((key) => {
//       const error = validateForm(key, formData[key]);
//       if (error) {
//         formErrors[key] = error;
//       }
//     });

//     if (Object.keys(formErrors).length === 0) {
//       try {
//         const response = await axios.post('http://localhost:3001/activities', formData);
//         console.log(response.status);
//         setFormData({
//           name: '',
//           difficulty: '',
//           duration: '',
//           season: '',
//           countriesId: []
//         });
//         setErrors({
//           name: '',
//           difficulty: '',
//           duration: '',
//           season: '',
//           countriesId: ''
//         });
//         handleFormSubmitSuccess(); // Llama a la función en caso de éxito
//       } catch (error) {
//         console.error('Error al enviar el formulario:', error);
//         handleFormSubmitError(); // Llama a la función en caso de error
//       }
//     } else {
//       let errorMessage = 'Por favor, corrige los siguientes errores antes de enviar el formulario:\n';
//       Object.keys(formErrors).forEach((key) => {
//         errorMessage += `- ${key}: ${formErrors[key]}\n`;
//       });
//       alert(errorMessage);
//     }
//   };

//   const handleCountryChange = (event) => {
//     const selectedCountryId = event.target.value;
//     let updatedCountriesId = [...formData.countriesId];

//     if (updatedCountriesId.includes(selectedCountryId)) {
//       // Si el país ya está seleccionado, quítalo de la lista
//       updatedCountriesId = updatedCountriesId.filter(id => id !== selectedCountryId);
//     } else {
//       // Si el país no está seleccionado, agrégalo a la lista
//       updatedCountriesId.push(selectedCountryId);
//     }

//     // Actualiza el estado con la lista de países seleccionados
//     setFormData({
//       ...formData,
//       countriesId: updatedCountriesId
//     });

//     // Valida los países seleccionados y actualiza los errores si es necesario
//     setErrors({
//       ...errors,
//       countriesId: validateForm('countries', updatedCountriesId) // Cambia 'countriesId' a 'countries'
//     });
//   };

//   const handleFormSubmitSuccess = () => {
//     setIsFormDisabled(false);
//     alert("Actividad Creada")
//     window.location.href = "/activities"; // Redirige a la ruta "/activities" después de enviar el formulario correctamente
//   };

//   const handleFormSubmitError = () => {
//     setIsFormDisabled(true);
//     setTimeout(() => {
//       setIsFormDisabled(false);
//       window.location.href = "/activities"; // Redirige a la ruta "/activities" después de 10 segundos
//     }, 3000);
//   };

//   return (
//     <div className={styles.div}>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <h2 className={styles.titulo}>Nueva Actividad</h2>
//         <label>
//           <b>Name</b><br />
//           <input
//             type="text"
//             name="name"
//             placeholder="Ingresa un nombre"
//             value={formData.name}
//             onChange={handleChange}
//             className={styles.input}
//           />
//         </label>
//         <span className={styles.error}>{errors.name}</span><br />

//         <label>
//           <b>Difficulty</b><br />
//           <input
//             type="text"
//             name="difficulty"
//             placeholder="Ingresa una dificultad"
//             value={formData.difficulty}
//             onChange={handleChange}
//             className={styles.input}
//           />
//         </label>
//         <span className={styles.error}>{errors.difficulty}</span><br />

//         <label>
//           <b>Duration</b><br />
//           <input
//             type="number"
//             name="duration"
//             placeholder="Ingresa una duración de la actividad"
//             value={formData.duration}
//             onChange={handleChange}
//             className={styles.input}
//           />
//         </label>
//         <span className={styles.error}>{errors.duration}</span><br />

//         <label>
//           <b>Season</b><br />
//           <input
//             type="text"
//             name="season"
//             placeholder='Ingresa una temporada ("Primavera, Verano, Otoño, Invierno")'
//             value={formData.season}
//             onChange={handleChange}
//             className={styles.input}
//           />
//         </label>
//         <span className={styles.error}>{errors.season}</span><br />

//         <label>
//           <b>Countries:</b><br />
//           <span className={styles["texto-pais"]}>
//             {formData.countriesId.map((countryId) => {
//               const country = allCountries.find((c) => c.id === countryId.toString());
//               return <ul key={countryId}>{country ? country.name : 'Unknown'}</ul>;
//             })}
//           </span>
//           <br />
//           <select
//             multiple
//             name="countriesId"
//             value={formData.countriesId}
//             onChange={handleCountryChange}
//             className={styles.select}
//           >
//             {allCountries.map((country) => (
//               <option key={country.id} value={country.id}>
//                 {country.name}
//               </option>
//             ))}
//           </select>
//         </label>
//         <span className={styles.error}>{errors.countriesId}</span><br />

//         <button type="submit" disabled={isFormDisabled}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Formulario;


import { useState, useEffect } from 'react';
import axios from 'axios';
import { validateForm } from '../Validate/validateForm';

import styles from "./Form.module.css"

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countriesId: []
  });

  const [errors, setErrors] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countriesId: ''
  });

  const [allCountries, setAllCountries] = useState([]);
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:3001/countries');
        setAllCountries(response.data);
      } catch (error) {
        console.error('Error al obtener países:', error);
      }
    };

    fetchCountries();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const capitalizedValue = capitalizeFirstLetter(value);
    setFormData({
      ...formData,
      [name]: capitalizedValue
    });
    setErrors({
      ...errors,
      [name]: validateForm(name, capitalizedValue)
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateForm(key, formData[key]);
      if (error) {
        formErrors[key] = error;
      }
    });

    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:3001/activities', formData);
        console.log(response.status);
        setFormData({
          name: '',
          difficulty: '',
          duration: '',
          season: '',
          countriesId: []
        });
        setErrors({
          name: '',
          difficulty: '',
          duration: '',
          season: '',
          countriesId: ''
        });
        handleFormSubmitSuccess();
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        handleFormSubmitError();
      }
    } else {
      let errorMessage = 'Por favor, corrige los siguientes errores antes de enviar el formulario:\n';
      Object.keys(formErrors).forEach((key) => {
        errorMessage += `- ${key}: ${formErrors[key]}\n`;
      });
      alert(errorMessage);
    }
  };

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    let updatedCountriesId = [...formData.countriesId];

    if (updatedCountriesId.includes(selectedCountryId)) {
      updatedCountriesId = updatedCountriesId.filter(id => id !== selectedCountryId);
    } else {
      updatedCountriesId.push(selectedCountryId);
    }

    setFormData({
      ...formData,
      countriesId: updatedCountriesId
    });

    setErrors({
      ...errors,
      countriesId: validateForm('countries', updatedCountriesId)
    });
  };

  const handleFormSubmitSuccess = () => {
    setIsFormDisabled(false);
    alert("Actividad Creada")
    window.location.href = "/activities";
  };

  const handleFormSubmitError = () => {
    setIsFormDisabled(true);
    setTimeout(() => {
      setIsFormDisabled(false);
      window.location.href = "/activities";
    }, 3000);
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.titulo}>Nueva Actividad</h2>
        <label>
          <b>Name</b><br />
          <input
            type="text"
            name="name"
            placeholder="Ingresa un nombre"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <span className={styles.error}>{errors.name}</span><br />

        <label>
          <b>Difficulty</b><br />
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="">Selecciona una dificultad</option>
            <option value="Facil">Facil</option>
            <option value="Medio">Medio</option>
            <option value="Dificil">Dificil</option>
          </select>
        </label>
        <span className={styles.error}>{errors.difficulty}</span><br />

        <label>
          <b>Duration</b><br />
          <select
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="">Selecciona una duración</option>
            <option value="15 min">15 min</option>
            <option value="30 min">30 min</option>
            <option value="1 hr">1 hr</option>
            <option value="1.15 hrs">1.15 hrs</option>
            <option value="1.30 hrs">1.30 hrs</option>
            <option value="2 hrs">2 hrs</option>
          </select>
        </label>
        <span className={styles.error}>{errors.duration}</span><br />

        <label>
          <b>Season</b><br />
          <select
            name="season"
            value={formData.season}
            onChange={handleChange}
            className={styles.input}
          >
            <option value="">Selecciona una temporada</option>
            <option value="Primavera">Primavera</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
          </select>
        </label>
        <span className={styles.error}>{errors.season}</span><br />

        <label>
          <b>Countries:</b><br />
          <span className={styles["texto-pais"]}>
            {formData.countriesId.map((countryId) => {
              const country = allCountries.find((c) => c.id === countryId.toString());
              return <ul key={countryId}>{country ? country.name : 'Unknown'}</ul>;
            })}
          </span>
          <br />
          <select
            multiple
            name="countriesId"
            value={formData.countriesId}
            onChange={handleCountryChange}
            className={styles.select}
          >
            {allCountries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </label>
        <span className={styles.error}>{errors.countriesId}</span><br />

        <button type="submit" disabled={isFormDisabled}>Submit</button>
      </form>
    </div>
  );
};

export default Formulario;
