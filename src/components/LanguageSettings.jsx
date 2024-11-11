import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSettings = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Language Settings</h3>
      <div className=" gap-2 flex items-center">
        <button onClick={() => changeLanguage('en')} className="bg-[#8cd836] shadow-md text-white px-4 py-2 rounded">
          English
        </button>
        <button onClick={() => changeLanguage('fr')} className="border text-gray-800 px-4 py-2 rounded">
          French
        </button>
      </div>
    </div>
  );
};

export default LanguageSettings;
