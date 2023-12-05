// for smooth scrolling
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




var main = document.querySelector(".main");
var follow = document.querySelector(".follow");
var page2 = document.querySelector(".page2")

main.addEventListener("mousemove",function(dets){
    gsap.to(follow,{
       top:dets.y+100,
       left:dets.x,
    })
})
page2.addEventListener("mousemove",function(dets){
    gsap.to(follow,{
       top:dets.y,
       left:dets.x,
    })
})