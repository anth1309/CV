document.addEventListener("DOMContentLoaded", function () {
  document;

  const professionnalTitle = document.querySelector("#professionnalTitle");
  const returnAcceuil = document.querySelector(".return");
  const container = document.querySelector(".professional_experience");

  returnAcceuil.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("visible");
  });

  professionnalTitle.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("visible");
  });
});
