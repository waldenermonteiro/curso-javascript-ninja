/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = ['junior', 22, true, false, undefined]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray(array) {
    return array
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArray(myarray)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function returnArrayInIndice(array, i) {
    return array[i]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = ['junior', 22, true, false, undefined]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(returnArrayInIndice(myarray2, 0))
console.log(returnArrayInIndice(myarray2, 1))
console.log(returnArrayInIndice(myarray2, 2))
console.log(returnArrayInIndice(myarray2, 3))
console.log(returnArrayInIndice(myarray2, 4))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(book) {
    var object = {
        'Código da Vinci': {
            quantidadePaginas: 300,
            autor: 'Dan Brown',
            editora : 'Pocket Books'
        },
        'Anjos e Demônios': {
            quantidadePaginas: 320,
            autor: 'Dan Brown',
            editora : 'Pocket Books'
        },
        'Inferno': {
            quantidadePaginas: 330,
            autor: 'Dan Brown',
            editora : 'Pocket Books'
        }

    }

    return book ? object[book]: object


}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Anjos e demonios tem ${book('Anjos e Demônios').quantidadePaginas} páginas`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Código da Vinci é ${book('Código da Vinci').autor}`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro Código da Vinci foi publicado pela editora ${book('Código da Vinci').editora}`)
