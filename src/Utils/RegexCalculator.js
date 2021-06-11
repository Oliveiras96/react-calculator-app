
export default function RegexCalculator(operationString) {
    const operator = /\+|-|x|\//.exec(operationString);
    let result;
    let values;

    switch (operator[0]) {
        case "+":
            values = operationString.split("+").map((item) => {return Number(item)});
            result = values.reduce((acc, curr) => acc + curr);
            break;
        case "-":
            values = operationString.split("-").map((item) => {return Number(item)});
            result = values.reduce((acc, curr) => acc - curr);
            break;
        case "x":
            values = operationString.split("x").map((item) => {return Number(item)});
            result = values.reduce((acc, curr) => acc * curr);
            break;
        case "/":
            values = operationString.split("/").map((item) => {return Number(item)});
            result = values.reduce((acc, curr) => acc / curr);
            break;
        default:
            throw new Error('Out of range!');
    }
    return result;
}