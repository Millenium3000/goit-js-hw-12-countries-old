const countryUrl = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchCountries(searchQuery) {
    return fetch(countryUrl + searchQuery)
      .then(data => data.json())
      .catch(error => console.log(error));
  },
};
