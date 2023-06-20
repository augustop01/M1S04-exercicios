let peso = prompt('Informe o seu peso em quilogramas:');
let altura = prompt('Informe sua altura em metros: ');
const calculo = parseFloat(peso) / (parseFloat(altura) ** 2);

alert(`O seu IMC é de ${calculo.toFixed(2)}.60`)