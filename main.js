document.getElementById('btn').addEventListener('click', function(){
    
    const userEmail = document.getElementById('email');
    const email = userEmail.value;
    const userPass = document.getElementById('password');
    const password = userPass.value;
    if(email === 'baper.bank@gmail.com' && password === 'secret123'){
        window.location.href = 'deshboard.html'
    }
    else{
        alert('Please provide valid data')
    }
    userEmail.value = '';
    userPass.value = '';

})

