const num1 = document.getElementById('num1') as HTMLInputElement;
const num2 = document.getElementById('num2') as HTMLInputElement;
let buttonEle = document.querySelector('button');

const numArr: number[] = []
const strArr:string[] = []

type addfun = number | string

function Add(num1: addfun, num2: addfun) {
    if (typeof num1 === 'number' && typeof num2 === 'number')
        return (num1 + num2)
    else
        return (num1 + ' ' + num2)
}

function printResult(resultObject: { val: number, time: Date }) {
    console.log(resultObject.val, resultObject.time)
}

buttonEle?.addEventListener("click", () => {
    const result = Add(+num1.value, +num2.value)
    numArr.push(result as number)
    const resultString = Add(num1.value, num2.value)
    strArr.push(resultString as string)
    printResult({ val: result as number, time: new Date() })
    console.log(numArr, strArr);


})