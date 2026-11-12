// ==========================================================
// PRODUTOS E LOJAS - Matheuz1n Store
// Para adicionar/alterar: edite este arquivo e faça commit.
// ==========================================================

// Lojas parceiras. O "base" é o link de busca da loja com seu ID.
// O nome do produto é adicionado automaticamente no final da URL.
const LOJAS = {
    "Amazon": {
        base: "https://www.amazon.com.br/s?k=",
        sufixo: "&tag=alienlabs-20"
    },
    "Mercado Livre": {
        base: "https://lista.mercadolivre.com.br/",
        sufixo: ""
    }
};

// Produtos. Campos:
//  nome, preco, loja ("Amazon" ou "Mercado Livre"), categoria,
//  descricao, imagem (caminho da foto, ex: "imagens/monitor.jpg", ou "" para usar emoji),
//  emoji, cupom ("" se não houver), link ("" usa a busca da loja)
const PRODUTOS = [
    {
        nome: "Suporte de TV articulado",
        preco: "R$ 85,00",
        loja: "Mercado Livre",
        categoria: "outros",
        descricao: "Suporte articulado para TV.",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_605527-MLA109741353747_032026-F.webp",
        emoji: "📺",
        cupom: "",
        link: "https://meli.la/11AUqqv"
    },
    {
        nome: "Monitor Gamer Alienware 25\" 320Hz",
        preco: "R$ 1.519,05",
        loja: "Amazon",
        categoria: "perifericos",
        descricao: "Monitor gamer Alienware de 25 polegadas com taxa de atualização de 320Hz.",
        imagem: "imagens/monitor.jpg",
        emoji: "🖥️",
        cupom: "",
        link: "https://link.amazon/B0ff4hmrD"
    },
    {
        nome: "Controlador sem fio Zelda para Nintendo Switch Hori Pad Grey",
        preco: "R$ 252,00",
        loja: "Mercado Livre",
        categoria: "perifericos",
        descricao: "Controle sem fio com estampa Zelda.",
        imagem: "",
        emoji: "🕹️",
        cupom: "",
        link: "https://meli.la/1AMHEZs"
    },
    {
        nome: "Processador AMD Ryzen 7 5700X 3.4GHz 8 núcleos AM4",
        preco: "R$ 1.026,00",
        loja: "Amazon",
        categoria: "hardware",
        descricao: "Processador AMD Ryzen 7 com 8 núcleos e 16 threads.",
        imagem: "",
        emoji: "⚙️",
        cupom: "",
        link: ""
    },
    {
        nome: "Cooler de ar para CPU 6 heatpipes 120mm",
        preco: "R$ 264,00",
        loja: "Amazon",
        categoria: "hardware",
        descricao: "Cooler de ar de alto desempenho para processador.",
        imagem: "",
        emoji: "❄️",
        cupom: "",
        link: ""
    },
    {
        nome: "SSD NVMe Crucial P510 1TB PCIe Gen5",
        preco: "R$ 1.328,00",
        loja: "Amazon",
        categoria: "hardware",
        descricao: "SSD com até 11.000 MB/s de leitura.",
        imagem: "",
        emoji: "💾",
        cupom: "",
        link: ""
    },
    {
        nome: "Controle sem fio PlayStation DualSense",
        preco: "R$ 379,00",
        loja: "Amazon",
        categoria: "perifericos",
        descricao: "Controle DualSense sem fio para PS5.",
        imagem: "",
        emoji: "🎮",
        cupom: "",
        link: ""
    }
];
