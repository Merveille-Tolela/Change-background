const btnColor= document.querySelector('.bColor');
const btnBody= document.querySelector('body');
const colors=["#DC143C","#7CFC00","#FFD700","#FF7F50","#F0E68C","#20B2AA"]

btnColor.addEventListener('click',changeColor)

function changeColor () {
let random = Math.floor(Math.random()*colors.length)
	btnBody.style.backgroundColor = colors[random];
}

