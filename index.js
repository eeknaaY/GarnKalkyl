
function testing() {
    var width = document.getElementById('Width').value;
    var length = document.getElementById('Length').value;
    var weight = document.getElementById('Weight').value
    var density = weight / (width * length)
    var desiredwidth = document.getElementById('WantedWidth').value;
    var desiredlength = document.getElementById('WantedLength').value;

    document.getElementById('area').innerHTML = 'Area: ' + width * length + ' cm²';
    document.getElementById('WeightPerArea').innerHTML = 'Gram/cm² : ' + weight / (width * length);
    document.getElementById('result').innerHTML = 'Gram som behövs: ' + density * desiredlength * desiredwidth;
}