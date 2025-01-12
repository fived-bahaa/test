let email = document.querySelector(`.form [name="email"]`);
let password = document.querySelector(`.form [name="password"]`);
let submit = document.querySelector(`.form [type="submit"]`);
let form = document.querySelector(".form")
let test = document.createElement("div")
test.append(document.createTextNode("Email Or Password Not Found"))
test.style = `
position: relative;
min-width: 100%;
background: red;
top: -90px;
font-size: 17px;
color: white;
text-align: center;
padding: 15px 20px;
display: none;
`
email.before(test)
let idArray = []
if (localStorage.getItem("userIdes")) {
  idArray = localStorage.getItem("userIdes")
  if (!Array.isArray(idArray)) {
    idArray = []
  }
}
submit.addEventListener('click', function () {
  let emailReq = /(0([0-9]{10})$)|(([a-z]+-|[a-z]+_|[a-z]+\.)?[a-z]+@[a-z]+\.[a-z]+)$/gi
  let passwordReq = /.{6,32}/g
  if (email.value.match(emailReq) && password.value.match(passwordReq)) {
    for (let i = 0; i < JSON.parse(localStorage.getItem("accounts")).length; i++) {
      if (email.value === JSON.parse(localStorage.getItem("accounts"))[i].email && password.value === JSON.parse(localStorage.getItem("accounts"))[i].password) {
        let check = idArray.some(el => Object.values(el.id).join() == JSON.parse(localStorage.getItem("accounts"))[i].id) 
        if(!check) {
          let userId = JSON.parse(localStorage.getItem("accounts"))[i].id
          idArray.push({id: {user: userId}})
          localStorage.setItem("userIdes", JSON.stringify(idArray))
          setTimeout(() => {
            console.log("Hello")
          }, 5000);
          open("index.html", "_self")
        }
        break
      } else {
        test.style.display = "block"
        setTimeout(() => {
          test.style.display = "none"
        }, 2500);
      }
    }
  } 
})
