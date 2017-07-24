/*
var clock;
$(function() {
    clock = new JSGadget.Clock("#clock");
});*/

// получаем контекст canvas
var ctx_clock;
var size1=149;
var bkcolor=new Array(90,191,231);
var stcolor="#000000";

function clock_pict() {
// получаем текущие дату и время
    var now = new Date();
    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    var ctx =ctx_clock;
// save original context
    ctx.save(); // 1
// clear and set defaults.
    ctx.clearRect(0,0,size1,size1);
    ctx.translate((size1/2),(size1/2));
    ctx.scale(0.4,0.4);
    ctx.rotate(-Math.PI/2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 8;
    ctx.fillStyle ='white';
    ctx.lineCap = "round";
    ctx.save(); // 2
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.fillStyle ='rgb('+bkcolor[0]+','+bkcolor[1]+','+bkcolor[2]+')';
    ctx.arc(0,0,size1,0,Math.PI*2,true);
    ctx.fill();
// render gradient
    for (var i=0;i<15;i++){
        ctx.beginPath();
        ctx.strokeStyle ='rgb('+(bkcolor[0]+8*i)+','+(bkcolor[1]+6*i)+','+(bkcolor[2]+4*i)+')';
        ctx.arc(Math.round(size1/4)+i*2,-Math.round(size1/4)+i,Math.round(size1/2)-i*5,0,Math.PI*2,true);
        ctx.stroke();
    }
//ctx.arc(-size1+Math.round(size1/4)+i*2,size1-Math.round(size1/4)+i,Math.round(size1/2)-i*4,0,Math.PI*2,true);
    ctx.beginPath();
    ctx.fillStyle ='rgb('+(bkcolor[0]+8*i)+','+(bkcolor[1]+6*i)+','+(bkcolor[2]+4*i)+')';
    ctx.arc(Math.round(size1/4)+i*2,-Math.round(size1/4)+i,Math.round(size1/2)-i*5,0,Math.PI*2,true);
    ctx.fill();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
// render hour tick marks
    for (var i=0;i<12;i++){
        ctx.beginPath();
        ctx.rotate(Math.PI/6);
        ctx.moveTo(size1-30,0);
        ctx.lineTo(size1,0);
        ctx.stroke();
    }
    ctx.restore(); // 1
    ctx.fillStyle = stcolor;
    ctx.strokeStyle =stcolor;
// render hour hand
    ctx.save(); // 3
    var hr_hand_size = 0.4 * size1;
    ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(-20,0);
    ctx.lineTo(hr_hand_size, 0);
    ctx.stroke();
    ctx.restore(); // 2
// render minute hand
    var min_hand_size = 0.85 * size1;
    ctx.save(); // 4
    ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(-28,0);
    ctx.lineTo(min_hand_size, 0);
    ctx.stroke();
    ctx.restore(); // 3
// render second hand
    ctx.save(); // 5
    var sec_hand_size = 0.85 * size1;
    ctx.rotate(sec * Math.PI/30);
    ctx.strokeStyle = stcolor;
    ctx.fillStyle = stcolor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-30,0);
    ctx.lineTo(sec_hand_size, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0,0,10,0,Math.PI*2,true);
    ctx.fill();
    ctx.restore(); // 4
// render clock face circle
    ctx.save(); // 6
    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = stcolor;
    ctx.arc(1,1,size1,0,Math.PI*2,true);
    ctx.stroke();
    ctx.restore(); // 5
// render clock face circle
    ctx.save(); // 6
    ctx.beginPath();
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#c7d2e2';
    ctx.arc(1,1,size1,0,Math.PI*2,true);
    ctx.stroke();
    ctx.restore(); // 5
// render clock face circle
    ctx.save(); // 6
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = '#FFFFFF';
    ctx.arc(0,0,size1,0,Math.PI*2,true);
    ctx.stroke();
    ctx.restore(); // 5
    ctx.restore();
}
function repaint_clock() {
    if (!document.getElementById("jst_clock_id1").getContext("2d"))
    {
        G_vmlCanvasManager.initElement(document.getElementById("jst_clock_id1"));

    }

    ctx_clock= document.getElementById("jst_clock_id1").getContext("2d");
    clock_pict();
    setInterval(clock_pict, 1000);
};
window.onload=function() {
    repaint_clock();
}