button = document.getElementsByTagName('button');
para = document.getElementsByTagName('div');

function show(x) {
    para[x].style.display = 'block';
    button[x].onclick = function() {
        hide(x);
    }
}

function hide(x) {
    para[x].style.display = 'none';
    button[x].onclick = function() {
        show(x);
    }
}

button[0].onclick = function() {
    show(0);
}

button[1].onclick = function() {
    show(1);
}
button[2].onclick = function() {
    show(2);
}
