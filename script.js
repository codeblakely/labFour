// allows for boxes to be called
let box1 = "box1";
let box2 = "box2";
let box3 = "box3";
let box4 = "box4";

//allows for buttons to switch between associated colour states
let button1 = false;
let button2 = false;
let button3 = false;

// changes the box called to red, changes the button state to true, associates the true button state to red colour
function button1Clicked() {
    document.getElementById("box1").style.backgroundColor = "red";
    button1 = !button1;
    // allows for toggling between box colours dependent on button state. 
    //new name so code doesn't overwrite box1... took me a long time to figure out
    let boxOne = document.getElementById("box1");
    if (button1 == false) {
        boxOne.style.backgroundColor = "black";
    }
}

// same function as above but for second box/green
function button2Clicked() {
    document.getElementById("box2").style.backgroundColor = "green";
    button2 = !button2;
    let boxTwo = document.getElementById("box2");
    if (button2 == false) {
        boxTwo.style.backgroundColor = "black";
    }
}

//same function as above but for third box/blue
function button3Clicked() {
    document.getElementById("box3").style.backgroundColor = "blue";
    button3 = !button3;
    let boxThree = document.getElementById("box3");
    if (button3 == false) {
        boxThree.style.backgroundColor = "black";
    }
}

// if function that changes the fourth box/yellow to yellow only when the two associated button states are true
function button4Clicked () {
    let yellowbox = document.getElementById("box4");
    if (button1 == true && button2 == true) {
        yellowbox.style.backgroundColor = "yellow";
    } else {
        yellowbox.style.backgroundColor = "black";
    }
}

// same as above but for the fifth box/magenta 
function button5Clicked () {
    let magentabox = document.getElementById("box5");
    if (button1 == true && button3 == true) {
        magentabox.style.backgroundColor = "magenta";
    } else {
        magentabox.style.backgroundColor = "black";
    }
}

// same as above but for the sixth box/cyan
function button6Clicked () {
    let cyanbox = document.getElementById("box6");
    if (button2 == true && button3 == true) {
        cyanbox.style.backgroundColor = "cyan";
    } else {
        cyanbox.style.backgroundColor = "black";
    }
}

