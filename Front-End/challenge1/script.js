document.getElementById('decrease').addEventListener('click', function() {
    let counter = document.getElementById('counter');
    let currentDecrease = parseInt(counter.textContent);
    currentDecrease <= 0 ? alert('Numeros negativos') : counter.textContent = currentDecrease - 1;
});


document.getElementById('increase').addEventListener('click', function(){
    let counter = document.getElementById('counter');
    let currentIncrease = parseInt(counter.textContent);
    counter.textContent = currentIncrease + 1;
})