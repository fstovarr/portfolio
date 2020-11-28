import React from 'react'

const BannerLanding = ({ title, children }) => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
      </header>
      <div className="content">{children}</div>
    </div>
  </section>
)

export default BannerLanding
