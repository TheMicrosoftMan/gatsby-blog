import React from "react"

const Footer = () => (
  <footer className="footer">
    <span>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
    <div className="social-links">
      <span className="social-links__item">
        <i className="mi mi-facebook-f" />
      </span>
      <span className="social-links__item">
        <i className="mi mi-vk" />
      </span>
      <span className="social-links__item">
        <i className="mi mi-twitter-square" />
      </span>
      <span className="social-links__item">
        <i className="mi mi-github" />
      </span>
      <span className="social-links__item">
        <i className="mi mi-skype" />
      </span>
      <span className="social-links__item">
        <i className="mi mi-telegram-plane" />
      </span>
      <span className="social-links__item">
        <i className="mi mi-Mail" />
      </span>
    </div>
  </footer>
)

export default Footer
