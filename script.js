const resultado = document.querySelector('.resultado'),
    finalizador = document.querySelector('.finalizar'),
    numInput = document.querySelector('.numero'),
    clique = document.querySelector('.adicionar'),
    lista = document.querySelector('.lista'),
    valores = [];

// função para adicionar elementos ao Array

clique.addEventListener('click', () => {
    // entra o valor e fectua a conversão instantaneamente

    const numero = Number(document.querySelector('.numero').value);
    if (numero < 1 || numero > 100) {
        alert('Número Inválido!');
    } else if (verificarNaLista(numero, valores)) {
        // verifica se a função retorna TRUE
        alert('Número repetido');
    } else {
        valores.push(numero); // método para adicionar um elemento ao array, NB: Verificar sempre o tipo
        const item = document.createElement('option');
        item.text = ` O Valor ${numero} adicionado`;
        lista.appendChild(item);
    }
    numInput.value = '';
});

// função para verificar se o elemento(número) pertence ao ARRAY
// Esta função sofreu o Hoisting

function verificarNaLista(element, array) {
    if (array.includes(element)) {
        return true;
    } else {
        return false;
    }
}

// função para finalizar

finalizador.addEventListener('click', () => {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        const soma = valores.reduce((partialSum, a) => partialSum + a, 0),
            media = soma / valores.length,
            min = Math.min(...valores),
            max = Math.max(...valores);

        // Aqui são todos resultado que aparecerão após clicar em finalizar
        resultado.innerHTML = `Ao todo são <strong>${valores.length}</strong> números digitados<br />`;
        resultado.innerHTML += `O menor deles é <strong>${min}</strong><br />`;
        resultado.innerHTML += `O maior deles é <strong>${max}</strong><br/ > `;
        resultado.innerHTML += `A soma de todos valores é <strong>${soma}</strong> <br />`;
        resultado.innerHTML += `A Média dos valores fornecidos é <strong>${media.toFixed(1)}</strong><br />`;
    }
});
