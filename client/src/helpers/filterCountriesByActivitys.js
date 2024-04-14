export default function filterCountriesByActivity(array, activityName) {
  return array.filter(country => {
    return country.Activities && country.Activities.some(activity => activity.name.toLowerCase() === activityName.toLowerCase());
  });
}
