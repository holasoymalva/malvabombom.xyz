document.getElementById('languageButton').addEventListener('click', toggleLanguage);

const translations = {
  en: {
    intro: "Hi, I’m <span class='t__marker'>Martin</span><span class='wave'>👋</span>",
    introDescription: "Developer, Maker & Designer",
    about: "Hi <span class='wave'>👋</span>, My name is <span class='t__uva'>Martin</span> and I am a <span class='t__bold t__uva'>Software Engineer 🧑🏽‍💻</span> with experience at companies like <span class='t__uva'>Facebook, Amazon, and Disney</span>, as well as various open source projects. I am passionate about using my skills to build innovative and user-friendly applications that make a positive impact on people's lives.",
    techStack: "My main technology stack is conformed by <span class='t__uva'>Python, JavaScript, Typescript,</span> and their frameworks <span class='t__uva'>Django, Flask, Angular, React</span> and <span class='t__uva'>Vue,</span> but I don't limit myself to just these languages ​​and their tools, since I work comfortably with <span class='t__uva'>Figma, GitHub, Spark AR, Unity</span> and <span class='t__uva'>Xcode</span> for development and UI/UX design."
  },
  es: {
    intro: "Hola, soy <span class='t__marker'>Martin</span><span class='wave'>👋</span>",
    introDescription: "Desarrollador, Creador y Diseñador",
    about: "Hola <span class='wave'>👋</span>, Mi nombre es <span class='t__uva'>Martin</span> y soy un <span class='t__bold t__uva'>Ingeniero de Software 🧑🏽‍💻</span> con experiencia en empresas como <span class='t__uva'>Facebook, Amazon y Disney</span>, así como en varios proyectos de código abierto. Me apasiona usar mis habilidades para crear aplicaciones innovadoras y fáciles de usar que tengan un impacto positivo en la vida de las personas.",
    techStack: "Mi pila de tecnologías principal está conformada por <span class='t__uva'>Python, JavaScript, Typescript,</span> y sus frameworks <span class='t__uva'>Django, Flask, Angular, React</span> y span class='t__uva'>Vue,</span>, pero no me limito solo a estos lenguajes y sus herramientas, ya que trabajo cómodamente con <span class='t__uva'>Figma, GitHub, Spark AR, Unity</span> y <span class='t__uva'>Xcode</span> para desarrollo y diseño UI/UX."
  }
};

let currentLanguage = 'en';

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
  document.getElementById('intro').innerHTML = translations[currentLanguage].intro;
  document.getElementById('introDescription').innerText = translations[currentLanguage].introDescription;
  document.getElementById('about').innerHTML = translations[currentLanguage].about;
  document.getElementById('techStack').innerHTML = translations[currentLanguage].techStack;  // Línea nueva
}
