import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const itemString = renderGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", itemString);
// Change code below this line
function renderGalleryItem(galleryList) {
  return galleryList
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
    })
    .join("");
}

gallery.addEventListener("click", clickGalleryCardHandler);

function clickGalleryCardHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src = ${event.target.dataset.source}>`
  );
  instance.show();

  difRev.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
