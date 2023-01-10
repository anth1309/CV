document.addEventListener("DOMContentLoaded", function () {
  document;

  const professionnalTitle = document.getElementById("professionnalTitle");
  const profilTitle = document.getElementById("profilTitle");
  const formationTitle = document.getElementById("formationTitle");

  const returnAcceuil = document.querySelector(".return");

  const container = document.querySelector(".professional_experience");
  const formation = document.querySelector(".formation");
  const containerProfilProfessionnel = document.querySelector(
    ".profilProfessionnel"
  );

  profilTitle.addEventListener("click", (e) => {
    containerProfilProfessionnel.classList.add("visible");
  });

  formationTitle.addEventListener("click", (e) => {
    formation.classList.add("visible");
  });

  professionnalTitle.addEventListener("click", (e) => {
    container.classList.add("visible");
  });

  returnAcceuil.addEventListener("click", (e) => {
    container.classList.remove("visible");
  });
});
