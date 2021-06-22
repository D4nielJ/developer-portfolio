// Selectors

const body = document.querySelector('body');
const hamburguerIcon = document.querySelector('.menu-btn-open');
const closeIcon = document.querySelector('.menu-btn-close');
const menuMobile = document.querySelector('.menu-list');
const menuMobileLi = menuMobile.querySelectorAll('li');

// Function that allows opening and closing the menu

function openMenu() {
  hamburguerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  menuMobile.classList.toggle('hidden');
  body.classList.toggle('overflow-hidden');
}

// Events

hamburguerIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', openMenu);
menuMobileLi.forEach((Element) => Element.addEventListener('click', openMenu));

// M O D A L S
// Information for Modals through objects

const modalInformation = [
  {
    title: 'Tonic',
    company: 'Canopy',
    role: 'Back End Dev',
    year: '2015',
    imgSrc: './media/snapshoot-portfolio.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    tech: [
      'html',
      'ruby on Rails',
      'css',
      'javaScript'
    ]
    liveHREF: 'https://d4nielj.github.io/developer-portfolio/',
    sourceHREF 'https://github.com/D4nielJ/developer-portfolio',
  }, {
    title: 'Multi-Post Stories',
    company: 'Facebook',
    role: 'Full Stack Dev',
    year: '2015',
    imgSrc: './media/snapshoot-portfolio-1.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    tech: [
      'html',
      'ruby on Rails',
      'css',
      'javaScript'
    ]
    liveHREF: 'https://d4nielj.github.io/developer-portfolio/',
    sourceHREF 'https://github.com/D4nielJ/developer-portfolio',
  }, {
    title: 'Facebook 360',
    company: 'Facebook',
    role: 'Full Stack Dev',
    year: '2015',
    imgSrc: './media/snapshoot-portfolio-2.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    tech: [
      'html',
      'ruby on Rails',
      'css',
      'javaScript'
    ]
    liveHREF: 'https://d4nielj.github.io/developer-portfolio/',
    sourceHREF 'https://github.com/D4nielJ/developer-portfolio',
  }, {
    title: 'Uber Navigation',
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    imgSrc: './media/snapshoot-portfolio-3.png',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam architecto sint, quae sit nostrum accusamus magnam blanditiis iusto in ducimus eligendi voluptatibus commodi.',
    tech: [
      'html',
      'ruby on Rails',
      'css',
      'javaScript'
    ]
    liveHREF: 'https://d4nielj.github.io/developer-portfolio/',
    sourceHREF 'https://github.com/D4nielJ/developer-portfolio',
  }
]

// Selectors for Modals

const modal = document.querySelector('#modal');
const modalWindow = document.querySelector('.modal__window');
const buttonSeeProject = document.querySelectorAll('.work-card-seeProject');
const buttonClose = document.querySelector('.modal__icon-close');

// Function openModal

function openModal() {
  modal.classList.toggle('modal--active');
  modalWindow.classList.toggle('modal__window--transition');
  body.classList.toggle('overflow-hidden');
}

// Events

buttonSeeProject.forEach((Element) => Element.addEventListener('click', openModal));
buttonClose.addEventListener('click', openModal);
