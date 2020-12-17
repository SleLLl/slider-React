import React from 'react';
import styled from 'styled-components';


export default function SlideImg({imgUrl}) {

    const SlideWp = styled.div`
      height: 100%;
      width: 100%;
      background-image: url('${imgUrl}');
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    `
    return (<SlideWp/>);
}
