//Mettre le code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams;
let idUrl = params.get('id');

async function getPhotographers() {
  const response = await fetch('/data/photographers.json')
  const fichierjson  = await response.json();
  return fichierjson.photographers;
}
async function getMedia() {
  const response = await fetch('/data/photographers.json')
  const fichierjson  = await response.json();
  return fichierjson.media;
}

async function init(){
  const photographers = await getPhotographers();
// je récupère le photographe lié à l'id de l'URL
  const profil = photographers.find((photo) => 
    photo.id == idUrl
  );
  console.log(profil);
  // si pas (ou mauvais) id je reviens sur la page index
  if(profil==undefined){
    window.location.href="/"
  }
  const photographerInfo = document.querySelector(".photographer_profile");
  const photographeHeader = document.createElement("article");
  const picture = `assets/photographers/${profil.portrait}`;
  const img = document.createElement('img');
  img.setAttribute("src", picture);
  img.classList.add("profilePicture");
  let info = `<h1 class ="photographer_name">${profil.name}</h1>
            <p class="photographer_location">${profil.city}, ${profil.country}</p>
            <p class="photographer_devise">${profil.tagline}</p>`;
  photographerInfo.prepend(photographeHeader);
  photographeHeader.innerHTML = info;
  photographerInfo.appendChild(img);


  const mediaSource = await getMedia();
  // je récupère les médias liés à l'id de l'URL
  let medias = mediaSource.filter((m) => 
    m.photographerId == idUrl
  )
  
  // je trie les médias par ordre alphabétique
  medias = medias.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  
  console.log(medias);


  //j'affiche les médias
  medias.forEach((medias) => {
    const photoCard = mediasFactory(medias,profil.name);
    const MediasCardDOM = photoCard.getMediasDOM();
    const MediasCardLightbox = photoCard.getMediasLightbox();
    document.querySelector(".pictures").appendChild(MediasCardDOM);
    document.querySelector(".lightbox_container").appendChild(MediasCardLightbox);
  });

  //gestion de l'ouverture de la lightbox
  let clickLightbox = document.querySelectorAll(".photos")
  for(let i = 0; i<clickLightbox.length;i++)
  {
    clickLightbox[i].addEventListener("click", () => {
      displayLightbox(i)
    })
  }

};

init();