let sect = document.querySelector('section');
let para = document.createElement('p');
para.textContent = "JavaScript is fun!";
sect.appendChild(para);

para.style.color = 'red';
para.style.backgroundColor = 'yellow';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

let but = document.createElement('button');
but.textContent = "Dark Mode";
sect.append(but);

let back = document.querySelector('body');
back.style.backgroundColor = 'cornsilk';
but.addEventListener('click', () => {
    if (back.style.backgroundColor == 'cornsilk'){
        but.textContent = "Light Mode";
        back.style.color = '#c4bbaf';
        back.style.backgroundColor = '#5c4742';
    }else{
        but.textContent = "Dark Mode";
        back.style.color = 'brown';
        back.style.backgroundColor = 'cornsilk';
    }
});