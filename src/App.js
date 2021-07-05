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
import TestimonialWrapper from './Components/Testimonials/TestimonialsWrapper'

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
            <TestimonialWrapper/>
            <Testimonial
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
                clientName="Client Name"
                companyName="Company Name"
            />
            <OurTeam />
            <ReachUs />
            <Footer />
        </div>
    )
}

export default App
