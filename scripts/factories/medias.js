function mediasFactory(data,name) {
    const {image, video, title, likes} = data;

    const coeur = `assets/icons/heart.svg`;

    let medias;
    if (image!=undefined){ 
    medias = `assets/images/${name.split(" ")[0]}/${image}`;
    }
    else {
    medias = `assets/images/${name.split(" ")[0]}/${video}`;
    }

    function getMediasDOM() {
        const article = document.createElement( 'article' );
        if (image!=undefined){ 
            const image = document.createElement( 'img' );
            image.setAttribute("src", medias);
            image.className = 'photos';
            image.addEventListener("click", displayLightbox)
            article.appendChild(image);
        }
        else {
            const video = document.createElement('video');
            const source = document.createElement ('source');
            source.setAttribute("src", medias);
            video.className = 'videos';
            video.addEventListener("click", displayLightbox)
            video.appendChild(source);
            article.appendChild(video);
        }
        const h2 = document.createElement( 'div' );
        h2.textContent = `${title} ${likes}`;
        const img = document.createElement( 'img' );
        img.setAttribute("src", coeur);
        h2.classList.add("media_infos");
        article.appendChild(h2);
        article.appendChild(img);
        return (article);
    }
    return {getMediasDOM}
}
