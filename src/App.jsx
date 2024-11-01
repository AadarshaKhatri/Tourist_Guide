import './output.css'

import './App.css'

import Card from './Components/UI/Card'

import Home from './Components/Home'
import About from './Components/About'
import UpcomingTours from './Components/UpcomingTours'
import Testimonials from './Components/Testimonials'
import Banner from './Components/Banner'
import Footer from './Components/Footer'



function App() {
  return (
    <>
    <main>
      {/* Body Image */}
      <Home/>

      {/* About Us */}

      <About/>


      {/* Our Upcomming tours  */}
    <UpcomingTours/>

    {/* Testimonials*/}

    <Testimonials/>

    <Banner/>
    <Footer/>

    </main>
   
     
    </>
  )
}

export default App
