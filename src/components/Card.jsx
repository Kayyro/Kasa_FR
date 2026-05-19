import { Link } from 'react-router-dom'

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img
        src={logement.cover}
        alt={logement.title}
        className="card__img"
      />
      <h2 className="card__title">{logement.title}</h2>
    </Link>
  )
}

export default Card