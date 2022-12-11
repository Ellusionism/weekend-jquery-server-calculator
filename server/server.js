// Initial server.js code
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

let history = [];

app.post(`/equation`, (req, res) => {
    let firstValue = req.body.firstNum;
    let operator = req.body.operator;
    let secondValue = req.body.secondNum;
    let answer = 0;
    // Setting variables from posted object to use on the server side
    switch (operator) {
        case `+`:
            answer = Number(firstValue) + Number(secondValue);
            break;
        case `-`:
            answer = Number(firstValue) - Number(secondValue);
            break;
        case `*`:
            answer = Number(firstValue) * Number(secondValue);
            break;
        case `/`:
            answer = Number(firstValue) / Number(secondValue);
            break;
    };
    // Determines selected operator, and runs the corresponding equation

    equation = {
        firstNum: firstValue,
        operator: operator,
        secondNum: secondValue,
        result: answer,
    };
    //Creates an object that includes the posted data, as well as the result of the equation

    history.push(equation);
    // Pushes the new object into an array, to be used to render equation history

    res.sendStatus(201);
});

app.get(`/history`, (req, res) => {
    res.send(history);
});
// Sends the history array to the client side