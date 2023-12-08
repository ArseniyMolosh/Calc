const formCalculatorEL = document.querySelector("#formCalc")//уамауукпуеркррнкрпатнон
const inputBillValueEL = document.querySelector("#inputBillValue")//сумма
const selectQualityServiceEL = document.querySelector("#selectQualityService")//проценты чаевых
const inputQtyPeopleEL = document.querySelector("#inputQtyPeople")//количество человек
const res1EL = document.querySelector("#res1")
const res2EL = document.querySelector("#res2")


const drawTotal = () => {}

const countTotalBillPerPerson = (billValue, qualityService, qtyPerson) => {
    const procentSum = (billValue * (qualityService / 100))/qtyPerson;
    const result = billValue/qtyPerson + procentSum;
    res1EL.textContent = procentSum
    res2EL.textContent = result
}


const handleformCalculatorElSubmit = (e) =>{
    e.preventDefault();
    const billValue = inputBillValueEL.value;
    const selectQualityService = selectQualityServiceEL.value;
    const qtyPeople = inputQtyPeopleEL.value;
    const result = countTotalBillPerPerson(billValue, selectQualityService, qtyPeople);
}


formCalculatorEL.addEventListener("submit", handleformCalculatorElSubmit)