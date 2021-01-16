import React from 'react'
import styled from 'styled-components'
import Container from './container'

const FooterStyled = styled.footer`
  color: white;

  a {
    text-decoration: none;
    color: white;
  }

  ul {
    display: flex;
    list-style: none;
  }

  .social {
    background: linear-gradient(87.66deg, #0F0BD2 3.93%, #13B7EB 96.07%);
    mix-blend-mode: normal;
    padding: 1rem 0;
  }

  .info {
    padding: 1rem 0;
    font-size: 13px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    background-color: #202930;
  }
`

export default function Footer() {
  return (
    <FooterStyled>
      <div className='social'>
        <Container className='container'>
          <ul>
            <li>
              <a href='https://www.instagram.com/carlosmtzdev'> Instagram </a>
            </li>
            <li>
              <a href='https://github.com/carlosmtzdev'> Github </a>
            </li>
            <li>
              <a href='https://twitter.com/carlosmtzdev'> Twitter </a>
            </li>
          </ul>
        </Container>
      </div>
      <div className='info'>
        <p>Carlos Martinez | Frontend Developer</p>
      </div>
    </FooterStyled>
  )
}