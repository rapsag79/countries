import { useState, useEffect } from 'react';
import axios from 'axios';
import { validateForm } from '../Validate/validateForm';

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: validateForm(name, value)
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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <span>{errors.name}</span>
      <br />
      <label>
        Difficulty:
        <input
          type="text"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        />
      </label>
      <span>{errors.difficulty}</span>
      <br />
      <label>
        Duration:
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </label>
      <span>{errors.duration}</span>
      <br />
      <label>
        Season:
        <input
          type="text"
          name="season"
          value={formData.season}
          onChange={handleChange}
        />
      </label>
      <span>{errors.season}</span>
      <br />
      <label>
        Countries:
        <select
          multiple
          name="countriesId"
          value={formData.countriesId}
          onChange={handleCountryChange}
        >
          {allCountries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </label>
      <span>{errors.countriesId}</span>
      <br />
      <div>
        Selected Countries:
        <ul>
          {formData.countriesId.map((countryId) => {
            const country = allCountries.find((c) => c.id === parseInt(countryId));
            return <li key={countryId}>{country ? country.name : 'Unknown'}</li>;
          })}
        </ul>
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Formulario;
