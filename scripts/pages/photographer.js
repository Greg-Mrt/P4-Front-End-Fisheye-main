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
const photographerInfo = document.querySelector(".photographer_section");
  const photographeHeader = document.createElement("article");
  const picture = `assets/photographers/${portrait}`;
  const img = document.createElement('img');
  img.setAttribute("src", picture);
  let info = `<h1 class ="photographer_name">${id[0].name}</h1>
            <p class="photographer_location>${id[0].city} , ${id[0].country}</p>
            <p class="photographer_devise>${id[0].tagline}</p>
          <div class="profilePicture"> <img src="assets/photographers/${id[0].portrait}"></div>
            `;
  photographerInfo.appendChild(photographeHeader);
  photographeHeader.innerHTML = info;

if(profil==undefined){
    window.location.href="/"
}
}

init();