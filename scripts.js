const redSlider = document.getElementById('red-slider');
const colorPreview = document.getElementById('color-preview');
const nowColor = document.getElementById('color-code');
const presetColors = document.getElementsByClassName('preset-color');
const randomColor = document.getElementById('random-btn');

for(let i = 0; i < presetColors.length; i++) {
    presetColors[i].addEventListener('click', function(event){
        colorPreview.style.backgroundColor = `rgb(${presetColors[i].dataset.rgb})`;
        nowColor.textContent = `RGB(${presetColors[i].dataset.rgb})`;
        redValue.textContent = greenValue.textContent = blueValue.textContent = 0;
        redSlider.value = greenSlider.value = blueSlider.value = 0;
    })
}
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

randomColor.addEventListener('click', function(event){
    colorPreview.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
});