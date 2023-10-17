const priceInput = document.querySelector('#price')
const combustionInput = document.querySelector('#combustion')
const routeInput = document.querySelector('#route')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const spanCost = document.querySelector('.cost')



const dataCheck = () => {
	if (priceInput.value === ''|| combustionInput.value === '' || routeInput.value === '') {
		error.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'
	} else {
		costCalculation()
		costInfo.style.display = 'flex'
        error.textContent = ''
	}
}

const costCalculation = () => {
	const petrolPrice = priceInput.value
	const averageCombustion = combustionInput.value
	const routeLength = routeInput.value

	const cost = (routeLength / (100 / averageCombustion)) * petrolPrice
	spanCost.textContent = cost.toFixed(2)
}



countBtn.addEventListener('click', dataCheck)
