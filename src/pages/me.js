import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>About me | Portfolio</title>
      <meta name="description" content="About me..." />
    </Helmet>

    <BannerLanding title="About me..." />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Fabio, the person</h2>
          </header>
          <p>
            With 21 years old I have been lived a very nice life. I'm a lifelong
            learner. so my main focus in these years has been in cultivate my
            knowledge in several areas of the life. At 15 years old I learned to
            code and that changed my life. I was very interested in robotic,
            software development, electronics, and several other technical
            topics. Also I love music, specially latin music. That was the
            motivation to learn dancing, playing a couple of instruments,
            history of some music genres, and some day I would like to learn how
            to produce music. Another relevant aspect in my life is in
            communitary education. I worked many years in a foundation working
            in trying to enhance the education in marginal regions in my
            country.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Fabio, the engineer</h3>
              </header>
              <p>
                I'm a senior student of Systems and Computing Engineering at
                Universidad Nacional de Colombia. Also, I'm a software expert
                with more than four years of experience. I have had experience
                in software architecture and development, problem analysis and
                solving, algorithm creation, and managing cloud services. I have
                had the opportunity to develop a couple of platforms with
                business purposes with satisfactory results, thanks to my broad
                knowledge and technical expertise.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Fabio, the dreamer</h3>
              </header>
              <p>
                Currently I'm learning English and German, the idea with this
                knowledge is to obtain a scholarship in order to do postgraduate
                studies abroad. German culture is very interesting for me, and I
                would love to have the opportunity to travel there, either with
                academical, professional or personal intests. Finally, I need to
                mention my interest in learning about entrepreneurship. My dream
                now is to run my own company some day, where I can help my
                family to get a better quality of life, and bring development to
                my country.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Fabio, the socially conscious</h3>
              </header>
              <p>
                Working in the Lazos - ETITC group, I was in charge of planning,
                organizing and executing various activities with educational
                purposes in disadvantaged neighborhoods of my city. After that,
                I was responsible for carrying out the annual work project and
                leading a group of 10-15 people approximately to execute this
                plan in the best way. In my last year I was selected to
                coordinate the biggest activity of the group in the year, in
                this activity I lead a group of roughly 80 people for one week.
                We also did popular education projects in some distant towns of
                the main cities of my country, e.g. Magangué-Bolívar,
                Villavicencio-Meta, San Vicente del Caguán-Caquetá,
                Gigante-Huila, among others. There we had the mission to prepare
                young people for state tests and motivate them to continue with
                their studies.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
