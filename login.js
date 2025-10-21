// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
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


const login_mail = document.getElementById("mail-login");
const login_password = document.getElementById("password-login");
const btn_login = document.getElementById("btn-login");


btn_login.addEventListener("click", (e) => {
  e.preventDefault();
  const mail = login_mail.value;
  const password = login_password.value;

  signInWithEmailAndPassword(auth, mail, password)
    .then((userCredential) => {
      console.log("Ingreso exitoso:", userCredential.user);
      alert("¡Ingreso a la cuenta exitoso!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error al ingresar:", error.message);
      alert("Error: " + error.message);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {

    console.log("Sesión activa:", user.email);

    if (window.location.pathname.includes("login.html") || window.location.pathname.includes("create-account.html")) {
      window.location.href = "profile.html";
    }

  } else {

    console.log("No hay sesión activa.");

    if (window.location.pathname.includes("profile.html")) {
      window.location.href = "login.html";
    }
  }
});