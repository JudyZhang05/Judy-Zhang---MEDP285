const html = document.querySelector("html");
const navbar = document.querySelector("#navbar");
const expansion = document.querySelector("#expand");
const extended = document.querySelector("#extended");

extended.style.position = "absolute";
let tick = false;
function extend_navbar(){
    if(extended.style.position == "absolute"){
        extended.style.position = "fixed";
        extended.style.top = "0px";
        expansion.innerHTML = "<img src=\"./assets/close.svg\" width=\"40px\" height=\"auto\" alt=\"navbar expand\">";
    }else{
        extended.style.position = "absolute";
        extended.style.top = "-1000px";
        expansion.innerHTML ="<img src=\"./assets/expand.svg\" width=\"40px\" height=\"auto\" alt=\"navbar expand\">";
    }
    tick = true;
}

expansion.addEventListener("click", () => {
    extend_navbar()
    if(window.scrollY/1000 < 1 && tick == true){
        navbar.style.backgroundColor = "rgb(160,165,181)";
        if(html.style.overflow =="hidden"){
            html.style.overflow = "auto";
        }else{
            html.style.overflow = "hidden";
        }
    }
    tick = false;
});

addEventListener("scroll", () => {
    navbar.style.backgroundColor = `rgba(160,165,181,${window.scrollY/1000})`
});
addEventListener("resize", () => {
    if(window.innerWidth >= 878 && extended.style.position == "fixed"){
        extend_navbar();
    }
});