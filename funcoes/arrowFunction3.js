let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
// o 'this' neste caso fica associado a quem executou a função

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // o this em uma arrow function nao pode ser alterado com bind
comparaComThisArrow(module.exports)