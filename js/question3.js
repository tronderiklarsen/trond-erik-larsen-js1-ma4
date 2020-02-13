const gamesUrl = "https://api.rawg.io/api/games/4200";



function handleResponse(response){
    return response.json();
}

function createGameDetails(json) {
    console.dir(json);

    const image = document.querySelector(".image");
    const heading = document.querySelector("h1");
    const description = document.querySelector(".description");
    const newBackground = json.background_image;

    image.style = `background-image: url('${newBackground}')`;
    heading.innerHTML = json.name;
    description.innerHTML = json.description;
}

function handleErrors(errors) {
    console.log(errors);
}

fetch(gamesUrl)
    .then(handleResponse)
    .then(createGameDetails)
    .catch(handleErrors)