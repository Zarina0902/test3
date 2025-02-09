
let slider = document.querySelectorAll('.img');
let line = document.querySelector('.slider_line');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let widthArray = [0];
let lineWith = 0;
let offset = 0;
let step = 0;
let ostatok = 0;

for (let i = 0; i < slider.length; i++) {
    widthArray.push(slider[i].offsetWidth);
    lineWith += slider[i].offsetWidth;
}

line.style.width = lineWith + 'px';
line.style.display = 'flex';
line.style.position = 'relative';
line.style.transition = 'all ease 2s';





console.log(widthArray);

document.onclick = function () {
    ostatok = lineWith - sliderWidth - offset;
    if (ostatok >= 0) {
        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';

    }
    else {
        line.style.left = - (lineWith - sliderWidth) + 'px';
        offset = 0;
        step = -1
    }
    if (step + 1 == slider.length) {
        step = 0;
        offset = 0;
    }
    else {
        step++
    }

}
