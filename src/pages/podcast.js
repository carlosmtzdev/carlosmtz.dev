import React from "react"
import Layout from '../components/layout'
import PodcastItem from "../components/podcast"

export default function Podcast() {
	return (
    <Layout>
      <PodcastItem name='hola mundo' date='2020-07-20'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus omnis, doloribus soluta eveniet, in vitae repudiandae laboriosam, eum aut sit illo? Fugiat quidem autem quibusdam veniam ipsum voluptatibus deserunt a.
      </PodcastItem>
    </Layout>
  )
}
