const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  const active = document.querySelector("li .active");
  active.classList.remove("active");
  e.target.parentNode.classList.add("active");
});
