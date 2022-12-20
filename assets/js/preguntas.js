// Variable de Resultado"
let def = "Muy Deficiente";
let insuf = "Insuficiente";
let suf = "suficiente";
let bien = "bien";
let nota = "notable";
let sobre = "sobresaliente"
// if anidados
let puntos = prompt('Que puntuación del 1 al 10 le pondrias a mi Página?');
if (puntos == 0 || puntos <= 3 ) {
    document.getElementById('content').innerHTML = `<h2>La nota para mi página es ${puntos} y el resultado es ${def} <i class="bi bi-emoji-angry"></i><h2/>`;
}else if (puntos == 4 ){
    document.getElementById('content').innerHTML = `<h2>La nota para mi página es ${puntos} y el resultado es ${insuf} <i class="bi bi-emoji-frown"></i><h2/>`;
}else if (puntos == 5 ){
    document.getElementById('content').innerHTML = `<h2>La nota para mi página es ${puntos} y el resultado es ${suf} <i class="bi bi-emoji-expressionless"></i><h2/>`;
}else if (puntos == 6 || puntos <= 7 ){
    document.getElementById('content').innerHTML = `<h2>La nota para mi página es ${puntos} y el resultado es ${bien} <i class="bi bi-emoji-smile"></i><h2/>`;
}else if (puntos == 8){
    document.getElementById('content').innerHTML = `<h2>La nota para mi página es ${puntos} y el resultado es ${nota} <i class="bi bi-emoji-laughing"></i><h2/>`;

}else if (puntos == 9 || puntos >= 10 ){
    document.getElementById('content').innerHTML = `<h2>La nota para mi página es ${puntos} y el resultado es ${sobre} <i class="bi bi-emoji-sunglasses"></i><h2/>`;
}else{
    alert("ingresa un Dato Númerico Por Favor");
}



