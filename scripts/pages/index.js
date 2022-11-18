fetch('./data/photographers.json').then(response => {
        return response.json();


             }).then(data => {
        // Work with JSON data here
        console.log(data);
        
    }).catch(err => {
        // Do something for an error here
        
        });


   async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = [
            {
                "name": "Ma data test",
                "id": 1,
                "city": "Paris",
                "country": "France",
                "tagline": "Ceci est ma data test",
                "price": 400,
                "portrait": "account.png"
            },
        ]
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers]})
    }


    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    