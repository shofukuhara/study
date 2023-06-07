document.querySelector(".btn").addEventListener("click", () => {
  const img = document.querySelector(".img1");
  gsap.from(img, {
    autoAlpha: 0,
    duration: 2,
    rotation: 45,
    scale: 0.5,
    x: 100,
    y: -100,
  });
});
