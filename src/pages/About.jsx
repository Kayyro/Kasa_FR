import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import bannerAbout from '../assets/banner.png'

const aboutItems = []

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
