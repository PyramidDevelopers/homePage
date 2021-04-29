import React, { useState } from 'react';
import _ from 'lodash';
import './Grid.css';
import { layouts } from './layouts';
import { Responsive, WidthProvider } from 'react-grid-layout';
import colors from './Colors';
import { Link } from 'react-scroll';
import Logo from './Logo';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const THEME = ['yellow', 'pink', 'green'];
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
    setCount((count + 1) % 3);
    console.log(count);
    setColor(THEME[count]);
  };

  const generateDom = (layout, color) => {
    return _.map(layout, (item, i) => {
      if (colors[color].invisible.includes(item.i)) {
        return <div key={item.i} className='grid-item-invisible'></div>;
      }
      if (colors[color].name.includes(item.i)) {
        return (
          <div key={item.i} className='grid-item-color'>
            <span>{colors[color].letters[item.i]}</span>
          </div>
        );
      }
      if (item.i == '31') {
        return (
          <div key='31' className='logo'>
            <Logo color={count}></Logo>
          </div>
        );
      }
      if (item.i == '39') {
        return (
          <div
            key='39'
            className='grid-item-color grid-item-clickme'
            onClick={changeLayout}>
            <span>CLICK ME&gt;</span>
          </div>
        );
      }
      if (item.i == '50') {
        return (
          <div key='50' className='intro__subtitle'>
            <span>developers</span>
          </div>
        );
      }
      if (item.i == '59') {
        return (
          <div key='59' className='intro__description'>
            <span>
              a student community of
              <br />
              digital revolutionaries
            </span>
          </div>
        );
      }
      if (item.i == '64') {
        return (
          <div key='64' className='link'>
            <Link
              activeClass='active'
              to='reachUs'
              spy={true}
              smooth={true}
              offset={-160}
              duration={1000}>
              <h3 className='giveUs'>
                Give Us
                <br /> A Project
                <br />
                &gt;&gt;&gt;
              </h3>
            </Link>
          </div>
        );
      }
      if (item.i == '66') {
        return (
          <div key='66' className='link'>
            <Link
              activeClass='active'
              to='reachUs'
              spy={true}
              smooth={true}
              offset={-160}
              duration={1000}>
              <h3 className='join'>
                Become A<br /> Part Of Us
                <br />
                &gt;&gt;&gt;
              </h3>
            </Link>
          </div>
        );
      }
      return <div key={item.i} className='grid-item'></div>;
    });
  };
  return (
    <div className='Grid'>
      {/* <button onClick={changeLayout}>Change Layout</button> */}
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
        {generateDom(layouts[color].lg, color)}
      </ResponsiveReactGridLayout>
    </div>
  );
}

export default Grid;
