const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("ccn3");

console.log(id);

//if (id === null) {
  //  location.href = "/";
//}

const url = "https://restcountries.com/v3.1/alpha?codes=" + id;

console.log(url);

async function fetchDetails() {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    const createHtml = details;

    createHtml.forEach(function (detail) {
        detailContainer.innerHTML += `<div class="result"> 
                                      <p> Capital: ${detail.capital[0]} </p>
                                      <p> Area: ${detail.area}</p>
                                      <p> Population: ${detail.population}</p>
                                      </div>`;
    })
}


fetchDetails();