var start = document.getElementById("start");
var wrap = document.getElementById("wrap");

setTimeout(() => {
    start.style.display="none";
    wrap.style.overflowY = "auto";
}, 6000);

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};