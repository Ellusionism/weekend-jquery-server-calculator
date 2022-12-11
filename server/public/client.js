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

    let equation = {
        firstNum: firstValue,
        operator: operator,
        secondNum: secondValue,
    };

    $.ajax({
        url: `/equation`,
        method: `POST`,
        data: equation,
    }).then((response) => {
        console.log(response);
    });

    getAndDisplayResults();
}

function getAndDisplayResults() {
    $.ajax({
        url: '/history',
        method: 'GET'
    }).then((history) => {
    $('#history').empty()
    for (let equation of history) {
        $('#result').empty()
        $('#result').append(`${equation.result}`)
        $('#history').append(`
            <tr class="previousEquations">
                <td>${equation.firstNum} ${equation.operator} 
                ${equation.secondNum} = ${equation.result}</td>
            </tr>
            `)
        }
    })
}