function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
loco();


function cursorSizeInc(){
    gsap.to(".cursor",{
        transform: "scale(2.5)",
        duration:0.4,
    })
}


function cursorSizeDec(){
    gsap.to(".cursor",{
        transform: "scale(1)",
        duration:0.4,
    })
}


function cursorMove(){
    document.addEventListener("mousemove", function(e){
        gsap.to(".cursor",{
            left: e.x,
            top: e.y,
        })
    })
}
cursorMove();


function videoAnimation(){
    gsap.to(".Page1 video",{
        filter: "blur(15px)",
        transform: "scaleX(0.8)",
        scrollTrigger:{
            trigger:".Page1",
            scroller:".main",
            // markers:true,
            start: "top 0",
            end: "top -50%",
            scrub: true
        }
    })
}
videoAnimation();


function navAnimation(){
    gsap.to("nav ul",{
        y: -100,
        duration:0.5,
        scrollTrigger:{
            trigger:"nav",
            scroller:".main",
            // markers:true,
            start: "top 0",
            end: "top -20%",
            scrub: true
        }
    })
}
navAnimation();


function navMenuAnimation(){
    gsap.to("nav i",{
        display: "block",
        scrollTrigger:{
            trigger:"nav",
            scroller:".main",
            // markers:true,
            start: "top -20%",
            end: "top -50%",
            scrub:true
        }
    })
}
navMenuAnimation();


function Hover(){
    // navbar----------------------------------------
    let nav = document.querySelector("nav");
    nav.addEventListener("mouseenter",function(){
        cursorSizeInc();
    })

    nav.addEventListener("mouseleave", function(){
        cursorSizeDec();
    })

    // -------------- left-page2-----------------
    let left_page2 = document.querySelector(".left-page2");
    left_page2.addEventListener("mouseenter",function(){
        gsap.to(".left-page2",{
            scale: 1.08,
            duration: 0.6
        })
    })

    left_page2.addEventListener("mouseleave",function(){
        gsap.to(".left-page2",{
            scale: 1,
            duration: .6
        })
    })


    let button = document.querySelector(".right-page2 button");
    button.addEventListener("mouseenter",function(){
        cursorSizeInc();
    })

    button.addEventListener("mouseleave", function(){
        cursorSizeDec();
    })
}
Hover()



function page2Animation(){
    
    gsap.to(".Page2 img",{
        transform: "translateY(-50%) translateX(69%)",
        duration: 10,
        repeat: -1,
        ease: "none",
    })

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".Page2",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end: "top 0%",
            scrub: true
        }
    });

    tl2.from(".left-page2",{
        y: 100,
        opacity: 0,
        duration: 0.8,
    }, "same")
   
    tl2.from(".right-page2 h1",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    },"same")

    tl2.from(".right-page2 p",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    })

    tl2.from(".right-page2 button",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    })
}
page2Animation();

function page3Animation(){

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".Page3",
            scroller: ".main",
            // markers: true,
            start: "top 70%",
            end: "top 10%",
            scrub: true
        }
    });

    tl3.from(".right-page3",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        // scale: 1.15
    }, "same")
   
    tl3.from(".left-page3 h1",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    },"same")

    tl3.from(".left-page3 p",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    })

    tl3.from(".left-page3 button",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    })
}
page3Animation();

function page4Animation(){
    var tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4-content1",
            scroller: ".main",
            // markers: true,
            start: "top 70%",
            end: "top 10%",
            scrub: true
        }
    });
   
    tl4.from(".page4-content1 h2",{
        y: 40,
        x: 20,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    },"same")

    tl4.from(".page4-content1 p",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    })

    tl4.from(".page4-content1 button",{
        y: 40,
        opacity: 0,
        duration: 0.8,
        scale: 1.15
    })

    let tl4C2_3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page4-content2",
            scroller: ".main",
            // markers: true,
            start: "top 50%",
            end: "top -30%",
            scrub: true
        }
    });

    tl4C2_3.from(".page4-content2", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration: 0.8,
    })

    tl4C2_3.from(".page4-content3", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration: 1,
    })

    let tl4C4_5 = gsap.timeline({
        scrollTrigger:{
            trigger: ".page4-content4",
            scroller: ".main",
            // markers: true,
            start: "top 80%",
            end: "top -50%",
            scrub: true
        }
    })

    tl4C4_5.from(".page4-content4", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration: 1,
    })

    tl4C4_5.from(".page4-content5", {
        y: 50,
        scale: 1.15,
        opacity: 0,
        duration: 1,
    })
}
page4Animation();




var tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".Page5",
        scroller: ".main",
        start: "top 0",
        end: "top -100%",
        scrub: 3,
        // markers: true,
        pin: true
    }
})
tl5.to(".page5-content", {
    transform: "translateX(-60%)",
}, "okay")

tl5.to(".Page5 .slider-in", {
    x: 650,
}, "okay")