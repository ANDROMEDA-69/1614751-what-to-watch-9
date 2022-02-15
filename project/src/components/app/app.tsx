import React from 'react';
import Main from '../main/main-screen';

type AppProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
};

function App({
  promoFilmTitle,
  promoFilmGenre,
  promoFilmYear,
}: AppProps): JSX.Element {
  return (
    <Main promoFilmTitle={promoFilmTitle} promoFilmGenre={promoFilmGenre} promoFilmYear={promoFilmYear} />
  );
}

export default App;
