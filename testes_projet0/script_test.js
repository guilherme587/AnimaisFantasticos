// const paragrafos = document.querySelectorAll('p');
// paragrafos.forEach( item => console.log(item.innerText) );

// const imagens = document.querySelectorAll('img');
// imagens.forEach(function(item, index, arrey){
//     console.log(item);
//     console.log(index);
//     console.log(arrey);
//     console.log('\n\n');
// });

const menu = document.querySelectorAll('.menu a');
menu.forEach( item => item.classList.add('ativo') );

menu.forEach( (item, index) => {
    if(index != 0) item.classList.remove('ativo');
} );

const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'mudeiPorra/soFodaHacker.aNasaAGR/karaio');

const imagens = document.querySelectorAll('img');
imagens.forEach( item => {
    if( item.hasAttribute('alt') ) console.log(item, 'Tem o atributo alt.');
} );

// const paragrafos = document.querySelectorAll('p');
// paragrafos.forEach( item => console.log(item.innerText) );

// const imagens = document.querySelectorAll('img');
// imagens.forEach(function(item, index, arrey){
//     console.log(item);
//     console.log(index);
//     console.log(arrey);
//     console.log('\n\n');
// });

// const gridSection = document.getElementsByClassName("grid-section");
// // as linhas de código a baixo resultam em erro pois 'gridSection' n é um array
// // gridSection.forEach( function(item, index, array){
// //     console.log(item, index, array);
// // } );

// // as linhas a baixo mostram como passar 'gridSection' de const para array
// let gridArray = Array.from(imagens);
// gridArray.forEach((item, index, array) => {
//     console.log(item, index, array);
// } );
// tem o msm efeito q as de cima
// gridArray.forEach( function(item, index, array){
//     console.log(item, index, array);
// } );
// se tiver só um parametro tbm pode ser rescrita como:
// gridArray.forEach(item => {
//     console.log(item);
// } );
// e se n tiver nenhum:
// gridArray.forEach(() => {
//     console.log('sem parametros');
// } );
// no caso de so um linha de codigo, a syntax pode ser escrita como:
// gridArray.forEach(item => console.log(item) );

// const parag  = document.querySelectorAll('p');
// console.log(parag[parag.length - 1]);
// const parag2  = document.querySelector('.copy p');
// console.log(parag2);

// const h2 = document.querySelector('.animais-descricao');
// console.log(h2.querySelector('h2').innerText);

// const links = document.querySelectorAll('a[href^="#"]');
// console.log(links);

// const menu = document.querySelector('nav[class^="menu"]');
// console.log(menu.innerHTML);

// const animais = document.getElementById("animais");
// console.log(animais.innerText);

// const gridSection = document.getElementsByClassName("grid-section");
// console.log(gridSection);

// const primeiraLi = document.querySelector("li");
// console.log(primeiraLi.innerText);

// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl.innerHTML);


// const linksInternos = document.querySelector('a[href^="#"]');
// console.log(linksInternos);


// const test = document.getElementsByClassName('grid-section');
// console.log(test);

// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg);
// animaisImg.forEach( function(item){
//     console.log(item);
// } );

// const imagens = document.querySelectorAll('img');
// console.log(imagens);

// const imagensComImg = document.querySelectorAll('img[src^="./img/imagem"');
// console.log(imagensComImg);
