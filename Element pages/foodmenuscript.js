var scroll1=document.querySelectorAll(".menu1 .scroll1 .scrollimg1");
var scroll2=document.querySelectorAll(".menu1 .scroll2 .scrollname1");
scroll1.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(-45%)",
        duration:3,
        scrollTrigger:{
            trigger:".menu1",
            scroller:"body",
            // markers:true,
            start:"top top",
            scrub:1,
            // pin:".menu1"
        }
    })
})

scroll2.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(-45%)",
        duration:3,
        scrollTrigger:{
            trigger:".menu1",
            scroller:"body",
            // markers:true,
            start:"top top",
            scrub:1,
            // pin:".menu1"
            
        }
    })
})
var scroll3=document.querySelectorAll(".menu1 .scroll3 .scrollimg2");
var scroll4=document.querySelectorAll(".menu1 .scroll4 .scrollname2");
scroll3.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(20%)",
        duration:3,
        scrollTrigger:{
            trigger:".menu1",
            scroller:"body",
            // markers:true,
            start:"top top",
            scrub:1,
            // pin:".menu1"
        }
    })
})

scroll4.forEach(function(elem){
    gsap.to(elem,{
        transform:"translateX(20%)",
        duration:3,
        scrollTrigger:{
            trigger:".menu1",
            scroller:"body",
            // markers:true,
            start:"top top",
            scrub:1,
            // pin:".menu1"
        }
    })
})

gsap.set(".name h1",{opacity:1})
gsap.from(".effect",{
    x:400,
    duration:0.5,
    stagger:0.1,
    // delay:-1,
    scrollTrigger:{
        trigger:".menu1",
        scroller:"body",
        scrub:2,
        start:"top 0%",
        // markers:true
        // pin:".menu1"
    }
})
gsap.from(".effect2",{
    x:-400,
    duration:0.5,
    stagger:-0.1,
    // delay:-1,
    scrollTrigger:{
        trigger:".menu1",
        scroller:"body",
        scrub:2,
        start:"top 0%",
        // markers:true,
        pin:".menu1"
    }
})

//cart colorchange
var flag=0;
document.getElementById("cart").onclick = changeColor;   
function changeColor() {
    if(flag==0)
    {document.querySelector("#cart").style.color = "green";flag=1}
    else{
        document.querySelector("#cart").style.color = "#fff";
        flag=0;
    }
    return false;
    
}
//order now
var f=0;
document.querySelector(".orderbtn").onclick = ordered;   
function ordered() {
    if(f==0)
    {document.querySelector(".lftcnt button").innerHTML= "CANCEL"
    document.querySelector(".orderbtn").style.color="green";f=1}
    else{
        document.querySelector(".lftcnt button").innerHTML = "ORDER NOW";
        document.querySelector(".orderbtn").style.color="#e5bc6b"
        f=0;
    }
    return false;
    
}

//increment button
    var plus=document.querySelector(".plus")
    var minus=document.querySelector(".minus")
    var num=document.querySelector(".num")
    var count=0
    plus.addEventListener("click",function(){
        count++;
        num.innerHTML=count
    })
    minus.addEventListener("click",function(){
        if(count>0){
            count--; 
            num.innerHTML=count
        }
        else{
            count=0;
        num.innerHTML=count}
    })
