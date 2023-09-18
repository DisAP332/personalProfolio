import { Col, Container, Row } from "react-bootstrap";

// begin imports of SVG Icons

import htmlIcon from "../Assets/Icons/html5.svg";
import cssIcon from "../Assets/Icons/css3.svg";
import javascriptIcon from "../Assets/Icons/javascript.svg";
import reactIcon from "../Assets/Icons/react.svg";
import bootstrapIcon from "../Assets/Icons/bootstrap.svg";
import typescriptIcon from "../Assets/Icons/typescript.svg";
import nodejsIcon from "../Assets/Icons/nodejs.svg";
import expressIcon from "../Assets/Icons/express.svg";
import pugIcon from "../Assets/Icons/pug-is-wearing-hat-and-sunglasses.svg";
import mongodbIcon from "../Assets/Icons/mongodb.svg";
import gitIcon from "../Assets/Icons/git.svg";
import githubIcon from "../Assets/Icons/github.svg";
import firebaseIcon from "../Assets/Icons/firebase.svg";
import webpackIcon from "../Assets/Icons/webpack.svg";
import adobeIllustratorIcon from "../Assets/Icons/adobe-illustrator.svg";
import linuxIcon from "../Assets/Icons/linux.svg";
import portalfiSnapshot from "../Assets/Images/portalfi-screenshot.png";
import nextIcon from "../Assets/Icons/next-js-seeklogo.com.svg";
import viteIcon from "../Assets/Icons/vite-svgrepo-com.svg";
import tailwindIcon from "../Assets/Icons/tailwind-css.svg";
import reduxIcon from "../Assets/Icons/redux.svg";
import jestIcon from "../Assets/Icons/jest-snapshot-svgrepo-com.svg";

// end imports of SVG Icons

export const Home = () => {
  return (
    <>
      <Container style={{ color: "white" }}>
        <Row>
          <h2 className="mt-3 coolFont4">Software extraordiare?</h2>
          <div className="d-flex justify-content-end">
            <h2 className="nameFont"> ... Maybe! </h2>
          </div>
        </Row>
        <Row>
          <h1 className="coolFont1"> Some skills in my software toolbelt </h1>
        </Row>
      </Container>

      {/* begin skill section */}
      <Container className="transparentBackground">
        <Row>
          <Col>
            <Col className="d-flex align-items-center">
              <h2 style={{ color: "white" }} className="nameFont2">
                Front End
              </h2>
              <div className="horizontalLine" style={{ marginLeft: "20px" }} />
            </Col>
            <Container className="d-flex iconHelper overflow-auto">
              <img className="iconSizer" src={htmlIcon} alt="HTML Icon" />

              <img className="iconSizer" src={cssIcon} alt="CSS Icon" />

              <img
                className="iconSizer"
                src={javascriptIcon}
                alt="Javascript Icon"
              />

              <img className="iconSizer" src={reactIcon} alt="React Icon" />

              <img className="iconSizer" src={nextIcon} alt="Next Icon" />

              <img className="iconSizer" src={viteIcon} alt="Vite Icon" />

              <img
                className="iconSizer"
                src={tailwindIcon}
                alt="Tailwind Icon"
              />

              <img
                className="iconSizer"
                src={typescriptIcon}
                alt="typescript Icon"
              />

              <img
                className="iconSizer"
                src={bootstrapIcon}
                alt="Bootstrap Icon"
                style={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Container>
          </Col>
          <Col className="mt-4">
            <Col className="d-flex align-items-center justify-content-end">
              <div className="horizontalLine" style={{ marginRight: "20px" }} />
              <h2 style={{ color: "white" }} className="nameFont2">
                Back End
              </h2>
            </Col>
            <div className=" d-flex flex-row justify-content-end">
              <div className="d-flex iconHelper overflow-auto flex-row">
                <img className="iconSizer" src={nodejsIcon} alt="nodeJS Icon" />

                <img
                  className="iconSizer"
                  src={expressIcon}
                  alt="Express Icon"
                />

                <img
                  className="iconSizer"
                  src={mongodbIcon}
                  alt="MongoDB Icon"
                />

                <img
                  className="iconSizer"
                  src={javascriptIcon}
                  alt="Javascript Icon"
                />

                <img
                  className="iconSizer"
                  src={typescriptIcon}
                  alt="Typescript Icon"
                />

                <img className="iconSizer" src={pugIcon} alt="PUG Icon" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="d-flex align-items-center justify-content-center mt-4">
            <div className="horizontalLine" style={{ marginLeft: "20px" }} />
            <h2 style={{ color: "white" }} className="nameFont2">
              Technologies
            </h2>
            <div className="horizontalLine" style={{ marginLeft: "20px" }} />
          </Col>
          <Container className="d-flex iconHelper overflow-auto justify-content-center">
            <img className="iconSizer" src={gitIcon} alt="Git Icon" />
            <img className="iconSizer" src={githubIcon} alt="GitHub Icon" />
            <img className="iconSizer" src={firebaseIcon} alt="Firebase Icon" />
            <img className="iconSizer" src={webpackIcon} alt="Webpack Icon" />
            <img
              className="iconSizer"
              src={adobeIllustratorIcon}
              alt="Adobe illustrator Icon"
            />
            <img className="iconSizer" src={reduxIcon} alt="Redux Icon" />
            <img className="iconSizer" src={linuxIcon} alt="Linux Icon" />
            <img className="iconSizer" src={jestIcon} alt="Jest Icon" />
          </Container>
        </Row>
      </Container>

      {/* end skill section */}
      {/* being about me section */}
      <Container className="transparentBackground mt-5">
        <Col className="d-flex align-items-center justify-content-center">
          <div
            className="horizontalLine"
            style={{ marginRight: "20px", width: "450px" }}
          />
          <h1
            style={{ color: "white", fontSize: "calc(1rem + 3vw" }}
            className="nameFont2"
          >
            About me
          </h1>
          <div
            className="horizontalLine"
            style={{ marginLeft: "20px", width: "450px" }}
          />
        </Col>
        <Container
          style={{ maxHeight: "200px" }}
          className="overflow-auto mb-3"
        >
          <p className="coolFont4" style={{ color: "white" }}>
            My love and passion in life are for technology. It envelops our
            world, our every-day lives, and integrates more and more into what
            it means to be a human in the 21st century. My goal is to be a hand
            in the evolution of technology and, in turn, the evolution of man
            alongside it! As our technology grows, we unlock exciting new ways
            to interact with the world around us. It is the catalyst that makes
            The impossible - possible! I am dedicated and enamored by the
            constant flow of new challenges and new skills to master, I will
            never stop growing and learning; it's what I love to do!
          </p>
        </Container>
      </Container>

      {/* end about me section */}

      {/* begin projects section */}

      <Container className="transparentBackground">
        <Col className="d-flex align-items-center justify-content-center">
          <div
            className="horizontalLine"
            style={{ marginRight: "20px", width: "450px" }}
          />
          <h1
            style={{ color: "white", fontSize: "calc(1rem + 3vw" }}
            className="nameFont2"
          >
            Projects
          </h1>
          <div
            className="horizontalLine"
            style={{ marginLeft: "20px", width: "450px" }}
          />
        </Col>
        <Row>
          <Col>
            <img
              src={portalfiSnapshot}
              alt="portalfi-snapshot"
              className="projectSnapshot"
            />
            <h2 className="coolFont4" style={{ color: "white" }}>
              portalfi-jbw.com / server.portalfi-jbw.com
            </h2>
            <p className="coolFont4" style={{ color: "white" }}>
              Portalfi-jbw is a web app for 2 clients i am currently developing
              a website for. I created it to give them a platform to edit their
              websites data live such as events, phone number, social links,
              menu... ect. server.portalfi-jbw.com is the domain that the
              backend server hosted on a digital ocean droplet is located. I
              secured the site with passport and JSON Web Token allowing the
              users to retrieve their respective data and prevent unwanted edits
              by malicious parties. I used Node.js/express to create a RESTful
              api. MongoDB is the Database in which all the data is stored. The
              server has HTTPS via lets encrypt and NGINX
              <br /> ------still in development-----
            </p>
            <a
              href="https://github.com/DisAP332/Portalfi-Client"
              target="_blank"
            >
              GitHub Client link
            </a>
            <a
              href="https://github.com/DisAP332/Portalfi-Server"
              target="_blank"
            >
              GitHub Client server
            </a>
          </Col>
        </Row>
      </Container>

      {/* begin projects section */}

      {/* begin footer */}

      {/* this div is to prevent cutoff by footer*/}
      <div className="paddingBottom" />

      <Container className="footer" fluid>
        <div className="d-flex flex-row justify-content-center">
          <h1 className="ml-3 text-center nameFont mt-3">Jordan</h1>
          <h1 className="text-center mt-3 ml-2 nameFont2">Bell</h1>
          <h1 className="ml-3 text-center nameFont mt-3">WebDev</h1>
        </div>
      </Container>
    </>

    // end footer
  );
};
