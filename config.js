const imagemVisualizacao = document.getElementById("imagem-visualizacao")
const tituloProduto = document.getElementById("titulo-produto")

const opcaoImagemCor = document.getElementById("selecao-cores")
const nomeCorProduto = document.getElementById("nome-cor-selecionada")

const imagemSlide0 = document.getElementById("0-imagem-miniatura")
const imagemSlide1 = document.getElementById("1-imagem-miniatura")
const imagemSlide2 = document.getElementById("2-imagem-miniatura")

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
};

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
};

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
};

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let tamanhoSelecionado = 1;
let imagemSelecionada = 1;
let corSelecionada = 1;

function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada +'.jpeg';
}

function trocarTamanho() {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de "+ opcoesTamanho[tamanhoSelecionado];
    
    if (tamanhoSelecionado==0) {
        imagemVisualizacao.classList.add('caixa-pequena')
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
    
}

function trocarCor(){
    const idOpcaoCorSelecionada = document.querySelector('[ name="opcao-cor" ]:checked').id;
    corSelecionada = idOpcaoCorSelecionada.charAt(0);
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[corSelecionada].nome +" para caixa de "+ opcoesTamanho[tamanhoSelecionado];
    nomeCorProduto.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome
    imagemVisualizacao.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-'+ imagemSelecionada +'.jpeg';

    imagemSlide0.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-'+ 0 +'.jpeg';
    imagemSlide1.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-'+ 1 +'.jpeg';
    imagemSlide2.src = './imagens/opcoes-cores/'+ opcoesCores[corSelecionada].pasta + '/imagem-'+ 2 +'.jpeg';
}