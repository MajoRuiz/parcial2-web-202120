import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({ setLanguage }) => {


  const lenguajes = Object.keys(LOCALES).map(lenguaje => lenguaje[0].toUpperCase() + lenguaje.substring(1).toLowerCase()).filter(lenguaje => lenguaje == 'Spanish' || lenguaje == 'English')

  const changeLenguaje = (event) => {
    console.log(event.target.value)
    setLanguage(event.target.value)
  }

  return (
    <select name='idioma' id='idioma' onChange={changeLenguaje}>
      {lenguajes.map(lenguaje => {
        if (lenguaje == 'Spanish') {
          return <option value={LOCALES[lenguaje.toUpperCase()]} key={lenguaje} selected="selected">{lenguaje}</option>
        } else if (lenguaje == 'English') {
          return <option value={LOCALES[lenguaje.toUpperCase()]} key={lenguaje}>{lenguaje}</option>
        }
      })}
    </select>
  );
};
