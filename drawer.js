const drawer = document.createElement("aside");
const drawerContainer = document.createElement("div");


drawer.innerHTML = `
<div>
<ul>
   <li><a href="#">Home</a></li>
   <li><a href="#">Explore</a></li>
   <li><a href="#">Help</a></li>
</ul>
</div>`;

// styling the drawer
drawerContainer.id="drawer-container";

drawer.id = "drawer";
drawer.setAttribute("data-isVisible", "false")


const body = document.querySelector("body");

const main = document.querySelector("main");

const toggleButton = document.querySelector("button.menu-open-button");

toggleButton.addEventListener("click", (event) => {
    
    body.appendChild(drawerContainer);
    drawerContainer.appendChild(drawer);
    
    body.style.overflowY = "hidden";
    
    setTimeout(()=>{
        drawer.style.transition="left 0.4s ease";
        drawer.style.left = "0%";
        drawer.setAttribute("data-isVisible", "true");
    }, 100);
    
    event.stopPropagation();
})

drawerContainer.addEventListener("click", (event) => {
    if (!drawer.contains(event.target) && drawer.getAttribute("data-isVisible") === "true") {
        console.log(event.target);

        setTimeout(()=>{
            drawer.style.transition="left 0.4s ease";
            drawer.style.left = "-41%";        
            drawer.setAttribute("isVisible", "false");

        }, 50);
        
        setTimeout(()=>{
            body.removeChild(drawerContainer);
            body.style.overflowY = "scroll";
        },100);
        
    }
})
