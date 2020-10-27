/*
// Exemplo de funções de primeira classe  //  Example of first class functions //

// funçoes se tornam um tipo de dado e podem ser armazenado em variaveis;


const getName: Function = function (): void {

    console.log('Felipe')
}

getName();


//////////////////////////////////////////////////////////////////////////////////

// Exemplo de funções Call Back  //  Example of Call Back functions //

// funçoes que recebem / podem receber outras funçoes como parametro  //  functions that receive / can receive other functions like parameter  //


const loading: number =  setInterval(function(): void{
    console.log('loading...');
}, 500)

setTimeout(function(): void{
    clearInterval(loading)
    console.log('loaded')
},3000)


//////////////////////////////////////////////////////////////////////////////////
*/