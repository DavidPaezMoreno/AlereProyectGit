
	alert("Hola desde inapp")
	//actualizarPreferencias()

function actualizarPreferencias(){
  //".seleccionadorCategorias > .opcion"
  var storage = window.localStorage;  
  document.getElementById('P101_USERNAME').value = window.localStorage.getItem("contrasena");
  document.getElementById('P101_PASSWORD').value = window.localStorage.getItem("usuario");
  
}