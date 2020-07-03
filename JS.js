var speed=28//
butong_net_left2.innerHTML=butong_net_left1.innerHTML
function Marquee3(){
if(butong_net_left2.offsetWidth-butong_net_left.scrollLeft<=0)
butong_net_left.scrollLeft-=butong_net_left1.offsetWidth
else{butong_net_left.scrollLeft++}}
var MyMar3=setInterval(Marquee3,speed)
butong_net_left.οnmοuseοver=function() {clearInterval(MyMar3)}
butong_net_left.οnmοuseοut=function() {MyMar3=setInterval(Marquee3,speed)}// JavaScript Document