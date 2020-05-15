// Objetos literales no requieren ser instanciados con el operador new y se describen como:
// un conjunto de pares en donde la llave y el valor van encerrados entre llaves {}
// de este modo podremos crear el patron de modulo, alojando funciones, objetos y otros tipos de datos bajo una llave.
// esto es llamado encapsulación y a menudo nos permite tener el código un poco más organizado.
// lucen como este:
var myObjectLiteral = {
    person: "👩🏻‍🦳",
    sayHi: function(){ console.log(`Hi ${this.person}`)}
}

myObjectLiteral.sayHi() //Hi 👩🏻‍🦳

// Veamos un ejemplo más complejo

var myCar = {
    currentState: {
        gasoline: true,
        km: 0,
        model: '2020' 
    },
    running: function() {
        
        if(this.currentState.km >= 5) {
            console.log("please charge gasoline");
            return;
        }
        return this.currentState.km += 1;
    },
    chargeGasoline: function() {
        this.currentState = {
            gasoline: true,
            km: 0
        }
    },
    updateModel: function(model) {
        this.currentState.model = model;
    }
}
myCar.currentState()//{gasoline: true, km: 0, model: '2020' }
myCar.running() //1
myCar.running() //2
myCar.running() //3
myCar.running() //4
myCar.running() //5
myCar.running() //please charge gasoline
myCar.chargeGasoline()
myCar.currentState()//{gasoline: true, km: 0, model: '2020' }
myCar.updateModel(2013)
myCar.currentState()//{gasoline: true, km: 0, model: '2013' }

//Podemos encapsular la privacidad del modulo usaremos una función inmediata

var myPrivateModule = (function () {
    // variable privada
    var secretKey = "🔑🔮";
    return {
        //variable publica
        userName: "SuperCat",
        loggin: function(key){
            if(key != secretKey){
                console.log(`Hi ${this.userName} wrong key`);
                console.log('If you dont remember the key please set a new one using updateKey method');
                return
            }
            console.log('You are logging in 🌈!')
        },
        updateKey: function(newKey){
            console.log('Setting the new key...'),
            secretKey = newKey;
        }
    }
})();

myPrivateModule.loggin('test') // Hi SuperCat wrong key If you dont remember the key please set a new one using updateKey method
myPrivateModule.updateKey('test') // Setting the new key...
myPrivateModule.loggin('test') //You are logging in 🌈!


