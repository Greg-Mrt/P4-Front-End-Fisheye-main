function mediasFactory(data) {
    const {image, title, likes} = data;

    const picture = `assets/photographers/${image}`;

    console.log('card');

    function getMediasDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = title;
        const likes = document.createElement( 'h2' );
        h2.textContent = likes;
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(lien);
        article.appendChild(h3);
        article.appendChild(slogan);
        article.appendChild(prix);
        return (article);
    }
    return { title, picture, likes, getMediasDOM }

}
    console.log('retour');

