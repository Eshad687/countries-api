//first check the data. here data is an array. every element of the array is an object.

const loadData = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}

loadData();

const displayCountry = countryArray => {
    const countries = document.getElementById('countries');

    //lets use forEach instead of for of loop to access elements of the array

    countryArray.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');

        div.innerHTML = `
        <h4>${country.name}</h4>
        <p>${country.capital}</p>
        <button onclick="countryDetailsByName('${country.name}')">Details</button>
        `;

        //here we need to pass the parameter dynamically
        //because its HTML not JS. and it was not the passed variable is not declared on the HTML

        countries.appendChild(div);

    });

}


const countryDetailsByName = countryName => {
    //we can fetch the country information using name
    //here the data is an array with only one element
    //the element is an object which contains the information
    //so we can pass that array element only

    const url = `https://restcountries.eu/rest/v2/name/${countryName}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0]));
}


const displayDetails = countryInfo => {
    const countryDetails = document.getElementById('country-details');

    countryDetails.innerHTML = `
    <img width="200px" src="${countryInfo.flag}">
    <h3>Name: ${countryInfo.name}</h3>
    <p>Population: ${countryInfo.population}<p>
    <p>Calling code: ${countryInfo.callingCodes}</p>
    <p>Borders: ${countryInfo.borders}</p>
    `
    //arrays will print same without ...
    //here borders and calling code property value is an array
}