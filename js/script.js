const resultsCountries = document.querySelector(".results");
const resultsContinent = document.querySelector(".continent");

const url = `https://restcountries.com/v3.1/region/europe`;

async function fetchRegion() {
    const response = await fetch(url);
    const newRegion = await response.json();

    //console.log(newRegion);

    resultsContinent.innerHTML = `<h1>Continent: ${newRegion[0].region}</h1>`;
}

fetchRegion();

async function fetchData() {
    try {
        const response = await fetch(url);
        const json = await response.json();
    
        //console.log(json);
    
        const countries = json;
    
        resultsCountries.innerHTML = "";
        
        for (let i = 0; i < countries.length; i++) {
            //console.log(countries[i].cca3);

            if(i === 16) {
                break;
            }

            resultsCountries.innerHTML += `<a href="details.html?cca3=${countries[i].cca3}" class="result">
                                        <div class="name"> ${countries[i].name.common} </div>
                                        <div class="flag"><h1> ${countries[i].flag} </h1></div>
                                        <div class=subregion> ${countries[i].name.official}</div>
                                        </a>`;
        }
    }
    catch(error) {
        console.log(error);
        resultsCountries.innerHTML = displayError("An error occurred when calling the API");
    }
}
    
fetchData();
