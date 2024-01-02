// console.log('contries');
const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => displayCountry(data) )
}
const displayCountry = (countries)=>{

    const countriesContainer = document.getElementById('all-countries')
    // for(const country of countries){
//     // }
    countries.forEach(country => {
        // console.log(country.cca2);
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h3>Name:${country.name.common}</h3>
        <p>Capital:${country.capital?country.capital[0]:"No-Capital"}</p>
        <button onclick="loadCountryDetails('${country.cca2}')" >Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    });
}

const loadCountryDetails = (code)=>{

    // console.log('details comming soon',code);
const url = `https://restcountries.com/v3.1/alpha/${code}`
fetch(url)
.then(res=>res.json())
.then(data=>showCountryDetail(data[0]))

}
const showCountryDetail = country=>{

    const detailContainer = document.getElementById('country-detail')
    detailContainer.innerHTML = `
    <h2>Country Details</h2>
    <h3>Name:${country.name.common}</h3>
    <p>Capital:${country.capital}</p>
    <img src="${country.flags.png}" alt=""></img>`
    console.log(country);

}

loadCountries()