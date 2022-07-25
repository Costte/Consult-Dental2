document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "573136283643";

  let cliente = document.querySelector("#cliente").value;
  var servicio = document.getElementById("servicio").value;
  let comentario = document.querySelector("#comentario").value;
  let resp = document.querySelector("#respuesta");



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
