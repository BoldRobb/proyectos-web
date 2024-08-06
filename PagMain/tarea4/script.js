function enviarForm(){
  if (verificarCampos()){
    var nombre = document.getElementById("inputNombre").value;
    var edad = document.getElementById("inputEdad").value;
    var email = document.getElementById("inputEmail").value;
    var usuario = document.getElementById("inputUser").value;
    var password = document.getElementById("inputPassword").value;
    var passwordEncriptada = encriptarContraseña(password);


    var mensaje = "Nombre: " + nombre + "\n";
    mensaje += "Edad: " + edad + "\n";
    mensaje += "Email: " + email + "\n";
    mensaje += "Usuario: " + usuario + "\n";
    mensaje += "Password: " + password + "\n";
    mensaje+= "Password encriptada: " + passwordEncriptada + "\n";

    alert(mensaje);
    vaciarFormulario();
  }
}
function encriptarContraseña(plainPassword) {

  const encryptedPassword = plainPassword.split('').reverse().join('');
  console.log('Contraseña encriptada:', encryptedPassword);
  return encryptedPassword;
}
function verificarCampos(){
    resetearMensajesError();
    var nombre = document.getElementById("inputNombre").value;
    var edad = document.getElementById("inputEdad").value;
    var email = document.getElementById("inputEmail").value;
    var usuario = document.getElementById("inputUser").value;
    var password = document.getElementById("inputPassword").value;
    var confirmarPassword = document.getElementById("inputConfirmPassword").value;
    var pasar = "True";
    var regexNombre = /^[a-zA-Z\s]+$/;
      if (!regexNombre.test(nombre)) {
        mostrarError("Nombre", "El nombre solo debe contener letras y espacios.")
        pasar="False"
      }

      // Validación de la edad (solo números, mayores a 0, menores a 100)
      if (isNaN(edad) || edad <= 0 || edad >= 100) {
        mostrarError("Edad", "La edad debe ser un mayor o igual a 1 y menor a 110.")
        pasar="False"
      }

      // Validación del email (tipo númerosyletras@letras.loquesea)
      var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!regexEmail.test(email)) {
        mostrarError("Email", "Ingrese un email válido.")
        pasar="False"
      }

      // Validación del usuario (sin espacios, solo letras y números, al menos 5 caracteres)
      var regexUsuario = /^[a-zA-Z0-9]{5,}$/;
      if (!regexUsuario.test(usuario)) {
        mostrarError("User", "El usuario debe contener al menos 5 caracteres, sin espacios, y solo letras y números.")
        pasar="False"
      }

      // Validación del password (combinar letras, al menos un número, al menos un símbolo especial, al menos 8 caracteres)
      var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!regexPassword.test(password)) {
        mostrarError("Password", "La contraseña debe contener al menos 8 caracteres, incluyendo letras, al menos un número y al menos un símbolo especial.")
        pasar="False"
      }

      // Validación de confirmar password
      if (password !== confirmarPassword) {
        mostrarError("ConfirmPassword", "Las contraseñas no coinciden.")
        pasar="False"
      }
      if (confirmarPassword == "") {
        mostrarError("ConfirmPassword", "Campo vacio.")
        pasar="False"
      }

      // Si todas las validaciones son exitosas, puedes enviar el formulario
      if(pasar == "True"){
        return true;
      }
      
}
function resetearMensajesError() {
  // Limpiar mensajes de error
  var campos = ["Nombre", "Edad", "Email", "User", "Password", "ConfirmPassword"];
  campos.forEach(function(campo) {
    document.getElementById("error" + campo).innerHTML = "";
  });

  campos.forEach(function(campo) {
    document.getElementById("input" + campo).style.background = "White";
  });
}

function mostrarError(campo, mensaje) {
  // Mostrar mensaje de error para un campo específico
  document.getElementById("error" + campo).innerHTML = mensaje;
  document.getElementById("input" + campo).style.background = "Red";
}

function vaciarFormulario(){
  resetearMensajesError();
  var campos = ["Nombre", "Edad", "Email", "User", "Password", "ConfirmPassword"];
  campos.forEach(function(campo) {
    document.getElementById("input" + campo).value = "";
  });
}
function mostrarOcultarContraseña() {
  // Obtener referencias a los elementos
  var checkbox = document.getElementById("verPassword");
  var inputContraseñaVerif = document.getElementById("inputConfirmPassword");
  var inputContraseña = document.getElementById("inputPassword");
  

  // Cambiar el tipo del input de contraseña según el estado del checkbox
  inputContraseña.type = checkbox.checked ? "text" : "password";
  inputContraseñaVerif.type = checkbox.checked ? "text" : "password";
}