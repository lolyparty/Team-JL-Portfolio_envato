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
// console.log(list)
for(var i = 0; i < list.length; i++){
    list[i].addEventListener('click',closenav);
}

document.querySelector('.closebtn').addEventListener('click',closenav);

let scrollHeight = Math.max(document.documentElement.offsetHeight,document.documentElement.scrollHeight, document.documentElement.clientHeight, document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight);
// console.log(scrollHeight)

setInterval(()=>{
  
var scrollPos = window.pageYOffset;
// console.log(scrollPos) 

if(scrollPos > 2800){
  document.querySelector('.scroll_top').style.display = 'block';
}else if(scrollPos > 4200){
    document.querySelector('.fa').style.color = 'white !important'
}
else{
  document.querySelector('.scroll_top').style.display = 'none'
}
}, 100)



document.querySelector('.scroll_top').addEventListener('click', ()=>{
  window.scrollTo(0,0)
})