import React, { Component } from "react";
import ModalFooter from "react-bootstrap/ModalFooter";
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
                            <Col sm>&#169; 2021 K$H</Col>

                            <Col sm>
                                <ul class="list-unstyled list-inline text-center">
                                    <li class="list-inline-item">
                                        <a class="btn-floating btn-fb mx-1" href="https://linkedin.com/in/karanveer-harika-bb8920197" target="_blank" rel="noopener noreferrer">
                                            <i class="fab fa-linkedin icoStyle"> </i>
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class="btn-floating btn-tw mx-1" href="https://github.com/karanharika" target="_blank" rel="noopener noreferrer">
                                            <i class="fab fa-github icoStyle"> </i>
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                            
                            <Col sm className="footCol3">
                                <a href="https://github.com/karanharika">
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