const mail = Document.getElementById("mail-register").value
const password = Document.getElementById("password-register").value
const btn_register = Document.getElementById("btn-register")

if (btnRegistrar) {
  btnRegistrar.addEventListener('click', (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
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

