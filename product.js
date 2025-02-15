// Search Functionality

let search = document.getElementById('search');
let container = document.querySelector('.dress-collections');
let dressEl = container.querySelectorAll('div')

search.addEventListener("keyup",()=>{
    let enteredValue = event.target.value.toUpperCase();

    for(i=0;i<dressEl.length;i++){
        let productName = dressEl[i].querySelector('h2');

        if(productName.textContent.toUpperCase().indexOf(enteredValue) < 0){
            dressEl[i].style.display = "none"
        }
        else{
            dressEl[i].style.display = "block"
        }

    }
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



//offerclose function
const offerClose = document.getElementById('offerClose');

offerClose.addEventListener("click",()=>{
    offerClose.parentElement.remove()
})
