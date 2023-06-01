const resultsAirport = document.querySelector(".results");

//const apiKey = "b7010aaa887b68604939927ca5cc4968";

const url = `https://restcountries.com/v3.1/region/europe`;

async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    const airports = json;

    resultsAirport.innerHTML = "";

    airports.forEach(function (results) {
        resultsAirport.innerHTML += `<a href="details.html?ccn3=${results.ccn3}" class="result"><div class="name"> ${results.name.common} </div>
                                    <div class="flag"><h1> ${results.flag} </h1></div>
                                    <div class=subregion> ${results.subregion}</div>
                                    </a>`;

    });

}
    
fetchData();