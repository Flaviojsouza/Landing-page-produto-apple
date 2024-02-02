const imagemVisualizacao = document.getElementById("imagem-visualizacao")

const azulInverno = {
    nome: 'Azul-inverno',
    pasta: 'imagens-azul-inverno'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta: 'imagens-meia-noite'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'imagens-verde-cipreste'
}

const opcoesCores = [azulInverno,estelar,meiaNoite,rosaClaro,verdeCipreste]
const opcoesTamanho = ['41 mm', '45 mm'];
let tamanhoSelecionado = 1;

let imagemSelecionada = 1;

function trocarImagem(){
    const idOpçãoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpçãoSelecionada.charAt(0);
    imagemVisualizacao.src = './imagens/opcoes-cores/imagens-azul-inverno/imagem-'+ imagemSelecionada +'.jpeg'
}