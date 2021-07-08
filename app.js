
let nav=document.querySelector(".nav");
let nav1=document.querySelector(".navbar__menu");
let nav2=document.querySelector('main');

nav.addEventListener('click',function(){
nav1.classList.toggle('open')
})
nav2.addEventListener("click",function(){
    nav1.classList.remove('open')
  })
const sections=document.querySelectorAll('section');// select all section element in thid page
const navbar=document.getElementById('navbar__list');// select list elememt by id
const header=document.querySelectorAll('h2'); // select all header element
var body='';
for(let i=1;i<=sections.length;i++){ //loop to know howmany section in page

  body+=`<li><a href="#section${i}" class="menu__link">section ${i}</a>`;// create  navbar make going to section in page by link element
  navbar.innerHTML=body;
    // other code
    // const list =document.createElement('li');
    // navbar.appendChild(list);
    // const link=document.createElement('a');
    // link.textContent='section'+i;
    // list.appendChild(link);
    // const name='#section'+i;
    // link.setAttribute('href',name);
    // link.className='menu__link';
    
    const returnTop =document.createElement('button');
    returnTop.textContent='return top'
   header[i-1].insertAdjacentElement('afterend',returnTop);//add bottun element after every header
   
  
};
//when scroll  the page if the section in viewport add class your-active-class if not remove it
for(let i=0;i<sections.length;i++){
document.addEventListener('scroll',function(){

    if(viewport(sections[i])===true){
        sections[i].classList.add("your-active-class");
    }
    else{
        sections[i].classList.remove("your-active-class");
    }
})

}
//when click on return To return to the beginning of the page
const getbutton=document.querySelectorAll('button');// select all buttons on page
for(let k=0;k<sections.length;k++){
    getbutton[k].addEventListener('click',function(evt){
    evt.preventDefault();
    document.getElementById('top-of-the-page').scrollIntoView();
    ;
    scrollIntoView();

});
//this function select  section is in viewport or not
}
function viewport(elem){
    const location=elem.getBoundingClientRect();
    return(

        location.top >= 0 &&
        location.left >= 0 &&
        location.right <= (window.innerWidth || document.documentElement.clientWidth) 
        

    );

}
