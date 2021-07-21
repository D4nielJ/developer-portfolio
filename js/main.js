// MAIN MENU FOR NAVBAR MOBILE
// Selectors

const body = document.querySelector('body');
const hamburguerIcon = document.querySelector('.menu-btn-open');
const closeIcon = document.querySelector('.menu-btn-close');
const menuMobile = document.querySelector('.menu-list');
const menuMobileLi = menuMobile.querySelectorAll('.menu-list__links');
const menuMobileAnchor = menuMobile.querySelectorAll('.menu-list__links a');
const navLogoA = document.querySelector('.logo a');

// Function that allows opening and closing the menu

function openMenu() {
  hamburguerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  menuMobile.classList.toggle('hidden');
  let timeOutTime = 125;
  menuMobileLi.forEach((Element) => {
    setTimeout(() => {
      Element.classList.toggle('menu-list__links--on');
    }, timeOutTime);
    timeOutTime += 50;
  });
  const mediaQuerie = window.matchMedia('(max-width: 767px)');
  if (mediaQuerie.matches) {
    body.classList.toggle('overflow-hidden');
  }
}

function closeMenu(e) {
  e.preventDefault();
  hamburguerIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
  menuMobile.classList.toggle('hidden');
  menuMobileLi.forEach((Element) => {
    Element.classList.toggle('menu-list__links--on');
  });
  const mediaQuerie = window.matchMedia('(max-width: 767px)');
  if (mediaQuerie.matches) {
    body.classList.toggle('overflow-hidden');
  }
  document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  });
}

// Function to scroll to the top

function scrollToTop(e) {
  e.preventDefault();
  document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
    behavior: 'smooth',
  });
}

// Events

hamburguerIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', openMenu);
menuMobileAnchor.forEach((Element) => Element.addEventListener('click', closeMenu));
navLogoA.addEventListener('click', scrollToTop);

// M O D A L S
// Information for Modals through objects

const modalInformation = [
  {
    title: 'Minimalist',
    company: 'Academic',
    role: 'Front End Dev',
    year: '2021',
    imgSrc: './assets/minimalist/ss.png',
    desc: 'Academic project developed with Vanilla JS focused on practicing ECMAS 2016 syntax and new methods such as new modules feature, arrow functions, let and const declarations, etc. Practicing Webpack was also in the scope of the project, how to start and manage a project with it and how to bundle it for production.',
    tech: [
      'html',
      'css',
      'javaScript',
    ],
    liveHREF: 'https://jolly-wing-fd7a03.netlify.app/',
    sourceHREF: 'https://github.com/D4nielJ/todo-list',
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
      'javaScript',
    ],
    liveHREF: 'https://d4nielj.github.io/hello-microverse/',
    sourceHREF: 'https://github.com/D4nielJ/developer-portfolio',
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
      'javaScript',
    ],
    liveHREF: 'https://d4nielj.github.io/hello-microverse/',
    sourceHREF: 'https://github.com/D4nielJ/developer-portfolio',
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
      'javaScript',
    ],
    liveHREF: 'https://d4nielj.github.io/hello-microverse/',
    sourceHREF: 'https://github.com/D4nielJ/developer-portfolio',
  },
];

// Selectors for Modals

const buttonSeeProject = Array.from(document.querySelectorAll('.work-card-seeProject'));
const buttonClose = document.querySelector('.modal__icon-close');

const modal = document.querySelector('#modal');
const modalWindow = document.querySelector('.modal__window');
const modalTitle = document.querySelector('.modal__title');
const modalCompany = document.querySelector('.modal__company');
const modalRole = document.querySelector('.modal__role');
const modalYear = document.querySelector('.modal__year');
const modalImg = document.querySelector('.modal__img');
const modalDesc = document.querySelector('.modal__desc');
const modalTech = document.querySelector('.modal__tech');
const modalSeeLive = document.querySelector('.modal__button--see-live');
const modalSeeSrc = document.querySelector('.modal__button--see-src');

// Function openModal

function openModal(project) {
  // let projectIndex = buttonSeeProject.indexOf('project');
  modalTitle.textContent = modalInformation[buttonSeeProject.indexOf(project.target)].title;
  modalCompany.textContent = modalInformation[buttonSeeProject.indexOf(project.target)].company;
  modalRole.textContent = modalInformation[buttonSeeProject.indexOf(project.target)].role;
  modalYear.textContent = modalInformation[buttonSeeProject.indexOf(project.target)].year;
  modalImg.src = modalInformation[buttonSeeProject.indexOf(project.target)].imgSrc;
  modalDesc.textContent = modalInformation[buttonSeeProject.indexOf(project.target)].desc;
  modalTech.innerHTML = '';
  for (
    let i = 0;
    i < modalInformation[buttonSeeProject.indexOf(project.target)].tech.length;
    i += 1
  ) {
    const li = document.createElement('li');
    li.innerHTML = `<li class="modal__tag">${modalInformation[buttonSeeProject.indexOf(project.target)].tech[i]}</li>`;
    modalTech.appendChild(li);
  }
  modalSeeLive.href = modalInformation[buttonSeeProject.indexOf(project.target)].liveHREF;
  modalSeeSrc.href = modalInformation[buttonSeeProject.indexOf(project.target)].sourceHREF;
  modal.classList.toggle('modal--active');
  modalWindow.classList.toggle('modal__window--transition');
  body.classList.toggle('overflow-hidden');
}

function closeModal() {
  modal.classList.toggle('modal--active');
  modalWindow.classList.toggle('modal__window--transition');
  body.classList.toggle('overflow-hidden');
}

// Events

buttonSeeProject.forEach((Element) => {
  Element.addEventListener('click', openModal);
});
buttonClose.addEventListener('click', closeModal);
