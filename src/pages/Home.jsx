import logements from '../data/logements.json'
import Banner from '../components/Banner'
import Card from '../components/Card'
import bannerHome from '../assets/banner.png'

function Home() {
  return (
    <div className="home">
      <Banner image={bannerHome} alt="Appartements en location">
      </Banner>

      <section className="home__grid">
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  )
}
console.log(logements[0])

export default Home