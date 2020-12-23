import React from 'react'
import styled from 'styled-components';

const DotWrapper = styled.span`
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => props.active ? 'black' : 'white'};`


const Dot = ({active, changeSlide,}) => (
  <DotWrapper active={active} onClick={changeSlide}/>
);

export default Dot
