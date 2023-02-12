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