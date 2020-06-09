let marker = document.querySelector('#marker')
let items = document.querySelectorAll('nav a')

function indicatior(e){
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px"
}

items.forEach(item => {
    item.addEventListener('click',(e)=>{
        console.log("here",e.target.offsetWidth,e.target.offsetLeft)
        indicatior(e.target);
    })
});