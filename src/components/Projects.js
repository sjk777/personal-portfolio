import { Col, Container, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () =>{

    const projects = [
        {
            title: "project1",
            description: "add description",
            imgUrl: projImg1,
        },
        {
            title: "project2",
            description: "add description 2",
            imgUrl: projImg2,
        },
        {
            title: "project3",
            description: "add description 3",
            imgUrl: projImg3,
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2> Projects</h2>
                    <p>projects placeholder</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab one</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) =>{
                                        return (
                                            <ProjectCard
                                                key = {index}
                                                {...project}
                                                />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                                Second tab placeholder
                        <Tab.Pane eventKey="third">
                                Third tab placeholder
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}