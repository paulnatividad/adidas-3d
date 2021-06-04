//Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving animation event
container.addEventListener("mousemove", (e) => {
  console.log(e.pageX, e.pageY);
  let ax = (window.innerWidth / 2 - e.pageX) / 25;
  let ay = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg)`;
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";

  //Pop out
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(150px) rotateZ(-40deg)";
  purchase.style.transform = "translateZ(125px)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(125px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.3s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Pop back
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  purchase.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
