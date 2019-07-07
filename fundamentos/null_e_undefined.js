/**
 * Ao usar tipos primitivos, JavaScript faz uma atribuição por valor,
 * ou seja, uma cópia do valor é passada para um novo objeto independente.
 * 
 * Ao usar objetos, JS faz atribuição por referência, ou seja, várias
 * variáveis apontam para o mesmo objeto.
 */

let valor // declarada, mas não foi inicializada
console.log(valor) // undefined

valor = null // inicializada, mas não aponta para valor nenhum (vazia)
console.log(valor) // null
// console.log(valor.toString()) // Erro

const produto = {}
console.log(produto.preco) // undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // EVITE FAZER ISSO
console.log(!!produto.preco)
console.log(produto)
// delete produto.preco // remove o atributo preco de produto

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)