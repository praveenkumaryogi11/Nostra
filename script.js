
//offerclose function

const offerClose = document.getElementById('offerClose');

offerClose.addEventListener("click",()=>{
    offerClose.parentElement.remove()
})


// side menu function

const sideMenu = document.getElementById('side-menu');
const sideNavBar = document.getElementById('sidenav');
const closeNav = document.getElementById('closenav')

sideMenu.addEventListener("click",()=>{
    sideNavBar.style.marginRight = 0;
})

closeNav.addEventListener("click",()=>{
    sideNavBar.style.marginRight = "-60%";
})

// Slider function
const imgs = document.getElementsByClassName('slider__imgs');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let slidermargin = 0;

rightArrow.addEventListener("click",

    function () {
        slidermargin = slidermargin + 100

        if (slidermargin > 200) {
            slidermargin = 0
            imgs[0].style.marginLeft = 0;
        }
        else {
            imgs[0].style.marginLeft = "-" + slidermargin + "vw";
        }

    }
)

leftArrow.addEventListener("click",

    function () {

        if (slidermargin == 0) {

            slidermargin = 0
            imgs[0].style.marginLeft = "-" + slidermargin + "vw";
        }
        else {
            slidermargin = slidermargin - 100
            imgs[0].style.marginLeft = "-" + slidermargin + "vw";
        }

    }
)

// favorite list function
var likebuttons=document.querySelectorAll(".black-heart")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
    
        if(e.target.src.indexOf("blackheart")>0)
        {
            e.target.src="./images/redheart.png"
        }
        else{
            e.target.src="./images/blackheart.png"
        }
    })
})
