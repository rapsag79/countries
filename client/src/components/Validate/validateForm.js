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
  const validDurations = ["15 min", "30 min", "1 hr", "1.15 hrs", "1.30 hrs", "2 hrs"];
  if (!validDurations.includes(value)) {
    return "La duración debe ser una de las opciones proporcionadas";
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
