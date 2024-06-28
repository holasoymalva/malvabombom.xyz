document.getElementById('languageButton').addEventListener('click', toggleLanguage);

const translations = {
  en: {
    intro: "Hi, I’m <span class='t__marker'>Martin</span><span class='wave'>👋</span>",
    introDescription: "Developer, Maker & Designer",
    about: "Hi <span class='wave'>👋</span>, My name is <span class='t__uva'>Martin</span> and I am a <span class='t__bold t__uva'>Software Engineer 🧑🏽‍💻</span> with experience at companies like <span class='t__uva'>Facebook, Amazon, and Disney</span>, as well as various open source projects. I am passionate about using my skills to build innovative and user-friendly applications that make a positive impact on people's lives."
  },
  es: {
    intro: "Hola, soy <span class='t__marker'>Martin</span><span class='wave'>👋</span>",
    introDescription: "Desarrollador, Creador y Diseñador",
    about: "Hola <span class='wave'>👋</span>, Mi nombre es <span class='t__uva'>Martin</span> y soy un <span class='t__bold t__uva'>Ingeniero de Software 🧑🏽‍💻</span> con experiencia en empresas como <span class='t__uva'>Facebook, Amazon y Disney</span>, así como en varios proyectos de código abierto. Me apasiona usar mis habilidades para crear aplicaciones innovadoras y fáciles de usar que tengan un impacto positivo en la vida de las personas."
  }
};

let currentLanguage = 'en';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  document.getElementById('intro').innerHTML = translations[currentLanguage].intro;
  document.getElementById('introDescription').innerText = translations[currentLanguage].introDescription;
  document.getElementById('about').innerHTML = translations[currentLanguage].about;
}