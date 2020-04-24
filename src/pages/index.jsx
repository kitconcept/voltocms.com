import React from "react"
import Link from "gatsby-link"
import { Header } from "../layouts"
import CodeBlock from "../components/codeBlock"
import TimeLine from "../components/timeLine"
import editorPreviewImg from "../static/editor-preview.png"
import iconsPreviewImg from "../static/icons-preview.png"
import voltoDemoImg from "../static/volto_demo.png"
import heartSVG from "../static/heart-regular.svg"

const IndexPage = () => (
  <div className="view">
    <div className="landing">
      <Header />
      <div className="introduction">
        <div>
          <h1>Volto</h1>
          <h2>The ulimate CMS for editing the web</h2>
        </div>
        <div className="image-wrapper">
          <img
            className="pastanaga-editor-preview"
            src={editorPreviewImg}
            alt="pastanaga-editor-preview"
          />
        </div>
      </div>
    </div>
    <div className="get-started">
      <h1>Get Started</h1>
      <h2>Getting started with Volto</h2>
      <CodeBlock
        title="Clone the   'create-volto-app'   GitHub repository"
        code="git clone git@github.com:plone/create-volto-app.git"
      />
      <CodeBlock
        title="cd into the create-volto-app folder"
        code="cd create-volto-app"
      />
      <CodeBlock
        title="Get the boilerplate"
        code="create-volto-app <app-name>"
      />
      <CodeBlock
        title="Run the project in development mode."
        code="yarn start"
        description=" You can view your application at http://localhost:3000. The page supports hot reload."
      />
    </div>
    <div className="demo">
      <h1>Volto Demo</h1>
      <h2>
        Jump into Volto and try out our Demo!<br></br>Try it{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://volto.kitconcept.com"
        >
          here
        </a>
      </h2>
      <div
        className="image-wrapper"
        style={{
          width: "1280px",
          margin: "30px auto 0 auto",
        }}
      >
        <img
          className="volto-demo-image"
          src={voltoDemoImg}
          alt="Image showing the Volto Demo"
          style={{ borderRadius: "20px" }}
        />
      </div>
    </div>
    <div className="open-source">
      <h1>Open Source</h1>
      <h2>
        Volto is an Open Source project, everybody can participate and use it.
        There are no fees or anything!
      </h2>
      <div>
        <p>Lorem Ipsum</p>
      </div>
    </div>
    <div className="roadmap">
      <h1>Roadmap</h1>
      <h2>Timeline...</h2>
      <TimeLine
        date1="Right now"
        event1="Volto Remote Sprint"
        date2="April 2020"
        event2="Volto 5.0 released"
        date3="February 2020"
        event3="Volto is now the standard frontend for Plone!"
        date4="January 2020"
        event4="Happy New Year Volto!"
        date5="End of 2019"
        event5="Volto 4.0 released"
        date6="End of 2019"
        event6="Welcome to the Volto family, Listing-Block!"
      />
    </div>
    <div className="get-involved">
      <h1>Get Involved</h1>
      <h2>Join our Community and become a part of Volto!</h2>
      <div className="image-wrapper">
        <img
          src={heartSVG}
          alt="heart-svg"
          className="heart-icon"
          height="106px"
        />
      </div>
      <p>React, Python & Plone Developers: Help us to further develop Volto</p>
      <p>
        Visit us on <a href="https://github.com/plone/volto">github</a> or join
        our <a href="">Slack Channel</a>
      </p>
    </div>
    <div className="footer-wrapper">
      <footer>
        <p>
          The <a href="https://plone.org">Plone</a> community
        </p>
        <p>The Volto community</p>
        <p>
          Hosted by <a href="https://kitconcept.com">kitconcept</a>
        </p>
      </footer>
    </div>
  </div>
)

export default IndexPage
