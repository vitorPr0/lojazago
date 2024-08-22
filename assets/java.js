document.addEventListener('DOMContentLoaded', function () {
    const lista = document.querySelector('.lista');
    const produtos = document.querySelectorAll('.produto');
    const totalProdutos = produtos.length;
    const produtoLargura = produtos[0].offsetWidth;
    const produtosVisiveis = Math.floor(lista.offsetWidth / produtoLargura);
    let scrollIndex = 0;

    document.querySelector('.seta.direita').addEventListener('click', function () {
        if (scrollIndex < totalProdutos - produtosVisiveis) {
            scrollIndex++;
            lista.style.transform = `translateX(-${scrollIndex * produtoLargura}px)`;
        }
    });

    document.querySelector('.seta.esquerda').addEventListener('click', function () {
        if (scrollIndex > 0) {
            scrollIndex--;
            lista.style.transform = `translateX(-${scrollIndex * produtoLargura}px)`;
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const lista = document.querySelector('.lista2');
    const produtos = document.querySelectorAll('.produto2');
    const totalProdutos = produtos.length;
    const produtoLargura = produtos[0].offsetWidth;
    const produtosVisiveis = Math.floor(lista.offsetWidth / produtoLargura);
    let scrollIndex = 0;

    document.querySelector('.seta.direita2').addEventListener('click', function () {
        if (scrollIndex < totalProdutos - produtosVisiveis) {
            scrollIndex++;
            lista.style.transform = `translateX(-${scrollIndex * produtoLargura}px)`;
        }
    });

    document.querySelector('.seta.esquerda2').addEventListener('click', function () {
        if (scrollIndex > 0) {
            scrollIndex--;
            lista.style.transform = `translateX(-${scrollIndex * produtoLargura}px)`;
        }
    });
});