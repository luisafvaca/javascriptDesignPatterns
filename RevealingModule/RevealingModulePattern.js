var myRevealingModule = (function () {
 
    var secretVar = "🔮Hello world from secret";
        publicVar = "Hello world!";

    function privateFunction() {
        console.log( secretVar );
    }

    function publicSetString( newString ) {
        secretVar = newString;
    }

    function publicGetString() {
        privateFunction();
    }

    // Reveal public pointers to
    // private functions and properties

    return {
        secretHi: publicSetString,
        publicHi: publicVar,
        getHi: publicGetString
    };

})();

myRevealingModule.secretHi( "👽 New Hello World!" );
myRevealingModule.getHi() // 👽 New Hello World!