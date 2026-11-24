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
        imagem: "https://images.kabum.com.br/produtos/fotos/sync_mirakl/941806/xlarge/Monitor-Gamer-Alienware-25-320Hz-Aw2525hm_1793381610.jpg",
        emoji: "🖥️",
        cupom: "",
        link: "https://link.amazon/B0ff4hmrD"
    },
    {
        nome: "Controlador sem fio Zelda para Nintendo Switch Hori Pad Grey",
        preco: "R$ 287,00",
        loja: "Mercado Livre",
        categoria: "perifericos",
        descricao: "Controle sem fio com estampa Zelda.",
        imagem: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/713TjiWYiPL._AC_SL1500_.jpg",
        emoji: "🕹️",
        cupom: "",
        link: "https://link.amazon/B0htWKI9L"
    },
    {
        nome: "Processador AMD Ryzen 7 5700X 3.4GHz 8 núcleos AM4",
        preco: "R$ 979,00",
        loja: "Amazon",
        categoria: "hardware",
        descricao: "Processador AMD Ryzen 7 com 8 núcleos e 16 threads.",
        imagem: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/51gRv8z+K6L._AC_SL1500_.jpg",
        emoji: "⚙️",
        cupom: "",
        link: "https://link.amazon/B011yRI53"
    },
    {
        nome: "Logitech G502 X PLUS LIGHTSPEED",
        preco: "R$ 699",
        loja: "Amazon",
        categoria: "perifericos",
        descricao: "Mouse Gamer Sem fio Logitech G G502 X PLUS.",
        imagem: "https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T4/images/I/617m54J4LbL._AC_SL1500_.jpg",
        emoji: "🎮",
        cupom: "",
        link: "https://link.amazon/B0hhKP6eH"
    },
    {
        nome: "SSD Kingston NV3 1TB",
        preco: "R$ 1.004,75",
        loja: "Amazon",
        categoria: "hardware",
        descricao: "SSD com até 6.000 MB/s de leitura.",
        imagem: "https://images.kabum.com.br/produtos/fotos/621162/ssd-pcie-kingston-nv3-1-tb-m-2-2280-nvme-leitura-6000-mb-s-e-gravacao-4000-mb-s-snv3s-1000g_1726082184_gg.jpg",
        emoji: "💾",
        cupom: "",
        link: "https://link.amazon/B0i9MvDgj"
    },
    {
        nome: "Controle sem fio PlayStation DualSense",
        preco: "R$ 379,00",
        loja: "Amazon",
        categoria: "perifericos",
        descricao: "Controle DualSense sem fio para PS5.",
        imagem: "https://images.kabum.com.br/produtos/fotos/1032834/controle-sem-fio-sony-dualsense-playstation-5-bluetooth-branco-3005767_1780666036_gg.jpg",
        emoji: "🎮",
        cupom: "",
        link: "https://link.amazon/B00yXkVt4"
    }
];
