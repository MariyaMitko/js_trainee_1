function getGreetings() {
    return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!"];
}
console.log(getGreetings());

const getGreetingsExpr = function() {
    return ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!"];
}
console.log(getGreetingsExpr());

const getGreetingsArrow = () => ["Hello world!", "!Hola mundo!", "Hallo wereld!", "Привет мир!"];
console.log(getGreetingsArrow());

