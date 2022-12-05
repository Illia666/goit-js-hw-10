// const URL_COUNTRIES = 'https://restcountries.com/v3.1/name/';
const URL_COUNTRIES = 'https://restcountries.com/v3.1/name/';
const fieldsArr = ['name', 'capital', 'languages', 'population', 'flags'];
const fieldsPrams = new URLSearchParams({
  fields: fieldsArr.join(','),
});
const fields = '?' + fieldsPrams.toString();

export const fetchCountries = name => {
  return fetch(URL_COUNTRIES + name + fields).then(response => {
    if (!response.ok) {
      throw new Error("Can't get data from server!");
    }

    return response.json();
  });
};