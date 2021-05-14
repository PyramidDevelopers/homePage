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

function App() {
    // useEffect(() => {
    //     // browser.tabs.setZoom()
    //     // document.browser.tabs.setZoom(0.5)
    //     // console.log('zoom')
    //     document.body.style.zoom = '50%'
    // })

    return (
        <div className="app xl:fontSize-7xl">
            <NewIntro />
            <About />
            <What />
            <Show />
            <Choose />
            <OurTeam />
            <ReachUs />
            <Footer />
        </div>
    )
}

export default App
