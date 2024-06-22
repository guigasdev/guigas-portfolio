import './App.css';
import Hero from './sections/Hero/Hero';
import { useTranslation } from 'react-i18next';
import Projects from './sections/Projects/Projects';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}

export default App
