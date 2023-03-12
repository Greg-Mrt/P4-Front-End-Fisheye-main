/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//Mise en place de l'élément select
window.onload = () => {
    const select = document.querySelector("select");

select.addEventListener("change", (event) => {
  const value = event.target.value;
  switch (value) {
    case "likes":
      likeSort();
      break;
    case "date":
      dateSort();
      break;
    case "titre":
      titleSort();
      break;
    default:
      break;
  }
});
    let compteur = 0;
    //initialisation de la lightbox
    const lightbox = document.querySelector(".lightbox")
    slides = Array.from(document.querySelector(".lightbox_container").children)

    slideWidth = document.querySelector(".lightbox_container").getBoundingClientRect().width

    let next = document.querySelector(".arrow_right")
    let prev = document.querySelector(".arrow_left")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    let decal = -slideWidth * compteur

    let photos = document.querySelectorAll(".media_lightbox")

    photos.forEach(element => {
        element.style.transform = `translateX(${decal}px)`;
    });

    //function de tri par popularité
    const like = document.querySelector("#likes")
    async function likeSort() {
        const photographers = await getPhotographers();
        const profil = photographers.find((photo) =>
            photo.id == idUrl
        );
        const mediaSource = await getMedia();
        let medias = mediaSource.filter((m) =>
            m.photographerId == idUrl
        )
        medias = medias.sort(function (a, b) {
            if (a.likes < b.likes) {
                return 1;
            }
            if (a.likes > b.likes) {
                return -1;
            }
            return 0;
        });
        document.querySelector(".pictures_medias").innerHTML = "";
        document.querySelector(".lightbox_container").innerHTML = "";
        medias.forEach((medias) => {
            const photoCard = mediasFactory(medias, profil.name);
            const MediasCardDOM = photoCard.getMediasDOM();
            const MediasCardLightbox = photoCard.getMediasLightbox();
            document.querySelector(".pictures_medias").appendChild(MediasCardDOM);
            document.querySelector(".lightbox_container").appendChild(MediasCardLightbox);
        });
        //reinitialisation de la lightbox avec le nouveau tri
        let clickLightbox = document.querySelectorAll(".photos, .videos")
        for (let i = 0; i < clickLightbox.length; i++) {
            clickLightbox[i].addEventListener("click", () => {
                displayLightbox(i)
            })
        }

        const lightbox = document.querySelector(".lightbox")
        slides = Array.from(document.querySelector(".lightbox_container").children)

        slideWidth = document.querySelector(".lightbox_container").getBoundingClientRect().width

        let next = document.querySelector(".arrow_right")
        let prev = document.querySelector(".arrow_left")

        next.addEventListener("click", slideNext)
        prev.addEventListener("click", slidePrev)

        let decal = -slideWidth * compteur

        let photos = document.querySelectorAll(".media_lightbox")

        photos.forEach(element => {
            element.style.transform = `translateX(${decal}px)`;
        });

        let openLightbox = document.querySelectorAll(".photos, .videos");
        for (let i = 0; i < clickLightbox.length; i++) {
          openLightbox[i].addEventListener('keydown', function(event) {
            if (event.keyCode === 13) {
                displayLightbox(i)
            }
          });
        }
    }
    like.addEventListener("click", likeSort)

    //function de tri par titre
    const titles = document.querySelector("#titre")
    async function titleSort() {
        const photographers = await getPhotographers();
        const profil = photographers.find((photo) =>
            photo.id == idUrl
        );
        const mediaSource = await getMedia();
        let medias = mediaSource.filter((m) =>
            m.photographerId == idUrl
        )
        medias = medias.sort(function (a, b) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        document.querySelector(".pictures_medias").innerHTML = "";
        document.querySelector(".lightbox_container").innerHTML = "";
        medias.forEach((medias) => {
            const photoCard = mediasFactory(medias, profil.name);
            const MediasCardDOM = photoCard.getMediasDOM();
            const MediasCardLightbox = photoCard.getMediasLightbox();
            document.querySelector(".pictures_medias").appendChild(MediasCardDOM);
            document.querySelector(".lightbox_container").appendChild(MediasCardLightbox);
        });
        //reinitialisation de la lightbox avec le nouveau tri
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
        const lightbox = document.querySelector(".lightbox")
        slides = Array.from(document.querySelector(".lightbox_container").children)

        slideWidth = document.querySelector(".lightbox_container").getBoundingClientRect().width

        let next = document.querySelector(".arrow_right")
        let prev = document.querySelector(".arrow_left")

        next.addEventListener("click", slideNext)
        prev.addEventListener("click", slidePrev)

        let decal = -slideWidth * compteur

        let photos = document.querySelectorAll(".media_lightbox")

        photos.forEach(element => {
            element.style.transform = `translateX(${decal}px)`;
        });
    }
    titles.addEventListener("click", titleSort)

    //function de tri par date
    const mediaDate = document.querySelector("#date");
    async function dateSort() {
        const photographers = await getPhotographers();
        const profil = photographers.find((photo) =>
            photo.id == idUrl
        );
        const mediaSource = await getMedia();
        let medias = mediaSource.filter((m) =>
            m.photographerId == idUrl
        );
        medias = medias.sort(function (a, b) {
            if (a.date < b.date) {
                return 1;
            }
            if (a.date > b.date) {
                return -1;
            }
            return 0;
        });
        document.querySelector(".pictures_medias").innerHTML = "";
        document.querySelector(".lightbox_container").innerHTML = "";
        medias.forEach((medias) => {
            const photoCard = mediasFactory(medias, profil.name);
            const MediasCardDOM = photoCard.getMediasDOM();
            const MediasCardLightbox = photoCard.getMediasLightbox();
            document.querySelector(".pictures_medias").appendChild(MediasCardDOM);
            document.querySelector(".lightbox_container").appendChild(MediasCardLightbox);
        });
        //reinitialisation de la lightbox avec le nouveau tri
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
        const lightbox = document.querySelector(".lightbox")
        slides = Array.from(document.querySelector(".lightbox_container").children)

        slideWidth = document.querySelector(".lightbox_container").getBoundingClientRect().width

        let next = document.querySelector(".arrow_right")
        let prev = document.querySelector(".arrow_left")

        next.addEventListener("click", slideNext)
        prev.addEventListener("click", slidePrev)

        let decal = -slideWidth * compteur

        let photos = document.querySelectorAll(".media_lightbox")

        photos.forEach(element => {
            element.style.transform = `translateX(${decal}px)`;
        });
        
    }
    mediaDate.addEventListener("click", dateSort);
}