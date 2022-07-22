import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function onCreateGalleryMarkup(array) {
  return array.map(({ preview, original, description }) =>
    `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `).join('');
  
}

galleryEl.insertAdjacentHTML("beforeend", onCreateGalleryMarkup(galleryItems));

galleryEl.addEventListener("click", onOpenModalOriginalImage);


function onOpenModalOriginalImage(evt) {
  evt.preventDefault();

  // if (!evt.target.classList.contains("gallery__image")) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">`, {
    onShow: (instance) => { window.addEventListener("keydown", onEscapeClick) },
    onClose: (instance) => { window.removeEventListener("keydown", onEscapeClick) }
  });
  instance.show();


  function onEscapeClick(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
};


// function onCreateGalleryMarkup(array) {
//     return array.reduce((acc, item) => 
//         acc + `<div class="gallery__item">
//   <a class="gallery__link" href="${item.original}">
//     <img
//       class="gallery__image"
//       src="${item.preview}"
//       data-source="${item.original}"
//       alt="${item.description}"
//     />
//   </a>
// </div>`, ""
//     )
// }