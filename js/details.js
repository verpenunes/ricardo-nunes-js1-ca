const newTitle = document.querySelector(".title");
const detailContainer = document.querySelector(".details");
const subRegion = document.querySelector(".subregion");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("cca3");

console.log(id);

if (id === null) {
    location.href = "/";
}

const url = "https://restcountries.com/v3.1/alpha?codes=" + id;

console.log(url);

async function fetchDetails() {
    try {
        const response = await fetch(url);
        const details = await response.json();
    
        console.log(details);

        detailContainer.innerHTML = "";

        const createHtml = details;
    
        createHtml.forEach(function (detail) {
           newTitle.innerHTML = `${detail.name.official}`;

           subRegion.innerHTML = `<h1>Subregion: ${detail.subregion}</h1>`;

           detailContainer.innerHTML += `<div class="result"> 
                                         <p> Capital: ${detail.capital[0]} </p>
                                         <p> Area: ${detail.area}</p>
                                         <p> Population: ${detail.population}</p></div>`;
        });
    }
    catch (error) {
        console.log("An error occurred");
        detailContainer.innerHTML = displayError("An error occurred when calling the API");
    }
}

fetchDetails();