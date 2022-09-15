import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMurkup = galleryCreateMurkup(galleryItems);

function galleryCreateMurkup(arr) {
  return arr
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryRef.insertAdjacentHTML("beforeend", galleryMurkup);

galleryRef.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();
  const imgData = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgData}">`);

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  instance.show();

  document.addEventListener(
    "keydown",
    (evt) => {
      if (evt.code !== "Escape") {
        return;
      }
      instance.close();
    },
    { once: true }
  );
}
