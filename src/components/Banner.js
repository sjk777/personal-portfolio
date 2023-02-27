import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () =>{
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer"];
    const[text, setText] = useState('');
    const[delta, setDelta] = useState(300 - Math.random() * 100);
    const period= 2000;

    useEffect(() =>{
        let ticker = setInterval(()=>{

        })
    })


    return(
        <section className="banner" id="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my Portfolio
                        </span>
                        <h1>{`Hello I'm Sky Kim`}<span className="wrap">web developer</span> </h1>
                        <p>Placeholder paragraph </p>
                        <button onClick = {() => console.log('connect')}>let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}