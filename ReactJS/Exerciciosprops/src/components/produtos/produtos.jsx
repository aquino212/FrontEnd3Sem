import "./produtos.css"

export default function Produtos(){
    const produtos = [
        {
            Name: "Aura em pó",
            preco: 1.00000000,
            descricao : "FAAAAAAAA"
        },
        {
            Name: "67",
            preco: 2.00,
            descricao : "Chega nem perto do 69!"
        },

    ]
    return(
        produtos.map((produtinho)=>{
            return(
                <Produtos
                nome={produtinho.nome}
                preco={produtinho.preco}
                descricao={produtinho.descricao}
                />
            )
        })
    )
}