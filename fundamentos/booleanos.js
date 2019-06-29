let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // "converte" o valor numerico em booleano

console.log('aceitos como verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('aceitos como falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || 'epa')) // operadores lógicos
console.log(('' || null || 0 || 'epa')) // retorna o primeiro resultado verdadeiro

// operador || pode ser usado para atribuir valores default
let nome = ''
console.log(nome || 'Desconhecido')
