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
  // alert("hello")
  var params = {
      from_name: document.getElementById("fullname").value,
      email_id: document.getElementById("email_id").value,
      message:"hello hello"
      
  };

  emailjs.send("service_yuhixo3","template_tcrkuws",params).then(res =>{
      alert("Success! " + res.status)}
  );
}

function openTwitterkLink() {
  window.open('https://twitter.com/');
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