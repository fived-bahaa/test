let openFileImg = document.querySelector(".img-box .input-img .img-content")
openFileImg.addEventListener("click", function () {
  let input = document.querySelector(".img-box .input-img input")
  input.click()
})

let imgBoxContent = document.querySelector(".img-box .content")
let imgIconBody = document.querySelector(`.center-body .add-node .img`)
let imgTextBox = document.querySelector(`.text-box .input-add .img`)
let del = document.querySelector(".img-box .head i")
function test () {
  
}

imgIconBody.addEventListener("click", function () {
  imgBoxContent.style = `
  display: block;`
  document.querySelector("header").style = `
    opacity: 0.5;
    pointer-events: none;`
  document.querySelector(".body").style = `
    opacity: 0.5;
    pointer-events: none;`
  del.addEventListener('click', function () {
    imgBoxContent.style = `
    display: none;`
    document.querySelector("header").style = `
    opacity: 1;
    pointer-events: all;`
  document.querySelector(".body").style = `
    opacity: 1;
    pointer-events: all;`
  })
})
imgTextBox.addEventListener("click", function () {
  imgBoxContent.style = `
  display: block;`
  let textBox = document.querySelector('.text-box .content')
  textBox.style = `
  display: none;
  `;
  document.querySelector("header").style = `
  opacity: 0.5;
  pointer-events: none;`
  document.querySelector(".body").style = `
    opacity: 0.5;
    pointer-events: none;`
  del.addEventListener('click', function () {
    imgBoxContent.style = `
    display: none;`
    document.querySelector("header").style = `
    opacity: 1;
    pointer-events: all;`
  document.querySelector(".body").style = `
    opacity: 1;
    pointer-events: all;`
  })
})
console.log(imgBoxContent)