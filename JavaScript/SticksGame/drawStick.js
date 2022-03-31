/*

 I got help creating this at:
 https://www.javascripttutorial.net/web-apis/javascript-draw-line/

*/

function drawVert() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    let color = ChooseColor(enumTypeNum());
    //let color = 1;

    // set line stroke and line width
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;

    let x = randomNumber();
    let x2 = randomNumber();

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(x, 45);
    ctx.lineTo(x2, 250);
    ctx.stroke();

}
function drawHor() {
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    let color = ChooseColor(enumTypeNum());

    // set line stroke and line width
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;

    let x = randomNumber();
    let x2 = randomNumber();

    // draw a red line
    ctx.beginPath();
    ctx.moveTo(45, x);
    ctx.lineTo(250, x2);
    ctx.stroke();

}

function randomNumber() {

    // makes a random number from 50 to 249 to randomize our lineTo and moveTo numbers
    let randomNum = Math.floor(Math.random() * 250) + 50;
    return randomNum;
}

function enumTypeNum() {
    let num = Math.floor(Math.random() * 5);
    return num;
}

function ChooseColor(num) {
    switch (num) {
        case 0:
            return ('PaleGreen')
            break;
        case 1:
            return ('LightBlue')
            break;
        case 2:
            return ('Pink')
            break;
        case 3:
            return ('Yellow')
            break;
        case 4:
            return ('Orchid')
            break;
    }
}

for (let i = 0; i < 10; i++) {
    drawHor();
    drawVert();
}