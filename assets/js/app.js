// Animation hover nav

const btnMenu = document.querySelector(".btn-rond-menu");
const ligne = document.querySelector(".cont-ligne");
const main = document.querySelector(".main-container");
const nav = document.querySelector(".container-nav");
const linkMegaProd = document.querySelector(".link-mega-products");
const linkMegaRes = document.querySelector(".link-mega-ressources");
const navProducts = document.querySelector(".container-nav-products");
const navResssources = document.querySelector(".container-nav-ressources");
const megaProd = document.querySelector(".megamenu-products");
const megaRes = document.querySelector(".megamenu-ressources");

btnMenu.addEventListener("click", () => {
  ligne.classList.toggle("active");
  nav.classList.toggle("nav-visible");

  const activeBloc = ligne.classList.contains("active");
 if (!activeBloc) {
    navProducts.classList.remove("menu-products-visible");
    nav.classList.remove("menu-invisible");
    nav.classList.remove("nav-visible");
    megaProd.classList.remove("menu-products-visible");
    navResssources.classList.remove("menu-ressources-visible");
    megaRes.classList.remove("menu-products-visible");
    ligne.classList.remove("active");
    nav.classList.remove("nav-visible");
  }
});

linkMegaProd.addEventListener("mouseover", () => {
  nav.classList.toggle("menu-invisible");
  navProducts.classList.toggle("menu-products-visible");
  megaProd.classList.toggle("menu-products-visible");
});
linkMegaRes.addEventListener("mouseover", () => {
  nav.classList.toggle("menu-invisible");
  navResssources.classList.toggle("menu-ressources-visible");
  megaRes.classList.toggle("menu-products-visible");
});

main.addEventListener("click", () => {
  navProducts.classList.remove("menu-products-visible");
  nav.classList.remove("menu-invisible");
  nav.classList.remove("nav-visible");
  megaProd.classList.remove("menu-products-visible");
  navResssources.classList.remove("menu-ressources-visible");
  megaRes.classList.remove("menu-products-visible");
  ligne.classList.remove("active");
  nav.classList.remove("nav-visible");
});