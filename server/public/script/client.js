$(document).ready(onReady);

function onReady() {
    $(`#clearButton`).on(`click`, clearInputs)
    $(`#addButton`).on(`click`, addition);
    $(`#subtractButton`).on(`click`, subtraction);
    $(`#multiplyButton`).on(`click`, multiplication);
    $(`#divideButton`).on(`click`, division);
    $(`#equalsButton`).on(`click`, submit);
};

let equation = {
    firstNumber: 0,
    operator: ``,
    secondNumber: 0,
};

function clearInputs() {
    $(`#firstNumber`).val(``);
    $(`#operator`).text(``);
    $(`#secondNumber`).val(``);
    equation.firstNumber = 0;
    equation.operator = ``;
    equation.secondNumber = 0;
}

function addition() {
    equation.operator = `+`;
};

function subtraction() {
    equation.operator = `-`;
};

function multiplication() {
    equation.operator = `*`;
};

function division() {
    equation.operator = `/`;
};

function submit() {
    equation.firstNumber = $(`#firstNumber`).val();
    equation.secondNumber = $(`#secondNumber`).val();
    postEquation();
    getResult();

};

// function postEquation() {
//     $.ajax({
//         method: `POST`,
//         url: `/equation`,
//         data: equation,
//     }).then((response) =>{
//         console.log(response);
//     });
// }

// function getResult() {
//     $.ajax({
//         method: `GET`,
//         url: `/result`,
//     }).then((result) =>{
//         console.log(result)
//     })
// };