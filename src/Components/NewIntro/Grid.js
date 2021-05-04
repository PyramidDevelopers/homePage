import React, { useState } from 'react';
import './Grid.css';
import { layouts } from './layouts';
import { Responsive, WidthProvider } from 'react-grid-layout';
import GridItems from './GridItems';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const THEME = [
  'yellow',
  'pink',
  'green',
  'peach',
  'dark_green',
  'purple',
  'cyan',
  'orange',
];
const THEME_COLOR = [
  '#ffca60',
  '#FF60BB',
  '#DBFF60',
  '#FF6085',
  '#60FFBA',
  '#B460FF',
  '#60EFFF',
  '#FF7660',
];
// const THEME = ['pink', 'green'];
function Grid() {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState(THEME[0]);
  const changeLayout = () => {
    document.documentElement.style.setProperty(
      '--general-color',
      THEME_COLOR[count]
    );
    setCount((count + 1) % 8);
    console.log(count);
    setColor(THEME[count]);
  };

  return (
    <div className='Grid'>
      <ResponsiveReactGridLayout
        useCSSTransforms={true}
        className='layout'
        layouts={layouts[color]}
        // cols={14}
        rowHeight={150}
        isDraggable={false}
        isResizable={false}
        compactType={'vertical'}
        margin={[20, 20]}
        measureBeforeMount={false}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 84, md: 10, sm: 6, xs: 4, xxs: 2 }}>
        {GridItems(layouts[color].lg, color, count, changeLayout)}
      </ResponsiveReactGridLayout>
    </div>
  );
}

export default Grid;
