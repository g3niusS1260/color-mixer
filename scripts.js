const redSlider = document.getElementById('red-slider');
const colorPreview = document.getElementById('color-preview');
const nowColor = document.getElementById('color-code');

const redValue = document.getElementById('red-value');
redSlider.addEventListener('input', function(event){
    redValue.textContent = event.target.value;
    colorPreview.style.backgroundColor = `rgb(${redValue.textContent}, ${greenValue.textContent}, ${blueValue.textContent})`;
    nowColor.textContent = `RGB(${redValue.textContent}, ${greenValue.textContent}, ${blueValue.textContent})`;
});

const greenSlider = document.getElementById('green-slider');
const greenValue = document.getElementById('green-value');
greenSlider.addEventListener('input', function(event){
    greenValue.textContent = event.target.value;
    colorPreview.style.backgroundColor = `rgb(${redValue.textContent}, ${greenValue.textContent}, ${blueValue.textContent})`;
    nowColor.textContent = `RGB(${redValue.textContent}, ${greenValue.textContent}, ${blueValue.textContent})`;
});

const blueSlider = document.getElementById('blue-slider');
const blueValue = document.getElementById('blue-value');
blueSlider.addEventListener('input', function(event){
    blueValue.textContent = event.target.value;
    colorPreview.style.backgroundColor = `rgb(${redValue.textContent}, ${greenValue.textContent}, ${blueValue.textContent})`;
    nowColor.textContent = `RGB(${redValue.textContent}, ${greenValue.textContent}, ${blueValue.textContent})`;
});
