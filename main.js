const form = document.getElementById(`form-atividade`)
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoje celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoje decepcionado" />'
const atividades = []
const notas = []
const spanAprovado = `<span class = "resultado aprovado">Aprovado</span>`
const spanReprovado = `<span class = "resultado reprovado">Reprovado</span>`
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))

let linhaS = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`)
      } else {
        atividades.push(inputNomeAtividade.value)
        notas.push(parseFloat(inputNotaAtividade.value))

        let linha =`<tr>`
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`

        linhaS += linha
    }

    inputNomeAtividade.value = ' '
    inputNotaAtividade.value = ' '
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhaS
}


function calculaMediaFinal(){
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}


function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()

    document.getElementById(`media-final-valor`).innerHTML = mediaFinal.toFixed(2)
    document.getElementById(`media-final-resultado`).innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}