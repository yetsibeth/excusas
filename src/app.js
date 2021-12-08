/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var quien = [
  "Un perro ",
  "Una vaca ",
  "Un extraterrestre ",
  "Un chancho ",
  "Mi abuela ",
  "Tu mama "
];
var que = [" se comio ", " se meo sobre ", " se robo ", "salio corriendo con "];
var miQue = [" mi tarea ", " mi sandwich ", " mi comida ", " mi cama "];
var donde = [" el supermercado", " la plaza ", " la playa ", " la montaña"];

function ran(arr) {
  return Math.floor(Math.random() * arr.length);
}

window.onload = function() {
  var ex = document.getElementById("excusa");
  ex.innerHTML =
    quien[ran(quien)] +
    que[ran(que)] +
    miQue[ran(miQue)] +
    "en" +
    donde[ran(donde)];
};
