import { getPhoto } from "./getPhotoApi";

let page = 1;
const listEl = document.querySelector(".list");
const buttonEL = document.querySelector(".button");

export const makeMarkup = (data) => {
  data.hits.forEach((element) => {
    const li = document.createElement("li");
    const img = document.createElement("img");

    li.classList.add("item");
    img.classList.add("image");

    img.src = element.webformatURL;

    listEl.append(li);
    li.append(img);
  });
};

buttonEL.addEventListener("click", (e) => {
  page += 1;
  getPhoto(page);
});

