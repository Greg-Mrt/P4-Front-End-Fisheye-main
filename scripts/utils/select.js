window.onload=()=>{
    const selectElt = document.querySelector("select");
    const selectDiv = document.querySelector(".custom-select");
    const newSelect = document.createElement("div");
    newSelect.classList.add("new-select");
    newSelect.innerHTML =selectElt.options[selectElt.selectedIndex].innerHTML;
    selectDiv.appendChild(newSelect);
}