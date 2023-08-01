function Calcular(){
    let num = document.querySelector('.input');
    let valor = num.value;
    let resultado = document.querySelector('.resultado');
*3*/3
    console.log(valor);

    if (valor<10) {
        resultado.innerHTML = `<p>O número ${valor} é menor que 10</p>`;
    }
    else if (valor==10){
        resultado.innerHTML = `<p>O número ${valor} é igual a 10</p>`;
    }
    else {
        resultado.innerHTML = `<p>O número ${valor} é maior que 10</p>`;
    }
}

