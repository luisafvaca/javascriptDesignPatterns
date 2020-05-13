// 3 formas de crear un objeto ejemplos.

// Creación de Objetos de forma tradicional
var objeto = {};
// Creación de objetos basados en un prototipo existente 
var objeto1 = Object.create(Object.prototype);
// Creación de objetos haciendo uso de la funcion constructora Object
var objeto2 = new Object()


//Cuatro caminos de agregar keys y valores a un objeto ejemplos.

//1. Dot sintax:
var myObject = {};
myObject.newKey = '🔮';
console.log(myObject) // { newKey: '🔮'};

//2. Square Bracket sintax:
var myObject = {};
myObject['newKey'] = '🧠';
console.log(myObject) // { newKey: '🧠'};

//Approaches compatibles sólo con ECMAScript 5

//3. Object.defineProperty:
var myObject = {};
Object.defineProperty(myObject, 'newKey', {
    value: '🌈', // El valor asignado a la nueva key. Por defecto es undefined.
    writable: true, //Indica si el valor de la propiedad puede modificarse con el  operador de asignación. Por defecto es false.
    enumerable: true, //Si y sólo si dicha propiedad se muestra durante la enumeración de las propiedades del objeto correspondiente. Por defecto es false.
    configurable: true //Si y sólo si el tipo de descriptor de propiedad puede modificarse y si la propiedad puede ser eliminada del correspondiente objeto. Por defecto es falso.
});
console.log(myObject) // { newKey: '🌈'};

//4. Object.defineProperties:
var myObject = {};
Object.defineProperties(myObject, {
    'newKey1': {
        value: '🍄', // El valor asignado a la nueva key. Por defecto es undefined.
        writable: true, //Indica si el valor de la propiedad puede modificarse con el  operador de asignación. Por defecto es false.
    },
    "newKey2": {
        value: '💜', // El valor asignado a la nueva key. Por defecto es undefined.
        writable: true, //Indica si el valor de la propiedad puede modificarse con el  operador de asignación. Por defecto es false.
    } 
});

console.log(myObject) // { newKey1: '🍄', newKey2: '💜'};

//Constructores
//1. Constructores basicos.

function human(name, old, nacionality, id) {
    this.name = name;
    this.old = old;
    this.nacionality = nacionality;
    this.id = id;
    this.humanInfo = () => {
        console.log(`This is the 👨🏻‍🦳 👩🏻‍🦳 human number ${this.id}: name: ${this.name}, old: ${this.old}, nacionality: ${this.nacionality}`)
    }
}

//Para usar nuestro contructor necesitaremos crear una nueva instancia llamando nuestra funcion precedido del operador new
//Y pasando los parametros correspondientes

var myHumanInstance = new human('Johana', 36, 'Argentina', '1234567');
console.log(myHumanInstance) //human {name: 'Johana', old: 36, nacionality: 'Argentina', id: '1234567', humanInfo: [Function] }
console.log(myHumanInstance.humanInfo()); // This is the 👨🏻‍🦳 👩🏻‍🦳 human number 1234567: name: Johana, old: 36, nacionality: Argentina

//2. Constructores con prototype.

function human(name, old, nacionality, id) {
    this.name = name;
    this.old = old;
    this.nacionality = nacionality;
    this.id = id;
}
//Las funciones al igual que otros objetos en javascript contienen el objeto prototype.
//De esta manera le estamos añadiendo al prototypo de humano una nueva funcion.
human.prototype.humanInfo = () => {
    console.log(`This is the 👨🏻‍🦳 👩🏻‍🦳 human number ${this.id}: name: ${this.name}, old: ${this.old}, nacionality: ${this.nacionality}`)
}

//Para usar nuestro contructor necesitaremos crear una nueva instancia llamando nuestra funcion precedido del operador new
//Y pasando los parametros correspondientes
var myHumanInstance = new human('Johana', 36, 'Argentina', '1234567');
console.log(myHumanInstance) //human {name: 'Johana', old: 36, nacionality: 'Argentina', id: '1234567', humanInfo: [Function] }
console.log(myHumanInstance.humanInfo()); // This is the 👨🏻‍🦳 👩🏻‍🦳 human number 1234567: name: Johana, old: 36, nacionality: Argentina



