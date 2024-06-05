let inputRate = document.querySelector(".rate")
let inputAmount = document.querySelector(".amount")
let button = document.querySelector("button")
let displayAns = document.querySelector("span")

function calculateIntrest(amountt,percentage){
    let percent = parseInt(percentage)/100
    let interestAmount = (amountt*percent)
    return interestAmount;
}
button.addEventListener("click",()=>{
    displayAns.innerText = calculateIntrest(inputAmount.value,inputRate.value)
})