// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
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


const mail = Document.getElementById("mail-register").value
const password = Document.getElementById("password-register").value
const btn_register = Document.getElementById("btn-register")

if (btn_register) {
  btn_register.addEventListener('click', (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(mail, password)
      .then((userCredential) => {
        console.log("Usuario creado:", userCredential.user);
        alert("¡Cuenta creada con éxito!");
      })
      .catch((error) => {
        console.error("Error al registrar:", error.message);
        alert("Error: " + error.message);
      });
  });
}

