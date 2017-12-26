// menu
var menu = document.getElementById('menu');
var acrticles = document.getElementsByClassName('sb-content-headline');
for (var i = 0; i < acrticles.length; i++) {
    var a = document.createElement('a');
    a.href = '#' + acrticles[i].id;
    a.innerText = i === 0 ? 'Home' : acrticles[i].innerText;
    var li = document.createElement('li');
    li.appendChild(a);
    menu.appendChild(li);
}

// copyright year
var date = document.getElementById('year');
date.innerText = new Date().getFullYear();