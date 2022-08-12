import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
       
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              नमस्कार !{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                 🙏
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">  HIMANSHU SINGH</strong>
              </h1>
            

            <h1 md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "1000px" }}
              />
           </h1>
           </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
