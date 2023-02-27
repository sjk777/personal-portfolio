export const ProjectCard = ({title, description, imgUrl}) =>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
            </div>
            <div className="project-txt">
                <h4>{title}</h4>
            </div>
        </Col>
    )
}