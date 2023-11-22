var  sign_in_btn = document.querySelector("#sign-in-btn")
var sign_up_btn = document.querySelector("#sign-up-btn")
var container = document.querySelector(".container")

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode")
})

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode")
})


function sendMail() {
  var params = {
    name: document.getElementById("Fullname").value, 
    email: document.getElementById("email_id").value, 
    message: document.getElementById("message").value,
  };

 
  const serviceID = "service_yuhixo3";
  const templateID = "template_tcrkuws";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("Fullname").value = ""
      document.getElementById("email_id").value = ""
      document.getElementById("message").value = ""
      console.log(res);
      alert("Your message sent successfully!!")
    })
    .catch(err => console.log(err))
}

function openTwitterkLink() {
  window.open('https://twitter.com/')
}
function openFacebookLink() {
  window.open('https://www.facebook.com/khalil.cherni.338/');
}


function openGmailLink(){
  window.open("https://mail.google.com/mail/u/0/?hl=fr#inbox")
}
function openlinkedin(){
  window.open("https://www.linkedin.com/in/khalil-cherni-778464266/")
}

$(document).ready(function(){
  $(".fab.fa-twitter").click(function(){
    window.location.href = 'https://twitter.com/';
  })
  $(".fafab fa-facebook-f").click(function(){
    window.location.href = 'https://www.facebook.com/khalil.cherni.338/';
  })
  $(".fab fa-google").click(function(){
    window.location.href = 'https://mail.google.com/mail/u/0/?hl=fr#inbox';
  })
  $(".fab fa-linkedin-in").click(function(){
    window.location.href = 'https://www.linkedin.com/in/khalil-cherni-778464266/';
  })
  $(".btn").click(function(){
    window.location.href = '';
  })

})
var par = document.getElementById("par")


par.addEventListener("mouseover", function() {
    par.innerHTML = "    Tunis, the capital of Tunisia, is a city that has a lot to offer. It is a city that is rich in history, culture, and gastronomy"
    "The Tunis Medina is a must-visit place in Tunis.";
})

par.addEventListener("mouseout", function() {
    par.innerHTML = "Tunisia is situated on the Mediterranean coast of Northwest Africa, midway between the Atlantic Ocean and the Nile Delta. It is bordered by Algeria on the west (965 km) and southwest and Libya on the south east (459 km)."
})

$(document).ready(function() {
  $("#loginButton").on("click", function() {
    login();
  });
});

function login() {
  var username = $("#fullname").val()
  var password = $("#password").val()

  if (username === '' || password === '') {
    alert('You must fill in your information.')
  } else {
    console.log('Login function called.')
    window.location.href = 'http://127.0.0.1:5500/index.html'
  }
}


