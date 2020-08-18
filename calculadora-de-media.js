const input = require("readline-sync")

console.log("Vamos descobrir se você foi aprovado? Coloque suas notas conforme o solicitado a seguir")

const nota1 = input.question("Primeira nota: ")
const nota2 = input.question("Segunda nota: ")
const nota3 = input.question("Terceira nota: ")
const nota4 = input.question("Quarta nota: ")
const nota5 = input.question("Quinta nota: ")
const nota6 = input.question("Sexta nota: ")

const totalNotas = parseFloat (nota1) + parseFloat (nota2) + parseFloat (nota3) + parseFloat (nota4) + parseFloat (nota5) + parseFloat (nota6)

const mediaFinal = totalNotas/6
console.log("Sua média final foi " + mediaFinal.toFixed(2))

if (mediaFinal >= 7) {
console.log("Sua situação é: Aprovado. Parabéns!")
}
if (mediaFinal < 5) {
    console.log("Sua situação é: Reprovado. Lamentamos muito, mas não desista.")
}
if (mediaFinal >= 5 && mediaFinal < 7) {
    console.log("Sua situação é: Recuperação. Não se desespere, você ainda tem chance de recuperar.")
}

