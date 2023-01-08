function displayLightbox() {
    const lightbox = document.getElementById("lightbox");
	lightbox.style.display = "block";
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

var index = 1;
showImg(index);

function showImg(n) {
   let getMedias = Array.from(document.getElementsByClassName('pictures'));
}

function nextImg(n) {
showImg(index += n);
}

function prevImg(n) {
showImg(index = n);
}