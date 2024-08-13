function enviarEmail()
{
var email = document.getElementById("nombreEmail").value;
if (email === "" || !email.includes('@')) {
    alert("El campo email está vacío o no incluye un arroba. Ingrese correctamente el email.")
    }
else{
    alert("El email " + email + " ha sido ingresado correctamente.")
}
}