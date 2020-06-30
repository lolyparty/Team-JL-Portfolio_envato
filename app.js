

   var closenav = function(){
    document.querySelector('.slider').classList.add('closure');
    document.querySelector('.slider').classList.remove('slide-nav');
}

var opennav = function(){
    document.querySelector('.slider').classList.add('slide-nav');
    document.querySelector('.slider').classList.remove('closure'); 
}   

//nav bar
document.querySelector('.navbar-toggler').addEventListener('click',opennav);

var list = document.getElementsByClassName('navlink');
console.log(list)
for(var i = 0; i < list.length; i++){
    list[i].addEventListener('click',closenav);
}

document.querySelector('.closebtn').addEventListener('click',closenav);

