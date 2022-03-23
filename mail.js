const firebaseConfig = {
  
    apiKey: "AIzaSyBO-O4xAmNrBZoA5ahNaKZNZCGsbgP9c-w",
    authDomain: "the-mechanic-website-d5d00.firebaseapp.com",
    databaseURL: "https://the-mechanic-website-d5d00-default-rtdb.firebaseio.com",
    projectId: "the-mechanic-website-d5d00",
    storageBucket: "the-mechanic-website-d5d00.appspot.com",
    messagingSenderId: "969072417938",
    appId: "1:969072417938:web:88b3838e3ae329ed1c1a4b"
  };


// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");
  var Location = getElementVal("Location");


  saveMessages(name, emailid, msgContent,Location);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent,Location) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
    Location: Location,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
