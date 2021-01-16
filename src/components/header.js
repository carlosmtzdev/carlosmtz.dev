import React from 'react'
import styled from 'styled-components'
import Navigation from './nav'
import Container from './container'
import Logo from './logo'
import { Link } from 'gatsby'

const HeaderStyled = styled.header`
  display: flex;
  background-color: rgba(32,41,48,0.95);
  padding: 25px 0;

  & > div {
    display: flex;
  }
`

export default function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Link to='/'>
          <Logo />
        </Link>
        <Navigation></Navigation>
      </Container>
    </HeaderStyled>
  )
}