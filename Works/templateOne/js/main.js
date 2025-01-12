let mainSearch = document.querySelector("header .rigth-icon input")
let searchIcon = document.querySelector("header .rigth-icon .fa-magnifying-glass")
let boxSearch = document.querySelector("header .rigth-icon .box-search")
mainSearch.addEventListener("focus", function () {
  boxSearch.style.height = "800px"
  boxSearch.style.boxShadow = "-1px 1px 6px var(--background-left-icon)"
  document.querySelector(".fa-facebook").className = "fa-solid fa-arrow-right"
  document.querySelector(".fa-arrow-right").style.color = "var(--secondary-icon)"
  document.querySelector(".fa-arrow-right").style.fontSize = "21px"
  document.querySelector(".fa-arrow-right").style.margin = "0 20px"
})
mainSearch.addEventListener("blur", function () {
  boxSearch.style.height = "fit-content"
  boxSearch.style.boxShadow = "none"
  document.querySelector(".fa-arrow-right").style.color = "var(--facebook-icon-background)"
  document.querySelector(".fa-arrow-right").style.fontSize = "33px"
  document.querySelector(".fa-arrow-right").style.margin = "0 14px"
  document.querySelector(".fa-arrow-right").className = "fa-brands fa-facebook"
})
let facebook = document.querySelector(".rigth-icon li:last-of-type")
let home = document.querySelector(".center-icon li:last-of-type")
let freinds = document.querySelector(".center-icon li:nth-of-type(4)")
facebook.onclick = function () {
  open("index.html", "_self")
}
home.onclick = function () {
  open("index.html", "_self")
}
freinds.onclick = function () {
  open("freinds.html", "_self")
}
