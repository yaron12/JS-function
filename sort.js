/**
 * @author ybensimx
 */
function sort() {
				var a = document.getElementById("n1").value;
				var b = document.getElementById("n2").value;
				var c = document.getElementById("n3").value;

				if (a <= b && a <= c)
					if (b <= c)
						results = (a + ", " + b + ", " + c);
					else
						results = (a + ", " + c + ", " + b);
				
                    else if (b <= a && b <= c)
					if (a <= c)
						results = (b + ", " + a + ", " + c);
					else
						results = (b + ", " + c + ", " + a);
				
                    else if (c <= a && c <= b)
					if (a <= b)
						results = (c + ", " + a + ", " + b);
					else
						results = (c + ", " + b + ", " + a);

				document.getElementById("demo3").innerHTML = results;
			}