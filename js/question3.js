const gamesUrl = "https://api.rawg.io/api/games/4200";


function handleRespons(response){
    return response.json();
}

function createGameDetails(json) {
    console.dir(json);
}

function handleErrors(errors) {
    console.log(errors);
}

fetch(gamesUrl)
    .then(handleResponse)
    .then(createGameDetails)
    .catch(handleErrors)