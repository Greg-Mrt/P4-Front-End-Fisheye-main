/* eslint-disable no-unused-vars */
//on récupère les medias et les données associées
function mediasFactory(data, name) {
    const { image, video, title, likes } = data;

    const coeur = `assets/icons/heart.svg`;

    let medias;
    if (image != undefined) {
        medias = `assets/images/${name.split(" ")[0]}/${image}`;
    }
    else {
        medias = `assets/images/${name.split(" ")[0]}/${video}`;
    }
    //on affiche les medias avec les données associés
    function getMediasDOM() {
        const article = document.createElement('article');
        if (image != undefined) {
            const image = document.createElement('img');
            image.setAttribute("src", medias);
            image.setAttribute("alt", title);
            image.setAttribute("tabIndex","0");
            image.className = 'photos';
            article.appendChild(image);
        }
        else {
            const video = document.createElement('video');
            const source = document.createElement('source');
            source.setAttribute("src", medias);
            video.className = 'videos';
            video.setAttribute("tabIndex","0");
            video.appendChild(source);
            article.appendChild(video);
        }
        const legende = document.createElement('div');
        const titre = document.createElement('span');
        titre.classList.add('title');
        titre.textContent = title;
        const nbLikes = document.createElement('span');
        nbLikes.classList.add('likes');
        nbLikes.textContent = likes;
        const img = document.createElement('img');
        img.setAttribute("src", coeur);
        img.setAttribute("alt", "Cliquez pour liker");
        img.className = 'coeur';
        img.setAttribute("tabIndex","0");
        img.setAttribute("data-liked", "false");
        img.addEventListener("click", addLike);
        img.addEventListener("click", function() {
            toggleLike(img);
        });
        img.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                addLike();
                toggleLike(img);
            }
        });
        // img.addEventListener("click", photoLike);
        legende.classList.add("media_infos");
        legende.appendChild(titre);
        legende.appendChild(nbLikes);
        legende.appendChild(img);
        article.appendChild(legende);
        return (article);
    }

    //on met en place la lightbox avec les medias
    function getMediasLightbox() {
        const media = document.createElement('div');
        media.className = 'media_lightbox';
        if (image != undefined) {
            const image = document.createElement('img');
            image.setAttribute("src", medias);
            image.setAttribute("alt", title);
            image.className = 'photos_lightbox';
            media.appendChild(image);
        }
        else {
            const video = document.createElement('video');
            const source = document.createElement('source');
            source.setAttribute("src", medias);
            video.className = 'photos_lightbox';
            video.appendChild(source);
            media.appendChild(video);
        }
        const h2 = document.createElement('div');
        h2.textContent = `${title}`;
        h2.classList.add("media_infos_lightbox");
        media.appendChild(h2);
        return (media);
    }

    return { getMediasDOM, getMediasLightbox, }
}
//fonction pour ajouter les likes au total 
function getTotalLikes() {
    const likeElements = document.querySelectorAll(".likes");
    let totalLikes = 0;
    likeElements.forEach((element) => {
        totalLikes += parseInt(element.textContent);
    });
    return totalLikes;
}

function addLike() {
    let like = document.querySelector(".totalLikes").textContent;
    like = parseInt(like) + 1;
    document.querySelector(".totalLikes").textContent = like;
}

function dislike() {
    let like = document.querySelector(".totalLikes").textContent;
    like = parseInt(like) - 1;
    document.querySelector(".totalLikes").textContent = like;
}

function toggleLike(img) {
    const isLiked = img.dataset.liked === 'true';
    const nbLikes = img.parentElement.querySelector('.likes');

    if (isLiked) {
        img.setAttribute('src', 'assets/icons/heart.svg');
        dislike();
        nbLikes.textContent = parseInt(nbLikes.textContent) - 1;
        img.dataset.liked = 'false';
    } else {
        img.setAttribute('src', 'assets/icons/heart.svg');
        addLike();
        nbLikes.textContent = parseInt(nbLikes.textContent) + 1;
        img.dataset.liked = 'true';
    }

    const totalLikes = getTotalLikes();
    document.querySelector(".totalLikes").textContent = totalLikes;
}