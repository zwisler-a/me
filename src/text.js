import deText from './text.de.js';
import enText from './text.en.js';

export default (() => {
  const navLang = navigator.language || navigator.userLanguage;
  return navLang === 'de-DE' ? deText : enText;
})();
