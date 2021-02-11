import React from "react"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <div class="page-container">
      <Helmet>
        <title>Zync Media</title>
        <meta name="title" content="Zync Media" />
        <meta name="description" content="Here at NGU Media in Brisbane, our team has been producing high quality content for brands across Brisbane for the last 3 years and would love for you to be a part of our journey. " />
      </Helmet>
      <div class="video-wrapper">
        <div class="video-text-container"></div>
        <video muted autoplay="autoplay" loop="true" width="100%">
          <source src="movie.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div class="contact-info-wrapper">
        <p>
          Here at NGU Media in Brisbane, our team has been producing high quality content for brands across Brisbane for the last 3 years and would love for you to be a part of our journey. 
          <br/>
          <br/>
          We believe our content production skills can take your social media presence to the next level. 
          <br/>
          <br/>
          Contact us at hello@zyncmedia.com.au</p>
      </div>
    </div>
  )
}
