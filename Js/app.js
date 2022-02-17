
 
document.getElementById('calc-btn').addEventListener('click', function(){
const incomeField = document.getElementById('income-field').value;
const incomeValuNum = parseFloat(incomeField);
const foodExpField = document.getElementById('food-exp-field').value;
const foodExpValuNum = parseFloat(foodExpField);
const rentExpField = document.getElementById('rent-exp-field').value;
const rentExpValuNum = parseFloat(rentExpField);
const clothesExpField = document.getElementById('clothes-exp-field').value;
const clothesExpValuNum = parseInt(clothesExpField);
const totalExpCenter = document.getElementById('total-exp');
const balancecenter = document.getElementById('current-balance');
if (incomeValuNum >= 0 && foodExpValuNum >= 0 && rentExpValuNum >= 0 && clothesExpValuNum >= 0  ){
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
        const error = document.getElementById('error-msgs-negative');
        error.style.display='none'
    }
   

else{
        const error = document.getElementById('error-msgs-negative');
        error.style.display='block'

    }


});

        //  seving function section
document.getElementById('saving-btn').addEventListener('click', function(){
        const incomeField = document.getElementById('income-field').value;
        const incomeValuNum = parseFloat(incomeField);
        const savingAmmount = document.getElementById('saving-ammount');
        const savingInputField = document.getElementById('saving-input-field').value;
        const remainingBalance = document.getElementById('remaining-balance');
        const balancecenter = document.getElementById('current-balance');
        const savingInputFieldValue = parseFloat(savingInputField);
        if(savingInputFieldValue >= 0){
                const savingInputFieldValueParsentage = savingInputFieldValue / 100;
                savingAmmount.innerText =Math.floor(incomeValuNum * savingInputFieldValueParsentage);
                const error = document.getElementById('error-msgs-negative');
                error.style.display='none'
        }
        else{
                const error = document.getElementById('error-msgs-negative');
        error.style.display='block' 
     
        }

        const balancecenterNum = parseFloat(balancecenter.innerText);
        const remainingBal = balancecenterNum - parseFloat(savingAmmount.innerText);
        if (parseFloat(remainingBal) > 0){
                remainingBalance.innerText = remainingBal;
                const error = document.getElementById('error-msgs-saving');
                error.style.display='none' 
        }
        else{
                const error = document.getElementById('error-msgs-saving');
                error.style.display='block' 
        }

});





       // toast close button function
document.getElementById('error-btn').addEventListener('click', function(){
    const error = document.getElementById('error-msgs');
        error.style.display='none'
});


// if (incomeValuNum > 0 && foodExpValuNum > 0 && rentExpValuNum > 0 && clothesExpValuNum > 0){

        // && foodExpValuNum > 0 && rentExpValuNum > 0 && clothesExpValuNum > 0