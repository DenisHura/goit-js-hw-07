import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const listEl = document.querySelector(".gallery");

function onCreateGalleryMarkup(array) {
    return array.reduce((acc, { original, preview, description }) =>
        acc + `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`, " "
    );
}

listEl.insertAdjacentHTML("beforeend", onCreateGalleryMarkup(galleryItems));


new SimpleLightbox((".gallery a"), {
    captionsData: "alt",
    captionDelay: 250

});