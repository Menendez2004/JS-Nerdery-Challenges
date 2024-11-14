// Modify this file only
// Modify this file only
document.getElementById('decrease').addEventListener('click', function() {
    let counter = document.getElementById('counter');
    let currentDecrease = parseInt(counter.textContent);
    counter.textContent = currentDecrease - 1;
    currentDecrease <=0 ? alert('Numeros  negativos negativos'): null;
});


document.getElementById('increase').addEventListener('click', function(){
    let counter = document.getElementById('counter');
    let currentIncrease = parseInt(counter.textContent);
    counter.textContent = currentIncrease + 1;
})