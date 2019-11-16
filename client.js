console.log('js works')

const oneProg = 165;
const twoProg = 185;
const kidsProg = 130;

function addOneProg () {
    return oneProg * .4;
}

function addTwoProg () {
    return twoProg * .4;
}

function addAdditionalKids () {
    return kidsProg * .4
}

console.log('adding additional person w/ one program', addOneProg())
console.log('adding additional person w/ discount', addTwoProg());
console.log('adding additional kids w/ discount', addAdditionalKids());



