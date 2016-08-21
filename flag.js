/**
 * @author ybensimx
 */
function showCountry() {
				//document.getElementById("country").style.visibility = "visible";
				var x = document.getElementsByClassName("country");
				x[0].innerHTML = "israel"; 
				x[1].innerHTML = "use";
				x[2].innerHTML = "italy";
				x[3].innerHTML = "netherlands";
				x[4].innerHTML = "france";  
			}

			function hiddenCountry() {
				//document.getElementById("country").style.visibility = "hidden";
				var x = document.getElementsByClassName("country");
				x[0].innerHTML = "";
				x[1].innerHTML = "";
				x[2].innerHTML = "";
				x[3].innerHTML = "";
				x[4].innerHTML = "";
			}