window.onload = () => {
    const selectElt = document.querySelector("select");
    const selectDiv = document.querySelector(".custom-select");
    const newSelect = document.createElement("div");
    newSelect.classList.add("new-select");    
    newSelect.innerHTML = selectElt.options[selectElt.selectedIndex].innerHTML;
    selectDiv.appendChild(newSelect);

    const newMenu = document.createElement("div");
    newMenu.classList.add("select-items", "select-hide");
    for(let option of selectElt.options){
        const newOption = document.createElement("div");
        newOption.innerHTML = option.innerHTML;
        newOption.addEventListener("click",function(){
            for(let option of selectElt.options){
                if(option.innerHTML === this.innerHTML){
                    selectElt.selectedIndex = option.index;
                    newSelect.innerHTML = this.innerHTML;
                    break;
                }
            }
            newSelect.click();
        })
        newMenu.appendChild(newOption);
    }
    selectDiv.appendChild(newMenu);

    newSelect.addEventListener("click", function(e){
        e.stopPropagation();
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("active");
    })
}


import medias from '../Factory/medias.js';

export default class DropDownMenu {
    // Events, open/close the dropDownMenu
    dropDown(data) {
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(data);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    }

    // SORT MEDIAS (POPULARITY, DATA, TITLE)
    sortMedias(data) {
        let mediaArraySort = [];
        let media = data.media;
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => { // SORT BY POPULARITY  
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btnSort.innerHTML = `Date`;

                mediaArraySort = media.sort((a, b) => { // SORT BY DATE 
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                mediaArraySort = media.sort((a, b) => { // SORT BY TITLE
                    if (a.photoName.toLowerCase() < b.photoName.toLowerCase()) {
                        return -1;
                    } else if (a.photoName.toLowerCase() > b.photoName.toLowerCase()) {
                        return 1;
                    }
                })
            }
            this.displaySortMedia(mediaArraySort);
        }));
    }
}
