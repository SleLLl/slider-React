import React, {useState, useEffect} from 'react';
import SliderContent from "./SliderContent.jsx";
import Slide from "./Slide.jsx";
import Arrow from "./Arrow.jsx";
import Dot from "./Dot.jsx";
import styled from 'styled-components';


const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`
const DotsWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


export default function Slider({setup}) {
    const {elements, parent, isImage, infinite} = setup;
    const getWidth = () => document.querySelector(parent).offsetWidth;

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
            transition: 0.45,
            activeIndex: numbSlide,
            translate: numbSlide * getWidth(),
        }));
    }


    const currentSlide = () => {
        setState(prevState => ({
            ...prevState,
            transition: 0.45,
            translate: prevState.activeIndex * getWidth(),
        }));
    }

// resize for adaptive
    useEffect(() => {
        window.onresize = () =>
            currentSlide()
    }, []);

    let startX, endX;
    const ref = React.createRef();

    const onAnimation = () => {
        if (activeIndex === 0 && (startX < endX)) return 0;

        if (activeIndex === elements.length - 1 && (startX > endX)) {
            return -getWidth() * activeIndex;
        }
        return -getWidth() * activeIndex - (startX - endX);

    }


// start Touch and click
    const onStart = (data) => {
        if (data.type === 'mousedown') {
            startX = data.clientX;
            ref.current.style.transition = `transform ease-out 0s`;
        } else startX = data.targetTouches[0].clientX;
    }
//Move Touch and click
    const onMove = (data) => {
        if (data.type === 'mousemove') {
            endX = data.clientX
        } else endX = data.targetTouches[0].clientX;
        ref.current.style.transform = `translateX(${onAnimation()}px)`
    }

//End Touch and click
    const onSwipe = () => {
        ref.current.style.transform = '';
        ref.current.style.transition = `transform ease-out ${transition}s`;
        if (startX < endX && ((endX - startX) > getWidth() * 0.25)) {
            prevSlide();
        } else if (startX > endX && ((startX - endX) > getWidth() * 0.25)) {
            nextSlide();
        } else currentSlide();

    }
    // Image slade or other Content
    const slides = isImage ? elements.map((item, i) => <Slide imgUrl={item} key={i}/>) :
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
        <SliderWrapper>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth() * elements.length}
                onTouchStart={onStart}
                onTouchMove={onMove}
                onTouchEnd={onSwipe}
                onMouseDown={onStart}
                onMouseUp={onSwipe}
                onMouseMove={onMove}
                ref={ref}
            >
                {slides}
            </SliderContent>
            {window.innerWidth > 700 ? rightArrow : null}
            {window.innerWidth > 700 ? leftArrow : null}
            <DotsWrapper>{dot}</DotsWrapper>
        </SliderWrapper>

    )


}
