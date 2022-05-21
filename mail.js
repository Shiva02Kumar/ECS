
//   copy your firebase config informations
const firebaseConfig = {
    apiKey: "AIzaSyCiUXrOklob7r5aoz_aTdqUBmKieM6ivNs",
    authDomain: "ecs-finder.firebaseapp.com",
    databaseURL: "https://ecs-finder-default-rtdb.firebaseio.com",
    projectId: "ecs-finder",
    storageBucket: "ecs-finder.appspot.com",
    messagingSenderId: "662363202168",
    appId: "1:662363202168:web:608448f9f799e5bb6e038d"
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

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};