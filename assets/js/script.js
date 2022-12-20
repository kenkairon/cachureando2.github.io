
let mostrarFecha = document.getElementById('fecha');
let mostrarReloj = document.getElementById('reloj');

let fecha = new Date();

let diaSemana = ['Domingo','Lunes', 'Martes','Miércoles','Jueves','Viernes','Sábado'];

let mesAnyo = ['Enero','Febrero', 'Marzo','abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

mostrarFecha.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} de ${mesAnyo[fecha.getMonth()]} de ${fecha.getFullYear()}`;

setInterval(()=>{
  let hora = new Date();
  mostrarReloj.innerHTML = hora.toLocaleTimeString();
},1000);

const getRemainingTime = deadline => {
  let now = new Date(),
      remainTime = (new Date(deadline) - now + 1000) / 1000,
      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
      remainDays = Math.floor(remainTime / (3600 * 24));

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime
  }
};


// var contadorSobresaliente = 0;
// var contadorNotable = 0;
// var contadorBien = 0;
// var contadorSuficiente = 0;
// var contadorInsuficiente = 0;
// var contadorMuyDeficiente = 0;

// function contador(votos){

//     if(votos == "Sobresaliente"){
//       contadorvotos = (contadorvotos + 5);
//       contadorSobresaliente = (contadorSobresaliente + 5);
//     }else if (votos == "Notable"){
//       contadorvotos = (contadorvotos + 5);
//       contadorNotable = (contadorNotable + 5);
//     }
//     else if (votos == "Bien"){
//       contadorvotos = (contadorvotos + 5);
//       contadorBien = (contadorBien + 5);
//     }
//     else if (votos == "Suficiente"){
//       contadorvotos = (contadorvotos + 5);
//       contadoSuficiente = (contadorSuficiente + 5);
//     }
//     else if (votos == "Insuficiente"){
//       contadorvotos = (contadorvotos + 5);
//       contadorInsuficiente = (contadorInsuficiente + 5);
//     }
//     else if (votos == "Muydeficiente"){
//       contadorvotos = (contadorvotos + 5);
//       contadorMuyDeficiente = (contadorMuyDeficiente + 5);
//     }

//     document.getElementById('graficaSobre').style.width = contadorSobresaliente + "%";
//     document.getElementById('graficaSobre').innerHTML = "<h3>" + contadorSobresaliente +"</h3>"

//     document.getElementById('graficaNota').style.width = contadorNotable + "%";
//     document.getElementById('graficaNota').innerHTML = "<h3>" + contadorNotable +"</h3>"

//     document.getElementById('graficaBien').style.width = contadorBien + "%";
//     document.getElementById('graficaBien').innerHTML = "<h3>" + contadorBien +"</h3>"

//     document.getElementById('graficaSufi').style.width = contadorSuficiente + "%";
//     document.getElementById('graficaSufi').innerHTML = "<h3>" + contadorSuficiente+"</h3>"

//     document.getElementById('graficaInsufi').style.width = contadorInsuficiente + "%";
//     document.getElementById('graficaInsufi').innerHTML = "<h3>" + contadorInsuficiente +"</h3>"

//     document.getElementById('graficaMuydef').style.width = contadorMuyDeficiente + "%";
//     document.getElementById('graficaMuydef').innerHTML = "<h3>" + contadorMuyDeficiente +"</h3>"

//     if(contadorvotos == 0){
//       document.getElementById('inputs').style.display = "none";
//       document.getElementById("divgraficas").style.display ="block";
//     }

// }


// medad = "Ingrese Edad"

// edad = gets.chomp.to_i
// if (edad = 0 and edad <=3){

// } elsif (edad >= 3 and edad <=5	){

// } elsif (edad >= 6 and edad <= 7){

// }elsif (edad >= 8 and edad <= 9){

// }elsif (edad >= 9 and edad <= 10){

// }
