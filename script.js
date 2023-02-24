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

// infinite
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

//menu
var menu = document.querySelector("#menui #m")
var full =  document.querySelector("#menu")
var closem = document.querySelector("#menui #c")
var flag = 0
menu.addEventListener("click",function(){
    if(flag == 0){
        full.style.top="0%"
    menu.style.opacity = "0"
    closem.style.opacity = "1"
    flag = 1
    }else{
        full.style.top = "-100vh"
        closem.style.opacity = "0"
        menu.style.opacity = "1"
        flag = 0
    }
})

//login & signup
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
        page.style.right="-100%"
        page.style.opacity = "0"
})
signup.addEventListener("click",function(){
        pages.style.right="0%"
        pages.style.opacity = "1"
})
closesign.addEventListener("click",function(){
        pages.style.right="-100%"
        pages.style.opacity = "0"
})

//whcontent
var hotelFilter = document.querySelector("#hotel .apply");
var foodFilter = document.querySelector("#food .apply");
var tableFilter = document.querySelector("#tables .apply");
var hwhcontent = document.querySelector("#hotel .whcontent");
var fwhcontent = document.querySelector("#food .whcontent");
var twhcontent = document.querySelector("#tables .whcontent");
var hf=0,ff=0,tf=0;
hotelFilter.addEventListener("click",function(){
    if (hf==0) {
        hf=1;
        hwhcontent.style.bottom = "0%";
        hotelFilter.innerHTML = "Apply";
    }
    else{
        hf = 0;
        hwhcontent.style.bottom = "-100%";
        hotelFilter.innerHTML = "Apply Filter";
    }

})
foodFilter.addEventListener("click",function(){
    if (ff==0) {
        ff=1;
        fwhcontent.style.bottom = "0%";
        foodFilter.innerHTML = "Apply";
    }
    else{
        ff = 0;
        fwhcontent.style.bottom = "-100%";
        foodFilter.innerHTML = "Apply Filter";
    }

})
tableFilter.addEventListener("click",function(){
    if (tf==0) {
        tf=1;
        twhcontent.style.bottom = "0%";
        tableFilter.innerHTML = "Apply";
    }
    else{
        tf = 0;
        twhcontent.style.bottom = "-100%";
        tableFilter.innerHTML = "Apply Filter";
    }

})

//PageLoader
function pageLoader(){
    var t1 = gsap.timeline();
    t1.to(".lbbcircle",{
        scale:20,
        opacity:1,
        stagger:.1,
        ease:Power1.easeInOut,
        duration:.5
    })
    .to(".lbcircle",{
        stagger:.1,
        scale:21,
        ease:Power1.easeInOut,
        duration:.5
    })
    .to(".lcircle",{
        stagger:.1,
        scale:25,
        ease:Power1.easeInOut,
        duration:.5
    })
    .to(".lscircle",{
        stagger:.1,
        scale:28,
        ease:Power1.easeInOut,
        duration:.5
    })
    .to(".llcircle",{
        stagger:.1,
        scale:28,
        ease:Power1.easeInOut,
        duration:.5
    })
    .to("#imglogo",{
        opacity:1
    })
    .to("#loader",{
        y:"-100%",
        ease:Power1,
        duration:.8
    })
}
pageLoader();