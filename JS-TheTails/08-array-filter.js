const numeros = [5, 10, 15]

const encontrado = numeros.filter ((n) => {
    return n == 10;
});

//console.log(encontrado);

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

const camisetasMasculinas = produtos.filter((camiseta) => {
    return camiseta.perfil =="M";
});

console.log(camisetasMasculinas);

console.log("Camisetas Polo Masculinas em estoque: ");
console.log("");

camisetasMasculinas.forEach((item) => {
    console.log(`${item.cor} :  ${item.estoque} Unidades"`);
});