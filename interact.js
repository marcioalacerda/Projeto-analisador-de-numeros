let num = document.getElementById('fnum') //recebendo o input
let lista = document.getElementById('flista') //recebendo o select
let res = document.getElementById('res') //recebendo o espaço para enviar o resultado
let valores = [] // esse é o meu vetor 

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) { //indexOF() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value)) // adicionando elemento na lista
        let item = document.createElement('option') // criando elemento do select
        item.text = `Valor ${num.value} adicionado` //recebendo mensagem
        lista.appendChild(item) //mostrando a mensagem "item" na linha "option"
        res.innerHTML = '' //limpa o espaço
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // limpa o input
    num.focus() // ativa o input para receber dados
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione os valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = '' //limpa o espaço
        res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrado(s).</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}