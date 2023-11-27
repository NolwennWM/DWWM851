if("serviceWorker" in navigator)
{
    console.log("There is Service Worker");
    navigator.serviceWorker.register("./sw.js");
}

// Exemple Polyfill:
if(!Math.trunc)
{
    Math.trunc = function(number)
    {
        return number<0? Math.ceil(number): Math.floor(number);
    }
}
// "??" ne peut être facilement remplacé, l'utilisation d'un transpiler comme "babel.js" permet cela:
// const h = element.height??100;
var h = (element.height !== undefined && element.height !== null)? element.height:100;