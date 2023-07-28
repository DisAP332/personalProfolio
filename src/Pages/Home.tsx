import { Col, Container, Row } from "react-bootstrap"

// begin imports of SVG Icons

import htmlIcon from '../Assets/Icons/html5.svg'
import cssIcon from '../Assets/Icons/css3.svg'
import javascriptIcon from '../Assets/Icons/javascript.svg'
import reactIcon from '../Assets/Icons/react.svg'
import bootstrapIcon from '../Assets/Icons/bootstrap.svg'
import typescriptIcon from '../Assets/Icons/typescript.svg'
import nodejsIcon from '../Assets/Icons/nodejs.svg'
import expressIcon from '../Assets/Icons/express.svg'
import pugIcon from '../Assets/Icons/pug-is-wearing-hat-and-sunglasses.svg'
import mongodbIcon from '../Assets/Icons/mongodb.svg'
import gitIcon from '../Assets/Icons/git.svg'
import githubIcon from '../Assets/Icons/github.svg'
import firebaseIcon from '../Assets/Icons/firebase.svg'
import webpackIcon from '../Assets/Icons/webpack.svg'
import adobeIllustratorIcon from '../Assets/Icons/adobe-illustrator.svg'
import linuxIcon from '../Assets/Icons/linux.svg'

// end imports of SVG Icons

export const Home = () => {
    return (
        <>
            <Container style={{color: 'white'}}>
                <Row>
                    <h2 className='mt-3 coolFont4'>
                        Software extraordiare?
                    </h2>
                    <div className="d-flex justify-content-end">
                        <h2 className="nameFont"> ... Maybe! </h2>
                    </div>
                </Row>
                <Row>
                    <h1 className='coolFont1'> Some skills in my software toolbelt </h1>
                </Row>
            </Container>

            {/* begin skill section */}
            <Container className="transparentBackground">
                <Row>
                    <Col>
                        <Col className="d-flex align-items-center">
                            <h2 style={{color: 'white'}} className="nameFont2">Front End</h2>
                            <div className="horizontalLine" style={{marginLeft: '20px'}}/>
                        </Col>
                        <Container className="d-flex iconHelper overflow-auto">
                                <img className='iconSizer' src={htmlIcon} alt='HTML Icon'/>

                                <img className='iconSizer' src={cssIcon} alt='CSS Icon'/>

                                <img className='iconSizer' src={javascriptIcon} alt='Javascript Icon'/>

                                <img className='iconSizer' src={reactIcon} alt='React Icon'/>

                                <img className="iconSizer" src={typescriptIcon} alt='typescript Icon' />

                                <img className='iconSizer' src={bootstrapIcon} alt='Bootstrap Icon'
                                style={{backgroundColor: 'white', borderRadius: '10px'}}
                                />
                        </Container>
                    </Col>
                    <Col className="mt-4">
                        <Col className="d-flex align-items-center justify-content-end">
                            <div className="horizontalLine" style={{marginRight: '20px'}}/>
                            <h2 style={{color: 'white'}} className="nameFont2">Back End</h2>
                        </Col>
                        <Container className="d-flex iconHelper overflow-auto">
                                <img className='iconSizer' src={nodejsIcon} alt='nodeJS Icon'/>

                                <img className='iconSizer' src={expressIcon} alt='Express Icon'/>

                                <img className='iconSizer' src={mongodbIcon} alt='MongoDB Icon'/>

                                <img className='iconSizer' src={javascriptIcon} alt='Javascript Icon'/>

                                <img className='iconSizer' src={typescriptIcon} alt='Typescript Icon'/>

                                <img className='iconSizer' src={pugIcon} alt='PUG Icon'/>
                        </Container>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col className="d-flex align-items-center justify-content-center mt-4">
                        <div className="horizontalLine" style={{marginLeft: '20px'}}/>
                        <h2 style={{color: 'white'}} className="nameFont2">Technologies</h2>
                        <div className="horizontalLine" style={{marginLeft: '20px'}}/>
                    </Col>
                    <Container className="d-flex iconHelper overflow-auto justify-content-center">
                        <img className='iconSizer' src={gitIcon} alt='Git Icon'/>
                        <img className='iconSizer' src={githubIcon} alt='GitHub Icon'/>
                        <img className='iconSizer' src={firebaseIcon} alt='Firebase Icon'/>
                        <img className='iconSizer' src={webpackIcon} alt='Webpack Icon'/>
                        <img className='iconSizer' src={adobeIllustratorIcon} alt='Adobe illustrator Icon'/>
                        <img className='iconSizer' src={linuxIcon} alt='Linux Icon'/>
                    </Container>
                </Row>
            </Container>

            {/* end skill section */}
            {/* being about me section */}
            <Container className="transparentBackground mt-5">
                <Col className="d-flex align-items-center justify-content-center">
                    <div className="horizontalLine" style={{marginRight: '20px', width: '450px'}}/>
                        <h1 style={{color: 'white', fontSize: 'calc(1rem + 3vw'}} className="nameFont2">About me</h1>
                    <div className="horizontalLine" style={{marginLeft: '20px', width: '450px'}}/>
                </Col>
                <Container style={{maxHeight: '200px'}} className="overflow-auto mb-3">
                    <p className="coolFont4" style={{color: 'white'}}>
                    My love and passion in life are for technology. It envelops our world, our every-day lives, and
                    integrates more and more into what it means to be a human in the 21st century. My goal is to be
                    a hand in the evolution of technology and, in turn, the evolution of man alongside it! As our technology grows, we unlock exciting new ways to interact with the world around us. It is the catalyst that makes
                    The impossible - possible! I am dedicated and enamored by the constant flow of new challenges and new
                    skills to master, I will never stop growing and learning; it's what I love to do!
                    </p>
                </Container>
            </Container>


            {/* end about me section */}

            {/* begin footer */}

            <Container>
                <div className="d-flex flex-row justify-content-center">
                    <h1 className="ml-3 text-center nameFont mt-3">
                        Jordan                  
                    </h1>
                    <h1 className="text-center mt-3 ml-2 nameFont2">Bell</h1>
                    <h1 className="ml-3 text-center nameFont mt-3">
                        WebDev                  
                    </h1>
                </div>
            </Container>
        </>

        // end footer
    )
}