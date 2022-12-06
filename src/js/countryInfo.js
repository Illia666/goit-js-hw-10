function markupTitle(flag, name) {
    return `<h2 class="coutry-title">
            <img
              src="${flag}"
              alt="flag"
              width="20px"
              height="20px"
            />${name}</h2>`;
  }
  
  function addDefinition(name, val) {
    return `<div class="row">
          <dt>${name} :</dt>
          <dd>${valueToText(val)}</dd>
        </div>`;
  }
  
  function valueToText(val) {
    switch (typeof val) {
      case 'object':
        return Object.values(val).join(', ');
      case 'array':
        return val.join();
    }
    return val;
  }
  
  function markupDefinitions(rest) {
    const html =
      addDefinition('capital', rest['capital']) +
      addDefinition('population', rest['population']) +
      addDefinition('languages', rest['languages']);
    // for (const key in rest) {
    //   if (key !== 'altSpellings') {
    //     html += addDefinition(key, rest[key]);
    //   }
    // }
    return html;
  }
  
  export const renderCountry = (
    element,
    { flags: { svg: flag }, name: { official: name }, ...rest }
  ) => {
    element.innerHTML = markupTitle(flag, name) + markupDefinitions(rest);
  };