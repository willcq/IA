//wilfred carrion 561210104

<html>	
	<head>
		<script>
			//Cantidad de lugares a la derecha que se desplaza cada caracter
			var lugaresDerecha = 3;

			//Funcion que le ingresa una cadena a codificar y retorna el respectivo texto codificado
			function codificarCesar(textoACodificar){
				//Variable que almacena el texto codificado
				var textoCodificado = "";
				//Arreglo que contiene los codigos ASCII de cada una de las letras de la cadena a codificar ya aplicado el desplazamiento a la derecha
				var arregloCaracteresASCII = new Array();
				//encodeURI sirve para codificar caracteres especiales como Ñ, á, & etc...
				s = encodeURI(textoACodificar);
				//Se realiza un for para recorrer cada caracter de la cadena a codificar
				for( i=0; i < textoACodificar.length; i++)
					//Cada caracter se convierte a ASCII con la funcion charCodeAt y a ese ASCII se le suman los lugares a la derecha
					arregloCaracteresASCII[i] = textoACodificar.charCodeAt(i) + lugaresDerecha;
				//Cada una de las posiciones del arreglo se convierte de codigo ASCII a su respectivo caracter,
				//para esto se utiliza la funcion String.fromCharCode.apply, que realiza esta tarea,
				//es como si se realizara un for por cada posicion del arreglo y a cada posicion del arreglo se le aplicara la funcion fromCharCode
				textoCodificado = String.fromCharCode.apply(String, arregloCaracteresASCII)
				//Se aplica nuevamente la funcion encodeURI para codificar caracteres especiales
				textoCodificado = encodeURI(textoCodificado)
				//Se retorna el texto codificado
				return textoCodificado;
			}
			
			//Funcion que lee el texto a codificar e invoca la funcion de codificarCesar, y el valor devuelto lo visualiza en la forma HTML
			function realizarCodificacion(){
				//Variable que almacena el texto codificado
				var textoCodificado;
				//Variable que almacena el texto a codificar
				var textoACodificar;
				
				//Obtiene el texto ingresado a codificar
				textoACodificar = document.getElementById('textoACodificar').value
				//Se llama a la funcion de codificarCesar que retorna el texto codificado
				textoCodificado = codificarCesar(textoACodificar);
				//Visualiza el texto codificado en el area que corresponde
				document.getElementById('textoCodificado').value = textoCodificado
			}
		</script>

	</head>

	<body>
	
	<h1>Cifrado CESAR</h1>
	</br>
	<form>
		<label>Texto A Codificar:</label>
		<textarea id="textoACodificar" ></textarea>
		</br>
		<label>Texto Codificado:</label>
		<textarea id="textoCodificado" ></textarea>
		</br>
		<input type="button" value="Cifrar" onclick="realizarCodificacion()" />
	</form>
	</body>

</html>