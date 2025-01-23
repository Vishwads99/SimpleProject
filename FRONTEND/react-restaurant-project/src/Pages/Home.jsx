import About from "../components/About"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Menu from "../components/Menu"
import Qualities from "../components/Qualities"
import Reservation from "../components/Reservation"
import Team from "../components/Team"
import WhoAreWe from "../components/WhoAreWe"


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <Qualities></Qualities>
      <Menu></Menu>
      <WhoAreWe></WhoAreWe>
      <Team></Team>
      <Reservation></Reservation>
      <Footer></Footer>
    </div>
  )
}

export default Home
