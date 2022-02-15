import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Promo = {
  promoFilmTitle: 'The Grand Budapest Hotel',
  promoFilmGenre: 'Drama',
  promoFilmYear: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilmTitle={Promo.promoFilmTitle}
      promoFilmGenre={Promo.promoFilmTitle}
      promoFilmYear={Promo.promoFilmYear}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
