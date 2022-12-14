const btnLang = document.getElementById('btn-lang');
const btnLang1 = document.getElementById('btn-lang1');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async language => {
  const requestJson = await fetch(`assets/json/${language}.json`);
  const texts = await requestJson.json();
  
  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.textContent = texts[section][value];
  }
};

load()

btnLang.addEventListener('click', e => {
  const language = e.target.dataset.language;
  if (language) {
    changeLanguage(language);
    store(language)
  }
});

btnLang1.addEventListener('click', e => {
  const language = e.target.dataset.language;
  if (language) {
    changeLanguage(language);
    store(language)
  }
});

function load() {

  const lang = localStorage.getItem('language')

  if(!lang) {
    store('es')
  } else {
    changeLanguage(lang);
  }
}

function store(value) {
  localStorage.setItem('language', value)
}