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



