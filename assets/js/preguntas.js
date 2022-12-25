// Variable de Resultado"
let def = "Muy Deficiente";
let insuf = "Insuficiente";
let suf = "suficiente";
let bien = "bien";
let nota = "notable";
let sobre = "sobresaliente"
// if anidados
let puntos = prompt('¿Qué puntuación del 1 al 10 le pondrías a nuestra Página?');
if(puntos == null){
    document.getElementById('content').innerHTML = `<h3>Porque ingreso el Botón <button class="btn-sm btn-danger">Cancelar</button> a la Página Cachureando <i class="bi bi-heartbreak"></i> Le Agradecería una Valoración <i class="bi bi-hand-thumbs-up"></i> Vuelva a Presionar el link <li class="linea"><a class="mover btn-sm btn-danger" href="preguntas.html"><i class="bi bi-question-square"></i>PREGUNTAS</a></li><h3/>`;
}
else if(puntos == ""){
    document.getElementById('content').innerHTML = `<h3>No se Permiten Campos Vacíos <i class="bi bi-emoji-dizzy"></i> Ingrese una Nota Valida Vuelva a Presionar el link <li class="linea"><a class="mover btn-danger btn-sm" href="preguntas.html"><i class="bi bi-question-square"></i>PREGUNTAS</a></li><h3/>`;
}else if (puntos == 0 || puntos <= 3 ) {
    document.getElementById('content').innerHTML = `<h3>La nota para mi página es ${puntos} y el resultado es ${def} <i class="bi bi-emoji-angry"></i><h3/>`;
}else if (puntos == 4 ){
    document.getElementById('content').innerHTML = `<h3>La nota para mi página es ${puntos} y el resultado es ${insuf} <i class="bi bi-emoji-frown"></i><h3/>`;
}else if (puntos == 5 ){
    document.getElementById('content').innerHTML = `<h3>La nota para mi página es ${puntos} y el resultado es ${suf} <i class="bi bi-emoji-expressionless"></i><h3/>`;
}else if (puntos == 6 || puntos <= 7 ){
    document.getElementById('content').innerHTML = `<h3>La nota para mi página es ${puntos} y el resultado es ${bien} <i class="bi bi-emoji-smile"></i><h3/>`;
}else if (puntos == 8){
    document.getElementById('content').innerHTML = `<h3>La nota para mi página es ${puntos} y el resultado es ${nota} <i class="bi bi-emoji-laughing"></i><h3/>`;

}else if (puntos == 9 || puntos >= 10 ){
    document.getElementById('content').innerHTML = `<h3>La nota para mi página es ${puntos} y el resultado es ${sobre} <i class="bi bi-emoji-sunglasses"></i><h3/>`;
}else{
    alert("ingresa un Dato Númerico Por Favor");
    document.getElementById('content').innerHTML = `<h3>¡No Ingreses Cualquier Dato! <i class="bi bi-emoji-dizzy"></i> Escribe una Nota Valida Vuelva a Presionar el link <li class="linea"><a class="mover btn-danger btn-sm" href="preguntas.html"><i class="bi bi-question-square"></i>PREGUNTAS</a></li><h3/>`;
}



