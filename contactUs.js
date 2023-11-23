function openFacebookLink() {
    window.open('https://www.facebook.com/khalil.cherni.338/');
}

function openTwitterkLink() {
    window.open('https://twitter.com/');
}
function openGmailLink(){
    window.open("https://mail.google.com/mail/u/0/?hl=fr#inbox")
}
function openInstagramLink(){
    window.open("https://www.instagram.com/khalil_cherni/")
}
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
      document.getElementById("Fullname").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch(err => console.log(err));
}