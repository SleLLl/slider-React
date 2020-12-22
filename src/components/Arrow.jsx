import React from 'react';
import styled from 'styled-components';
import arrow from './arrow/arrow.svg';

const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
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
    transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
    transform: rotate(${props => props.direction === 'right' ? `180deg` : ``});

    &:focus {
      outline: 0;
    }
  }
`

function Arrow({direction, handleClick}) {
    return (<ArrowWrapper direction={direction} onClick={handleClick}>
        <img src={arrow}/>
    </ArrowWrapper>)
}

export default Arrow
