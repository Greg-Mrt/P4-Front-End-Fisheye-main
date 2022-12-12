function mediasFactory(data) {
    const {image, title, likes} = data;

    const photos = `assets/images/${image}`;

    console.log('card');

    function getMediasDOM() {
        const article = document.createElement( 'article' );
        const image = document.createElement( 'img' );
        image.setAttribute("src", photos)
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const jaime = document.createElement( 'h2' );
        h2.textContent = likes;
        article.appendChild(image);
        article.appendChild(h2);
        article.appendChild(jaime);
        return (article);
    }
    return {getMediasDOM}

}
    console.log('retour');

