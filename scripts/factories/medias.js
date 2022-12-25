function mediasFactory(data,name) {
    const {image, video, title, likes} = data;

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
            article.appendChild(image);
        }
        else {
            const video = document.createElement('video');
            const source = document.createElement ('source');
            source.setAttribute("src", medias);
            video.className = 'videos';
            video.appendChild(source);
            article.appendChild(video);
        }
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const jaime = document.createElement( 'h2' );
        jaime.textContent = likes;
        article.appendChild(h2);
        article.appendChild(jaime);
        return (article);
    }
    return {getMediasDOM}
}