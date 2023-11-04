// transform scale-15 md:scale-30 lg:scale-50 xl:scale-100
import './App.css'

import NewIntro from './Components/NewIntro/Intro'
import About from './Components/About/About'
import What from './Components/What/What'
import Show from './Components/Show/Show'
import Choose from './Components/Choose/Choose'
import OurTeam from './Components/OurTeam/OurTeam'
import ReachUs from './Components/ReachUs/ReachUs'
import Footer from './Components/Footer/Footer'
import Testimonial from './Components/Testimonials/Testimonials'
import Dropdown from './Components/Maigrate/Dropdown'
function App() {
    // useEffect(() => {
    //     // browser.tabs.setZoom()
    //     // document.browser.tabs.setZoom(0.5)
    //     // console.log('zoom')
    //     document.body.style.zoom = '50%'
    // })

    return (
        <div className="app">
            <NewIntro />
            <Dropdown /> 
            <About />
            <What />
            <Show />
            <Choose />
            <Testimonial/>
            <OurTeam />
            <ReachUs />
            <Footer />
            {/* <text style={{fontFamily:"JD Scarabeo Light", fontSize:'10rem', color:'var(--general-color)'}}>P</text> */}
        </div>
    )
}

export default App
