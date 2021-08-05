import React, { Component } from "react";
// import MediaQuery from "react-responsive";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import HangmanImage from "../../assets/images/HangmanImage.jpg";
import DansImage from "../../assets/images/DansLjardinImage.jpg";
import BuiltImage from "../../assets/images/BuiltImage.jpg";
import MunchiImage from "../../assets/images/Munchi.jpg";
import SnakeImage from "../../assets/images/Snake.jpg";
import RemindersImage from "../../assets/images/Reminders.jpg";
import "./Projects.css";


class Projects extends Component {

    render() {
        return (
            <Container>
                < link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"></link>

                <Row >
                    <Col className="gap"> <ul className="text-center"> <h2>Here you can find information about my projects</h2> </ul> </Col>
                </Row>

                {/* <Row className="textControl gap">
                    <Col >
                        <h5>
                            I am a recent BCIT graduate with Distinction in the extensive study program of Computer Information Technology.
                            I am recipient of <b> “The BCIT Computer Information Technology Award - 2021 Graduating Awards”</b>.
                            I earned 120 credits in 2 years with GPA of 92% in my final year. Apart from my studies, I have also worked on various projects producing high quality deliverables.
                            My clients and sponsors have always been very happy by the results that were delivered by me.
                            Don't take my word for it. See it for yourself! See a video of one of my sponser
                            <a href="https://www.linkedin.com/posts/bcitcomputing_tomorrow-is-the-day-please-join-us-online-activity-6742900421712453632-CRK-/" target="_blank" rel="noopener noreferrer"> here.</a>
                        </h5>

                        <h5>
                            I have worked with Builtspace Technologies Corp. and Dans l'jardin during in an internship program called " Industry Sponsor Student Projects" at the British Columbia Institute of Technology.
                            In addition to that I have also worked on other projects both as a part of a team and solo projects. Information about my projects and my skillset is also available on this website.
                        </h5>
                    </Col>
                </Row> */}

                <Row fluid="true">
                    <Row className="gap">
                        <Row className="marginAll"><Col><h4>Hangman Game</h4></Col></Row>
                        <Row className="smallGap">
                            <Col sm={4}><a className="hoverEffect" href="https://game.karandev.xyz/" target="_blank" rel="noopener noreferrer">
                                <Image src={HangmanImage} thumbnail />
                            </a>
                            </Col>
                            <Col sm={8}>
                                <h5 className="textControl">
                                    Web Application and a Fun Project. I made a classic game of Hangman, in which we have to guess the words otherwise we face a penalty.
                                </h5>
                                <h5>
                                    Technologies Used:
                                    <ul>
                                        <li>HTML</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </ul>
                                </h5>
                            </Col>
                        </Row>
                    </Row>
                </Row>


                <Row fluid="true">
                    <Row className="gap">
                        <Row className="marginAll"><Col><h4>DansLjardin</h4></Col></Row>
                        <Row className="smallGap">
                            <Col sm={4}><a className="hoverEffect" href="https://dansljardin.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
                                <Image src={DansImage} thumbnail />
                            </a></Col>
                            <Col sm={8}>
                                <h5 className="textControl">
                                    React Application with an ordering and dashboard management system. Is a web ordering system similar to Uber. But instead of Drivers one orders for a Musician.
                                </h5>
                                <h5>
                                    Technologies Used:
                                    <ul>
                                        <li>React</li>
                                        <li>NodeJS</li>
                                        <li>ExpressJS</li>
                                        <li>MySQL</li>
                                        <li>Heroku</li>
                                    </ul>
                                </h5>
                            </Col>
                        </Row>
                    </Row>
                </Row>


                <Row fluid="true">
                    <Row className="gap">
                        <Row className="marginAll"><Col><h4>Builtspace - Project</h4></Col></Row>
                        <Row className="smallGap">
                            <Col sm={4}><a className="hoverEffect" href="mailto:harika.karanveer@gmail.com?subject=Tell me some general info about Builtspace App">
                                <Image src={BuiltImage} thumbnail />
                            </a></Col>
                            <Col sm={8}>
                                <h5 className="textControl">
                                    Worked on a React application and a PHP application. Optimized PHP app to process multiple batches at a time. Performed a complete overhaul of the React app. And established a link between the React and the PHP app to facilitate effortless userflow and ordering experience. Fixed certain security issues.
                                </h5>
                                <h5>
                                    Technologies Used:
                                    <ul>
                                        <li>React, HTML, CSS, Javascript</li>
                                        <li>NodeJS</li>
                                        <li>PHP</li>
                                        <li>BASH</li>
                                        <li>AWS Amplify, AWS Cognito, AWS API Gateway</li>
                                        <li>AWS DynamoDB, AWS S3, AWS EC2</li>
                                    </ul>
                                </h5>
                            </Col>
                        </Row>
                    </Row>
                </Row>


                <Row fluid="true">
                    <Row className="gap">
                        <Row className="marginAll"><Col><h4>Munchi Food Ordering App</h4></Col></Row>
                        <Row className="smallGap">
                            <Col sm={4}><a className="hoverEffect" href="https://www.figma.com/proto/KP5zNiiZAwIAYsuDb2nopg/Task-FLows?node-id=4%3A1790&scaling=contain" target="_blank" rel="noopener noreferrer">
                                <Image src={MunchiImage} thumbnail />
                            </a></Col>
                            <Col sm={8}>
                                <h5 className="textControl">
                                    Designed a High-Fidelity wireframe (UX-UI). This prototype is for a food ordering app. This wireframe was designed to make sure the user can access the app easily without any issues.
                                </h5>
                                <h5>
                                    Technologies Used:
                                    <ul>
                                        <li>Figma</li>
                                        <li>Photoshop</li>
                                        <li>CSS</li>
                                    </ul>
                                </h5>
                            </Col>
                        </Row>
                    </Row>
                </Row>


                <Row fluid="true">
                    <Row className="gap">
                        <Row className="marginAll"><Col><h4>Snake 2D Game</h4></Col></Row>
                        <Row className="smallGap">
                            <Col sm={4}><a className="hoverEffect" href="https://karanharika.github.io/2D-snake/" target="_blank" rel="noopener noreferrer">
                                <Image src={SnakeImage} thumbnail />
                            </a></Col>
                            <Col sm={8}>
                                <h5 className="textControl">
                                    Another Fun Project. The Legendary snake game from Nokia. This web app is an online game in which we control the direction of snake and eat fruits to gain length and avoid obstacles to prevent death.
                                </h5>
                                <h5>
                                    Technologies Used:
                                    <ul>
                                        <li>HTML</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </ul>
                                </h5>
                            </Col>
                        </Row>
                    </Row>
                </Row>


                <Row fluid="true">
                    <Row className="gap">
                        <Row className="marginAll"><Col><h4>Reminders Web App</h4></Col></Row>
                        <Row className="smallGap">
                            <Col sm={4}><a className="hoverEffect" href="https://karanharika.github.io/reminders_app/" target="_blank" rel="noopener noreferrer">
                                <Image src={RemindersImage} thumbnail />
                            </a></Col>
                            <Col sm={8}>
                                <h5 className="textControl">
                                    A very simple Reminders app that stores your reminders. This was made with special focus to the easy of use and best possible user experience. The text field auto focuses, it shows warning and success messages and there are keyboard shortcuts to save and delete a reminder.
                                </h5>
                                <h5>
                                    Technologies Used:
                                    <ul>
                                        <li>HTML</li>
                                        <li>JavaScript</li>
                                        <li>CSS</li>
                                    </ul>
                                </h5>
                            </Col>
                        </Row>
                    </Row>
                </Row>




                <Row className="gap">
                    <Col className="gap">  </Col>
                </Row>
            </Container>
        )
    };
};

export default Projects