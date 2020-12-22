
# Slider-carousel

This project implements an adaptive carousel slider that works with any HTML.
 ____________________________________________________________________________

## Main features:
* Infinity option;
* Scroling to selected slide;
* Supports swipes (on mibile and desktop devices);
 ____________________________________________________________________________

## Demo

![hippo](https://s8.gifyu.com/images/ezgif.com-crop4686abe735e37961.gif)

  ____________________________________________________________________________
## Using
```js
const setup = {
    elements: mass,  // array elements
    parent: '#slider', // parent Selector
    isImage: false,    // isImage or other content
    infinite: true, // infinite or not
}
const images = [
    'https://img2.akspic.ru/image/131890-ozero-voda-ozernyj_kraj-peyzash-prirodnyj_landshaft-2880x1800.jpg',
    'https://img3.akspic.ru/image/22361-lednikovoe_ozero-gora-morena-park-voda-2560x1600.jpg',
    'https://img5.goodfon.com/original/2880x1800/9/ae/landscape-boat-dock-shore-reflection-autumn-autumn-colors-tr.jpg',
    'https://www.culture.ru/storage/images/4726affcaaf7197d2e1986263521efa3/91f1fa95d8a9f7991060dcde6df23344.jpeg'
]

ReactDOM.render(<Slider elements={images} parent={'#slider'} isImage={true} infinite={true}/>,
    document.getElementById('slider'));
```
#### Options
* `elements` - an array with data that should be displayed in the react-carousel;
* `infinite` - when set to true, infinity mode is activated (after the last slide, the first will be displayed);
* `isImage` - only pictures or not, if only pictures then we pass url;
* `parent` - parent block selector;
* `setup` - object with all settings;

 ____________________________________________________________________________

## Setup local environment
  ```
 git clone https://github.com/SleLLl/slider-React.git
 cd slider-React
 npm i 
 npm run dev - start dev server
 npm run start - bild
  ```
Then open in browser  http://localhost:3000/
  
