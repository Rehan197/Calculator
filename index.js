#!/usr/bin/env node

import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "NumberOne",
        message: "Kindly Enter Your First No"
    },
    {
        type: "number",
        name: "NumberTwo",
        message: "Kindly Enter Your Second No"
    },
    {
        type: "list",
        name: "Operator",
        choices: ["+", "-", "*", "/"],
        message: "Select Operator:"
    },
]);
const { NumberOne, NumberTwo, Operator } = answers;
if (NumberOne && NumberTwo && Operator) {
    let result = 0;
    if (Operator === "+") {
        result = NumberOne + NumberTwo;
    }
    else if (Operator === "-") {
        result = NumberOne - NumberTwo;
    }
    if (Operator === "/") {
        result = NumberOne / NumberTwo;
    }
    if (Operator === "*") {
        result = NumberOne * NumberTwo;
    }
    console.log("your result is:", result);
}
else {
    console.log("Kindly Enter Valid input");
}
