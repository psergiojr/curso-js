/**
 * As variaveis sao 'içadas', ou seja, independente de onde ela for declarada,
 * elas sao declaradas antes da execucao de qualquer outro codigo.
 * 
 * Isso faz com que uma variavel possa ser usada antes de ser declarada num
 * código
 */

console.log('a =', a)
var a = 2
console.log('a =', a)


// O hoisting nao funciona com let
console.log('b =', b)
let b = 2
console.log('b =', b)