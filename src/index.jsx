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
    <h1>
        Debitis dolores eaque exercitationem in labore numquam quo tenetur voluptatibus. Deleniti doloremque dolorum
        et, exercitationem expedita ipsam odio praesentium quam quia, quisquam reiciendis repudiandae rerum vero! Quasi
        quisquam totam voluptatum!
    </h1>,
    <h1>
        Ad eligendi, est fugiat magni odio recusandae suscipit. Adipisci commodi consequuntur culpa dolores ea eius
        est expedita fuga incidunt ipsa laudantium minima nesciunt rem, repellat, reprehenderit, sint sit sunt velit.
    </h1>,
    <h1>
        Dignissimos error est harum illo incidunt ipsam perspiciatis porro possimus reprehenderit tempora. Aliquid
        animi aperiam beatae blanditiis commodi eligendi ipsum iusto laboriosam, optio perferendis quae saepe tenetur,
        unde voluptas voluptatem!
    </h1>
]

const setup = {
    elements: images,  // array elements
    isImage: true,    // isImage or other content
    parent: '#test', // parent Selector
    infinite: true, // infinite or not
}


ReactDOM.render(<Slider setup={setup}/>, document.getElementById('test'));


