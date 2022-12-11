$(document).ready(onReady);

let operator = ``;

function onReady() {
    getAndDisplayResults();
    $(`#clearButton`).on(`click`, clearInputs);
    $(`#equalsButton`).on(`click`, submit);
    $(`.operatorButton`).on(`click`, function(){
        operator = $(this).html();
    });
};

function clearInputs() {
    $(`#firstNum`).val(``);
    $(`#secondNum`).val(``);
    operator = ``;
};
// Clears current input fields

function submit() {
    if ($(`#firstNum`).val() && $(`#secondNum`).val() && operator) {
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
        clearInputs();
    } else {
        alert(`Missing input, please make sure you have entered numbers into both inputs, AND selected an operator.`);
    }
};
// Submits values to an object, which is passed to the server. Then updates the DOM

function getAndDisplayResults() {
    $.ajax({
        url: '/history',
        method: 'GET',
        // Gets the history array from the server
    }).then((history) => {
    $('#history').empty();
    // Clears history table
    for (let equation of history) {
        $('#result').empty();
        $('#result').append(`${equation.result}`);
        // Empties the result element each time, to only show the most recent result when done iterating
        $('#history').append(`
            <tr class="previousEquations">
                <td>${equation.firstNum} ${equation.operator} 
                ${equation.secondNum} = ${equation.result}</td>
            </tr>
            // Appends each object in the history array to the table
            `);
        };
    });
};
// Function to update DOM with current server data