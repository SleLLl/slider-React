import React from 'react';
import styled from 'styled-components';


export default function Slide({item}) {

    const SlideWp = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 100px;
    `
    return (<SlideWp>{item}</SlideWp>)
}
