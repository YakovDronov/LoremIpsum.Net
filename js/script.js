//burger
let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".nav");
let navItems = nav.querySelectorAll(".nav__link");
let body = document.body;
let header = document.querySelector(".header");
let headerHeight = header.offsetHeight;
document
  .querySelector(":root")
  .style.setProperty("--header-height", `${headerHeight}px`);

burger.addEventListener("click", () => {
  body.classList.toggle("stop-scroll");
  burger.classList.toggle("header__burger--active");
  nav.classList.toggle("nav--active");
});

navItems.forEach((el) => {
  el.addEventListener("click", () => {
    body.classList.remove("stop-scroll");
    burger.classList.remove("header__burger--active");
    nav.classList.remove("nav--active");
  });
});

//uploadFileInput
let formFile = document.querySelector(".form__file");
let textFile = document.querySelector(".form__input-text");
formFile.addEventListener("change", (event) => {
  let uploadFileName = event.target.files[0].name;
  textFile.textContent = uploadFileName;
});

//rangeInput
let rangeInput = document.querySelector(".form__range");
let rangeValue = document.querySelector(".form__range-value");

rangeInput.oninput = () => {
  let value = rangeInput.value;
  rangeValue.textContent = value + "%";
};

//formSelect
let btnSelect = document.querySelector(".form__select-custom");
let listSelect = document.querySelector(".form__select-list");
let itemSelect = listSelect.querySelectorAll(".form__select-item");
let inputSelect = document.querySelector(".form__select-input");

btnSelect.addEventListener("click", () => {
  listSelect.classList.toggle("form__select-list--active");
  if (listSelect.contains) {
    btnSelect.classList.toggle("form__select--active");
  }
});

itemSelect.forEach((items) => {
  items.addEventListener("click", (event) => {
    event.stopPropagation();
    btnSelect.innerText = items.innerText;
    btnSelect.focus();
    inputSelect.value = items.dataset.value;
    listSelect.classList.remove("form__select-list--active");
    btnSelect.classList.remove("form__select--active");
  });
});

document.addEventListener("click", (event) => {
  if (event.target !== btnSelect) {
    listSelect.classList.remove("form__select-list--active");
    btnSelect.classList.remove("form__select--active");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab" || event.key === "Escape") {
    listSelect.classList.remove("form__select-list--active");
    btnSelect.classList.remove("form__select--active");
  }
});
