/*


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

// Exemplo de funções de primeira classe  //  Example of first class functions //

// funçoes se tornam um tipo de dado e podem ser armazenado em variaveis // functions become a data type and can be stored in variables  //


const getName = function () {

    console.log('Felipe')
}

getName();


//////////////////////////////////////////////////////////////////////////////////


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

// Exemplo de Arrow Functions  //  Example of Arrow Functions //

//  são na verdade um resumo da sintaxe de uma função, sendo capaz de resumir uma função em 1 linha por exemplo  //  are actually a syntax summary of a function, being able to summarize a function in 1 line for example // functions that receive  //


const test = () => {return console.log("1")}
const test = () => console.log("1")     //  se for apenas 1 linha de código pode ser feita dessa maneira e ele automáticamente retorna o resultado  //  if it is, only 1 line can be made this way, and it automatically returns the result  //

setTimeout(test, 1000)

console.log(2)

//-------------------------------------------------------------------------------------------------//

const loading = setInterval( () => console.log('loading...'), 500)

//  Como este possui mais de 1 linha deverá ser feito desta forma  //  As it has more than 1 line it should be done this way  //

setTimeout(() => { 
    clearInterval(loading)
    console.log('loaded')
},3000)

//-------------------------------------------------------------------------------------------------//

// 1º Maneira // 1º way //

const message = function(name) {
    return "Hello" + name
}

console.log ('Felipe') 

// 2º Maneira // 2º way //

const message =  name => "Hello" + name

console.log ('Felipe') 

//-------------------------------------------------------------------------------------------------//

const som = (x, y) => x + y

console.log(som(4, 7))

//////////////////////////////////////////////////////////////////////////////////

// Exemplo de funções Puras e Impuras  //  Example of Pure and Impure functions //

// Exemplo de funções Puras e Impuras Estão diretamente relacionada com o conceito de "IMUTABILIDADE" do paradigma funcional // Example of Pure and Impure functions They are directly related to the "IMUTABILITY" concept of the functional paradigm  //


// Funçao Impura // Impure functions //

//  Modifica ou Trabalha com estados que podem ser modificados  //  Modify or Work with states that can be modified  //

//-------------------------------------------------------------------------------------------------//

// o resultado da soma é incerto e depende do valor/estado de x  // the result of the sum is uncertain and depends on the value / state of x //

const x = 10

const impureSum = y => x + y 

console.log(impureSum(3))

//-------------------------------------------------------------------------------------------------//
// Aqui pode ser mais claro de observar, pois ele vai alterar diretamente o estado da variavel "Z", pois quando eu chamar a primeira vez o resultado será "14"  e este passa a ser o novo estado de 'Z', e quando eu chamar novamente eu terei um resultado diferente do esperado (que seria 15), pois o "Z" nao é mais igual a "10" e sim a "14" devido a ultima chamada da funçao, se por exemplo ambas funçoes fossem executadas simultaneamente poderia quebrar sua aplicaçao pois o resultado depende de qual chamada for executada primeiro, tornando assim o comportamento do seu app instável  //
//-------------------------------------------------------------------------------------------------//
// Here it can be clearer to observe, as it will directly change the state of the variable "Z", because when I call the first time the result will be "14" and this becomes the new state of 'Z', and when i call again i will have a different result than expected (which would be 15), because the "Z" is no longer equal to "10" but "14" due to the last function call, if for example both functions were executed simultaneously it could break your application because the result depends on which call is executed first, thus making your app's behavior unstable //
//-------------------------------------------------------------------------------------------------//

let z = 10
const impureSumInz = y => z += y

console.log(impureSumInz(4))
console.log(impureSumInz(5))


//-------------------------------------------------------------------------------------------------//

// Funçao Pura // Pure functions //

//  Utiliza o conceito de “Imutabilidade”, ou seja, nenhum estado será alterado dentro desta função, os dados são passados como parâmetro, consequentemente a função pode ser isolada  //  It uses the concept of "Immutability", that is, no state will be changed within this function, the data are passed as a parameter, consequently the function can be isolated  //

//-------------------------------------------------------------------------------------------------//

// o resultado e a execuçao da soma nao altera nenhum estado fora da funçao  // the result of the sum is uncertain and depends on the value / state of x //

const pureSum = (x,y) => x + y 

console.log(pureSum(7, 5))
console.log(pureSum(10, 5))

//-------------------------------------------------------------------------------------------------//
// Pode-se notar que independente da ordem em que as funções são executadas, o resultado de uma não influenciará na outra, tendo assim os resultados esperados (Ex: 10 + 5 = 15)  //
//-------------------------------------------------------------------------------------------------//
//  It can be noted that regardless of the order in which the functions are executed, the result of one will not influence the other, thus having the expected results (Ex: 10 + 5 = 15) //
//-------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------//
//REST//

//  Pode Receber uma quantidade variavel e/ou infinita de parametros, transformando a variavel em um array com os valores // Can receive a variable and/or infinite number of parameters, transforming the variable into an array with the values //

function sum (... num) {  

    let result = 0;

    for(var index = 0; index < num.length ; index++){

        result += num[index]
    }
    return result
}

console.log(sum(1,10,20,4))
//-------------------------------------------------------------------------------------------------//
//SPREAD//

const person = {
    name: 'Felipe',
    age: 14
}

// pode herdar e/ou sobrescrever os atributos e valores do objeto person  // can inherit and/or overwrite the attributes and values of the person object  //

const person2 = {  
    ...person,
    name: "James",
    sobreNome: 'pietro',
}

console.log(person2)

const numbers = [1,5,4,8,9]
const numbers2 = [...numbers,2,3] //mesclar os array

console.log(numbers2)
//-------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------//
//MAP // FILTER // REDUCE//

const nums = [1,4,6,5,7,7,8,9,10]

//-------------------------------------------------------------------------------------------------//
//MAP: Ele fará a varredura da matriz e cada vez que encontrar um índice, o MAP executará a função  //  It will scan the array and each time it finds an index the MAP performs the function  //
//-------------------------------------------------------------------------------------------------//

//const newNums_1 = nums.map(function(num){
//
//    return num * 2;
//})
//
//

const newNums_1 = nums.map(num => num * 2)

console.log(newNums_1)

//-------------------------------------------------------------------------------------------------//
//FILTER: funciona da mesma forma que o MAP, porém, só retorna os valores que correspondem à condição, formando assim um filtro  //  it works in the same way as the MAP, however, it only returns the values ​​that match the condition, thus making a filter  //
//-------------------------------------------------------------------------------------------------//

const newNums_2 = nums.filter(num => num % 2 != 0)  // retorna apenas os números ímpares // returns only the odd numbers

// return if true



//if(true){
//    return
//}



console.log(newNums_2)

//-------------------------------------------------------------------------------------------------//
//REDUCE: funciona da mesma maneira que o MAP, porém, ele irá reduzir o array a apenas 1 valor //  works in the same way as MAP, however, it will reduce the array to just 1 value //
//-------------------------------------------------------------------------------------------------//

const sum = nums.reduce((acumulator, number) => acumulator + number , 0)

// Vai retornar a soma de todos os valores do array // Will return the sum of all values in the array //

//reduce(function, valor inicial)

console.log(sum)
//-------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------------//
//PROMISE//: executa um código de forma assíncrona e quando a execução termina, ele retorna "reject"(erro) ou "resolve"(sucesso) 

//PROMISE//: execute a code asynchronously and when the execution is finished it returns "reject" (error) or "resolve" (success)
/////////////////////////////////////////////////////////////////////////////////////////////////////
// constrói algo que pode retornar algo no futuro ou não retornar nada, permitindo executar algo em simultâneo//
// build something that can return something in the future or return nothing, allowing you to run something simultaneously //
//-------------------------------------------------------------------------------------------------//
const val = true
//-------------------------------------------------------------------------------------------------//

const stop_1 = new Promise((resolve,reject) => {  //OBJECT

    setTimeout(()=>{

            console.log(1)

            if(!val){
                reject("Erro")
                return
        }

            setTimeout(()=>{

                console.log(2)
                resolve('Fim')
            },2000)

        },2000)

})
//-------------------------------------------------------------------------------------------------//
stop_1.then(message => console.log(message)).catch(error => console.log(' ERR: ', error))
//-------------------------------------------------------------------------------------------------//

 function stop_2 (time){  //FUNCTION

    return new Promise((resolve,reject) =>{

        setTimeout(()=>{

            console.log(1)
    
            if(!val){
                reject("Erro")
                return
            }
    
                setTimeout(()=>{
        
                    console.log(2)
                    resolve('Fim')
                },time)
        
            },2000)
    })
}
//-------------------------------------------------------------------------------------------------//
stop_2(3000).then(message => console.log(message)).catch(error => console.log(' ERR: ', error))
//-------------------------------------------------------------------------------------------------//

//-------------------------------------------------------------------------------------------------//
// vai executar todas as promise e exebir uma mensagem quando terminar todas as execuçoes //
// will execute all promises and display a message when all executions are finished //
//-------------------------------------------------------------------------------------------------//

Promise.all([stop_1,
            stop_2(3000)]).then(() => console.log('All Promises comleted'))
            .catch(error => console.log(error))


//-------------------------------------------------------------------------------------------------//
// vai executar todas as promise e exebir a mensagem da que terminar primeiro //
// will execute all promises and display the message that finishes first //
//-------------------------------------------------------------------------------------------------//

Promise.race([
    stop_1,
    stop_2(3000)
]).then(message => console.log('One Promise conpleted: '+ message))
  .catch(error => console.log(error))
//-------------------------------------------------------------------------------------------------//
*/



permitindo executar algo em simultâneo
allowing you to run something simultaneously



