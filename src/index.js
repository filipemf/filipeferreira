import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import axios from 'axios';
import './translate/i18n'
import i18next from 'i18next';

const lang = localStorage.getItem('lang') || 'en'
axios.defaults.headers.common['Accept-Language'] = lang
i18next.changeLanguage(lang)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

