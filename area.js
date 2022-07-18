const BaseHeight = document.querySelectorAll('.base-height');
const calAreaBtn = document.querySelector('#cal-area-btn');
const output = document.querySelector('#output');

function calArea(){
    const productOfBaseHeight = Number(BaseHeight[0].value) * Number(BaseHeight[1].value);
    const area = productOfBaseHeight/2;
    output.innerText = "Area of the triangle is "+area;
}
calAreaBtn.addEventListener('click',calArea);