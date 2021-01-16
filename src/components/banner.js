import React from 'react'
import styled from 'styled-components'

const BannerStyled = styled.section`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;

  &:before {
    content: '';
    display: block;
    background: rgba(28,37,41,0.85);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`


export default function Banner({children}) {
  return (
    <BannerStyled>
        {children}
    </BannerStyled>
  )
}



