/*// Exemplo de uso de funções simultâneas assíncronas  //  Example of using asynchronous simultaneous functions //



setTimeout(function() {
    console.log("oi 1")
}, 5000)

const myFunction = function () {
    console.log("oi 3")
}

setTimeout(myFunction, 5000)

console.log('oi 2')




//////////////////////////////////////////////////////////////////////////////////*/

/*// Exemplo de funções de primeira classe  //  Example of first class functions //

// funçoes se tornam um tipo de dado e podem ser armazenado em variaveis // functions become a data type and can be stored in variables  //


const getName = function () {

    console.log('Felipe')
}

getName();


//////////////////////////////////////////////////////////////////////////////////
*/

// Exemplo de funções Call Back  //  Example of Call Back functions //

// funçoes que recebem / podem receber outras funçoes como parametro  //  functions that receive / can receive other functions like parameter  //


const loading = setInterval(function(){
    console.log('loading...');
}, 500)

setTimeout(function(){
    clearInterval(loading)
    console.log('loaded')
},3000)


//////////////////////////////////////////////////////////////////////////////////