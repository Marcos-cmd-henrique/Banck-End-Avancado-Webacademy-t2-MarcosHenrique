
/* Desafio: Armazene 5 dados numéricos em um vetor. Em seguida, 
copie para um objeto com as propriedades n1, n2, n3, n4 e n5. 
Utilize destructuring para copiar os valores para 5 variáveis. 
Construa um objeto JSON com os valores das variáveis.*/

const vectorChallenge = [77,45,3,8,123]

const objectChallenge = {
    n1: vectorChallenge[0],
    n2: vectorChallenge[1],
    n3: vectorChallenge[2],
    n4: vectorChallenge[3],
    n5: vectorChallenge[4],
}

const {n1, n2, n3, n4, n5} = objectChallenge

console.log(JSON.stringify({n1,n2,n3,n4,n5}))

/* Desafio: Desenvolva uma calculadora que armazene em um objeto JSON o 
resultado das 4 operações básicas. Em outras palavras: crie um objeto 
calculadora, inicialize cada uma das operações da calculadora (que serão propriedades 
    do objeto) com o resultado do processamento matemático vindo de duas variáveis e 
    converta para um objeto JSON. */

const num1 = 10
const num2 = 20
const calc = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}
console.log(JSON.stringify(calc))