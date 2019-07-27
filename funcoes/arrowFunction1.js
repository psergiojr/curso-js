let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá' // o underscore é o nome do parâmetro. neste caso, é apenas ignorado
console.log(ola())