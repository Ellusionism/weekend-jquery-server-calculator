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
let equation = [];

app.post(`/equation`, (req, res) => {
    let firstValue = req.body.firstNum;
    let operator = req.body.operator;
    let secondValue = req.body.secondNum;
    let answer = 0;
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
    }

    equation = {
        firstNum: firstValue,
        operator: operator,
        secondNum: secondValue,
        result: answer
    }

    history.push(equation);

    res.sendStatus(201);
})

app.get(`/history`, (req, res) => {
    res.send(history);
})