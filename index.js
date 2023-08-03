// projeto do cronometro

let h = 0
let m = 0
let s = 0
let inter

function twoNumbers (digit) {
        if (digit < 10){
            return ('0' + digit)}
        else {
            return (digit)}}
function play () {
    s++
    if(s === 60){
        m++, s=0
    }   if (m === 60){
        h++, m=0}}

document.getElementById('timer').innerHTML=twoNumbers(h)+":"+twoNumbers(m)+":"+twoNumbers(s);


function start() {
    inter = setInterval(play,1000)
}

function stop() {
    clearInterval(inter)
}
function reset() {
    clearInterval(inter)
    s=0
    m=0
    h=0
    document.getElementById('timer').innerHTML= "00"+":"+"00"+":"+"00";
}