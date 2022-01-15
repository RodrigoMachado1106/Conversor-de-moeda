function ConverterDolarReal () {
    var valorElementoDolar = parseFloat(document.getElementById("valor").value);
    var valorDolarAtual = 5;
    var valorEmReal = valorElementoDolar * valorDolarAtual;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorConverter = document.getElementById("valorParaConverter");

    elementoValorConverter.innerHTML = `Conversão de ${valorElementoDolar.toFixed(2)} Dólar`;
    elementoValorConvertido.innerHTML = `Para ${valorEmReal.toFixed(2)} Reais`;
}

function ConverterDolarEuro() {
    var valorElementoDolar = parseFloat(document.getElementById("valor").value);
    var valorEuroAtual = 6.2;
    var valorEmEuro = valorElementoDolar * valorEuroAtual;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorConverter = document.getElementById("valorParaConverter");

    elementoValorConverter.innerHTML = `Conversão de ${valorElementoDolar.toFixed(2)} Dólar`;
    elementoValorConvertido.innerHTML = `Para ${valorEmEuro.toFixed(2)} Euro`;
}

function ConverterEuroDolar() {
    var valorElementoEuro = parseFloat(document.getElementById("valor").value);
    var valorDolarAtual = 1.18;
    var valorEmEuro = valorElementoEuro * valorDolarAtual;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorConverter = document.getElementById("valorParaConverter");

    elementoValorConverter.innerHTML = `Conversão de ${valorElementoEuro.toFixed(2)} Dólar`;
    elementoValorConvertido.innerHTML = `Para ${valorEmEuro.toFixed(2)} Euro`;
}

function ConverterRealDolar () {
    var valorElementoReal = parseFloat(document.getElementById("valor").value);
    var valorRealAtual = 0.19;
    var valorEmReal = valorElementoReal * valorRealAtual;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var elementoValorConverter = document.getElementById("valorParaConverter");

    elementoValorConverter.innerHTML = `Conversão de ${valorElementoReal.toFixed(2)} Dólar`;
    elementoValorConvertido.innerHTML = `Para ${valorEmReal.toFixed(2)} Reais`;

    
}


function executaConversao() {
    var cambioOrigem = document.getElementById("cambioOrigem").value;
    var cambioDestino = document.getElementById("cambioDestino").value;
    var erro = document.getElementById("erro");

    if ((cambioOrigem == "Dolar") && (cambioDestino =="Real")){
        ConverterDolarReal();
    } else if ((cambioOrigem == "Dolar") && (cambioDestino == "Euro")) {
        ConverterDolarEuro();
    } else if ((cambioOrigem == "Euro") && (cambioDestino == "Dolar")){
        ConverterEuroDolar();
    } else if ((cambioOrigem == "Real") && (cambioDestino == "Dolar")){
        ConverterRealDolar();
    } else {
        erro.innerHTML = "<h2>Operação inválida!<h2>"
    }
}


