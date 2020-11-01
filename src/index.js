import menuTemplate from '../templates/menu-items.hbs';
import menu from './menu.json';
import './styles.css';

const menuElem = document.querySelector('ul.js-menu');
const menuMarkup = menuTemplate(menu);
menuElem.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');
const checkbox = document.querySelector('#theme-switch-toggle');

const defaultTheme = localStorage.getItem(Theme.LIGHT);

body.classList.add(Theme.LIGHT);
checkbox.addEventListener('change', onThemeSwitch);

if (defaultTheme === '') {
  body.classList.add(Theme.LIGHT);
}

if (defaultTheme === 'false') {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  checkbox.checked = true;
}

const theme = {};
function onThemeSwitch(e) {
  body.classList.toggle(Theme.LIGHT);
  body.classList.toggle(Theme.DARK);

  const isLightTheme = body.classList.contains(Theme.LIGHT);
  localStorage.setItem(Theme.LIGHT, isLightTheme);

    theme[e.currentTarget.name] = body.classList.value;
    
  const defaultTheme = JSON.stringify(theme);
  localStorage.setItem('defaultTheme', defaultTheme);
}
