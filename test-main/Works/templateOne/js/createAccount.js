let firstName = document.querySelector(`[name="first-name"]`)
let surname = document.querySelector(`[name="surname"]`)
let dateDay = document.querySelector(`select[name="day"]`)
let dateMounth = document.querySelector(`select[name="mounth"]`)
let dateYear = document.querySelector(`select[name="year"]`)
let genFemale = document.getElementById("sex+1")
let genMale = document.getElementById("sex+0")
let genCustom = document.getElementById("sex-1")
let email = document.querySelector(`[name="email"]`)
let password = document.querySelector(`[name="password"]`)
let submit = document.querySelector(`.all-data .info button`)
let error = document.querySelector(".error")
let myArray = []
if (localStorage.getItem("accounts")) {
  myArray = JSON.parse(localStorage.getItem("accounts"))
  if (!Array.isArray(myArray)) {
    myArray = [];
  }
}
submit.addEventListener('click', function () {
  
  let nameReq = /[a-zA-Z]{4,16}/g
  let emailReq = /(0([0-9]{10})$)|(([a-z]+-|[a-z]+_|[a-z]+\.)?[a-z]+@[a-z]+\.[a-z]+)$/g
  let passwordReq = /.{6,32}/g

  if (firstName.value.match(nameReq) && surname.value.match(nameReq)) {
    if (dateYear.value < 2015) {
      if (email.value.match(emailReq)) {
        if (password.value.match(passwordReq)) {

          let gender = ""
          let data = {
            id: Date.now(),
            first: firstName.value,
            sur: surname.value,
            dateDay: dateDay.value,
            dateMounth: dateMounth.value,
            dateYear: dateYear.value,
            gender: gender,
            email: email.value,
            password: password.value
          }

          let radio = document.querySelectorAll(`input[type="radio"]`)
          for (let i = 0; i < radio.length; i++) {
            if (radio[i].checked) {
              data.gender = radio.item(i).value
              if (data.gender == "1") {
                data.gender = "female"
              } else if (data.gender == "0") {
                data.gender = "male"
              } else if (data.gender == "-1") {
                data.gender = "custom"
              }
            }
          }
          let check = myArray.some(el => el.email === data.email &&  el.password === data.password)
          if (!check) {
            myArray.push(data)
            localStorage.setItem("accounts", JSON.stringify(myArray))
            funError("Account created successfully");
            error.style.backgroundColor = "green"
          } else {
            funError("Email and password already exist");
          }
          
        } else {
          funError("min 6 char max 32")
        }
      } else {
        funError("Email Example: e@e.e")
      }
    } else {
      funError("Your Age Not 18")
    }
  } else {
    funError("Name a-z 4 > 16")
  }
})
function funError (er) {
  error.innerHTML = ""
  error.style.backgroundColor = "red"
    error.append(document.createTextNode(er))
    error.style.display = "block"
    setTimeout(() => {
      error.style.display = "none"
    }, 3200);
}

// window.localStorage.clear()
// /(0[0-9]{10}$)|(\w+(-(_)?\w+)?@\w+\.\w+)/gi