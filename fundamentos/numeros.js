const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 7.7777
const avaliacao2 = 7.555

console.log(Number.isInteger(avaliacao1))
console.log(Number.isInteger(avaliacao2))

const total = peso1 * avaliacao1 + peso2 * avaliacao2
media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)