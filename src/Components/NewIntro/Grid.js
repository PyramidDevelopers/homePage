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
    // const [row, setRow] = useState(150);
    // const [margin, setMargin] = useState([20,20]);
    

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
    // useEffect(() => {
    //     let width = window.innerWidth;
    //     if(width > 1024){
    //         setRow(150)
    //         setMargin([20,20])
    //     }
    //     else if(width > 768){
    //         setRow(100)
    //         setMargin([10,10])
    //     }
    //     else if(width > 480){
    //         setRow(47)
    //         setMargin([7,7])
    //     }
    //     else{
    //         setRow(30)
    //         setMargin([5,5])
    //     }
    // }, [window.innerWidth])

    return (
        <div className="Grid">
            <ResponsiveReactGridLayout
                useCSSTransforms={true}
                className="layout"
                layouts={layouts[color]}
                rowHeight={150}
                isDraggable={false}
                isResizable={false}
                compactType={'vertical'}
                margin={[20,20]}
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