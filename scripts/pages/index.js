
   async function getPhotographers() {
    const response = await fetch('/data/photographers.json')
    const fichierjson  = await response.json();

   console.log('photos');
        return ({
            photographers: fichierjson.photographers})
    }


    async function displayData(photographers) {
        const photographersHedaer = document.querySelector(".photograph-header");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersHedaer.appendChild(userCardDOM);
        });
    };

    async function init() {
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    