function markupCountry({ flags: { svg: flag }, name: { official: name } }) {
    return `<li class="country">
            <img
              class="flag"
              src="${flag}"
              alt="${name}"
              height="16px"
            />
            <span class="country-name">${name}</span>
          </li>`;
    return '';
  }
  
  export const renderCountryList = (element, countries) => {
    element.innerHTML = countries.map(item => markupCountry(item)).join('');
  };