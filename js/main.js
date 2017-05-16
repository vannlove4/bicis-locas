function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById("name").value;
	var lastName = document.getElementById("lastname").value;
	var email = document.getElementById("input-email").value;
	var pass = document.getElementById("input-password").value;
	var firstChar = /([A-Z])[a-z]/;
	var notNumber = /([0-9])/;

//validaciones y creación de nodos
/*Validación nombre
*Campo obligatorio
*nombre sin números
*La primera letra mayús
*/
	function valName(){
		if(name==""){
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var nombre_vacio = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}else if(!firstChar.test(name)) {
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var nombre_vacio = document.createTextNode("Recuerde ingresar su nombre con mayúscula");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}else if(notNumber.test(name)){
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var nombre_vacio = document.createTextNode("El nombre no debe llevar números");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(nombre_vacio);
		}else{
			return true;
		}
	}
	valName();
/*
Validación apellido
*Obligatorio
*Solo mayús
*Mayús
*/
	function valLastName(){
		if(lastName==""){
			var nodoPadre = document.getElementsByClassName("lastname-container input-box")[0];
			var mensaje = document.createElement("span");
			var last_name_vacio = document.createTextNode("Debe ingresar los campos Obligatorios");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(last_name_vacio);
		}else if(!firstChar.test(lastName)){
			var nodoPadre = document.getElementsByClassName("lastname-container input-box")[0];
			var mensaje = document.createElement("span");
			var last_name_mayus = document.createTextNode("Recuerde ingresar su apellido con mayúscula");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(last_name_mayus);
		}else if(notNumber.test(lastName)){
			var nodoPadre = document.getElementsByClassName("name-container input-box")[0];
			var mensaje = document.createElement("span");
			var last_name_number = document.createTextNode("El nombre no debe llevar números");
			nodoPadre.appendChild(mensaje);
			mensaje.appendChild(last_name_number);
		}else{
			return true;
		}

	}
	valLastName();

/* Validación email
*obligatorio
*formato válido email 
*/
	function valEmail(){
		
	}
	valEmail();
/* Validación password
*obligatorio
*el campo pass no debe ser igual a "password" o "123456"
o "098754"
*/
}