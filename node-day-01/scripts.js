/* const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); */

//callback 

/* const fs = require('fs')
const { isGeneratorFunction } = require('util/types')
console.log('Primeiro comando.')
fs.readFile('./text.txt',callback)
function callback(err,content){
    if(err) return console.log('erro')
    console.log(String(content))
}

console.log('Segundo comando.')
console.log('Terceiro comando.') 


//utilizando programação assíncrona 
setTimeout(myFunction, 3000)
function myFunction() {
    console.log('Testando a função...') 
}
console.log('comando que esta após setTimeout')  */

//mesmo código com função anonima e arrow function 

/* const fs = require('fs')
const { isGeneratorFunction } = require('util/types')
console.log('Primeiro comando.')
fs.readFile('./text.txt',callback)
function callback(err,content){
    if(err) return console.log('erro')
    console.log(String(content))
}

console.log('Segundo comando.')
console.log('Terceiro comando.') 


//utilizando programação assíncrona. Função anonima e arrow Function 
setTimeout(() => console.log('Testando a função...'), 3000) 
console.log('comando que esta após setTimeout')    */

const fs = requise('fs')
console.log('Primeiro comando.')
fs.readFile('./text.txt',comcallback)

function comcallback(){
const data = new novaData(){ 
    console.log(`A hora é ${data.getHours()}, os minutos são ${data.getMinutes()}, ${data.getSeconds()}`) 
} 
}  

setTimeout(yesFunction, 5000)
function yesFunction() {
    console.log('Testando a função do Marcos...') 
}
console.log('comando que esta após setTimeout no teste do marcos')
