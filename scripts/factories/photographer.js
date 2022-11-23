function photographerFactory(data) {
    const { name, portrait, city, country, id, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    console.log('card');

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const lien = document.createElement('a');
        lien.setAttribute("href","photographer.html?id="+id)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement('h3');
        h3.textContent = `${city}, ${country}`;
        const p = document.createElement('p');
        p.textContent = tagline;
        
        lien.appendChild(img);
        lien.appendChild(h2);
        article.appendChild(lien);
        article.appendChild(h3);
        article.appendChild(p);
        return (article);
    }
    return { name, picture, getUserCardDOM }

}
    console.log('retour');

