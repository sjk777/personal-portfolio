
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
                    <p>projects p</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}