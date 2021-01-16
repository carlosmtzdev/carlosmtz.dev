import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`

export default function Container({children}) {
  return (
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}