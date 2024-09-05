function conectar() {
  let nombre = document.getElementById("inputUser").value;
  let contrasena = document.getElementById("inputPassword").value;

  if (nombre !== "" && contrasena !== "") {
    localStorage.setItem('usuario', nombre); //Guarda el nombre en un string identificado como "usuario"
    localStorage.setItem(nombre, contrasena); // guarda la contraseña asociada al nombre
    location.href = "index.html"; //redirecciona a index.html
  } else {
    alert("Falta usuario o clave");
  }
}

// Evento para cuando se carga el DOM
document.addEventListener("DOMContentLoaded", function() {

  let botonDelLogin = document.getElementById("button");//Toma el elemento del html, en este caso del login.html, con id "button"
  if (botonDelLogin) {//Este if verifica si realmente existe en el html un elemento con ese id
    botonDelLogin.addEventListener("click", conectar);//Si se clickea el boton del login se llamará a la función
  }

  let nombreDelUsuario = document.getElementById("nombreUsuario");//Toma el elemento del html, en este caso index.html, con id "nombreUsuario"
  let nombreUsuario = localStorage.getItem('usuario'); // Lee el nombre del usuario del localStorage

  if (nombreDelUsuario && nombreUsuario) {//Si ambas condiciones se cumplen
    nombreDelUsuario.textContent = `Bienvenido, ${nombreUsuario}`;//Le da la Bienvenida al usuario
  }

});