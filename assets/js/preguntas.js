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
    document.getElementById('content').innerHTML = `<h4>Porque ingreso el Botón <button class="btn-sm btn-danger">Cancelar</button> a la Página Cachureando <i class=""btn btn-outline-danger bi bi-heartbreak"></i> Le Agradecería una Valoración <i class="bi bi-hand-thumbs-up"></i> Vuelva a Presionar el link <li class="linea"><a class="mover btn-sm btn-danger" href="preguntas.html">PREGUNTAS</a></li><h4/>`;
}else if(puntos < 0){
    document.getElementById('content').innerHTML = `<h4><i class="bi bi-emoji-dizzy"></i> No se Permiten Números Negativos como  <a class="btn-sm btn-danger">${puntos}</a> Ingrese una Nota Valida Vuelva a Presionar el link <li class="linea"><a class="mover btn-danger btn-sm" href="preguntas.html">PREGUNTAS</a></li><h4/>`;
}else if(puntos == ""){
    document.getElementById('content').innerHTML = `<h4>No se Permiten Campos Vacíos <i class="bi bi-emoji-dizzy"></i> Ingrese una Nota Valida Vuelva a Presionar el link <li class="linea"><a class="mover btn-danger btn-sm" href="preguntas.html"><br>PREGUNTAS</a></li><h4/>`;
}else if (puntos == 0 || puntos <= 3 ) {
    document.getElementById('content').innerHTML = `<h4>La nota para mi página es <a class="btn-sm btn-danger">${puntos}</a> y el resultado es ${def} <i class="btn btn-outline-danger bi bi-emoji-angry"></i><h4/>`;
}else if (puntos == 4 ){
    document.getElementById('content').innerHTML = `<h4>La nota para mi página es <a class="btn-sm btn-danger">${puntos}</a> y el resultado es ${insuf} <i class="btn btn-outline-danger bi bi-emoji-frown"></i><h4/>`;
}else if (puntos == 5 ){
    document.getElementById('content').innerHTML = `<h4>La nota para mi página es <a class="btn-sm btn-danger">${puntos}</a> y el resultado es ${suf} <i class="btn btn-outline-danger bi bi-emoji-expressionless"></i><h4/>`;
}else if (puntos == 6 || puntos <= 7 ){
    document.getElementById('content').innerHTML = `<h4>La nota para mi página es <a class="btn-sm btn-primary">${puntos}</a> y el resultado es ${bien} <i class="btn btn-outline-success bi bi-emoji-smile"></i><h4/>`;
}else if (puntos == 8){
    document.getElementById('content').innerHTML = `<h4>La nota para mi página es <a class="btn-sm btn-primary">${puntos}</a> y el resultado es ${nota} <i class="btn btn-outline-primary bi bi-emoji-laughing"></i><h4/>`;

}else if (puntos == 9 || puntos == 10 ){
    document.getElementById('content').innerHTML = `<h4>La nota para mi página es <a class="btn-sm btn-primary">${puntos}</a> y el resultado es ${sobre} <i class=" btn btn-outline-primary bi bi-emoji-sunglasses"></i><h4/>`;
}else if (puntos >= 11 ){
    document.getElementById('content').innerHTML = `<h4>La nota para mi página tiene un rango 1 al 10 <i class="bi bi-calendar-x"></i> la nota <a class="btn-sm btn-danger">${puntos}</a> no es valida. Presiona el link <li class="linea"><a class="mover btn-danger btn-sm" href="preguntas.html">PREGUNTAS</a></li> para volver a intentarlo.<h4/>`;
}else{
    alert("ingresa un Dato Númerico Por Favor");
    document.getElementById('content').innerHTML = `<h4> <i class="bi bi-emoji-dizzy"> ¡No Ingreses Cualquier Dato!</i> Escribe una Nota Valida Vuelva a Presionar el link <li class="linea"><a class="mover btn-danger btn-sm" href="preguntas.html">PREGUNTAS</a></li><h4/>`;
}




