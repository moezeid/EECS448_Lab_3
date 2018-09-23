function colorize(){

  let text = document.getElementById("dummyText");


let bc1 = document.getElementById("bc1").value;
let bc2 = document.getElementById("bc2").value;
let bc3 = document.getElementById("bc3").value;
let bw = document.getElementById("bw").value;
let bC = "rgb(" + bc1 + "," + bc2 + "," + bc3 + ")";

text.style.borderColor = bC;

}
