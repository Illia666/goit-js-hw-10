import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import { fetchCountries } from './fetchCountries';
import { renderCountry } from './countryInfo';
import { renderCountryList } from './countriesList';

const DEBOUNCE_DELAY = 300;

const refs = {
  inputName: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countriesInfo: document.querySelector('.country-info'),
};

refs.inputName.addEventListener(
  'input',
  debounce(function (e) {
    console.log(e.target.value);
    if (e.target.value.trim() === '') {
      return;
    }
    getCountries(e.target.value.trim());
  }, DEBOUNCE_DELAY)
);

clear();

function getCountries(name) {
  fetchCountries(name.trim())
    .then(data => {
      clear();
      if (data.length > 10) {
        onToManyCountries();
      }
      if (data.length > 1 && data.length <= 10) {
        renderCountryList(refs.countriesList, data);
      }
      if (data.length === 1) {
        renderCountry(refs.countriesInfo, data[0]);
      }
    })
    .catch(e => {
      clear();
      onNoCountries();
    });
}

function onNoCountries() {
  Notify.failure('Oops, there is no country with that name');
}

function onToManyCountries() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function clear() {
  refs.countriesList.innerHTML = '';
  refs.countriesInfo.innerHTML = '';
}