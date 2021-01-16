import React from "react"
import styled from "styled-components"
import Banner from "../components/banner"
import Layout from '../components/layout'

const HomeStyled = styled.div`
  span {
    color: #38E7FF;
  }

  .content {
    text-align: center;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }

  .title {
    font-weight: 500;
    font-size: 65px;
    line-height: 85px;
  }

  .description {
    margin-top: 2rem;
    text-align: center;
    letter-spacing: 0.05em;
    line-height: 2rem;
    font-size: 20px;
  }

  .social {
    margin-top: 3rem;
    display: flex;
    justify-content: space-around;

    a {
      text-decoration: none;
      color: white;
    }
  }
`

export default function Home() {
  return (
    <Layout>
      <HomeStyled>
        <Banner>
          <div className='content'>
            <div className="title">
              <p>
                Hola, Soy <span>Carlos Martinez</span>
              </p>
              <p>
                <span>Frontend Developer</span>
              </p>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maiores iure ex, veritatis, animi corporis possimus neque rem dolores facilis repellat. Exercitationem inventore delectus soluta, obcaecati qui suscipit deleniti perferendis!
              </p>
              <div className="social">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Youtube</a>
                <a href="#">Linkedin</a>
              </div>
            </div>
          </div>
        </Banner>
      </HomeStyled>
    </Layout>
  )
}
