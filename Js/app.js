document.getElementById('calc-btn').addEventListener('click', function(){
    const incomeField = document.getElementById('income-field').value;
    const foodExpField = document.getElementById('food-exp-field').value;
    const rentExpField = document.getElementById('rent-exp-field').value;
    const clothesExpField = document.getElementById('clothes-exp-field').value;
    const totalExpCenter = document.getElementById('total-exp');
    const balancecenter = document.getElementById('current-balance');
    const totalExp = parseFloat(foodExpField)+parseFloat(rentExpField)+parseFloat(clothesExpField);
    const curretBalance = parseFloat(parseFloat(incomeField) - totalExp);
    if(totalExp < incomeField){
        balancecenter.innerText = curretBalance;
        totalExpCenter.innerText = totalExp;
        const error = document.getElementById('error-msgs');
        error.style.display='none'
    }
    else{
        const error = document.getElementById('error-msgs');
        error.style.display='block'
    }
   
});

       // toast close button function
document.getElementById('error-btn').addEventListener('click', function(){
    const error = document.getElementById('error-msgs');
        error.style.display='none'
})

