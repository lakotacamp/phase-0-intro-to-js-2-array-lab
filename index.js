// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

var copyOfCats = [...cats,"Broom"];

function appendCat() {
    return copyOfCats;
}

var copyOfCatsUnshift = ["Arnold", ...cats];

function prependCat() {
    return copyOfCatsUnshift;
}

//const copyOfCatsPop = cats.slice();

function removeLastCat() {
//copyOfCatsPop.pop();
return cats.slice(0,2);
}

//const copyOfCatsShift = cats.slice();

function removeFirstCat() {
    //copyOfCatsShift.shift();
    return cats.slice(1);
}