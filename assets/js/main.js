const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


const accordion = document.querySelectorAll('.accordion')

accordion.forEach(element => {
    element.addEventListener('click',() => {
        const accordionBody = element.querySelector('.accordion_body')
        const main = element.querySelector('.main-section')
        if(accordionBody.style.display == 'none'){
            accordionBody.style.display = 'block'; 
            accordionBody.style.transition = 'all 1.5s';
            main.style.borderRadius = '15px 15px 0 0'
        }else{
            accordionBody.style.display = 'none'
            main.style.borderRadius = '15px'
        }
    })
})

const nextBtn=document.querySelector('.back')
const backBtn=document.querySelector('.next')
const slides = document.querySelector('.slides')
const countSl = document.querySelectorAll('.slide').length


let height = 580;
let top123 = 210;

nextBtn.addEventListener('click',()=>{
  top123 = (top123 - height);
  if(top123> -(countSl*height)){
      slides.style.top = top123 + 'px'
  }else{
      top123 = 210;
      slides.style.top = '0px'
  }
})


backBtn.addEventListener('click',()=>
{top123 = -(countSl * height);
  if(top123==0){
      top123 = -(countSl*height - height);
      slides.style.top = top123 + 'px'
  }else if(top>= -(countSl*height)){
      top123 = (top+height);
      slides.style.top = top123 + 'px'
  }
});

