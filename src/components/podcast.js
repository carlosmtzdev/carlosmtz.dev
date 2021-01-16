import React from 'react'
import styled from 'styled-components'

const PodcastStyled = styled.section`
  background-color: red;
`

export default function PodcastItem(props) {
  return (
    <PodcastStyled>
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <div>
        <p>{props.children}</p>
      </div>
    </PodcastStyled>
  )
}