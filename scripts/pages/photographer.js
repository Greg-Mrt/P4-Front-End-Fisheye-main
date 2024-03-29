/* eslint-disable no-undef */
/*global mediasFactory, displayLightbox*/

//code JavaScript lié à la page photographer.html
let params = (new URL(document.location)).searchParams;
let idUrl = params.get('id');

//je reécupère les photographes
async function getPhotographers() {
  const response = await fetch('data/photographers.json')
  const fichierjson = await response.json();
  return fichierjson.photographers;
}

//je récupère les medias
async function getMedia() {
  const response = await fetch('data/photographers.json')
  const fichierjson = await response.json();
  return fichierjson.media;
}

async function init() {
  const photographers = await getPhotographers();
  // je récupère le photographe lié à l'id de l'URL
  const profil = photographers.find((photo) =>
    photo.id == idUrl
  );

  // si pas (ou mauvais) id je reviens sur la page index
  if (profil == undefined) {
    window.location.href = "/"
  }
  //je créer les card photographe
  const photographerInfo = document.querySelector(".photographer_profile");
  const photographeHeader = document.createElement("article");
  const picture = `assets/photographers/${profil.portrait}`;
  const img = document.createElement('img');
  img.setAttribute("src", picture);
  img.setAttribute("alt", profil.name);
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

  //j'affiche les médias
  medias.forEach((medias) => {
    const photoCard = mediasFactory(medias, profil.name);
    const MediasCardDOM = photoCard.getMediasDOM();
    const MediasCardLightbox = photoCard.getMediasLightbox();
    document.querySelector(".pictures_medias").appendChild(MediasCardDOM);
    document.querySelector(".lightbox_container").appendChild(MediasCardLightbox);
  });

  //gestion de l'ouverture de la lightbox
  let clickLightbox = document.querySelectorAll(".photos, .videos")
  for (let i = 0; i < clickLightbox.length; i++) {
    clickLightbox[i].addEventListener("click", () => {
      displayLightbox(i)
    })
  }

    let openLightbox = document.querySelectorAll(".photos, .videos");
    for (let i = 0; i < clickLightbox.length; i++) {
      openLightbox[i].addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            displayLightbox(i)
        }
      });
    }
        
  //calcul des likes
  const totalLikes = getTotalLikes();

//j'affiche les élements dans la likebox
  const photographerLikesBox = document.querySelector(".box");
  const photographerLikes = document.createElement("div");
  let infoLikes = `<div class="boxInfos"> 
  <div class=""><span class="totalLikes">${totalLikes}</span> <img src="assets/icons/heart-solid.svg" alt="like" width="18px" height="18px"></div>
  <div class="boxPrice">${profil.price}€ / jour</div></div>`;
  photographerLikesBox.prepend(photographerLikes);
  photographerLikes.innerHTML = infoLikes;

}

init();