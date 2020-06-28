
   var closenav = function(){
        document.querySelector('.hamburger-nav').classList.add('navbar-close');
        document.querySelector('.hamburger-nav').classList.remove('navbtn');
    }

    var opennav = function(){
        document.querySelector('.hamburger-nav').classList.add('navbtn');
        document.querySelector('.hamburger-nav').classList.remove('navbar-close'); 
    }   
    
    //nav bar
    document.querySelector('.nav-button').addEventListener('click',opennav);
    var list = document.getElementsByClassName('navside-link');
    // console.log(list)
    for(var i = 0; i < list.length; i++){
        list[i].addEventListener('click',closenav);
    }
    document.querySelector('.closebtn').addEventListener('click',closenav);


