//Mettre le code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams;
let id = params.get('id');

console.log(id);

async function getprofile() 
{
    const response = await fetch('/data/photographers.json')
    const fichierjson  = await response.json();
    return ({
        photographers: fichierjson.photographers})
}

function photographerProfile(data) {
    const { name, portrait, city, country, id, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    console.log("");

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const lien = document.createElement('a');
        lien.setAttribute("href","photographer.html?id="+id)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = `${city}, ${country}`;
        const slogan = document.createElement('p');
        slogan.textContent = tagline;
        slogan.classList.add("slogan");
        const prix = document.createElement('p');
        prix.textContent = price+" €/jour";
        prix.classList.add("prix");
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(lien);
        article.appendChild(h3);
        article.appendChild(slogan);
        article.appendChild(prix);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

console.log("");

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerProfile(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

console.log("");

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getprofile();
    displayData(photographers);

    console.log("");

};

init();



