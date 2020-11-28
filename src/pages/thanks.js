import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import AwesomeSliderStyles from 'react-awesome-slider/dist/styles.css?raw'
import AwesomeSlider from 'react-awesome-slider'

import happypaws from '../assets/images/happypaws.jpg'
import oes from '../assets/images/oes.jpg'
import ecobox from '../assets/images/portfolio1.jpg'
import puntopay from '../assets/images/puntopay.jpg'
import bunny from '../assets/images/bunnystudio.png'
import welcome from '../assets/images/welcome.jpeg'
import PdfDocument from '../components/PdfDocument'

const works = [
  {
    image: happypaws,
    title: 'HappyPaws',
    description: 'App to contact dog walkers with pet owners',
  },
  {
    image: oes,
    title: 'OneEasyStop',
    description: 'Back-office to handle all operations of this franchise',
  },
  {
    image: puntopay,
    title: 'PuntoPay',
    description: 'Technological platform of payment methods',
    url: 'https://play.google.com/store/apps/details?id=co.puntored.puntopay',
  },
  {
    image: ecobox,
    title: 'EcoBox',
    description: 'Get money recycling from your phone',
    url: 'https://play.google.com/store/apps/details?id=com.ecoboxen.app',
  },
  {
    image: bunny,
    title: 'BunnyStudio',
    description: 'Outsourcing of creative services',
    url: 'http://bunnystudio.com/',
  },
]

const Work = props => (
  <Layout>
    <Helmet>
      <title>Thanks | Portfolio</title>
      <meta name="description" content="Thanks" />
    </Helmet>

    <BannerLanding title="Thanks" />

    <div style={{ textAlign: 'center', padding: 30 }}>
      <p>
        <img src="https://media.giphy.com/media/6tHy8UAbv3zgs/giphy.gif"/>
      </p>
    </div>
  </Layout>
)

export default Work
