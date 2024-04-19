const crsr=document.getElementById('cursor');
const crsrBlr=document.getElementById('cursor-blr');
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    crsrBlr.style.left=dets.x - 250+"px";
    crsrBlr.style.top=dets.y- 250+"px";
})

var head=document.querySelectorAll('#nav h4');
head.forEach(function(elem){
    elem.addEventListener('mouseenter',()=>{
        crsr.style.scale=3,
        crsr.style.border="1px solid #fff",
        crsr.style.backgroundColor="transparent"
    })

    elem.addEventListener('mouseleave',()=>{
        crsr.style.scale=1,
        crsr.style.border="0px solid #95c11e",
        crsr.style.backgroundColor="#95c11e"
    })
})

gsap.to("#nav",{
    backgroundColor:"#000",
    height:100,
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})
gsap.from("#about img,#aboutus",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})