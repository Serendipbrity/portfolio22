import { Row, Col, Container } from "react-bootstrap";
import  { LoremIpsum } from "react-lorem-ipsum";
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'


export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Brittani`}<span className="wrap"> software engineer</span></h1>
                        <p><LoremIpsum p={1} /></p>
                        <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} ls={5}>
                        <img src={headerImg} alr="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}