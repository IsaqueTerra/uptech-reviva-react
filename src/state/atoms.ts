import { atom, RecoilState } from "recoil";
import { IProducts } from "data";

export const inventoryState: RecoilState<IProducts[]> = atom({
    key: 'InventoryState',
    default: [{
        id: 1,
        name: 'Blusa Plus Size Feminina Ampla Decote Malha Onça Preto Filipa by Reviva Fashion',
        url: 'blusa-plus-onca-preto',
        category: 'ultimos-lancamentos',
        price: 139.90,
        description: 'Ideal para compor looks com mood básico e estiloso, a Blusa Plus Size Feminina Ampla Decote Redondo Malha Onça Preto Filipa by Riachue é a escolha perfeita para você! Confeccionada em malha mista com linho, a blusa pode ser combinada com calça jogger e tênis casual, criando um look despojado!',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 2,
        images: [
            { url: '../../images/product-1/img1.jpg', description: 'Modelo com Blusa Preta, Plus Size, Gola Redonda, Manga 3/4, Pequenas Estampas de Onças na Cor Bege' },
            { url: '../../images/product-1/img2.jpg', description: 'Modelo com Blusa Preta, Plus Size, Gola Redonda, Manga 3/4, Pequenas Estampas de Onças na Cor Bege' },
            { url: '../../images/product-1/img3.jpg', description: 'Modelo de Costas com Blusa Preta, Plus Size, Gola Redonda, Manga 3/4, Pequenas Estampas de Onças na Cor Bege' }
        ],
    }, {
        id: 2,
        name: 'Blusa Plus Size Feminina Ampla Folhagem Preto Filipa by Reviva Fashion',
        url: 'blusa-plus-folhagem-preto',
        category: 'ultimos-lancamentos',
        price: 89.90,
        description: 'Ideal para compor looks versáteis e confortáveis, a Blusa Plus Size Feminina Ampla Folhagem Preto Filipa by Riachuelo é a escolha perfeita para você! Confeccionada em malha de viscose com elastano, a blusa pode ser combinada com saia midi e sandália, criando um visual elegante!',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 5,
        images: [
            { url: '../../images/product-2/img1.jpg', description: 'Modelo com Blusa Preta, Plus Size, Gola Canoa, Manga Curta, Estampa de Folhas na Cor Verde na Barra' },
            { url: '../../images/product-2/img2.jpg', description: 'Modelo com Blusa Preta, Plus Size, Gola Canoa, Manga Curta, Estampa de Folhas na Cor Verde na Barra' },
            { url: '../../images/product-2/img3.jpg', description: 'Modelo de Costas Blusa Preta, Plus Size, Gola Canoa, Manga Curta, Estampa de Folhas na Cor Verde na Barra' }
        ],
    }, {
        id: 3,
        name: 'Blusa Plus Size Feminina Gola Alta Manga Longa Canelada Verde Filipa by Reviva Fashion',
        url: 'blusa-plus-canelada-preto',
        category: 'ultimos-lancamentos',
        price: 79.90,
        description: 'A Blusa Plus Size Feminina Gola Alta Manga Longa Canelada Verde Filipa by Riachuelo é confeccionado em malha de toque macio e é perfeito para ter sempre à mão nos dias mais frios. O modelo fechado e com modelagem regular, é básico e versátil na hora de compor um look mais quentinho, mas sem deixar o mood charmoso. Aposte!',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 4,
        images: [
            { url: '../../images/product-3/img1.jpg', description: 'Modelo com Blusa Verde, Plus Size, Gola Alta Redonda, Manga Longa, Sem Estampas' },
            { url: '../../images/product-3/img2.jpg', description: 'Modelo com Blusa Verde, Plus Size, Gola Alta Redonda, Manga Longa, Sem Estampas' },
            { url: '../../images/product-3/img3.jpg', description: 'Modelo de Costas com Blusa Verde, Plus Size, Gola Alta Redonda, Manga Longa, Sem Estampas' }
        ],
    }, {
        id: 4,
        name: 'Blusa Plus Size Feminina Manga 7-8 Tricot Canelado Vermelho Filipa by Reviva Fashion',
        url: 'blusa-plus-tricot-vermelho',
        category: 'ultimos-lancamentos',
        price: 89.90,
        description: 'Aposte na Blusa Plus Size Feminina Manga 7/8 Malha Tricot Preto Filipa by Riachuelo, a escolha perfeita para criar looks versáteis e quentinhos com muito estilo! Confeccionado em tricot, apresenta modelagem ampla e mangas 7/8, puro charme! Perfeito para looks descolados e elegantes! Combine com jeans skinny e coturno para um visual moderno!',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 6,
        images: [
            { url: '../../images/product-4/img1.jpg', description: 'Modelo com Blusa na Cor Vermelho Escuro Mescla, Plus Size, Gola Redonda, Manga 7/8, Sem Estampas' },
            { url: '../../images/product-4/img2.jpg', description: 'Modelo com Blusa na Cor Vermelho Escuro Mescla, Plus Size, Gola Redonda, Manga 7/8, Sem Estampas' },
            { url: '../../images/product-4/img3.jpg', description: 'Modelo de Costas com Blusa na Cor Vermelho Escuro Mescla, Plus Size, Gola Redonda, Manga 7/8, Sem Estampas' }
        ],
    }, {
        id: 5,
        name: 'Calça Jeans Plus Size Feminina Cigarrete Denim Médio Filipa by Reviva Fashion',
        url: 'calca-jeans-plus-cigarrete',
        category: 'colecao-verao',
        price: 159.90,
        description: 'Diferente da skinny, que também é justa, mas o comprimento da barra é um pouco mais longo, a cigarrete termina no tornozelo. Sinônimo de modernidade e estilo, a Calça Jeans Plus Size Feminina Cigarrete Denim Médio é um toque de versatilidade ao look.',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 8,
        images: [
            { url: '../../images/product-5/img1.jpg', description: 'Modelo com Calça Jeans Cor Denim Médio, Plus Size, 2 Bolsos Frontais e 2 Traseiros, Comprimento Cigarrete, com Lavagem' },
            { url: '../../images/product-5/img2.jpg', description: 'Modelo com Calça Jeans Cor Denim Médio, Plus Size, 2 Bolsos Frontais e 2 Traseiros, Comprimento Cigarrete, com Lavagem' },
            { url: '../../images/product-5/img3.jpg', description: 'Modelo de Costas com Calça Jeans Cor Denim Médio, Plus Size, 2 Bolsos Frontais e 2 Traseiros, Comprimento Cigarrete, com Lavagem' }
        ],
    }, {
        id: 6,
        name: 'Top Cropped Jeans Feminino Denim Escuro Pool by Reviva Fashion',
        url: 'top-cropped-jeans-Pool',
        category: 'colecao-verao',
        price: 99.90,
        description: 'Com toque macio, este Top Cropped Jeans Feminino Denim Escuro Pool by Reviva Fashion traz a modelagem cropped e a praticidade do jeans. Em modelo com alcinhas ajustáveis, combine com vários bottoms dando um toque de casualidade ao seu look.',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 6,
        images: [
            { url: '../../images/product-6/img1.jpg', description: 'Modelo com Top Cropped Jeans, com Recorte Alça Média, Decote Princesa' },
            { url: '../../images/product-6/img2.jpg', description: 'Modelo com Top Cropped Jeans, com Recorte Alça Média, Decote Princesa' },
            { url: '../../images/product-6/img3.jpg', description: 'Modelo de Costas com Top Cropped Jeans, com Recorte Alça Média, Decote Princesa' }
        ],
    }, {
        id: 7,
        name: 'Top Cropped Plus Size Feminino Alças Franzidas Abstrato Marrom Filipa by Reviva Fashion',
        url: 'top-cropped-alcas-franzidas',
        category: 'colecao-verao',
        price: 129.90,
        description: 'Ideal para compor looks com mood romântico e estiloso, o Top Cropped Plus Size Feminino Alças Franzidas Abstrato Marrom Filipa by Riachuelo é a escolha perfeita para você! Confeccionado em viscose, o top pode ser combinado com calça jogger de cintura alta e sandália, criando um visual incrível!',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 3,
        images: [
            { url: '../../images/product-7/img1.jpg', description: 'Modelo com Top Cropped, Plus Size, com Recorte Alça Média, Decote Princesa, Estampa Abstrata Marrom' },
            { url: '../../images/product-7/img2.jpg', description: 'Modelo com Top Cropped, Plus Size, com Recorte Alça Média, Decote Princesa, Estampa Abstrata Marrom' },
            { url: '../../images/product-7/img3.jpg', description: 'Modelo de Costas com Top Cropped, Plus Size, com Recorte Alça Média, Decote Princesa, Estampa Abstrata Marrom' }
        ],
    }, {
        id: 8,
        name: 'Camisa Plus Size Feminina Manga Longa Abstrata Marrom Filipa by Reviva Fashion',
        url: 'camisa-plus-size-marrom',
        category: 'colecao-verao',
        price: 179.90,
        description: 'Clássica e atemporal, a Camisa Plus Size Feminina Manga Longa Abstrata Marrom Filipa by Riachuelo é a escolha ideal para looks estilosos e fashionistas! Confeccionada em tecido de algodão, a peça apresenta modelagem ampla e modelo despojado. Experimente combinar com calça skinny e scarpin para um visual elegante!',
        size_avaliable: ['P', 'M', 'G'],
        quantity_avaliable: 3,
        images: [
            { url: '../../images/product-8/img1.jpg', description: 'Modelo com Camisa, Manga Longa, Estampa Abstrata Marrom' },
            { url: '../../images/product-8/img2.jpg', description: 'Modelo com Camisa, Manga Longa, Estampa Abstrata Marrom' },
            { url: '../../images/product-8/img3.jpg', description: 'Modelo de Costas com Camisa, Manga Longa, Estampa Abstrata Marrom' }
        ],
    }],
});

export const postListState: RecoilState<IProducts[]> = atom({
    key: 'PostList',
    default: inventoryState,
});

export const cartListState: RecoilState<IProducts[]> = atom({
    key: 'CartList',
    default: [] as IProducts[]
});

export const routes: RecoilState<boolean> = atom({
    key: 'Routes',
    default: true
});