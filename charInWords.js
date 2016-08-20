/**
 * @author ybensimx
 */

function charInWords() {
	var string = document.getElementById("word").value;
	var contain = document.getElementById("char").value;
	countChar = string.split(contain).length - 1;

	document.getElementById("demo3").innerHTML = countChar;
}