type FilmCardProps = {
  filmTitle: string;
  posterImage: string;
};

function Card({ filmTitle, posterImage }: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={filmTitle} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {filmTitle}
        </a>
      </h3>
    </article>
  );
}
export default Card;
