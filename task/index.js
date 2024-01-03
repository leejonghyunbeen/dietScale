const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals =  document.querySelector('#goals')
const btn1 = document.querySelector('#result')
console.log(height,weight,goals,btn1)
btn1.addEventListener('click',function(){
    console.log(".")
    console.log(Number(height.value))
    console.log(Number(weight.value))
    let result = (Number(height.value)-100)*0.9
    console.log(result)
    let all =Number(weight.value)- Number(result);

    goals.value = `적정체중은 ${result}kg이며 ${all} 초과되었습니다`
})






//계산식) 적정체중 = (본인신장-100)*0.9 최종목표 결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.