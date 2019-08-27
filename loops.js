const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const yay = ['black', 'gray', 'white'];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
}

const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
        const color = `<p style='color: ${colorArr[i]}'>${colorArr[i]}</p>`
        printToDom(color, 'rainbow')
    }
}

printRainbow(colors);

const instructors = [
    {first: "Zoee", last: "Amese"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

//   <p>firstName lastName</p>

const printNames = (namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const person = namesArray[i];
        const element = `<p>${person.first} ${person.last}</p>`
        printToDom(element, 'fullName');
    }
}

printNames(instructors);