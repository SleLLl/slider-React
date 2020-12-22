import React from 'react';
import styled from 'styled-components';


const SlideWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  ${props => props.imgUrl ? `background-image: url(${props.imgUrl})` : ''};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export default function Slide({item, imgUrl}) {
  return (<SlideWrapper imgUrl={imgUrl}>{item}</SlideWrapper>)
}
