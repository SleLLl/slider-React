import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider.jsx';



const images = [
    'https://img2.akspic.ru/image/131890-ozero-voda-ozernyj_kraj-peyzash-prirodnyj_landshaft-2880x1800.jpg',
    'https://img3.akspic.ru/image/22361-lednikovoe_ozero-gora-morena-park-voda-2560x1600.jpg',
    'https://img5.goodfon.com/original/2880x1800/9/ae/landscape-boat-dock-shore-reflection-autumn-autumn-colors-tr.jpg',
    'https://www.culture.ru/storage/images/4726affcaaf7197d2e1986263521efa3/91f1fa95d8a9f7991060dcde6df23344.jpeg'
]

const mass = [
    <div className='slide'>
    <img className='slide__img'  src={'https://img3.akspic.ru/image/22361-lednikovoe_ozero-gora-morena-park-voda-2560x1600.jpg'}/>
        <h1>
            Debitis dolores eaque exercitationem in labore numquam quo tenetur voluptatibus. Deleniti doloremque dolorum
            et, exercitationem expedita ipsam odio praesentium quam quia, quisquam reiciendis repudiandae rerum vero! Quasi
            quisquam totam voluptatum!
        </h1>
    </div>
    ,
    <div className='slide'>
        <img className='slide__img'  src={'https://img2.akspic.ru/image/131890-ozero-voda-ozernyj_kraj-peyzash-prirodnyj_landshaft-2880x1800.jpg'}/>
        <h1>
            Debitis dolores eaque exercitationem in labore numquam quo tenetur voluptatibus. Deleniti doloremque dolorum
            et, exercitationem expedita ipsam odio praesentium quam quia, quisquam reiciendis repudiandae rerum vero! Quasi
            quisquam totam voluptatum!
        </h1>
    </div>,
    <div className='slide'>
        <img className='slide__img'  src={'https://img5.goodfon.com/original/2880x1800/9/ae/landscape-boat-dock-shore-reflection-autumn-autumn-colors-tr.jpg'}/>
        <h1>
            Debitis dolores eaque exercitationem in labore numquam quo tenetur voluptatibus. Deleniti doloremque dolorum
            et, exercitationem expedita ipsam odio praesentium quam quia, quisquam reiciendis repudiandae rerum vero! Quasi
            quisquam totam voluptatum!
        </h1>
    </div>,
    <div className='slide'>
        <img className='slide__img'  src={'https://www.culture.ru/storage/images/4726affcaaf7197d2e1986263521efa3/91f1fa95d8a9f7991060dcde6df23344.jpeg'}/>
        <h1>
            Debitis dolores eaque exercitationem in labore numquam quo tenetur voluptatibus. Deleniti doloremque dolorum
            et, exercitationem expedita ipsam odio praesentium quam quia, quisquam reiciendis repudiandae rerum vero! Quasi
            quisquam totam voluptatum!
        </h1>
    </div>
]



const setup = {
    elements: images,  // array elements
    parent: '#slider', // parent Selector
    isImage: true,    // isImage or other content
    infinite: true, // infinite or not
}


ReactDOM.render(<Slider setup={setup}/>, document.getElementById('slider'));


