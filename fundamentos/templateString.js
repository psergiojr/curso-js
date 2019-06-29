const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

// Arrow functions, a ser explicado posteriormente no curso
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)