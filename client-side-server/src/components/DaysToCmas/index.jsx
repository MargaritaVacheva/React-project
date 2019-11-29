import React from 'react';
import './styles.css';

const DaysToCmas = () => {
  let today = new Date();

  let cmas = new Date(today.getFullYear(), 11, 25);

  if (today.getMonth() === 11 && today.getDay() > 25) {
    cmas.setFullYear(cmas.getFullYear + 1);
  }

  let oneDay = 1000*60*60*24;
  let daysToCmas = Math.ceil( (cmas.getTime() - today.getTime()) / oneDay );

  return (
  <span>{daysToCmas}</span>
  );
}

export default DaysToCmas;
