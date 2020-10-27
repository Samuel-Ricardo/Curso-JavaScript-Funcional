// Exemplo de uso de funções simultâneas assíncronas  //  Example of using asynchronous simultaneous functions //



setTimeout(function() {
    console.log("oi 1")
}, 5000)

const myFunction = function () {
    console.log("oi 3")
}

setTimeout(myFunction, 5000)

console.log('oi 2')




//////////////////////////////////////////////////////////////////////////////////

