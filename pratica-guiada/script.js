// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!




// Prática guiada
// //Arrow Function
// const olaNomeArrow = (nome) => {
//   console.log(`Olá ${nome}`);
// }
// olaNomeArrow('Simone')
// olaNomeArrow('João')
// olaNomeArrow('Maria')
//______________________________________________
// // Função não nomeada
// const olaNomeAnon = function (nome) {
//   console.log(`Olá ${nome}`);
// }
// olaNomeAnon('Pedro')
// olaNomeAnon('José')
// olaNomeAnon('Francisco')
//_______________________________________________
//Prática guiada
//Funções, variáveis e operadores
// const funcNumero = function(numero){
//   const result = numero % 2 == 0
//   const soma10 = numero + 10
//   const multiplica = numero * numero
//   return (`Número ${numero} é par? ${result} 
//   Número ${numero} mais 10 = ${soma10}
//   Número ${numero} multiplicado por ele mesmo é ${multiplica}`);
//   //return (`Número ${numero} mais 10 = ${soma10}`);
//   //return (`Número ${numero} multiplicado por ele mesmo é ${multiplica}`);
//   // console.log(`Número ${numero} é par? ${result}`);
//   // console.log(`Número ${numero} mais 10 = ${soma10}`);
//   // console.log(`Número ${numero} multiplicado por ele mesmo é ${multiplica}`);
// }
// console.log(funcNumero(5)); 
// console.log(funcNumero(10)); 
// console.log(funcNumero(100)); 
// console.log(funcNumero(37)); 

//_________________________________________________

// const funcNumero = (numero) =>{
//     const result = numero % 2 === 0
//     console.log(`Número ${numero} é par? ${result}`);
//     const soma10 = numero + 10
//     console.log(`Número ${numero} mais 10 = ${soma10}`);
//     const multiplica = numero * numero
//     console.log(`Número ${numero} multiplicado por ele mesmo é ${multiplica}`);
// }
// funcNumero(5)
// funcNumero(11)
// funcNumero(12)
//funcNumero(soma10) Retorna (caught ReferenceError: soma10 is not defined)
//_________________________________________________
// LOGIN E SENHA
// const acesso = function (login, senha) {
//   const loginAcesso = ("loginArmazenado")
//   const senhaAcesso = ("senhaArmazenada")
//   const result = (login === "loginArmazenado") && (senha === "senhaArmazenada")
//   console.log(result)
// }
// acesso("loginArmazenado","senhaArmazenada")
// acesso("loginArmazenado", "outraSenha")
// acesso("arroz", "senhaArmazenada")
// acesso("loginErrado", "senhaErrada")
//____________________________________________________
// LOGIN E SENHA COM ARROW FUNCTION
const acesso = (login, senha) => {
  const loginArmazenado = "sivilela.s@gmail.com"
  const senhaArmazenada = "123456"
  return loginArmazenado === login && senhaArmazenada === senha
}
console.log(acesso("loginArmazenado","senhaArmazenada"))
console.log(acesso("loginArmazenado", "outraSenha"))
console.log(acesso("arroz", "senhaArmazenada"))
console.log(acesso("sivilela.s@gmail.com", "123456"))
//_________________________________________________
// CONFERIR SE É MAIOR DE IDADE OU NÃO
// const idade = (nome, anoAtual, anoNasc) => {
//   const idadeMaiorMenor = anoAtual - anoNasc
//   const result = idadeMaiorMenor >= 18
//   console.log(`Nós estámos em ${anoAtual} e a pessoa nasceu em ${anoNasc}`);
//   console.log(`${nome} é maior de idade? ${result}`);
// }

// idade("Maria", 2023, 2018)// 5 anos - false
// idade("Maria", 2023, 1979)// 44 anos - true 
// idade("Maria", 2023, 2001)// 22 anos - true
// idade("Maria", 2023, 2005)// 18 anos - true



