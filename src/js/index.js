//promise
const img01 = document.querySelector(".img01");
const img02 = document.querySelector(".img02");
const active = new Promise((resolve) => setTimeout(resolve, 1000));
active
  .then(() => {
    img02.classList.add("active");
    return new Promise((resolve) => setTimeout(resolve, 2000));
  })
  .then(() => {
    img01.classList.add("active");
  });
