import React, { Component } from "react";
// import ModalFooter from "react-bootstrap/ModalFooter";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="footDivOut">
                <div className="footDivIn">
                < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>
                    <Container>
                        <Row>
                            <Col sm>&#169; 2021 Karanveer Harika</Col>

                            <Col sm>
                                <ul className="list-unstyled list-inline text-center">
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-fb mx-2" href="https://www.linkedin.com/in/karanveer-harika-dev/" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-linkedin icoStyle"> </i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className="btn-floating btn-tw mx-2" href="https://github.com/karanharika" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github icoStyle"> </i>
                                        </a>
                                    </li>
                                </ul>
                            </Col>

                            <Col sm className="footCol3">
                                <a href="mailto:harika.karanveer@gmail.com?subject=Mail from Website regarding: ">
                                    <Button variant="outline-info">Contact me</Button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* <ModalFooter> &#169; 2021 </ModalFooter> */}
            </div>
        )
    };
};

export default Footer