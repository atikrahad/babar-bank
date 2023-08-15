
document.getElementById('btn2').addEventListener('click', function(){
    console.log('y');
    const userAmount = document.getElementById('depositAmoutn');
    const dpAm = userAmount.value;
    console.log(dpAm);
    const updateDp = document.getElementById('dpam');
    let updateDpam = updateDp.innerText;
    console.log(updateDpam);
    updateDpam = parseInt(updateDpam) + parseInt(dpAm);
    updateDp.innerText = updateDpam;
    const updateTotalb = document.getElementById('totalB');
    let updateTotal = updateTotalb.innerText;
    console.log(updateTotal);
    updateTotal = parseInt(updateTotal) + parseInt(dpAm);
    updateTotalb.innerText = updateTotal;

    userAmount.value = "";
    
})
document.getElementById('btn3').addEventListener('click', function(){
    console.log('y');
    const updateTotalb = document.getElementById('totalB');
    let updateTotal = updateTotalb.innerText;
    if(updateTotal <=0){
        alert('Your Bank Balance empty. Please deposit')
    }else{
        const userAmount = document.getElementById('withdrowAmoutn');
    const dpAm = userAmount.value;
    console.log(dpAm);
    const updateDp = document.getElementById('withAm');
    let updateDpam = updateDp.innerText;
    console.log(updateDpam);
    updateDpam = parseInt(updateDpam) + parseInt(dpAm);
    updateDp.innerText = updateDpam;
    const updateTotalb = document.getElementById('totalB');
    let updateTotal = updateTotalb.innerText;
    console.log(updateTotal);
    updateTotal = parseInt(updateTotal) - parseInt(dpAm);
    updateTotalb.innerText = updateTotal;

    userAmount.value = "";
    }

    
    
    
})