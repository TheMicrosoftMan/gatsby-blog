import React, { useState } from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

const SkillsPage = () => {
  const [isSpin, setSpining] = useState(true)

  return (
    <Layout>
      <SEO title="Skills" />
      <div className="contact-page skills">
        <div
          className="orbit"
          onMouseOver={() => setSpining(false)}
          onMouseOut={() => setSpining(true)}
        >
          <div className={`orbit__planets${!isSpin ? " pauseAnim" : ""}`}>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("mi-js")}
            >
              <i class="mi mi-js"></i>
            </div>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("node-js")}
            >
              <i class="mi mi-node-js"></i>
            </div>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("mi-react")}
            >
              <i class="mi mi-react"></i>
            </div>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("css3-alt")}
            >
              <i class="mi mi-css3-alt"></i>
            </div>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("mi-html5")}
            >
              <i class="mi mi-html5"></i>
            </div>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("mi-js")}
            >
              <i class="mi mi-js"></i>
            </div>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("node-js")}
            >
              <i class="mi mi-node-js"></i>
            </div>
            <div
              className={`orbit__planets_planet${!isSpin ? " pauseAnim" : ""}`}
              onMouseOver={() => console.log("mi-react")}
            >
              <i class="mi mi-react"></i>
            </div>
            <div className={`sun${!isSpin ? " pauseAnim" : ""}`}>
              <i class="mi mi-js"></i>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SkillsPage
