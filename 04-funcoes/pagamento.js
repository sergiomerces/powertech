function calcularPagamento(precoEtiqueta, formaPagamento) {
    if(formaPagamento === 1) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.1));
    } else if(formaPagamento === 2) {
        console.log(precoEtiqueta - (precoEtiqueta * 0.15));
    } else if(formaPagamento === 3) {
        console.log((precoEtiqueta / 2) + ' em 2x');
    } else {
        console.log(precoEtiqueta + (precoEtiqueta * 0.1) + '  acima de 3x');
    }
}

calcularPagamento(100.00, 4);