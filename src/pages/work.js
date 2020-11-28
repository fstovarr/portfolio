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
      <title>Professional achievements | Portfolio</title>
      <meta name="description" content="Professional achievements" />
    </Helmet>

    <BannerLanding title="Professional achievements" />

    <div className="content">
      <div className="inner">
        <header className="major">
          <h3>Work experience</h3>
        </header>

        <p>
          Fields of software development such as mobile applications, web
          applications, desktop applications, hardware controllers focused on
          the Internet of Things, among others, are the areas in which I have
          broad knowledge and experience.
        </p>

        <p>
          In the next carousel, you will find my most relevant experiences in
          software engineering's professional field from 2017, when my
          professional life started.
        </p>

        <div style={{ textAlign: '-webkit-center', padding: 20, margin: 30 }}>
          <div style={{ maxWidth: 800 }}>
            <AwesomeSlider cssModule={AwesomeSliderStyles}>
              {works.map(work => (
                <div>
                  <span className="image fit">
                    <img src={work.image} />
                  </span>
                  <div
                    style={{
                      position: 'fixed',
                      bottom: 0,
                      backgroundColor: 'rgb(0 0 0 / 40%)',
                      width: '100%',
                      padding: 20,
                    }}
                  >
                    <h3 style={{ marginBottom: 3 }}>{work.title}</h3>
                    <div
                      style={{
                        backgroundColor: 'white',
                        height: 1,
                        width: '80%',
                        marginBottom: 20,
                      }}
                    ></div>
                    <p style={{ marginBottom: 2 }}>{work.description}</p>
                    {work.url && (
                      <a
                        target="_blank"
                        style={{ marginBottom: 10, fontSize: 14 }}
                        href={work.url}
                      >
                        {work.url}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </AwesomeSlider>
          </div>
        </div>

        <header className="major">
          <h3>Current position</h3>
        </header>

        <div className="grid-wrapper">
          <div className="col-6" style={{ alignSelf: 'center' }}>
            <img src={welcome} style={{ maxWidth: '100%' }} />
          </div>
          <div className="col-6">
            <h3 style={{ marginBottom: 5 }}>
              Jr. Full Stack Engineer{' '}
              <span className="institution">at BunnyStudio</span>
            </h3>
            <p>
              Since Aug 2020, I have been working at BunnyStudio as a{' '}
              <span style={{ fontStyle: 'italic' }}>Full Stack Engineer</span>.
              My role is Support developer. Therefore I'm in charge of
              maintaining the quality of the platform at a high level. Mainly, I
              have to reduce the number of problems that the users could have
              working with us and analyze some platform's problematic features.
            </p>
            <p>
              Currently, I'm working in a Machine Learning module based on
              Natural Language Processing to classify the incoming problems of
              the platform automatically in order to get a better understanding
              of which common issues we are facing and to be able to propose
              better solutions to solve them.
            </p>
          </div>
        </div>

        <header className="major">
          <h3>Future steps</h3>
        </header>

        <div>
          <p>
            I'm working hard to obtain the title of Senior Full Stack Developer.
            My idea is to get this title in the next 2 years, and after that,
            reach the Head of Engineering position or become CTO.
          </p>
          <p>
            My company offers me opportunities to learn through digital
            platforms, mentoring, shadowing, and presential events to get this
            knowledge. That could help me to improve my technical skills.
          </p>

          <p>
            I'm also planning to ask for some shadowing sessions from the CEO
            because I want to learn about business, management, and
            entrepreneurship.
          </p>
        </div>

        <header className="major">
          <h3>My CV</h3>
        </header>

        <div>
          <PdfDocument file="https://github.com/fstovarr/portfolio/blob/master/src/assets/documents/cv.pdf?raw=true" />
        </div>
      </div>
    </div>
  </Layout>
)

export default Work
