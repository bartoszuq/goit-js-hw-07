import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const liArr = [];
let instance = null;
galleryItems.forEach((image) => {
  const a = document.createElement("a");
  const img = document.createElement("img");
  const li = document.createElement("li");

  a.setAttribute("href", image.original);
  img.dataset.source = image.original;
  li.classList.add("gallery__item");
  a.classList.add("gallery__link");
  img.classList.add("gallery__image");
  img.src = image.preview;
  img.alt = image.description;

  instance = basicLightbox.create(`
  <img src=${img.dataset.source}>
  `);
  function instanceShow(event) {
    event.preventDefault();
    instance.show();
  }
  a.addEventListener("click", instanceShow);

  li.append(a);
  a.append(img);
  liArr.push(li);
});
galleryEl.append(...liArr);

document.addEventListener("keyup", (event) => {
  if (event.code === "Escape") {
    instance.close();
  }
});
