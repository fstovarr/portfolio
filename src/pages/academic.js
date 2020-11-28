import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

import celestini from '../assets/images/celestini.jpg'
import PdfDocument from '../components/PdfDocument'
import ObliqueGrating from '../components/ObliqueGrating'
import Ebbinghaus from '../components/Ebbinghaus'
import MunkerIllusion from '../components/MunkerIllusion'
import AmbientLight from '../components/AmbientLight'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Academic life | Portfolio</title>
      <meta name="description" content="Academic life" />
    </Helmet>

    <BannerLanding title="Academic life" />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>
              Undergraduate exprience{' '}
              <span className="institution">
                {' '}
                at Universidad Nacional de Colombia
              </span>
            </h2>
          </header>
          <p>
            From the start of my secondary education, my dream was to study at
            Universidad Nacional de Colombia. I had heard a lot of magical and
            exciting things about this university. When I reached my last year,
            I was sure that I would approve the exam that I needed to do to
            start studying here. All the hard work I did in school was richly
            rewarded. I had a good score on the test. Thus I could choose my
            preferred career.
          </p>
          <p>
            These 4 years have been marvelous. The amount of things I learned
            here is unimaginable, not only concerning my career but also
            concerning life. Also, the university's interest in building a
            better society is inspiring. I have intense fascinations about these
            topics, and the different points of view that I have known are
            invaluable.
          </p>
          <p>
            Now that I'm leaving this institution, I feel a little bit of
            nostalgia and sadness. Still, I'm quite sure new challenges will
            come, and I will learn wherever I will be.
          </p>
        </div>
      </section>

      <div className="content">
        <div className="inner">
          <header className="major">
            <h2>Interests</h2>
          </header>
        </div>
      </div>

      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <p>
                The strong abilities I have regarding programming and software
                engineering are powerful tools to explore some fields of my
                career that are very interesting for me.
              </p>
              <p>
                The first of them is <b>Machine Learning</b>. Machine Learning
                is a branch of computer science where the main goal is to
                provide a computing machine of something similar to human
                intelligence. Since early semesters I was studying this topic by
                myself, taking online courses, reading blogs and books, and
                learning many techniques, models, and paradigms that allow me to
                solve some not-easy problems using a computer.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <p>
                Furthermore, I have been interested in the{' '}
                <b>Internet of Things</b>. It's a field of systems and
                electronics engineering whose central vision is to build a world
                where humans and robots live in harmony, even in the most simple
                daily tasks.
              </p>
              <p>
                In school, I used to play to build some electronic devices using
                my knowledge of programming and using a certain type of simple
                microcontrollers. Also, I had the opportunity to take a course
                in Politecnico Gran Colombiano related to this topic in my last
                year of school because of my good results in a programming
                contest. This specific knowledge has allowed me to get a couple
                of professional projects related to this area.
              </p>
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <p>
                Finally, <b>Software engineering</b> definitely is one of my
                strongest skills. Those skills have brought me positive things
                and have opened a lot of meaningful opportunities in my life.
              </p>
              <p>
                For this reason, I have taken a couple of online courses about
                programming in several languages that I consider relevant, like{' '}
                <code>Kotlin</code>, <code>Dart</code>, <code>Ruby</code>, among
                others.
              </p>
              <p>
                It's important to mention that this interest motivated me to
                take a subject at Universidad de los Andes, one of the best
                universities in this field in Colombia. There, I strengthened my
                knowledge related to mobile apps development. The most important
                thing is that the professor was invited to work in his research
                group about mobile development. In the group, I worked on a
                statistical analysis tool to bug detection in Kotlin.
              </p>
              <p>
                Unfortunately, I was only a couple of months working there
                because the schedule of the research group overlapped with a
                subject of my Undergraduate program.
              </p>
            </div>
          </div>
        </section>
      </section>

      <div className="content">
        <div className="inner">
          <header className="major">
            <h2>Remarkable experiences</h2>
          </header>

          <h3>
            Winner of Celestini Program{' '}
            <span class="institution">by Marconi Society</span>
          </h3>

          <div class="grid-wrapper">
            <div className="col-12">
              <p
                className="box"
                style={{ fontStyle: 'italic', paddingBottom: 50 }}
              >
                This program grows the next generation of diverse innovators who
                apply technology to solve critical problems in their own
                communities. Launched by the Marconi Society Young Scholars, the
                Celestini Program uses a partnership model to pair students with
                expert mentors in the field of advanced communications and
                provide opportunities for hands-on, experiential learning.
                <br />
                <span style={{ float: 'right', marginBottom: 30 }}>
                  — Marconi Society
                </span>
              </p>
              <span className="image right">
                <div>
                  <img src={celestini} alt="" />
                  <p style={{ fontSize: 16, textAlign: 'center' }}>
                    Me and my parners, Joseph Kakande (Young scholar of Marconi
                    Society) and Vincent Cerf (one of the fathers of internet,
                    vice president and Chief Internet Evangelist for Google)
                  </p>
                </div>
              </span>
              <p>
                Winners of Celestini Program: a competition which main idea is
                empowering students to solve local issues using technology. My
                job was to lead a team of three students through planning,
                design, implementation, monitoring and closure of the project.
                The project involved:
                <ul>
                  <li>Internet of Things</li>
                  <li>Machine Learning</li>
                  <li>Computer Networks</li>
                  <li>Precision Agriculture</li>
                </ul>
              </p>
              <p>
                I, as the project leader, was invited to Palo Alto, California
                to the award ceremony in the year 2019.
              </p>{' '}
              <p>
                More information in{' '}
                <a
                  style={{ fontWeight: 'bold' }}
                  target="_blank"
                  href="https://ingenieria.bogota.unal.edu.co/es/noticias/item/245-estudiantes-de-la-facultad-de-ingenieria-de-sistemas-y-computacion-e-ingenieria-agronomica-crean-sie-y-viajaran-a-ee-uu-al-concurso-celestini-program.html"
                >
                  Estudiantes de la Facultad de Ingeniería de Sistemas y
                  Computación e Ingeniería Agronómica, crean SIE y viajarán a
                  EE.UU. al concurso Celestini Program (in spanish)
                </a>{' '}
                and
                <br />
                <a
                  style={{ fontWeight: 'bold' }}
                  target="_blank"
                  href="https://www.marconisociety.org/programs-services/"
                >
                  PROGRAMS & SERVICES (section of Colombia: Water Waste)
                </a>
              </p>
            </div>
            <div
              className="col-12"
              style={{ textAlign: 'center', justifySelf: 'center' }}
            >
              <PdfDocument file="https://github.com/fstovarr/portfolio/blob/development/src/assets/documents/sie.pdf?raw=true" />
            </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="inner">
          <header className="major">
            <h2>Cool projects</h2>
          </header>
        </div>
      </div>

      <section id="two" className="spotlights">
        <section>
          <div style={{ padding: 30 }}>
            <div
              className="col-12"
              style={{ textAlign: 'center', justifySelf: 'center' }}
            >
              <PdfDocument file="https://github.com/fstovarr/portfolio/blob/development/src/assets/documents/viola.pdf?raw=true" />
            </div>
          </div>
          <div className="content">
            <div className="inner">
              <h4>Viola Jones framework</h4>
              <p>
                It is an algorithm of Machine Learning to detect objects in
                images. The most common use of this algorithm is detecting
                faces.
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
          <div style={{ paddingRight: 30 }}>
            <ObliqueGrating />
          </div>
          <div className="content" style={{ width: '55%' }}>
            <div className="inner">
              <h4>Optical illusions</h4>
              <p>Instructions:</p>

              <ul>
                <li>Click on image</li>
              </ul>

              <p>
                You will see the blue horizontal lines as if they weren't
                parallel, but if you click again, you will see that actually, they
                are.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div style={{ paddingLeft: 30 }}>
            <Ebbinghaus />
          </div>
          <div className="content" style={{ maxWidth: '40%' }}>
            <div className="inner">
              <p>Instructions: </p>
              <ul>
                <li>Click on image</li>
              </ul>

              <p>You will see the left sphere smaller than the right one.</p>
            </div>
          </div>
        </section>

        <section>
          <div style={{ paddingLeft: 30 }}>
            <MunkerIllusion />
          </div>
          <div className="content" style={{ width: '65%' }}>
            <div className="inner">
              <p>Instructions: </p>
              <ul>
                <li>Observe the colors of the spheres</li>
              </ul>

              <p>
                You will see both spheres with different colors, but actually
                both are the same color.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div style={{ padding: 30 }}>
            <h4>Lighting in 3D models</h4>
          </div>
          <div className="content" style={{ paddingBottom: 30 }}>
            <div className="inner" style={{ paddingLeft: 30 }}>
              <AmbientLight />
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
