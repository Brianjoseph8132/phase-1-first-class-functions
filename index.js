function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function  namedFuction(){
        return"I am a named fuction";
    };
}
function returnsAnAnonymousFunction(){
return function(){
    return "I am an anonymous function!";
};
}