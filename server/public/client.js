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
    get

};

function postEquation() {
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
}

function getAndDisplayResults() {
    $.ajax({
        url: '/history',
        method: 'GET'
}).then((history) => {
  $('#history').empty()
  for (let equation of history) {
    $('#result').empty()
    $('#result').append(`${equation.answer}`)
    $('#history').append(`
   <tr>
      <td>${equation.firstNum} ${equation.operator} ${equation.secondNum} = ${equation.answer}</td>
   </tr>
    `)
  }
})
}