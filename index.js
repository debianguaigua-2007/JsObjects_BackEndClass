//Função inicio
//Js_Objects/BackEndClass

const car = {
    marca: 'Toyota',
    cor: '#000000 (preto)',
    ano: 2020
}
const chair = {
    material: 'madeira',
    cor: '#ff0000 (vermelho)',
    TemEncosto: true
}
const phone = {
    modelo: 'iPhone 13',
    temCamera: true, //não como a vez que removeram o porto de auricular para forzar aos clientes a comprar os apple airpods.
    armazenamento: '128GB'
}
const clock = {
    tipo: 'digital',
    marca: 'Casio',
    resisteÀagua: true
}
const stove = {
    queimadores: 4,
    temForno: true,
    cor: '#ffffff (branco)'
}
const fan = {
    potencia: '60W',
    velocidades: 3,
    cor: 'azul'
}
const bag = {
    compartimentos: 3,
    cor: '#000000 (preta)',
    temAlmofadaCostas: true
}
const glass = {
    material: 'vidrio',
    capacidadeML: 300,
    éDescartável: false
}
const key = {
    tipo: 'residencial',
    material: 'metal',
    possuiEtiqueta: true
}
const bike = {
    marchas: 21,
    aro: 29,
    cor: '#00ff00 (verde)'
}

//salva objetos

let objetos = [car, chair, phone, clock, stove, fan, bag, glass, key, bike];

//exibir objetos

function mostraObjetos(){
    console.log(objetos);
}

mostraObjetos();