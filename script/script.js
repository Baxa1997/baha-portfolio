window.addEventListener('DOMContentLoaded', function() {
window.addEventListener('scroll', function() {
   const header = document.querySelector('.header'); 
   header.classList.toggle('navbar', window.scrollY > 100);
});


const menuBtn = document.querySelector('.menu_burger');
const navigation = document.querySelector('.nav');
const icon = document.querySelector('.ri-function-fill');
 const links = document.querySelectorAll('.nav_item');   
    
menuBtn.addEventListener('click', function() {
   menuBtn.classList.toggle('active');
   navigation.classList.toggle('active'); 
   if(menuBtn.classList.contains('active')) {
       icon.classList.remove('ri-function-fill'); 
       icon.classList.add('ri-close-fill');
   }
   else {
       icon.classList.remove('ri-close-fill');
       icon.classList.add('ri-function-fill'); 
   }
});        
    
links.forEach(link => {
    link.addEventListener('click', () => {
       menuBtn.classList.remove('active'); 
       navigation.classList.remove('active');
    });
});
  
window.addEventListener('scroll', () => {
  let reveals = document.querySelectorAll('.reveal');  
  
  
  for(let i = 0; i < reveals.length; i++){
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 50;
    
    if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
    }
    else {
        reveals[i].classList.remove('active');
    }
  }
  
  
});






});