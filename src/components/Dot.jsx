import React from 'react'
import styled from 'styled-components';

const DotWrapper = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => props.active ? 'black' : 'white'};`


function Dot({active, changeSlide, numb}) {

  const atr = {'data-attr': numb}
  return (<DotWrapper {...atr} active={active} onClick={changeSlide}/>)

}

export default Dot
