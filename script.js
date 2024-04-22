let precoVinho1 = 129.99

function verificarIdade() {
    var idade = parseInt(document.getElementById('idadeInput').value);
    if (idade >= 18) {
      window.location.href = 'home.html';
    } else {
      window.location.href = 'https://www.siteexterno.com'; 
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