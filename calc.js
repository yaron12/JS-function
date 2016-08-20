/**
 * @author ybensimx
 */

function big() {
				var a = document.getElementById("num1").value;
				var b = document.getElementById("num2").value;
				if (a > b)
					result = a;
				else
					result = b;
				document.getElementById("demo2").innerHTML = result;
			}

