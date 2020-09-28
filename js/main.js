
var openButton =document.querySelector('.hamburger');
var openShadow = document.querySelector('.shadow')
var openList = document.querySelector(
  '.sitenav__list'
)
openButton.addEventListener('click',function(){
openButton.classList.toggle('is-active') ;
openShadow.classList.toggle('shadow--open');
openList.classList.toggle('sitenav__list--open');
});
