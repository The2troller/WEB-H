// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT1Qln1rOH6JM-qR7R6cdYsiy9pOAFO3s",
  authDomain: "web-h-18ba5.firebaseapp.com",
  projectId: "web-h-18ba5",
  storageBucket: "web-h-18ba5.firebasestorage.app",
  messagingSenderId: "976526273377",
  appId: "1:976526273377:web:360c622046a7e94696f320",
  measurementId: "G-VM6B7XLZNW"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


const create_mail = document.getElementById("mail-register");
const create_password = document.getElementById("password-register");
const btn_register = document.getElementById("btn-register");


if (btn_register){
  btn_register.addEventListener("click", (e) => {
    e.preventDefault();
    const mail = create_mail.value;
    const password = create_password.value;

    createUserWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        console.log("Usuario creado:", userCredential.user);
        alert("¡Cuenta creada con éxito!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error al registrar:", error.message);
        alert("Error: " + error.message);
      });
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {

    console.log("Sesión activa:", user.email);

    if (window.location.pathname.includes("login.html") || window.location.pathname.includes("create-account.html")) {
      window.location.href = "profile.html";
      const email_displayed = document.getElementById("display-mail");
      email_displayed.textContent = user.email;
    }
    if (window.location.pathname.includes("profile.html")) {
      const email_displayed = document.getElementById("display-email");
      if (email_displayed) {
        email_displayed.textContent = user.email;
      }
    }

  } else {

    console.log("No hay sesión activa.");

    if (window.location.pathname.includes("profile.html")) {
      window.location.href = "login.html";
    }
  }
});


const btn_logout = document.getElementById("btn-logout");
if (btn_logout) {
  btn_logout.addEventListener('click', () => {
    signOut(auth)
    .then(() => {
      console.log("Sesión cerrada");
    })
    .catch((error) => {
      console.error("Error al cerrar sesión:", error);
    });
  });
}