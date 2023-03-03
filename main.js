const form = document.getElementById(`form-agenda`)
const Nome = []
const Tel = []

let linhaS = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()

   })

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato')
    const inputTELContato = document.getElementById('fone-contato')

    if(Nome.includes(inputNomeContato.value)){
        alert(`A atividade ${inputNomeContato.value} já foi inserida`)
      } else {
        Nome.push(inputNomeContato.value)
        Tel.push(parseFloat(inputTELContato.value))

        let linha =`<tr>`
        linha += `<td>${inputNomeContato.value}</td>`
        linha += `<td>${inputTELContato.value}</td>`
        linha += `</tr>`

        linhaS += linha
    }

    inputNomeContato.value = ' '
    inputTELContato.value = ' '
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhaS
}
