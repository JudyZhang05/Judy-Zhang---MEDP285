let dayofWeek = new Date().getDay()
let backImg = document.querySelector('body');
let vSec = document.querySelector('section');
let bgC = document.querySelector('#left');
let vWol = document.querySelector('#right');
let vT = document.querySelector('#videoWlop');

bgOpt = [
    "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/df19bvd-c01244cc-f52a-4dfb-868f-a78a640ea444.jpg/v1/fill/w_1280,h_540,q_75,strp/destination3_by_wlop_df19bvd-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQwIiwicGF0aCI6IlwvZlwvNmYxMzFkMjItNzk3NC00NzkzLTlkYjMtMjE2MDM3NmI1YzcyXC9kZjE5YnZkLWMwMTI0NGNjLWY1MmEtNGRmYi04NjhmLWE3OGE2NDBlYTQ0NC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HeGdhUgk0nnpkMyQHraTmB0n9CyOrOxRLSpPRXwiLPI)"
    , "url(https://img10.joyreactor.cc/pics/post/full/art-%D0%B1%D0%B0%D1%80%D1%8B%D1%88%D0%BD%D1%8F-art-elf-girl-6624133.jpeg)"
    , "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/dega4wc-83530f69-4412-43ee-91be-528dd2b7d93f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGVnYTR3Yy04MzUzMGY2OS00NDEyLTQzZWUtOTFiZS01MjhkZDJiN2Q5M2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2_J6E4nPFMO8O2PoJ3E6OxA33E3-07ivBwKeE0MpbtM)"
    , "url(https://img.goodfon.com/original/1920x1080/8/f6/by-wlop-devushka-lebedi-kniga-ptitsy.jpg)"
    , "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/dfo818p-3579f28d-6ed1-4dbd-8f8d-e13fe54c60b1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGZvODE4cC0zNTc5ZjI4ZC02ZWQxLTRkYmQtOGY4ZC1lMTNmZTU0YzYwYjEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Lf-HZEGuRJGHfTCzQX9UZ2xT4EoBjr2I-190wgAxS1o)"
    , "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6f131d22-7974-4793-9db3-2160376b5c72/ddtwqf5-4c734a7e-97b5-4895-8d94-113e821b805f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZmMTMxZDIyLTc5NzQtNDc5My05ZGIzLTIxNjAzNzZiNWM3MlwvZGR0d3FmNS00YzczNGE3ZS05N2I1LTQ4OTUtOGQ5NC0xMTNlODIxYjgwNWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.DCrzT81UuQxBbEOR_ukFTqHm0-8CZN_Co7WxukEujmo)"
]

vOpt = [
    "<iframe width='100%' height=\"776\" src=\"https://www.youtube.com/embed/t3j1aA7VbJM\" title=\"How to Make Mesmerizing Art Like Wlop\" frameborder='0' allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    , "<iframe width='100%' height='648' src='https://www.youtube.com/embed/SqY4JAyGnwQ' title='Photoshop painting process - Destination' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>"
    , "<iframe width='100%' height=\"776\" src=\"https://www.youtube.com/embed/NNBfxHfoaxs\" title=\"Photoshop painting process - Cage\" frameborder='0' allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    , "<iframe width='100%' height=\"776\" src=\"https://www.youtube.com/embed/LPbDsPBZgIE\" title=\"Photoshop painting process - sky1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
    , "<iframe width='100%' height=\"776\" src=\"https://www.youtube.com/embed/yap-8EQkKS0\" title=\"Photoshop painting process - Abyss\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
]

function updateBackground(){
    let ran = Math.floor(Math.random()*5);
    backImg.style.backgroundImage = bgOpt[ran];
    if (ran >= 4) {
        document.querySelector('body').style.color = 'black';
    }else{
        document.querySelector('body').style.color = 'white';
    }
}

let change = false;
let num = 0;
let appealV = document.createElement('h2');
let vide = document.createElement('section');
function moreDetail(){
    if (change == false){
        vSec.append(appealV);
        appealV.textContent = "WLOP LEGACY";
        appealV.style.textAlign = "center";
        
        vSec.append(vide);
        vide.innerHTML = vOpt[0];
        change = true;
        vT.textContent = "Change Video"

    }
    vide.innerHTML = vOpt[num];
    if(num > 5){
        num = 0;
    }else{
        num++;
    }
}

bgC.addEventListener('click', updateBackground);
vWol.addEventListener('click', moreDetail)

//Different font for a different day of the week
if(dayofWeek == 1){
    backImg.style.fontFamily = "Zilla Slab, serif";
}else if(dayofWeek == 2){
    backImg.style.fontFamily = "Lora, serif";
}else if(dayofWeek == 3){
    backImg.style.fontFamily = "Jersey 25, sans-serif";
}else if(dayofWeek == 4){
    backImg.style.fontFamily = "IBM Plex Mono, monospace";
}else if(dayofWeek == 5){
    backImg.style.fontFamily = "Crete Round, serif";
}else if(dayofWeek == 6){
    backImg.style.fontFamily = "Chakra Petch, sans-serif";
}else if(dayofWeek == 7){
    backImg.style.fontFamily = "Be Vietnam Pro, sans-serif";
}