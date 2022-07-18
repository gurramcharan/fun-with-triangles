const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn= document.querySelector('#is-triangle-btn');
const output1=document.querySelector('#output');

function calculateSumOfAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sumOfAngles === 180){
        output1.innerHTML = "YaY! It forms a Traingle..🥳";
    }
    else{
        output1.innerHTML = "Oh Oh..The angles doesn't form a triangle😕..";
    }
}

isTriangleBtn.addEventListener('click', isTriangle)