import { Col, Container, Row } from "react-bootstrap";
import gitIconLottie from "../Assets/Lotties/github-2.json";
import linkedInLottie from "../Assets/Lotties/linkedin.json";
import JBLogo from "../Assets/Images/FullLogo_Transparent.png";
import "animate.css";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
export const Navigation = () => {
  return (
    <Container
      style={{ backgroundColor: "teal", maxWidth: "none", height: "8vh" }}
    >
      <Row className="d-flex">
        <Col className="d-flex justify-content-center d-md-none">
          <a href={"https://github.com/DisAP332"} target="_blank">
            <Player
              autoplay
              loop={true}
              src={gitIconLottie}
              style={{ height: "50px", width: "50px" }}
            ></Player>
          </a>
          <h1 className="ml-3 text-center nameFont mt-3">Jordan</h1>
          <h1 className="text-center mt-3 ml-2 nameFont2">Bell</h1>
          <a
            href={"https://linkedin.com/in/jordan-bell-135205251/"}
            target="_blank"
          >
            <Player
              autoplay
              loop={true}
              src={linkedInLottie}
              style={{ height: "50px", width: "50px" }}
            ></Player>
          </a>
        </Col>

        <Col className="d-none d-md-flex justify-content-center align-items-center">
          <div className="d-flex flex-row mt-2">
            <img src={JBLogo} alt="jordan bell logo" className="jbLogo" />
            <h3
              className="ml-3 mt-1 text-center nameFont"
              style={{ fontSize: "4.5vh" }}
            >
              Jordan
            </h3>
            <h3
              className="text-center ml-2 mt-1 nameFont2"
              style={{ textAlign: "center", fontSize: "4.5vh" }}
            >
              Bell
            </h3>
          </div>
        </Col>

        <Col className="d-none d-md-inline">
          <Row>
            <Col className="d-flex justify-content-end align-items-center mt-1">
              <div className="d-flex">
                <a href={"https://github.com/DisAP332"} target="_blank">
                  <Player
                    autoplay
                    loop={true}
                    src={gitIconLottie}
                    style={{ height: "7vh", width: "7vh" }}
                  ></Player>
                </a>
                <a
                  href={"https://linkedin.com/in/jordan-bell-135205251/"}
                  target="_blank"
                >
                  <Player
                    autoplay
                    loop={true}
                    src={linkedInLottie}
                    style={{ height: "7.5vh", width: "7.5vh" }}
                  ></Player>
                </a>
              </div>
            </Col>
            <Col className="d-flex align-items-center mt-1">
              <a href="mailto:disap332@gmail.com">
                <button className="hireMeButton">Hire me?</button>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
