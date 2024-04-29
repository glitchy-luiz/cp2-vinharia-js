let precoVinho1 = 129.99
let precoVinho2 = 149.99
let precoVinho3 = 189.99

function verificarIdade() {
    var idade = parseInt(document.getElementById('idadeInput').value);
    if (idade >= 18) {
      window.location.href = 'home.html';
    } else {
      alert("É preciso ser maior de idade para acessar a loja")
    }
  }

function comprar(){
    alert('adicionado ao carrinho com sucesso')
}

function precototal(){
    let qtd = document.getElementById('quantidade').value
    let cupom = document.getElementById('cupom').value
    let total = qtd * precoVinho1
    let desc = ''
    if (cupom == 'FIAP2024'){
        total = total - (total * 0.1)
        desc = ' Desconto de 10%'
    }
    resultado = document.getElementById('resultado-total').innerHTML = 'O total fica ' + total + 'R$'+ desc
}
function precototal2(){
    let qtd = document.getElementById('quantidade').value
    let cupom = document.getElementById('cupom').value
    let total = qtd * precoVinho2
    let desc = ''
    if (cupom == 'FIAP2024'){
        total = total - (total * 0.1)
        desc = ' Desconto de 10%'
    }
    resultado = document.getElementById('resultado-total').innerHTML = 'O total fica ' + total + 'R$'+ desc
}
function precototal3(){
    let qtd = document.getElementById('quantidade').value
    let cupom = document.getElementById('cupom').value
    let total = qtd * precoVinho3
    let desc = ''
    if (cupom == 'FIAP2024'){
        total = total - (total * 0.1)
        desc = ' Desconto de 10%'
    }
    resultado = document.getElementById('resultado-total').innerHTML = 'O total fica ' + total + 'R$'+ desc
}

function entrar(){
    let user = document.getElementById('user').value
    let senha = document.getElementById('senha').value

    if (user == '1234' && senha == '1234'){
        window.location.href = 'home.html'
    }
    else{
        alert('Usuário e/ou senha estão incorretas')
    }
}

function enviar(){
    alert('Mensagem enviada com sucesso')
}

function verreceita(){
    vinho = document.getElementById("recvinho").value

    switch (vinho){
        case 'tinto':
            titreceita = document.getElementById('titreceita1').innerHTML ="Receitas de vinho tinto"
            nomerec = document.getElementById('nomerec').innerHTML ="Molho de Vinho Tinto para Massas"
            ingtit = document.getElementById('ingtit').innerHTML ="Ingredientes: "
            ingrediente1 = document.getElementById('ingrediente1').innerHTML ="1 xícara de vinho tinto seco"
            ingrediente2 = document.getElementById('ingrediente2').innerHTML ="2 colheres de sopa de azeite de oliva"
            ingrediente3 = document.getElementById('ingrediente3').innerHTML ="2 dentes de alho picados"
            ingrediente4 = document.getElementById('ingrediente4').innerHTML ="200g de cogumelos frescos fatiados"
            ingrediente5 = document.getElementById('ingrediente5').innerHTML ="Sal e pimenta a gosto"
            modoprep = document.getElementById('modoprep').innerHTML ="Modo de preparo:"
            preparo = document.getElementById('preparo').innerHTML ="Em uma frigideira, aqueça o azeite e refogue o alho até dourar levemente. Adicione os cogumelos fatiados e cozinhe até ficarem macios. Despeje o vinho tinto na frigideira e deixe reduzir pela metade, mexendo ocasionalmente. Tempere com sal e pimenta a gosto. Sirva sobre massas cozidas e finalize com queijo parmesão ralado, se desejar."
            break

        case 'branco':
            titreceita = document.getElementById('titreceita1').innerHTML ="Receitas de vinho branco"
            nomerec = document.getElementById('nomerec').innerHTML ="Camarão ao Molho de Vinho Branco"
            ingtit = document.getElementById('ingtit').innerHTML ="Ingredientes: "
            ingrediente1 = document.getElementById('ingrediente1').innerHTML ="500g de camarão limpo"
            ingrediente2 = document.getElementById('ingrediente2').innerHTML ="1 xícara de vinho branco seco"
            ingrediente3 = document.getElementById('ingrediente3').innerHTML ="4 dentes de alho picados"
            ingrediente4 = document.getElementById('ingrediente4').innerHTML ="2 colheres de sopa de manteiga"
            ingrediente5 = document.getElementById('ingrediente5').innerHTML ="1/2 xícara de creme de leite"
            modoprep = document.getElementById('modoprep').innerHTML ="Modo de preparo:"
            preparo = document.getElementById('preparo').innerHTML ="Em uma frigideira, derreta a manteiga e refogue o alho picado até dourar levemente. Adicione os camarões e cozinhe até ficarem rosados. Acrescente o vinho branco e deixe reduzir pela metade. Adicione o creme de leite e mexa até obter um molho cremoso. Tempere com sal e pimenta a gosto. Sirva quente acompanhado de arroz branco."
            break
        
        case 'rose':
            titreceita = document.getElementById('titreceita1').innerHTML ="Receitas de vinho Rosé"
            nomerec = document.getElementById('nomerec').innerHTML ="Sorvete de Frutas Vermelhas com Vinho Rosé"
            ingtit = document.getElementById('ingtit').innerHTML ="Ingredientes: "
            ingrediente1 = document.getElementById('ingrediente1').innerHTML ="2 xícaras de frutas vermelhas (morangos, framboesas, mirtilos, etc.)"
            ingrediente2 = document.getElementById('ingrediente2').innerHTML ="1/2 xícara de açúcar"
            ingrediente3 = document.getElementById('ingrediente3').innerHTML ="1/4 xícara de vinho rosé"
            ingrediente4 = document.getElementById('ingrediente4').innerHTML ="Suco de meio limão"
            modoprep = document.getElementById('modoprep').innerHTML ="Modo de preparo:"
            preparo = document.getElementById('preparo').innerHTML ="Em um liquidificador, combine as frutas vermelhas, o açúcar, o vinho rosé e o suco de limão. Bata até obter uma mistura homogênea. Despeje a mistura em uma forma e leve ao freezer por pelo menos 4 horas, ou até que esteja firme. Sirva o sorvete de frutas vermelhas com colheradas de frutas frescas por cima, se desejar."
            break
    }
}