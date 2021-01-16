import React from 'react'
import Header from './header'
import Footer from './footer'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Roboto'
  }
`

export default function Layout({children}) {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}