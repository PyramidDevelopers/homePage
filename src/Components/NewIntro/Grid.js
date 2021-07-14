import React, { useState, useEffect } from 'react'
import './Grid.css'
import { layouts } from './layouts'
import { Responsive, WidthProvider } from 'react-grid-layout'
import GridItems from './GridItems'
import { actionTypes } from '../../reducer'
import { useStateValue } from '../../StateProvider'
const ResponsiveReactGridLayout = WidthProvider(Responsive)

const THEME = [
    'yellow',
    'pink',
    'light_green',
    'peach',
    'green',
    'purple',
    'cyan',
    'orange',
]

const THEME_COLOR = [
    '#ffca60',
    '#FF60BB',
    '#DBFF60',
    '#FF6085',
    '#60FFBA',
    '#B460FF',
    '#60EFFF',
    '#FF7660',
]
function Grid() {
    const [{ globalCount }, setGlobalCounter] = useStateValue()
    const [counter, setCounter] = useState(1)
    const [color, setColor] = useState(THEME[globalCount])
    const [row, setRow] = useState(150);
    const [margin, setMargin] = useState([20,20]);
    

    const changeLayout = () => {
        document.documentElement.style.setProperty(
            '--general-color',
            THEME_COLOR[counter]
        )
        

        setGlobalCounter({
            type: actionTypes.CHANGE_COLOR,
            countValue: counter % 8,
        })

        setCounter((counter + 1) % 8)
        setColor(THEME[counter])
    }
    useEffect(() => {
        let width = window.innerWidth;
        console.log(width);
        if(width > 1900){
            setRow(150)
            setMargin([20,20])
            document.documentElement.style.setProperty(
                '--intro-height',
                '150px'
            )
            document.documentElement.style.setProperty(
                '--intro-margin',
                '10px'
            )
            document.documentElement.style.setProperty(
                '--intro-margin-top',
                '700px'
            )
        }
        else if(width > 1800){
            setRow(140)
            setMargin([19.5,19.5])
            document.documentElement.style.setProperty(
                '--intro-height',
                '140px'
            )
            document.documentElement.style.setProperty(
                '--intro-margin',
                '9.4px'
            )
            document.documentElement.style.setProperty(
                '--intro-margin-top',
                '653px'
            )
        }
        else if(width > 1700){
            setRow(130)
            setMargin([19,19])
        }
        else if(width > 1600){
            setRow(120)
            setMargin([18.5,18.5])
        }
        else if(width > 1500){
            setRow(110)
            setMargin([18,18])
        }
        else if(width > 1400){
            setRow(100)
            setMargin([17.5,17.5])
        }
        else if(width > 1300){
            setRow(90)
            setMargin([17,17])
        }
        else if(width > 768){
            setRow(100)
            setMargin([10,10])
        }
        else if(width > 768){
            setRow(100)
            setMargin([10,10])
        }
        else if(width > 768){
            setRow(100)
            setMargin([10,10])
        }
        else if(width > 480){
            setRow(47)
            setMargin([7,7])
        }
        else{
            setRow(30)
            setMargin([5,5])
        }
        
    }, [window.innerWidth])

    useEffect(() => {
        if(document.querySelector('grid-item-color')){

        let letterWidth = document.querySelector('grid-item-color').clientWidth;
        console.log(letterWidth);
        document.documentElement.style.setProperty(
            '--intro-width',
            letterWidth
        )
        }
    }, [])

    return (
        <div className="Grid">
            <ResponsiveReactGridLayout
                useCSSTransforms={true}
                className="layout"
                layouts={layouts[color]}
                rowHeight={row}
                isDraggable={false}
                isResizable={false}
                compactType={'vertical'}
                margin={margin}
                measureBeforeMount={false}
                breakpoints={{ lg: 1024, md: 768, sm: 480, xs: 0 }}
                cols={{ lg: 84, md: 42, sm: 56, xs: 28}}
            >
                {GridItems(layouts[color].lg, color, counter, changeLayout)}
            </ResponsiveReactGridLayout>
        </div>
    )
}

export default Grid
    // const changeLayout = () => {
    //     document.documentElement.style.setProperty(
    //         '--general-color',
    //         THEME_COLOR[count]
    //     )
    //     setCount((count + 1) % 5)
    //     console.log(count)
    //     setColor(THEME[count])
    // }