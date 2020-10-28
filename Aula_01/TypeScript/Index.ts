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

// Exemplo de Arrow Functions  //  Example of Arrow Functions //

//  são na verdade um resumo da sintaxe de uma função, sendo capaz de resumir uma função em 1 linha por exemplo  //  are actually a syntax summary of a function, being able to summarize a function in 1 line for example // functions that receive  //


const test: Function = () => {return console.log("1")}
const test: Function = () => console.log("1")     //  se for apenas 1 linha de código pode ser feita dessa maneira e ele automáticamente retorna o resultado  //  if it is, only 1 line can be made this way, and it automatically returns the result  //

setTimeout(test, 1000)

console.log(2)

//-------------------------------------------------------------------------------------------------//

const loading: number = setInterval( () => console.log('loading...'), 500)

//  Como este possui mais de 1 linha deverá ser feito desta forma  //  As it has more than 1 line it should be done this way  //

setTimeout((): void => { 
    clearInterval(loading)
    console.log('loaded')
},3000)

//-------------------------------------------------------------------------------------------------//

// 1º Maneira // 1º way //

const message: Function = function(name: string) {
    return "Hello" + name
}

console.log (message('Felipe'))

// 2º Maneira // 2º way //

const message: Function =  (name:string):string => "Hello" + name

console.log (message('Felipe')) 

//-------------------------------------------------------------------------------------------------//

const som = (x:number, y:number):number => x + y

console.log(som(4, 7))

//////////////////////////////////////////////////////////////////////////////////
