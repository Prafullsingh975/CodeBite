// testimonials
var slideIndex = 1;
      showSlides(slideIndex);
      function plusSlides(n) {
         showSlides(slideIndex += n);
      }
      function currentSlide(n) {
         showSlides(slideIndex = n);
      }
      function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("mySlides");
         var dots = document.getElementsByClassName("dot");
         if (n > slides.length) {slideIndex = 1}
         if (n < 1) {slideIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
         }
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active";
      }

var nav = document.querySelector("#nav")
var tl = gsap.timeline()
tl.to("#nav",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#hotel",
        start:"top top"
        }
})


function overlaytxt(){
    tl.to("#overlay h1:nth-child(1)",{
        opacity:0,
    })
    .to("#overlay h1:nth-child(2)",{
        opacity:1,
        scale:1.2,
        duration:0.7

    })
    .to("#overlay h1:nth-child(2)",{
        opacity:0
    })
    .to("#overlay h1:nth-child(3)",{
        opacity:1,
        scale:1.2,
        duration:0.7

    
    })
    .to("#overlay h1:nth-child(3)",{
        opacity:0
    })
    .to("#overlay h1:nth-child(4)",{
        opacity:1,
        scale:1.2,
        duration:0.7

    
    })
    .to("#overlay h1:nth-child(4)",{
        opacity:0
    })
    .to("#overlay h1:nth-child(5)",{
        opacity:1,
        scale:1.2,
        duration:0.7

    
    })
    .to("#overlay h1:nth-child(5)",{
        opacity:0
    })
    .to("#overlay h1",{
        scale:1,
        delay:-0.41
    })
    .to("#overlay h1:nth-child(1)",{
        opacity:1,
        scale:1.2,
        duration:0.7

    })
    
    setTimeout(overlaytxt,1000)
}
overlaytxt();
var menu = document.querySelector("#menui #m")
var full =  document.querySelector("#menu")
var closem = document.querySelector("#menui #c")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top="0%"
    // full.style.opacity = "1"
    // full.style.pointerEvent = "all"
    menu.style.opacity = "0"
    // menu.style.pointer = "none"
    closem.style.opacity = "1"
    // menu.style.pointer = "initial"
    flag = 1
    }else{
        full.style.top = "-100vh"
        // full.style.opacity = "0"
        // full.style.pointerEvent = "none"
        // full.style.top = "0%"
        // closem.style.pointer = "none"
        closem.style.opacity = "0"
        // menu.style.pointer = "initial"
        menu.style.opacity = "1"
        flag = 0
    }
})
var login = document.querySelector("#nav #buttons #log")
var signup = document.querySelector("#nav #buttons #sign")
var page= document.querySelector("#login")
var pages= document.querySelector("#signup")
var closelog = document.querySelector("#login>i")
var closesign = document.querySelector("#signup>i")
login.addEventListener("click",function(){
        page.style.right="0%"
        page.style.opacity = "1"
})
closelog.addEventListener("click",function(){
        page.style.right="-50%"
        page.style.opacity = "0"
})
signup.addEventListener("click",function(){
        pages.style.right="0%"
        pages.style.opacity = "1"
})
closesign.addEventListener("click",function(){
        pages.style.right="-50%"
        pages.style.opacity = "0"
})
// var scroll1=document.querySelectorAll(".menu1 .scroll1 .scrollimg1");
// var scroll2=document.querySelectorAll(".menu1 .scroll2 .scrollname1");
// scroll1.forEach(function(elem){
//     gsap.to(elem,{
//         transform:"translateX(-45%)",
//         duration:3,
//         scrollTrigger:{
//             trigger:".menu1",
//             scroller:"body",
//             // markers:true,
//             start:"top top",
//             scrub:1,
//             pin:".menu1"
//         }
//     })
// })

// scroll2.forEach(function(elem){
//     gsap.to(elem,{
//         transform:"translateX(-45%)",
//         duration:3,
//         scrollTrigger:{
//             trigger:".menu1",
//             scroller:"body",
//             // markers:true,
//             start:"top top",
//             scrub:1,
            
//         }
//     })
// })
// var scroll3=document.querySelectorAll(".menu1 .scroll3 .scrollimg2");
// var scroll4=document.querySelectorAll(".menu1 .scroll4 .scrollname2");
// scroll3.forEach(function(elem){
//     gsap.to(elem,{
//         transform:"translateX(20%)",
//         duration:3,
//         scrollTrigger:{
//             trigger:".menu1",
//             scroller:"body",
//             // markers:true,
//             start:"top top",
//             scrub:1,
//             // pin:".menu1"
//         }
//     })
// })

// scroll4.forEach(function(elem){
//     gsap.to(elem,{
//         transform:"translateX(20%)",
//         duration:3,
//         scrollTrigger:{
//             trigger:".menu1",
//             scroller:"body",
//             // markers:true,
//             start:"top top",
//             scrub:1,
            
//         }
//     })
// })

// gsap.set(".name h1",{opacity:.1})
// gsap.from(".effect",{
//     x:400,
//     duration:0.5,
//     stagger:0.1,
//     // delay:-1,
//     scrollTrigger:{
//         trigger:".menu1",
//         scroller:"body",
//         scrub:2,
//         start:"top 0%",
//         // markers:true
//     }
// })
// gsap.from(".effect2",{
//     x:-400,
//     duration:0.5,
//     stagger:-0.1,
//     // delay:-1,
//     scrollTrigger:{
//         trigger:".menu1",
//         scroller:"body",
//         scrub:2,
//         start:"top 0%",
//         markers:true
//     }
// })

// gsap.to(".name h1",{
//     opacity:1,
//     duration:1.5,
//     stagger:0.1,
//     delay:-1,
//     scrollTrigger:{
//         trigger:".menu1",
//         scroller:"body",
//         scrub:6,
//         start:"top 0%",
//         markers:true
//     }
// })
// gsap.to(".name .h1",{
//     opacity:1,
//     duration:1.5,
//     stagger:-0.1,
//     delay:-1,
//     scrollTrigger:{
//         trigger:".menu1",
//         scroller:"body",
//         scrub:6,
//         start:"top 0%",
//         markers:true
//     }
// })

// //cart colorchange
// var flag=0;
// document.getElementById("cart").onclick = changeColor;   
// function changeColor() {
//     if(flag==0)
//     {document.querySelector("#cart").style.color = "green";flag=1}
//     else{
//         document.querySelector("#cart").style.color = "#fff";
//         flag=0;
//     }
//     return false;
    
// }
// //order now
// var f=0;
// document.querySelector(".orderbtn").onclick = ordered;   
// function ordered() {
//     if(f==0)
//     {document.querySelector(".lftcnt button").innerHTML= "CANCEL"
//     document.querySelector(".orderbtn").style.color="green";f=1}
//     else{
//         document.querySelector(".lftcnt button").innerHTML = "ORDER NOW";
//         document.querySelector(".orderbtn").style.color="#e5bc6b"
//         f=0;
//     }
//     return false;
    
// }

// //increment button
//     var plus=document.querySelector(".plus")
//     var minus=document.querySelector(".minus")
//     var num=document.querySelector(".num")
//     var count=0
//     plus.addEventListener("click",function(){
//         count++;
//         num.innerHTML=count
//     })
//     minus.addEventListener("click",function(){
//         if(count>0){
//             count--; 
//             num.innerHTML=count
//         }
//         else{
//             count=0;
//         num.innerHTML=count}
//     })
// //map view
// var flag = 0;
// var circle=document.querySelector(".circ")
// circle.addEventListener("click",function(){
//     if(flag==0){
//         circle.style.left="55%"
        
//         flag=1;
//     }
//     else{
//         circle.style.left="4%"
//         flag=0;
//     }
// })
// let views=document.querySelectorAll(".circ");
// var flag=0;
// for(let i=0;i<views.length;i++){
//     views[i].addEventListener("click",function(){
//         // if(flag==0){
//             // views[i].style.left="55%"
//             views[i].style.backgroundColor="green"
//             // flag=1;
//         // }
//         // else{
//         //     views[i].style.left="4%"
//         //     flag=0;
//         // }
//     });
// }

