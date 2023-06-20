let nota = [];
nota[0] = prompt('Digite um primeira nota de 0 a 10:')
nota[1] = prompt('Digite um segunda nota de 0 a 10:')
nota[2] = prompt('Digite um terceira nota de 0 a 10:')

let peso = [];
peso[0] = prompt('Digite o peso da primeira nota (peso total deve ser 100): ')
peso[1] = prompt('Digite o peso da segunda nota (peso total deve ser 100): ')
peso[2] = prompt('Digite o peso da terceira nota (peso total deve ser 100): ')

let notaReal = [];

for (i = 0; i < 3; i++) {
    notaReal[i] = nota[i] * peso[i];
}

let mediaPonderada = (notaReal[0] + notaReal[1] + notaReal[2]) / (parseInt(peso[0]) + parseInt(peso[1]) + parseInt(peso[2]));

alert(`A média ponderada das notas ${nota[0]}, ${nota[1]} e ${nota[2]} é de ${mediaPonderada}.`);

/*

let notaSoma = notaReal[0] + notaReal[1] + notaReal[2];
let pesoSoma = peso[0] + peso[1] + peso[2];
let mediaPonderada = notaSoma / pesoSoma;
*/