const produtos = [
    {
        descricao : "Camisa Polo",
        cor : "preto",
        perfil : "M",
        estoque : "1200",
        link : "https://pt.vecteezy.com/fotos-gratis/camisa-polo-preta"
    },
    {
        descrixao : "Calça jeans",
        cor : "preto",
        perfil : "M",
        estoque : "1000",
        link : "https://www.cea.com.br/jeans/masculino/calca/preta"
    },
    {
        descrixao : "Tenis",
        cor : "preto",
        perfil : "M",
        estoque : "700",
        link : "https://www.nicekicks.com/jordan-why-not-5-hype-music-dc3637-001/"
    }
];

let totalProdutos = estoque.reduce((produto) => {
    return total + produtos.estoque;
}, 0);

console.log(`Total de camisetas em estoque: ${totalCamisetasEmEstoque}`)