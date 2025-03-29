function calcularImc (peso, altura) {
	return peso / Math.pow(altura, 2);
}

function classificarImc (imc){

	if (imc < 18.5){
		return  'Condição:abaixo do peso';
	} else if (imc >= 18.5 && imc < 25 ){
		return  'Condição:Peso Normal';
	}else if (imc >=25 && imc < 30 ){
		return 	'Condição:acima do Peso';
	}else if (imc >= 30 && imc < 40){
		return	 'Obeso';
	} else {
		return  'Condição:Obesidade Grave';
	}
}

const peso = 150;
const altura = 1.83;

const imc = calcularImc(peso, altura);
console.log ('IMC:'+imc.toFixed(2))
console.log (classificarImc(imc));
