document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573136283643";
  var profilaxis= 2;


  var opcion1 = document.getElementById("opc1");
  var opcion2 = document.getElementById("opc2");
  var opcion3 = document.getElementById("opc3");
  var opcion4 = document.getElementById("opc4");
  var opcion5 = document.getElementById("opc5");
  var opcion6 = document.getElementById("opc6");
  var opcion7 = document.getElementById("opc7");
  var opcion8 = document.getElementById("opc8");
  var opcion9 = document.getElementById("opc9");
  var opcion10 = document.getElementById("opc10");
  var opcion11 = document.getElementById("opc11");
  var opcion12 = document.getElementById("opc12");
  var opcion13 = document.getElementById("opc13");
  let cliente = document.querySelector("#cliente").value;
  var servicio = document.getElementById("servicio").value;
  let comentario = document.querySelector("#comentario").value;
  let resp = document.querySelector("#respuesta");

  opcion2.addEventListener("click", () => {
    juega(profilaxis);
 });

 function juega(useropction) {
   
if (useropction in opcion2){
  servicio.innerHTML = "El ganador es el usuario con piedra";
}
};



  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${7223886184}&text=
		*SMALL SMILE*%0A
		*Consulta*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*¿Cuál es el servicio que se desea realizar?*%0A
		${servicio}%0A
    *Comentario:*%0A
    ${comentario}%0A`;

  if (cliente === "" || servicio === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu comentario, ${cliente}`;

  window.open(url);
});
