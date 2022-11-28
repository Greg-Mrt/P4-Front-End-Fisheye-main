//Mettre le code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams;
let id = params.get('id');


async function getPhotographers() {
const response = await fetch('/data/photographers.json')
const fichierjson  = await response.json();
return fichierjson.photographers;
}

async function init(){
const photographers = await getPhotographers();
const profil = photographers.find(photo => photo.id == id);
console.log(profil);
if(profil==undefined){
    window.location.href="/"
}
}

init();