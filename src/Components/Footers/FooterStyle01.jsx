import React, { memo } from 'react'

// Libraries
import { Link } from 'react-router-dom';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { PropTypes } from "prop-types";

// Components
import SocialIcons from '../SocialIcon/SocialIcons';
import FooterMenu, { Footer } from './Footer';
import MM from "../../Assets/img/MM.png"

// Data
import FooterData from './FooterData';

const iconData = [
    {
        color: "#828282",
        link: "https://www.facebook.com/profile.php?id=100082834522818",
        icon: "fab fa-facebook-f"
    },
    // {
    //     color: "#828282",
    //     link: "https://dribbble.com/",
    //     icon: "fab fa-linkedin"
    // },
    
]

const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de traitement du formulaire ici
};

const FooterStyle01 = (props) => {
    return (
        <Footer theme={props.theme} className={`${props.className ? ` ${props.className}` : ""}`}>
            <div className="py-[5%] lg:py-[95px] md:py-[50px]">
                <Container>
                    <Row>
                        <FooterMenu data={FooterData.slice(0, 2)} lg={3} sm={6} className="xl:px-[15px] md:mb-[40px] xs:mb-[25px]" titleClass="capitalize" />
                        <Col lg={3} sm={6} className="xs:mb-[25px]">
                            <span className="mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]">Notre Adresse</span>
                            <p className="w-[85%] mb-[15px]">lot IvS61, Antanimena Antananarivo, 101</p>
                            <div><i className="feather-phone-call text-sm mr-[10px] text-themecolor"></i>+261 32 91 884 360</div>
                            <div><i className="feather-mail text-sm mr-[10px] text-themecolor"></i><a aria-label="mail" href="mailTo:info@yourdomain.com">contact@mada-marketing.com</a></div>
                        </Col>
                        <Col lg={3} sm={6}>
                            <span className="mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]">Nous Contacter</span>
                            <div className="w-full inline-block">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Votre adresse e-mail</Form.Label>
                                        <Form.Control type="email" placeholder="Entrez votre e-mail" />
                                    </Form.Group>

                                    <Form.Group controlId="formMessage">
                                        <Form.Label>Votre message</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Entrez votre message" />
                                    </Form.Group>
                                      <br/>
                                    <Button variant="primary" type="submit">
                                      Envoyer
                                    </Button>
                                </Form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="py-[40px] border-t border-[#ffffff1a]">
                <Container>
                    <Row>
                        <Col md={3} className="sm:mb-[20px]">
                            <Link aria-label="homepage" to="/" className="sm:flex sm:justify-center">
                                <img alt="logo" src={MM} width="111" height="36" />
                            </Link>
                        </Col>
                        <Col md={6} className="flex justify-center items-center text-center sm:mb-[20px]">
                            <p className="mb-0">&copy; {new Date().getFullYear()} Mada Marketing</p>
                        </Col>
                        <Col md={3} className="text-right sm:text-center">
                            <SocialIcons size="xs" theme="social-icon-style-01" className="justify-end sm:justify-center" iconColor={props.theme === "dark" ? "light" : "dark"} data={iconData} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </Footer>
    )
}

FooterStyle01.defaultProps = {
    data: FooterData,
    className: "bg-darkgray text-[#828282]",
    logo: "/assets/img/webp/logo-white.webp",
    theme: "light"
}

FooterStyle01.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string,
}

export default memo(FooterStyle01)
