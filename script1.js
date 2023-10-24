/*ISAAC MOYA*/

let fichero = ['d1.txt']

fetch(fichero).then(ficherotexto => ficherotexto.text()).then(numeros);


function numeros(texto) {
	let dado = texto.split(",");
	let n1 = +dado[0];
	let n2 = +dado[1];

	let matriz = [];
	for (let i = 0; i < n1; i++) {
		matriz[i] = [];
		for (let j = 0; j < n2; j++) {
			matriz[i][j] = (i+1) + (j+1);
		}
	}
	
	let numerosMasRepetidos = [];
	let masVeces = 0;
	let numerosMenosRepetidos = [];
	let menosVeces = n1 * n2;
	for (let i = 2; i <= n1 + n2; i++) {
		let contador = 0;
		for (let j = 0; j < matriz.length; j++) {
			for (let k = 0; k < matriz[j].length; k++) {
				if (matriz[j][k] === i) {
					contador++;
			}
		}
    }
	
    if (contador === masVeces) {
      numerosMasRepetidos.push(i);
    }
    if (contador > masVeces) {
      numerosMasRepetidos = [i];
      masVeces = contador;
    }
    if (contador === menosVeces) {
      numerosMenosRepetidos.push(i);
    }
    if (contador < menosVeces) {
      numerosMenosRepetidos = [i];
      menosVeces = contador;
    }
  }

	console.log("Los números que mayor probabilidad tienen son: " + numerosMasRepetidos);
	console.log("Los números que menor probabilidad tienen son: " + numerosMenosRepetidos);
}

