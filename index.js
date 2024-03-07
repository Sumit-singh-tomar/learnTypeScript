"use strict";
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
let buttonEle = document.querySelector('button');
const numArr = [];
const strArr = [];
function Add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return (num1 + num2);
    else
        return (num1 + ' ' + num2);
}
function printResult(resultObject) {
    console.log(resultObject.val, resultObject.time);
}
buttonEle === null || buttonEle === void 0 ? void 0 : buttonEle.addEventListener("click", () => {
    const result = Add(+num1.value, +num2.value);
    numArr.push(result);
    const resultString = Add(num1.value, num2.value);
    strArr.push(resultString);
    printResult({ val: result, time: new Date() });
    console.log(numArr, strArr);
});
