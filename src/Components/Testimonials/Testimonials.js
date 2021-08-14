import React from 'react'
import Slider from '../Slider/Slider'

const Testimonials = () => {
    
    const config  = {
            peek: 300,
            breakpoints: {
                2000: { peek: 250 },
                1899: { peek: 225 },
                1850: { peek: { before: 90, after: 50 } },
                1835: { peek: { before: 100, after: 10 } },
                1800: { peek: { before: 70, after: 30 } },
                1780: { peek: 90 },
                1750: { peek: { before: 75, after: 90 } },
                1720: { peek: 60 },
                1690: { peek: { before: 40, after: 65 } },
                1680: {
                    peek: { before: 30, after: 50 },
                },
                1650: { peek: { before: 50, after: 15 } },
                1400: { peek: { before: 75, after: 70 } },
                1350: { peek: { before: 100, after: -15 } },
                1300: { peek: { before: 40, after: 50 } },
                400: {
                    peek: { before: 20, after: 20 },
                },
                320: {peek:5},
                300: { peek: { before: 0, after: 0 } },
            },
        }

    return (
        <Slider isTestimonial={true} testimonialConfig={config}/>
    )
}
export default Testimonials
