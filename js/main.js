/*app's constants*/
const count = ['x', 'o'];
const map = {
    0:document.getElementById('0'),
    1:document.getElementById('1'),
    2:document.getElementById('2'),
    3:document.getElementById('3'),
    4:document.getElementById('4'),
    5:document.getElementById('5'),
    6:document.getElementById('6'),
    7:document.getElementById('7'),
    8:document.getElementById('8')
}
/*----- app's state (variables) -----*/
var input;
/*----- cached element references -----*/
var o, x, i;
var winMap = {
    0:null,
    1:null,
    2:null,
    3:null,
    4:null,
    5:null,
    6:null,
    7:null,
    8:null
}
/*----- event listeners ------*/
document.querySelector('table')
    .addEventListener('click', plainClick);
/*----- functions ------*/
initialize();
end();

function initialize () {
    i = 0;
    x = 0;
    o = 0;
}
function plainClick(event) {
    input = event.target.id;
    if (map[input].textContent) {
        return;
    } else {
        render(input);
        ticker(input);
    }
}

function ticker() {
    i++;
    if (i%2) {
        x += parseInt(input);
    } else {
        o += parseInt(input);
    }
}

function end() {
    if (i === 9) {
        console.log('You should already know who won');
    }
}


// function winCheck() {
//     var circles = o.split('');
//     var exes = x.split('');
//     var temp1 = 0;
//     var temp2 = 0;
//     for (var j = 1; j <= 5; j++) {
//         temp1 += parseInt(circles[j]);
//         temp2 += parseInt(exes[j]);
//     }
//     console.log(temp1);
//     temp3 = temp1;
// }

function render(input) {
    map[input].textContent = count[i%2]
}
