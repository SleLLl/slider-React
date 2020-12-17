import React from 'react'
import styled from 'styled-components';

function Dot({active, changeSlide, numb}) {

    const atr = {'data-attr': numb}
    const Dot = styled.span`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${active ? 'black' : 'white'};`

    return (<Dot {...atr} onClick={changeSlide}/>)

}

export default Dot
