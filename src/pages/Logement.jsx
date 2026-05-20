import { useParams, Navigate } from 'react-router-dom'
import logements from '../data/logements.json'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'

function Logement() {
  const { id } = useParams()
  const logement = logements.find((l) => l.id === id)

  // Redirige vers 404 si l'id n'existe pas
  if (!logement) return <Navigate to="/error" replace />

  // Génère les étoiles de notation
  const rating = parseInt(logement.rating)
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span
      key={i}
      className={`logement__star ${i < rating ? 'logement__star--active' : ''}`}
    >
      ★
    </span>
  ))

  return (
    <div className="logement">
      <Slideshow images={logement.pictures} />

      <div className="logement__header">
        <div className="logement__infos">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, i) => (
              <span key={i} className="logement__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement__host">
          <p className="logement__host-name">{logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
            className="logement__host-img"
          />
        </div>
      </div>

      <div className="logement__rating">
        {stars}
      </div>

      <div className="logement__collapses">
        <Collapse
          title="Description"
          content={logement.description}
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  )
}

export default Logement