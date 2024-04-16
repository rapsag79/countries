export const validateForm = (name, value) => {
  let errorMessage = "";

  switch (name) {
    case "name":
      errorMessage = validateName(value);
      break;
    case "difficulty":
      errorMessage = validateDifficulty(value);
      break;
    case "duration":
      errorMessage = validateDuration(value);
      break;
    case "season":
      errorMessage = validateSeason(value);
      break;
    case "countries":
      errorMessage = validateCountries(value);
      break;
    default:
      break;
  }

  return errorMessage;
};

export const validateName = (value) => {
  if (!value.trim()) {
    return "El nombre es obligatorio";
  } else if (value.length < 3 || value.length > 32) {
    return "El nombre debe tener entre 3 y 32 caracteres";
  } else if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s']+$/.test(value)) {
    return "El nombre no debe contener caracteres especiales";
  }
  return "";
};

export const validateDifficulty = (value) => {
  if (!["Facil", "Medio", "Dificil"].includes(value)) {
    return "La dificultad debe ser 'Facil', 'Medio' o 'Dificil'";
  }
  return "";
};

export const validateDuration = (value) => {
  const durationValue = parseInt(value);
  if (isNaN(durationValue) || durationValue <= 1 || durationValue >= 1440) {
    return "La duración debe ser mayor a 1 hora y menor a 1440 minutos (24 horas)";
  }
  return "";
};

export const validateSeason = (value) => {
  if (!["Primavera", "Verano", "Otoño", "Invierno"].includes(value)) {
    return "La temporada debe ser 'Primavera', 'Verano', 'Otoño' o 'Invierno'";
  }
  return "";
};

export const validateCountries = (value) => {
  if (!Array.isArray(value) || value.length === 0 || value.some(country => country.trim() === '')) {
    return "Debes seleccionar/agregar al menos un país";
  }
  return "";
};
