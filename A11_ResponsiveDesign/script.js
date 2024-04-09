const intro = document.getElementById("start");
const wrap = document.getElementById("wrap");

setTimeout(() => {
    intro.style.display = "none";
    wrap.style.overflowY = "auto";
}, 6000);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};