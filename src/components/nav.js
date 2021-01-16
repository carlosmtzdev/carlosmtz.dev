import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const NavigationStyled= styled.nav`
  color: white;
  width: 50%;
  display: flex;
  align-items: center;
  margin-left: auto;

  & ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  & a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  & .active {
    color: #38E7FF;
    position: relative;

    &:before {
      position: absolute;
      bottom: 0
      left: 0;
      width: 100%;
      border: 1px solid #07C8E2;
    }
  }

`
export default function Navigation() {
  return (
    <NavigationStyled>
      <ul>
        <Link activeClassName="active" to='/podcast'>Podcast</Link>
        <Link activeClassName="active" to='/blog'>Blog</Link>
        <Link activeClassName="active" to='/portafolio'>Portafolio</Link>
      </ul>
    </NavigationStyled>
  )
}