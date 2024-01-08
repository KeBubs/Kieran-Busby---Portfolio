import { useEffect } from "react"
import Styles from '../App.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Socials from '../components/Socials'
import Contact from '../components/Contact'
import TOPOLOGY from 'vanta/dist/vanta.topology.min'

export default function App() {
  // Do i need to change the background color here? Is there enough contrast?
  useEffect(() => {
    TOPOLOGY({
      el: "#bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  backgroundColor: 0xffffff
    })
  }, [])

  return (
    // Div name set to ensure the background is applied to the entire page
    <>
      <div id="bg" className={Styles.vanta}>
      
        <main >
          <Header />
          <section className={Styles.mainContainer}>
            <div className='divider'> </div>
            <Profile/>
            <div className='divider'></div>
            <AboutMe/>
            <div className='divider'></div>
            <Projects />
            <div className='divider'></div>
            <Contact />
            <div className='divider'></div>
            <Socials />
          </section>
        </main>
        

        </div>
      
      
      
    
    </>
      
  )
}


