import './App.css'
import AlwaysHere from './Components/AlwaysHere/AlwaysHere'
import ChooseUs from './Components/ChooseUS/ChooseUs'
import CryptoLIsting from './Components/CryptoListing/CryptoLIsting'
import Footer from './Components/Foooter/Footer'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import Numbers from './Components/Numbers/Numbers'
import Portfolio from './Components/Portfolio/Portfolio'
import Staking from './Components/Staking/Staking'
import StartJourney from './Components/StartJourney/StartJourney'
import Trade from './Components/Trade/Trade'

function App() {
  
  return (
    <>
    
<Nav />
<Hero />
<Numbers/>
<CryptoLIsting/>
<Portfolio/>
<Staking/>
<ChooseUs/>
<Trade/>
<AlwaysHere/>
<StartJourney/>
<Footer/>
    </>
  )
}

export default App
