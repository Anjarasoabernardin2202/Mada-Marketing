import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { m } from "framer-motion";
import { Link } from 'react-router-dom'


// Components
import { Header, HeaderNav, Menu } from "../../Components/Header/Header";
import Buttons from '../../Components/Button/Buttons'

import CustomModal from '../../Components/CustomModal'
import CustomIconWithText from '../../Components/CustomIconWithText/CustomIconWithText'
import { fadeIn } from '../../Functions/GlobalAnimations';

import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import Overlap from '../../Components/Overlap/Overlap';
import SideButtons from "../../Components/SideButtons";

// Data

import LogoMM from "../../Assets/img/MM.png"
import LogoService from '../../Assets/img/serviceLogo.jpg'



const CustomIconWithTextData2 = [

  {
    icon: "line-icon-Consulting",
    title: "Appel Sortants",
    content: "Uniquement des prospects chauds de haute qualité ! Un travail enrichissant et passionnant avec de nombreux bonus."
  },
  {
    icon: "line-icon-Teacher",
    title: "Conseiller Clients",
    content: "Travail parfait pour les personnes ayant de bonnes compétences en communication et la capacité de résoudre les problèmes rapidement et efficacement."
  },
  {
    icon: "line-icon-Profile",
    title: "Job Search",
    content: "Nous aidons des clients du monde entier à trouver l’emploi de leurs rêves à l’étranger et à bâtir une carrière réussie. Travail très enrichissant pour aider les autres à réussir!"
  },
  {
    icon: "line-icon-Talk-Man",
    title: "Marketing Digital",
    content: "En plus d’un centre d’appels, nous exploitons également une agence de marketing digital ! Opportunité pour les annonceurs PPC, les gestionnaires SMM, et pas seulement !"
  },
  {
    icon: "line-icon-Quill-3",
    title: "Rédaction SEO",
    content: "Nous offrons des services de rédaction de haut niveau à des clients de différentes industries, des services en ligne à la high tech ! Les rédacteurs qualifiés et les experts en SEO sont toujours les bienvenus"
  },
  {
    icon: "line-icon-Remove-User",
    title: "et plus!",
    content: "Notre gamme de services ne cesse de s’élargir, nous vous suggérons donc de suivre nos mises à jour et de découvrir plus d’opportunités pour votre carrière réussie !"
  }

]


const ClientData = [
  {
    img: "https://via.placeholder.com/120x60",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/120x60",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/120x60",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/120x60",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/120x60",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/120x60",
    link: "#"
  }
]

const OurServicesPage = (props) => {
 
  return (
    <div style={props.style}>
      {/* Header Start */}
      <Header topSpace={{ desktop: true }} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="light" bg="white" menu="light" className="px-[35px] py-[0px] md:px-0" containerClass="sm:px-0">
          <Col className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo" width="111" height="36" loading="lazy" src={LogoMM} data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                <img className="alt-logo" width="111" height="36" loading="lazy" src={LogoMM} data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
                <img className="mobile-logo" width="111" height="36" loading="lazy" src={LogoMM} data-rjs='/assets/img/webp/logo-fast-blue-black@2x.webp' alt='logo' />
              </Navbar.Brand>
            </Link>
          </Col>
          <div className="col-auto hidden order-last md:block">
            <Navbar.Toggle className="md:ml-[10px] sm:ml-0">
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
              <span className="navbar-toggler-line"></span>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse className="col-auto px-0 justify-end">
            <Menu {...props} />
          </Navbar.Collapse>
          
        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />


      {/* Section Start */}
      <section className="py-[130px] overflow-hidden lg:py-[90px] sm:py-[75px] xs:py-[50px]">
        <Container>
          <Row className="items-center justify-center">
            <Col lg={5} md={9} className="mb-[10px] md:mb-28">
              <span className="font-serif mb-[20px] text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] inline-block uppercase font-medium tracking-[1px]">Nos services</span>
              <h4 className="font-serif font-semibold text-darkgray w-[95%]">Nous sommes une entreprise specialisée dans le Marketing digital et Humain.</h4>
              <p className="w-[80%] mb-[25px] lg:w-[95%]">L' Etre Humain est au centre de toutes nos interactions. Nos valeurs: <strong>Intégrité</strong> , <strong>Professionalisme</strong> , <strong>Solidarité </strong>, <strong>Excellence .</strong></p>

            </Col>
            <Col lg={7} md={9} xs={12} className="px-[55px] md:pr-[50px] md:pl-[5px]">
              <m.figure className="image-back-offset-shadow w-100">
                <m.img
                  className="rounded-[6px] w-auto h-auto"
                  src={LogoService}
                  alt="our-services"
                  width="572.5"
                  height="436.53"
                  initial={{ opacity: 0, x: "0", y: "0" }}
                  whileInView={{ opacity: 1, x: "10px", y: "-20px" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, easing: "linear" }}
                />
                <m.span
                  className="rounded-[6px]"
                  {...{ ...fadeIn, animate: { x: "35px", y: "5px" } }}
                ></m.span>
              </m.figure>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      {/* Section Start */}
      {/* <section className="bg-lightgray z-[1] relative py-[130px] lg:py-[90px] sm:py-[75px] xs:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col md={6} className="font-serif justify-center flex flex-col items-center mb-20 sm:mb-12">   
              <h5 className="text-darkgray font-semibold -tracking-[1px]">Que faisons-nous ?</h5>
              <span className="mb-[10px] inline-block uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] tracking-[1px]">Nous avons de nombreux domaines de spécialisation – choisissez celui qui vous passionne le plus !</span>
            </Col>
          </Row>
          
        </Container>
      </section> */}
      {/* Section End */}



      {/* Section Start */}
      <section className="text-center relative grid-rows-3 grid-cols-2 py-[130px] opacity-[1] overflow-hidden bg-lightgray lg:py-[90px] sm:py-[75px] xs:py-[50px]" >
        <Container>
          <h5 className="text-darkgray font-semibold -tracking-[1px]">Que faisons-nous ?</h5>
          <span className="mb-[10px] inline-block uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] tracking-[1px]">Nous avons de nombreux domaines de spécialisation – choisissez celui qui vous passionne le plus !</span>

          <CustomIconWithText
            grid="row-cols-1 row-cols-lg-3 row-cols-sm-2"
            theme="custom-icon-with-text02"
            data={CustomIconWithTextData2}
            animationDelay={0.3}
            animation={fadeIn} />
        </Container>
      </section >
      {/* Section End */}

     

     

      <m.section className="bg-[#262b35] sm:bg-lightgray" {...fadeIn}>
        {/* <Container className="sm:pb-[50px]">
          <Row className="xs:mx-0">
            <Overlap className="relative bg-white rounded-[5px] px-[0px] py-[65px] md:p-[40px] xs:px-[20px] flex sm:flex sm:justify-center sm:items-center sm:flex-col">
              <Col lg={{ span: 5, offset: 1 }} md={7} sm={8} className="text-start sm:mb-[20px]">
                <h5 className="font-serif font-medium text-darkgray w-[95%] mb-0 lg:w-full sm:text-center">Une vidéo pour nous montre nos services</h5>
              </Col>
              <Col lg={{ span: 4, offset: 2 }} md={5} sm={8} className="ourservice-start-your-project text-center flex items-center md:text-start sm:justify-center">
              
                <CustomModal.Wrapper
                  modalBtn={
                    <span className="inline-flex flex-row items-center justify-center">
                      <Buttons type="submit" className="mr-[20px] btn-sonar border-0" themeColor={["#e37be0", "#fa7cc1", "#ff85a6", "#ff9393"]} color="#fff" size="md" title={<i className="icon-control-play" />} />
                      <Buttons type="submit" className="font-semibold font-serif p-0 uppercase text-xmd btn-link after:h-[1px] md:text-md mb-0 after:bg-darkgray" size="xlg" color="#232323" title="Start Video" />
                    </span>
                  } >
                  <div className="w-[1020px] max-w-full relative rounded mx-auto">
                    <div className="fit-video">
                      <iframe width="100%" height="100%" className="shadow-[0_0_8px_rgba(0,0,0,0.06)]" controls src="https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                    </div>
                  </div>
                </CustomModal.Wrapper>
             
              </Col>
            </Overlap>
          </Row>
        </Container> */}
        {/* footer Start */}
        <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
        {/* footer End */}
      </m.section>
    </div >
  )
}

export default OurServicesPage