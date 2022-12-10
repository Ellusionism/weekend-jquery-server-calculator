const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

let result = 0;

let equation = {};

function runEquation(equation) {
    if (equation.operator === `+`) {
        result = (Number(equation.firstNumber) + Number(equation.secondNumber));
    } else if (equation.operator === `-`) {
        result = (Number(equation.firstNumber) - Number(equation.secondNumber));
    } else if (equation.operator === `*`) {
        result = (Number(equation.firstNumber) * Number(equation.secondNumber));
    }else if (equation.operator === `/`) {
        result = (Number(equation.firstNumber) / Number(equation.secondNumber));
    };
};
app.post(`/equation`, (req, res) => {
    equation = req.body;
    runEquation(equation);
    res.sendStatus(201);
})

app.get(`/result`, (req, res) => {
    res.send(result);
})