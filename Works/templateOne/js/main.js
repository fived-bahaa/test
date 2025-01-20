let user = localStorage.getItem("currentUserId")
if(user != null) {
  addFromLocalStorageToPage()
  let mainSearch = document.querySelector("header .rigth-icon input")
  let boxSearch = document.querySelector("header .rigth-icon .box-search")
  mainSearch.addEventListener("focus", function () {
    boxSearch.style.height = "800px"
    boxSearch.style.boxShadow = "-1px 1px 6px var(--background-left-icon)"
    document.querySelector(".fa-facebook").className = "fa-solid fa-arrow-right"
    document.querySelector(".fa-arrow-right").style.color = "var(--secondary-icon)"
    document.querySelector(".fa-arrow-right").style.fontSize = "21px"
    document.querySelector(".fa-arrow-right").style.margin = "0 20px"
    boxSearch.style.zIndex = "99"
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
  
  let textBox = document.querySelector(".text-box .content")
  let textInput = document.querySelector(".body .center-body .add-node input")
  let header = document.querySelector("header")
  let bodyContent = document.querySelector(".body")
  let del = document.querySelector(".text-box .head .del")
  let submitTextBox = document.querySelector(".text-box .input-footer button")
  let inputTextBox = document.querySelector(`.text-box .input-content [type="text"]`)
  let imgBox = document.querySelector(".img-box .content")
  textInput.addEventListener('focus', function () {
    textBox.style.display = "block"
    header.style.opacity = "0.5"
    header.style.pointerEvents = "none"
    bodyContent.style.opacity = "0.5"
    bodyContent.style.pointerEvents = "none"
    imgBox.style.display = "none"

  })
  del.addEventListener("click", function () {
    textBox.style.display = "none"
    header.style.opacity = "1"
    header.style.pointerEvents = "auto"
    bodyContent.style.opacity = "1"
    bodyContent.style.pointerEvents = "auto"
  })
  submitTextBox.addEventListener("click", function () {
    if (inputTextBox.value != "" && inputTextBox.value.length >= 4) {
      createTextElement(inputTextBox.value)
      addTextToLocalStorage(inputTextBox.value)
      
    }
  })
  function createTextElement (textUser) {
    let containerElement = document.querySelector(".body .center-body .container")
    function checkUserName() {
      for (let i = 0; i < JSON.parse(localStorage.getItem("accounts")).length; i++) {
        if (JSON.parse(localStorage.getItem("accounts"))[i].id == user) {
          let first = JSON.parse(localStorage.getItem("accounts"))[i].first
          let sur = JSON.parse(localStorage.getItem("accounts"))[i].sur
          let userName = `${first} ${sur}`
          return userName
        }
      }
    }
  
    let container = document.createElement("div")
    let content = document.createElement("div")
    let head = document.createElement("div")
    let iOne = document.createElement("i")
    let imgDiv = document.createElement("div")
    let name = document.querySelector("span")
    let img = document.createElement("img")
    let text = document.createElement("div")
    let likeComment = document.createElement("div")
    let iTwo = document.createElement("i")
    let iThree = document.createElement("i")
    ////////////////////////////////////////////////////
    iThree.className = "fa-regular fa-thumbs-up"
    iTwo.className = "fa-regular fa-comment"
    likeComment.className = "like-comment"
    text.className = "text"
    img.setAttribute("src", "images/all-img/test.jpg")
    name.className = "name"
    imgDiv.className = "img"
    iOne.className = "fa-solid fa-trash"
    // fas fa-ellipsis-h
    head.className = "head"
    content.className = "content"
    container.className = "container"
    /////////////////////////////////////////////////////
    containerElement.append(content)
    content.append(head)
    head.append(iOne)
    head.append(imgDiv)
    imgDiv.append(name)
    name.innerText = checkUserName()
    imgDiv.append(img)
    content.append(text)
    text.innerText = textUser
    content.append(likeComment)
    likeComment.append(iTwo)
    likeComment.append(iThree)
    iOne.addEventListener("click" ,function (e) {
      let element = e.currentTarget.parentElement.parentElement
      element.style.display = "none"
      removeElementFromLocalStorage(text)
    })
  }
  let submitInput = document.querySelector(".text-box .content .input-footer button")
  let inputInput = document.querySelector(".text-box .content .input-content input")
  inputInput.addEventListener("input", function () {
    inputInput.innerHTML = ""
    if (inputInput.value == "" || inputInput.value.length < 4) {
      submitInput.style = `
        color: #bdc1c5;
        background-color: #e2e5e9;
        cursor: not-allowed;
      `
    } else {
      submitInput.style = `
        color: white;
        background-color: var(--facebook-icon-background);
        cursor: pointer;
      `
    }
  })
  function addTextToLocalStorage(textUser) {
    let allUser = JSON.parse(localStorage.getItem("userIdes")) || []
    let userId = localStorage.getItem("currentUserId")
    for (let i = 0; i < allUser.length; i++) {
      if (allUser[i].id == userId) {
        if (!allUser[i].text) {
          allUser[i].text = []
        }
        allUser[i].text.push(textUser)
        localStorage.setItem("userIdes", JSON.stringify(allUser))
        return;
      }
    }
    console.log("إلم يتم العثور على مستخدم")
  }
  function addFromLocalStorageToPage() {
    let allUser = JSON.parse(localStorage.getItem("userIdes")) || []
    let userId = localStorage.getItem("currentUserId")
    for (let i = 0; i < allUser.length; i++) {
      if (allUser[i].id == userId) {
        for (let j = 0; j < allUser[i].text.length; j ++) {
          createTextElement(allUser[i].text[j])
        }
      }
    }
  }
  function removeElementFromLocalStorage(content) {
    let allUser = JSON.parse(localStorage.getItem("userIdes")) || []
    let userId = localStorage.getItem("currentUserId")
    for (let i = 0; i < allUser.length; i ++) {
      if (allUser[i].id == userId) {
        for (let j = 0; j < allUser[i].text.length; j++) {
          if (allUser[i].text[j] == content.textContent) {
            allUser[i].text.splice(j, 1)
            localStorage.setItem("userIdes", JSON.stringify(allUser))
            console.log(allUser[i].text[j])
            return;
          }
        }
      }
    }
  }
} else {
  console.log("Log In Please")
  setTimeout(() => {
    open("/login.html", "_self")
  }, 4000);
}