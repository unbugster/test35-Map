const SETTINGS_MODAL_OPEN = document.querySelector('.investment-projects__settings');
const SETTINGS = document.querySelector('.settings');
const SETTINGS_MODAL_CLOSE = document.querySelector('.settings__close');

const isEscEvent = (evt) => {
    return evt.key === 'Escape' || evt.key === 'Esc';
  };

SETTINGS_MODAL_OPEN.addEventListener('click', (evt) => {
  SETTINGS.classList.toggle('visually-hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      SETTINGS.classList.add('visually-hidden');
    }
  });
});

SETTINGS_MODAL_CLOSE.addEventListener('click', () => {
  SETTINGS.classList.add('visually-hidden');
});


const YEAR_LENGTH = 4;
const YEAR_INPUTS = document.querySelectorAll('.settings__datalist_type_year');
const MIN__YEAR = 1900;
const MAX__YEAR = 2200;

YEAR_INPUTS.forEach((el) => {
el.addEventListener('input', () => {
    const value = el.value;
    const valueLength = el.value.length;
  
    if (valueLength < YEAR_LENGTH) {
        el.setCustomValidity('Ещё ' + (YEAR_LENGTH - valueLength) +' симв.');
    } else if (valueLength > YEAR_LENGTH) {
        el.setCustomValidity('Удалите лишние ' + (valueLength - YEAR_LENGTH) +' симв.');
    } else if (value > MAX__YEAR) {
        el.setCustomValidity('Укажите число до 2200');
    } else if (value < MIN__YEAR) {
        el.setCustomValidity('Укажите число от 1900');
    }else {
        el.setCustomValidity('');
    }
  
    el.reportValidity();
  });
})

const MIN_COUNT_INPUTS = document.querySelectorAll('.min-count');
const MAX_COUNT_INPUTS = document.querySelectorAll('.max-count');

MIN_COUNT_INPUTS.forEach((el) => {
    el.addEventListener('input', () => {
        const value = el.value;
      
        if (value < 0 || value >= 2) {
            el.setCustomValidity('Укажите число от 0 до 1');
        } else {
            el.setCustomValidity('');
        }
      
        el.reportValidity();
      });
    })

MAX_COUNT_INPUTS.forEach((el) => {
    el.addEventListener('input', () => {
        const value = el.value;
          
        if (value < 1 ) {
            el.setCustomValidity('Укажите число от 1');
        } else {
            el.setCustomValidity('');
        }
        
        el.reportValidity();
    });
})


const INVESTMENT_SITES_INPUT = document.querySelector('.investment-sites__input');
const INVESTMENT_SITES_CHILD_INPUTS = document.querySelectorAll('.investment-sites__child-input');
const INVESTMENT_SITES_LIST = document.querySelector('.investment-sites__list');

INVESTMENT_SITES_INPUT.addEventListener('click', () => {
    INVESTMENT_SITES_LIST.classList.toggle('visually-hidden');

    if (INVESTMENT_SITES_INPUT.checked === true) {
        INVESTMENT_SITES_CHILD_INPUTS.forEach((el) => {
            el.checked = true;
        })
    } else {
        INVESTMENT_SITES_CHILD_INPUTS.forEach((el) => {
            el.checked = false;
        })
    }
})

const INVESTMENT_PROJECTS_INPUT = document.querySelector('.investment-projects__input');
const INVESTMENT_PROJECTS_CHILD_INPUTS = document.querySelectorAll('.investment-projects__child-input');
const INVESTMENT_PROJECTS_LIST = document.querySelector('.investment-projects__list');

INVESTMENT_PROJECTS_INPUT.addEventListener('click', () => {
    INVESTMENT_PROJECTS_LIST.classList.toggle('visually-hidden');

    if (INVESTMENT_PROJECTS_INPUT.checked === true) {
        INVESTMENT_PROJECTS_CHILD_INPUTS.forEach((el) => {
            el.checked = true;
        })
    } else {
        INVESTMENT_PROJECTS_CHILD_INPUTS.forEach((el) => {
            el.checked = false;
        })
    }
})

// -- Yandex-Map -- 

var myMap;

ymaps.ready(init);

function init () {

    myMap = new ymaps.Map('map', {
      
        center: [59.22, 39.88], 
        zoom: 10,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });
}
