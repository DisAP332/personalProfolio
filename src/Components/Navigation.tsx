import { Col, Container, Navbar, Row } from "react-bootstrap";
import gitIconLottie from '../Assets/Lotties/github-2.json';
import linkedInLottie from '../Assets/Lotties/linkedin.json'
import Lottie from 'react-lottie';
import 'animate.css'

export const Navigation = () => {

    const gitLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: gitIconLottie,
        renderSettings: {
            preserveAspefctRatio: 'xMidYMid slice'
        }
    }

    const linkedInLottieOptions = {
        loop: true,
        autoplay: true,
        animationData: linkedInLottie,
        renderSettings: {
            preserveAspefctRatio: 'xMidYMid slice'
        }
    }

    return (
        <Container style={{backgroundColor: 'teal', maxWidth: 'none'}}>


            <Row className="d-flex">

                <Col className="d-flex justify-content-center d-md-none">
                        <a href={'https://github.com/DisAP332'} target="_blank">
                            <Lottie 
                            isClickToPauseDisabled={true}
                            className='mt-3'
                            options={gitLottieOptions}
                            height={50}
                            width={50}
                            />
                        </a>
                    <h1 className="ml-3 text-center nameFont mt-3">
                        Jordan                  
                    </h1>
                    <h1 className="text-center mt-3 ml-2 nameFont2">Bell</h1>
                    <a href={'https://linkedin.com/in/jordan-bell-135205251/'} target="_blank">
                        <Lottie 
                        isClickToPauseDisabled={true}
                        className='mt-3'
                        options={linkedInLottieOptions}
                        height={50}
                        width={50}
                        />
                    </a>
                </Col>

                <Col className="d-none d-md-flex justify-content-center" style={{height: '8vh'}}>
                    <div className="d-flex flex-row mt-1">
                    <h3 className="ml-3 text-center nameFont">
                        Jordan           
                    </h3>
                    <h3 className="text-center ml-2 nameFont2" style={{textAlign: 'center'}}>Bell</h3>
                    </div>
                </Col>

                <Col className='d-none d-md-inline'>
                    <Row>
                        <Col className="d-flex justify-content-end align-items-center mt-1">
                            <div className="d-flex">
                                <a href={'https://github.com/DisAP332'} target="_blank">
                                    <Lottie 
                                    isClickToPauseDisabled={true}
                                    className='mt-3'
                                    options={gitLottieOptions}
                                    height={35}
                                    width={35}
                                    />
                                </a>
                                <a href={'https://linkedin.com/in/jordan-bell-135205251/'} target="_blank">
                                    <Lottie 
                                    isClickToPauseDisabled={true}
                                    className='mt-3'
                                    options={linkedInLottieOptions}
                                    height={38}
                                    width={38}
                                    />
                                </a>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center mt-1">
                            <button className="hireMeButton">Hire me?</button>
                        </Col>
                    </Row>
                </Col>


            </Row>
        </Container>
    )
}