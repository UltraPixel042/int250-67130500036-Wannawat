
function temperature() {
    const a = document.getElementById('celsius');
    let result = a.value
    
    const b= (result * 9 / 5) + 32;
    const c = document.getElementById('fahrenheit');
    c.value = b;
}

function weight() {
    const kilo = document.getElementById('kilo').value;
    if (kilo === '') {
        alert('Please enter a weight value');
        return;
    }
    const pounds = kilo * 2.2;
    document.getElementById('pounds').value = pounds.toFixed(2);
}

function distance() {
    const km = document.getElementById('km').value;
    if (km === '') {
        alert('Please enter a distance value');
        return;
    }
    const miles = km * 0.62137;
    document.getElementById('miles').value = miles.toFixed(2);
}

let a = document.getElementById('tempbtn');
a.addEventListener('click', temperature)
let b = document.getElementById('weigbtn');
b.addEventListener('click', weight)
let c = document.getElementById('distbtn');
c.addEventListener('click', distance)