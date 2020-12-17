import React, {useState} from 'react';
import SliderContent from "./SliderContent.jsx";
import SlideImg from "./SlideImg.jsx";
import Slide from "./Slide.jsx";
import Arrow from "./Arrow.jsx";
import Dot from "./Dot.jsx";
import styled from 'styled-components';


const SliderWp = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`
const DotsWP = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


export default function Slider({setup}) {
    const {elements, isImage, parent, infinite} = setup;
    const parentEl = document.querySelector(parent);

    const getWidth = () => parentEl.offsetWidth;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const {translate, transition, activeIndex} = state;

    const nextSlide = () => {
        if (activeIndex === elements.length - 1) {
            return setState(prevState => ({
                ...prevState,
                translate: 0,
                activeIndex: 0
            }));
        }
        setState(prevState => ({
            ...prevState,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        }));
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState(prevState => ({
                ...prevState,
                translate: (elements.length - 1) * getWidth(),
                activeIndex: elements.length - 1
            }));
        }

        setState(prevState => ({
            ...prevState,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        }));

    }

// for dots click
    const onChangeSlide = (e) => {
        const numbSlide = +e.target.getAttribute('data-attr')
        setState(prevState => ({
            ...prevState,
            activeIndex: numbSlide,
            translate: numbSlide * getWidth(),
        }));
    }


    const currentSlide = () => {
        setState(prevState => ({
            ...prevState,
            translate: activeIndex * getWidth()
        }));
    }

// resize for adaptive
    window.onresize = () => {
        currentSlide();
    }


    let startX, endX;
// start Touch
    const onStart = (data) => {
        startX = data.targetTouches[0].clientX;
    }
//Move Touch
    const onMove = (data) => {
        endX = data.targetTouches[0].clientX;
    }

//End Touch
    const onSwipe = () => {
        console.log(startX - endX)
        if (startX < endX && ((endX - startX) > getWidth() * 0.25)) {
            prevSlide();
        } else if (startX > endX && ((startX - endX) > getWidth() * 0.25)) {
            nextSlide();
        } else currentSlide();
    }

    // Image slade or other Content
    const slides = isImage ? elements.map((item, i) => <SlideImg key={i} imgUrl={item}/>) :
        elements.map((item, i) => <Slide key={i} item={item}/>);

    //infinite slider or not
    const leftArrow = (infinite || activeIndex > 0) ? <Arrow direction={'left'} handleClick={prevSlide}/> : null;
    const rightArrow = (infinite || activeIndex < elements.length - 1) ?
        <Arrow direction={'right'} handleClick={nextSlide}/> : null;

    //create dot
    const dot = elements.map((slide, i) => (
        <Dot changeSlide={onChangeSlide} numb={i} key={i} active={activeIndex === i}/>
    ));


    return (
        <SliderWp>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * elements.length}
                onTouchStart={onStart}
                onTouchMove={onMove}
                onTouchEnd={onSwipe}
            >
                {slides}
            </SliderContent>
            {window.innerWidth > 700 ? rightArrow : null}
            {window.innerWidth > 700 ? leftArrow : null}
            <DotsWP>{dot}</DotsWP>
        </SliderWp>

    )


}
