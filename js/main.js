let bars_li = document.querySelector(".bars_li");
let header_ul = document.querySelector(".header_ul");

bars_li.addEventListener("click", () => {
  header_ul.classList.toggle("display_flex");
});

var splide = new Splide(".splide", {
  type: "fade",
  rewind: true,
});
splide.mount();
