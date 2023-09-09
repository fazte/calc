const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const umn = document.querySelector('.umn')
const del = document.querySelector('.del')
const submitBtn = document.querySelector('.submitBtn')
const resultEL = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function(){
    action = '+'
}

minusBtn.onclick = function(){
    action = '-'
}

umn.onclick = function(){
	action = '*'
}

del.onclick = function(){
	action = '/'
}
    
submitBtn.onclick = function(){
    if(action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        resultEL.textContent = sum 
    }else if(action === '-'){
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        resultEL.textContent = sum 
    }else if(action === '*'){
			const sum = Number(inputOne.value) * Number(inputTwo.value)
			resultEL.textContent = sum 
	}else if(action === '/'){
		const sum = Number(inputOne.value) / Number(inputTwo.value)
		resultEL.textContent = sum 
}
}