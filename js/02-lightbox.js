import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContent = document.querySelector(".gallery");
const itemString = renderGalleryItem(galleryItems);
galleryContent.insertAdjacentHTML("beforeend", itemString);
// Change code below this line
function renderGalleryItem(galleryList) {
  return galleryList
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href=${original}>
      <img class="gallery__image" src= ${preview} alt=${description} />
    </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
