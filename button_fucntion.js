const button = document.getElementById('btn');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');

button.addEventListener('mouseover', function(){
    if (emailInput.value && nameInput.value){
       button.style.position = 'fixed';
       
    } else{
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
        button.style.position = 'absolute';
    }

})



/*
emailInput.addEventListener("input", function() {
    if (emailInput.value !== '') {
        button.style.position = fixed;
    }
    });

    */