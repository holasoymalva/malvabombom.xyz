const mouseTarget = document.getElementById("mouseTarget");
let ele = document.getElementsByClassName("d-block");
// https://www.cloudtec.ch/blog/web/2014/change-image-with-jquery-mouse-position
//console.log(ele[0]);
let input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
        current: 0
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0
    }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// Output Setup
let output = {
    x: {
        start: -75,
        end: 75,
        current: 0
    },
    y: {
        start: -75,
        end: 75,
        current: 0
    }
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

let handlerMouseMove = function (event) {
    input.mouseX.current = event.clientX;
    input.mouseX.fraction =
        (input.mouseX.current - input.mouseX.start) / input.mouseX.range;

    input.mouseY.current = event.clientY;
    input.mouseY.fraction =
        (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    output.x.current = output.x.start + output.x.range * input.mouseX.fraction;
    output.y.current = output.y.start + output.y.range * input.mouseY.fraction;
    hiddenClass();

    if (output.x.current < -15 && output.y.current < -15) {
        let photo = document.getElementById("photo-09");
        photo.classList.add("d-block");
    } else if (output.x.current < -15 && output.y.current < 30) {
        let photo = document.getElementById("photo-05");
        photo.classList.add("d-block");
    } else if (output.x.current > 15 && output.y.current < 0) {
        let photo = document.getElementById("photo-08");
        photo.classList.add("d-block");
    } else if (output.x.current > 15 && output.y.current > 10) {
        let photo = document.getElementById("photo-06");
        photo.classList.add("d-block");
    } else if (output.x.current < -15 && output.y.current > 30) {
        let photo = document.getElementById("photo-07");
        photo.classList.add("d-block");
    } else if (output.x.current >= 15) {
        let photo = document.getElementById("photo-04");
        photo.classList.add("d-block");
    } else if (output.y.current <= 0) {
        let photo = document.getElementById("photo-02");
        photo.classList.add("d-block");
    } else if (output.y.current > 0 && output.y.current < 10) {
        let photo = document.getElementById("photo-01");
        photo.classList.add("d-block");
    } else {
        let photo = document.getElementById("photo-03");
        photo.classList.add("d-block");
    }
};
let handlerResize = function () {
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
};

let hiddenClass = function () {
    if (ele[0]?.classList) {
        ele[0].classList.add("d-none");
        ele[0].classList.remove("d-block");
    }
};

window.addEventListener("mousemove", handlerMouseMove);
window.addEventListener("resize", handlerResize);
