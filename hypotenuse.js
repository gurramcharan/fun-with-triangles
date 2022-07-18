const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn= document.querySelector('#hyp-btn');
const output = document.querySelector('#output');

function sumOfSquares(a,b){
    return (a*a + b*b);
}

function calculateHyp(){
    const Squares = sumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lenOfHyp = Math.sqrt(Squares);
    output.innerText = 'The length of the hypotenuse is '+lenOfHyp;
}
hypotenuseBtn.addEventListener('click',calculateHyp);