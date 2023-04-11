function calcularImc(massa, altura) {
    return massa / (altura * altura);
}

function classificarImc(imc) {
    if(imc < 18.5) {
        return 'Abaixo do peso';
    } else if(imc < 25) {
        return 'Peso normal';
    } else if(imc < 30) {
        return 'Acima do peso';
    } else if(imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade mórbida';
    }
}

function main() {
    const imc = calcularImc(88.7, 1.7);
    const resultado = classificarImc(imc);

    console.log(imc.toFixed(3));
    console.log(resultado);
}

main();
