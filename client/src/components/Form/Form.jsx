import { useState, useEffect } from 'react';
import axios from 'axios';
import { validateForm } from '../Validate/validateForm';

import styles from"./Form.module.css"

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
  const capitalizedValue = capitalizeFirstLetter(value); // Convertir la primera letra a mayúscula
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
      console.log(formData);
      await axios.post('http://localhost:3001/activities', formData);
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
    // Si el país ya está seleccionado, quítalo de la lista
    updatedCountriesId = updatedCountriesId.filter(id => id !== selectedCountryId);
  } else {
    // Si el país no está seleccionado, agrégalo a la lista
    updatedCountriesId.push(selectedCountryId);
  }

  // Actualiza el estado con la lista de países seleccionados
  setFormData({
    ...formData,
    countriesId: updatedCountriesId
  });

  // Valida los países seleccionados y actualiza los errores si es necesario
  setErrors({
    ...errors,
    countriesId: validateForm('countries', updatedCountriesId) // Cambia 'countriesId' a 'countries'
  });
};

  return (
    <div className={styles.div}>


    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.titulo}>Nueva Actividad</h2>
      <label>
        <b>
          Name
        </b>
          <br/>
        <input
          type="text"
            name="name"
            placeholder='Ingresa un nombre'
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          />
      </label>
      <span className={styles.error}>{errors.name}</span>
      <br />
      <label>
        <b>
          Difficulty
        </b>
          <br/>
        <input
          type="text"
            name="difficulty"
            placeholder='Ingresa una dificultad'
          value={formData.difficulty}
          onChange={handleChange}
          className={styles.input}
          />
      </label>
      <span className={styles.error}>{errors.difficulty}</span>
      <br />
      <label>
        <b>
          Duration
        </b>
          <br/>
        <input
          type="number"
            name="duration"
            placeholder='Ingresa una duración de la actividad'
          value={formData.duration}
          onChange={handleChange}
          className={styles.input}
          />
      </label>
      <span className={styles.error}>{errors.duration}</span>
      <br />
      <label>
        <b>
        Season
        </b>
        <br/>
        <input
          type="text"
            name="season"
            placeholder='Ingresa una temporada ("Primavera, Verano, Otoño, Invierno")'
          value={formData.season}
          onChange={handleChange}
          className={styles.input}
          />
      </label>
      <span className={styles.error}>{errors.season}</span>
        <br />
        <label>
          <b>
          Countries:
          </b>
           <label>
        <span className={styles["texto-pais"]}>
        {formData.countriesId.map((countryId) => {
          const country = allCountries.find((c) => c.id === countryId.toString());
          return <ul key={countryId}>{country ? country.name : 'Unknown'}</ul>;
        }
      )
    }
        </span>
      </label>
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
      <span className={styles.error}>{errors.countriesId}</span>
      <br />
        <br />
        {errors.name || errors.difficulty  || errors.duration || errors.season ? null:<button type="submit">Submit</button>}
      
    </form>
  </div>
  );
};

export default Formulario;
