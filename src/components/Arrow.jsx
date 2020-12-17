import React from 'react';
import styled from 'styled-components';
import leftArrow from './arrow/left-arrow.svg';
import rightArrow from './arrow/right-arrow.svg';


function Arrow({direction, handleClick}) {

    const ArrowWp = styled.div`
      display: flex;
      position: absolute;
      top: 50%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;

      &:hover {
        transform: scale(1.1);
      }

      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);

        &:focus {
          outline: 0;
        }
      }
    `
    return (<ArrowWp onClick={handleClick}>
        {direction === 'right' ? <img src={rightArrow}/> : <img src={leftArrow}/>}
            </ArrowWp>)

}


export default Arrow
