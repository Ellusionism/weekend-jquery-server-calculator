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

let output = []
let equation = {
    firstNum: firstValue,
    operator: operator,
    secondNum: secondValue,
    result: answer
}

app.post(`/equation`, (req, res) => {
    let firstValue = req.body.firstNum;
    let secondValue = req.body.secondNum;
    let operator = req.body.operator;
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



    res.sendStatus(201);
})