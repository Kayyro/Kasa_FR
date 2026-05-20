import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import bannerAbout from '../assets/banner_about.png'

const aboutItems = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    title: 'Respect',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
  },
  {
    title: 'Service',
    content: 'Nos équipes se tiennent à votre disposition pour vous offrir une expérience parfaite. Vos avis peuvent nous aider à améliorer notre service.'
  },
  {
    title: 'Sécurité',
    content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos équipes.'
  }
]

function About() {
  return (
    <div className="about">
      <Banner image={bannerAbout} alt="À propos de Kasa" />

      <div className="about__collapses">
        {aboutItems.map((item, i) => (
          <Collapse key={i} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  )
}

export default About
