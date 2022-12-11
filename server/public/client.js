$(document).ready(onReady);

let operator = ``;

function onReady() {
    $(`#clearButton`).on(`click`, clearInputs);
    $(`#equalsButton`).on(`click`, submit);
    $(`.operatorButton`).on(`click`, function(){
        operator = $(this).html();
    });
    
};

function clearInputs() {
    $(`#firstNum`).val(``);
    $(`#operator`).text(``);
    $(`#secondNum`).val(``);
}

function submit() {
    firstValue = $(`#firstNum`).val();
    secondValue = $(`#secondNum`).val();
    postEquation();

};

function postEquation() {
    let equation = {
        firstNumber: firstValue,
        operator: operator,
        secondNumber: secondValue,
    };
    $.ajax({
        url: `/equation`,
        method: `POST`,
        data: equation,
    }).then((response) => {
        console.log(response);
    });
}