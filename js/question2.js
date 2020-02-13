const gamesUrl = "https://api.rawg.io/api/games";

function handleResponse(response) {
    return response.json();
}

function createGames(json) {
    const results = json.results;

    console.log(results);

    const container = document.querySelector(".results");
    let html = "";

    results.forEach(function(results) {
        html += `<div class="game">
                    <h2>${results.name}</h2>
                    <img src="${results.background_image}" alt="${results.name}">
                </div>`;
    });

container.innerHTML = html;

}

function handleError(error) {
    console.log(error);
}

fetch(gamesUrl)
    .then(handleResponse)
    .then(createGames)
    .catch(handleError)