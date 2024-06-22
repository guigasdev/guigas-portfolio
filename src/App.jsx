import './App.css';
import Hero from './sections/Hero/Hero';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <Hero />
    </>
  );
}

export default App
