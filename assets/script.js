var tl = gsap.timeline({
    repeat:-1
});

tl
.to(".rtop1",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:2,
},'a')

.to(".rbottom1",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:2,
},'a')

.to(".text-center1",{
    top:"50%",
    left:"50%",
    ease:Expo.easeInOut,
    duration:2,
},'a')
.to(".imagecontainer",{
    width:"100%",
    ease:Expo.easeInOut,
    stagger:2


},'a')
.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:2,
    top:0
},'a')
.to(".text h1",{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%"
},'a')





