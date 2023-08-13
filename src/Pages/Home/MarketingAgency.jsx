import React from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import {  m } from 'framer-motion'


import { Parallax } from "react-scroll-parallax";

// Component
import Header, { HeaderNav, Menu } from '../../Components/Header/Header'
import Buttons from '../../Components/Button/Buttons'
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

import ProcessStep from '../../Components/ProcessStep/ProcessStep';

import Clients from '../../Components/Clients/Clients';


import { fadeIn, fadeInRight, fadeInLeft } from '../../Functions/GlobalAnimations';

import SideButtons from "../../Components/SideButtons";


// Data
import { blogData } from "../../Components/Blogs/BlogData";


import { ProcessStepData06 } from '../../Components/ProcessStep/ProcessStepData';
import InViewPort from '../../Components/InViewPort';
import Image1 from '../../Assets/img/Image1.jpg'
import ImageDG from "../../Assets/img/DG.jpeg"
import Presentation from "../../Assets/img/presentatrice.png"

import LogoJobserach from "../../Assets/img/job-search-activities.jpg"
import LogoCS from "../../Assets/img/client.jpeg"
import Televendeur from "../../Assets/img/teleevendeur.jpg"
import LogoDeveloppeur from "../../Assets/img/developpeur.jpg"
import LogoContaqt from "../../Assets/img/Contaqt.jpg"
import LogoFirberry from "../../Assets/img/firberry.jpg"
import LogoEzTime from "../../Assets/img/Eztime.jpg"
import ImageDRH from "../../Assets/img/DRH.jpeg"
import DirecteurEN from "../../Assets/img/DA.jpg"
import RotateBox from '../../Components/RotateBox/RotateBox';


import LogoCoach from "../../Assets/img/WhatsApp_Image_2023-05-26_at_15.45.10-removebg-preview.png"
import LogoFormatrice from "../../Assets/img/WhatsApp_Image_2023-05-26_at_16.13.09-removebg-preview.png"
import LogoITManager from "../../Assets/img/ITMANGER-removebg-preview.png"
import LogoMM from "../../Assets/img/MM.png"
import FooterStyle01 from '../../Components/Footers/FooterStyle01';
import SignatureDG from "../../Assets/img/Signature.png"
import Presentation2 from "../../Assets/img/Presentation2.jpg"
import Presentation3 from "../../Assets/img/Presentation3.jpg"
import LogoIscam from "../../Assets/img/ii.webp"
import BlogCategory from '../../Components/Blogs/BlogCategory';

const SwiperData = [
  {
    img: Image1,
    title: "",
    titlebold: "Bienvenue chez Mada Marketing",
    titlelast: "",
    recrutement: false
  },
  {
    img: Presentation2,
    title: "",
    titlebold: "Centre de facilitation d'immigration pour le CANADA",
    titlelast: "",
    recrutement: false
  },
  {
    img: Presentation3,
    title: "",
    titlebold: "Réjoignez notre équipe",
    titlelast: "",
    recrutement: true
  },

]

const ClientData = [
  {
    img: LogoFirberry ,
    link : "https://www.fireberry.com"
  },
  {
    img: LogoContaqt,
    link : "https://www.contaqt.com/"
  },

  {
    img: LogoEzTime , 
    link : "https://www.eztime.co.il/"
  },
  {
    img: LogoIscam, 
    link : "https://www.issof.mg/"
  },


]

const SocialIconsData = [
  {
    color: "#3b5998",
    link: "https://www.facebook.com/",
    icon: "fab fa-facebook-f"
  },
  {
    color: "#ea4c89",
    link: "https://dribbble.com/",
    icon: "fab fa-dribbble"
  },
  {
    color: "#00aced",
    link: "https://twitter.com/",
    icon: "fab fa-twitter"
  },
  {
    color: "#fe1f49",
    link: "https://www.instagram.com/",
    icon: "fab fa-instagram"
  },
  {
    color: "#0077b5",
    link: "https://www.linkedin.com/",
    icon: "fab fa-linkedin-in"
  },
]

const ProgressBarData = [
  {
    title: "Stratégie de marketing",
    value: "80",
  },
  {
    title: "Système de messagerie",
    value: "95",
  },
  {
    title: "Communication mondiale",
    value: "100",
  },
]



const RotateBoxData = [

  {
    img: DirecteurEN,
    title: "Benjamin Pean",
    subtitle: "Directeur International du Service à la clientèle",
    icon: "line-icon-Bell-2",
    btnLink: "#",
    btnTitle: "Discover possible",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"
  },
  {
    img: ImageDRH,
    title: "Johan RAZAFIARISON",
    subtitle: "Directeur des Ressources Humaines",
    icon: "line-icon-Flick",
    btnLink: "#",
    btnTitle: "Discover possible",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"
  },

]

const RotateBoxData2 = [

  {
    img: LogoCoach,
    title: 'Antonio Serge Ariel RAMPANARIVO',
    subtitle: 'Responsable Qualité Centre',
    icon: "line-icon-Bell-2",
    btnLink: "#",
    btnTitle: "Discover possible",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"
  },
  {
    img: LogoFormatrice,
    title: 'Kintanatiana RAELISON',
    subtitle: 'RESPONSABLE ACADEMY',
    icon: "line-icon-Flick",
    btnLink: "#",
    btnTitle: "Discover possible",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"
  },
  {
    img: LogoITManager,
    title: 'ANJARASOA Bernardin',
    subtitle: 'IT Manager',
    icon: "line-icon-Flick",
    btnLink: "#",
    btnTitle: "Discover possible",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt labore ut enim"
  },

]


const TeamData01 = [
  {
    img: LogoCoach,
    name: 'Antonio Serge Ariel RAMPANARIVO',
    designation: 'Responsable Qualité Centre',
    social_links: [
      {
        title: 'facebook',
        link: "https://www.facebook.com",
        icon: "fab fa-facebook-f"
      },
      {
        title: 'instagram',
        link: "https://www.instagram.com",
        icon: "fa-brands fa-instagram"
      },
      {
        title: 'twitter',
        link: "https://www.twitter.com",
        icon: "fa-brands fa-twitter"
      }
    ]
  },
  {
    img: LogoFormatrice,
    name: 'Kintanatiana RAELISON',
    designation: 'RESPONSABLE ACADEMY',
    social_links: [
      {
        title: 'facebook',
        link: "https://www.facebook.com",
        icon: "fab fa-facebook-f"
      },
      {
        title: 'instagram',
        link: "https://www.instagram.com",
        icon: "fa-brands fa-instagram"
      },
      {
        title: 'twitter',
        link: "https://www.twitter.com",
        icon: "fa-brands fa-twitter"
      }
    ]
  },


  {
    img: LogoITManager,
    name: 'ANJARASOA Bernardin',
    designation: 'IT Manager',
    social_links: [
      {
        title: 'facebook',
        link: "https://www.facebook.com",
        icon: "fab fa-facebook-f"
      },
      {
        title: 'instagram',
        link: "https://www.instagram.com",
        icon: "fa-brands fa-instagram"
      },
      {
        title: 'twitter',
        link: "https://www.twitter.com",
        icon: "fa-brands fa-twitter"
      }
    ]
  },

]
const TextSliderData = [
  {
    img: LogoJobserach,
    title: "Recherche d'emploie à l'international",
    subtitle: '',
    content: "",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: LogoCS,
    title: "Service à la clientèle",
    subtitle: "",
    content: "",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: Televendeur,
    title: "Prospection à l'international",
    subtitle: "",
    content: "",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: LogoDeveloppeur,
    title: "Marketing Digital",
    subtitle: "",
    content: "",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
  {
    img: LogoDeveloppeur,
    title: "Innovation Technologique",
    subtitle: "",
    content: "",
    buttonTitle: "Learn more",
    buttonLink: "/page/what-we-offer/"
  },
]
const BlogCategoryData = [
  {
    category: "Recherche d'emploie à l'international",
    img: LogoJobserach,

  },
  {
    category: "Service à la clientèle",
    img: LogoCS,

  },
  {
    category: "Prospection à l'international",
    img: Televendeur,

  },
  {
    category: "Innovation Technologique",
    img: LogoDeveloppeur

  },
]


// Filter the blog data category wise
const blogGridData = blogData.filter((item) => item.blogType === "grid");

const handleClose = () => {
  let newsletter_modal = document.querySelector("#subscribe-popup"),
    newsletter_checkbox = newsletter_modal.querySelector("#newsletter-off");

  import("../../Functions/Utilities").then(module => {
    if (module.getCookie("litho-promo-popup") !== 'shown') {
      if (newsletter_checkbox.checked) {
        document.cookie = "litho-promo-popup=shown";
      }
    }
  })
}

const MarketingAgencyPage = (props) => {
  return (
    <div style={props.style}>
      <SideButtons />
      {/* Header Start */}
      <Header topSpace={{ md: true }} type="reverse-scroll">
        <HeaderNav fluid="fluid" theme="dark" expand="lg" className="px-[35px] py-[0px]  md:pl-0 md:pr-[15px] md:py-[20px] sm:pr-0">
          <Col className="col-auto col-sm-6 col-lg-2 mr-auto ps-lg-0 sm:!pl-0 text-center" >
            <Link aria-label="header logo" className="flex items-center" to="/">
              <Navbar.Brand className="inline-block p-0 m-0">
                <img className="default-logo mx-auto" width="111" height="36" loading="lazy" src={LogoMM} data-rjs='/assets/img/webp/logo-white@2x.webp' alt='logo' />
                <img className="alt-logo mx-auto" width="111" height="36" loading="lazy" src={LogoMM} data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />
                <img className="mobile-logo mx-auto" width="111" height="36" loading="lazy" src={LogoMM} data-rjs='/assets/img/webp/logo-black@2x.webp' alt='logo' />

              </Navbar.Brand>
            </Link>
          </Col>
          <Navbar.Toggle className="order-last md:ml-[25px] sm:ml-[17px]">
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
            <span className="navbar-toggler-line"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="col-auto justify-end pr-[15px]">
            <Menu {...props} />
          </Navbar.Collapse>
      
        </HeaderNav>
      </Header>
      {/* Header End */}

      {/* Section Start */}
      <section className="h-[900px] lg:h-[720px] md:h-[750px] sm:h-[500px]">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ dynamicBullets: false, clickable: true }}
          className="white-move swiper-pagination-light h-full swiper-pagination-03 swiper-pagination-medium  swiper-pagination-light swiper-pagination-big"
        >
          {
            SwiperData.map((item, i) => {
              return (
                <SwiperSlide key={i} style={{ backgroundImage: `url(${item.img})` }} className="cover-background overflow-hidden relative">
                  <div className="absolute h-full w-full opacity-40 top-0 left-0 bg-gradient-to-r from-[#232323] via-[#232323] to-[#232323]"></div>
                  <Container className="h-full  text-center justify-center">
                    <Row className="h-full w-[70%] md:w-full my-0 mx-auto">
                      <Col className="h-full justify-center flex-col relative flex">
                        <h2 className="font-serif font-light text-white mb-16">{item.title}<span className="font-semibold">{item.titlebold}</span>{item.titlelast}</h2>
                        {item.recrutement ?
                          <div className="inline-block xs:grid xs:justify-center">
                            <Buttons to="/recrutement" className="mr-[20px] btn-fancy tracking-[1px] btn-fill rounded-none font-medium font-serif uppercase btn-fancy md:mb-[15px] sm:mb-0 xs:block xs:w-full xs:mx-0" size="md" color="#ffff" themeColor="red" title="Postuler" />
                            {/* <Buttons to="/" className="btn-fancy tracking-[1px] rounded-none font-medium font-serif uppercase btn-transparent hover:text-black xs:block xs:w-fit xs:mx-0" themeColor="#fff" size="md" color="#fff" icon="fas fa-arrow-right right-icon" iconPosition="after" title="En savoir Plus" /> */}
                          </div> : null
                        }
                      </Col>
                    </Row>
                  </Container>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="py-[100px] text-left overflow-hidden md:py-[85px] sm:py-[60px]">
        <Container>
          <Row className="items-center">
            <Col lg={3} className="md:mb-[40px] xs:text-center">
              <m.h2 className="heading-5 font-semibold -tracking-[1px] text-darkgray font-serif mb-0" {...fadeIn}>Que faisons-nous ?</m.h2>
            </Col>
            <Col lg={9}>
              <ProcessStep className="xs:block items-center mx-auto justify-center text-center sm:text-start" grid="col-xl-10 gap-y-10" theme="process-step-style-06" data={ProcessStepData06} animation={fadeInLeft} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Section End */}

      <InViewPort>
        {/* Section Start */}
        <section className="py-[80px] overflow-visible bg-[#969896] pb-0 relative md:py-[40px]">
          <Container>
            <Row className="items-center justify-center">
              <div className="relative bottom-[-50px] z-[1] col-lg-6 col-md-10">
                <Parallax className="lg-no-parallax flex justify-center h-full items-center w-full bg-no-repeat absolute bottom-0 right-[-20px] xs:right-0 lg:!top-[30px]" speed={20}>
                  <m.div style={{ background: "#E50519" }} className="marketing-agency-parallx" {...{ ...fadeInRight, transition: { duration: 0.8 } }}>
                    <span className="text-overlap-style-04 font-serif font-semibold -tracking-[3px] xs:text-[55px] text-white">marketing</span>
                  </m.div>
                </Parallax>
                <Parallax speed={0}>
                  <m.img className="lg:w-[80%]" width={444} height={642} src={Presentation} alt="" {...{ ...fadeInRight, transition: { ease: [0.25, 1, 0.5, 1], duration: 1 } }} />
                </Parallax>
              </div>
              <m.div className="mb-[80px] xs:mb-20 md:mt-[100px] col-xl-4 col-lg-5 col-md-10 offset-xl-1" {...fadeIn}>
                <h2 className="heading-5 font-medium font-serif text-white">Nous apportons de véritables<span className="font-semibold"> solutions marketing pour faciliter </span>l'immigration de nos clients</h2>


              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <m.section className="overflow-visible block p-0 relative" {...fadeIn}>
          <div className="right-0 bottom-[-50px] font-semibold tracking-[-10px] leading-[200px] text-[#fff] text-[200px] font-serif absolute lg:text-[160px] lg:leading-[160px] md:hidden">business</div>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <m.section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]" {...fadeIn}>
          <Container>
            <Row>
              <Col lg={5} md={6} className="mt-32 md:mt-0 sm:mb-[30px]">
                <h2 className="heading-5 font-medium font-serif text-darkgray w-[90%] mb-[30px]  lg:w-full sm:mb-[15px]">Nous concevons<span className="font-semibold"> une marque, une expérience</span> numérique qui engage les bons clients</h2>
              </Col>
              <Col lg={{ offset: 1 }} md={6} className="mb-[30px] mt-[108px] md:mt-0">
                <ProgressBar theme="progressbar-style-01 marketing-agency-progressbar" trailColor="transparent" data={ProgressBarData} height="8px" color="#E50519" animation={fadeIn} />
              </Col>

            </Row>

            <Row>

            </Row>


          </Container>
        </m.section>


        {/* Section Start */}
        <m.section {...fadeIn}>
          <Container fluid className="px-0">
            <Row className="justify-center text-center">
              <Col lg={4} className="mb-16 text-center">
                <span className="mb-[5px] text-[#969896] font-serif uppercase block tracking-[1px]">Nos</span>
                <h2 className="heading-5 font-semibold text-darkgray font-serif">Prospection</h2>
              </Col>
            </Row>
            <BlogCategory grid="grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large" data={BlogCategoryData} animation={fadeIn} />
          </Container>
        </m.section>
        {/* Section End */}

        {/* Section Start */}
        <section className="py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] ">
          <Container>
            <Row className="justify-center text-center">
              <Col lg={4} className="mb-16 text-center">
                <span className="mb-[5px] text-[#969896] font-serif uppercase block tracking-[1px]">Nos</span>
                <h2 className="heading-5 font-semibold text-darkgray font-serif">Partenaires</h2>
              </Col>
            </Row>
            <Clients className="col-10 col-md-3 col-sm-6" grid="row-cols-1 row-cols-sm-2 row-cols-md-4 justify-center" theme="client-logo-style-06 light" data={ClientData} animation={fadeIn} />
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <section className="bg-no-repeat bg-cover	overflow-hidden relative bg-center md:pt-[75px] xs:pt-[50px]" style={{ backgroundImage: "url(/assets/img/webp/home-marketing-agency-bg-img-05.webp)" }}>
          <Container>
            <Row className="items-center justify-center">
              <Col xl={{ span: 4, offset: 1 }} lg={{ span: 5, order: 2 }} md={8} className="md:text-center">
                <m.div  {...{ ...fadeIn, transition: { delay: 0.5, duration: 0.6 } }}>
                  <img src="/assets/img/webp/home-marketing-agency-img-02.webp" alt="" className="mb-[20px] md:mt-0 md:mx-auto" />
                  <div>
                    <h4 className="font-serif font-light text-darkgray tracking-[-1px] w-[65%] mb-12 md:w-full" >Directeur Géneral
                      <span className="font-semibold"> message</span>
                    </h4>
                    <span className="mb-[20px] text-lg leading-[30px] text-[#fff] w-[86%] block xs:w-full xs:text-xmd xs:leading-[22px] md:text-center md:mx-auto">Nous misons sur l'excellence dans tout ce que nous entreprenons dans le respect et la dignité humaine.</span>
                    <p className="text-[#fff] opacity-60	w-[85%] md:w-full mb-[50px] xs:mb-[15px]">L'intégrité fait partie, avec le professionalisme,la solidarité et l'excellence , des quatres valeurs essentielles , qui forment les pilliers de notre culture d'entreprise .</p>
                    <img src={SignatureDG} alt="" className="md:my-0 md:mx-auto" />
                  </div>
                </m.div>
              </Col>
              <Col xs={10} lg={{ span: 7, order: 1 }}>
                <div className="relative">
                  <m.img className="ml-auto" width="597px" height="781px" src={ImageDG} alt="" {...{ ...fadeIn, transition: { duration: 1 } }} />
                  {/* <m.div className="marketingagency-quote absolute left-[10px] bottom-[160px] rounded-[4px] py-[40px] px-[45px] bg-[#f4d956] text-left w-[50%] before: xs:p-[15px] sm:text-lg xs:w-[70%] xs:bottom-[50px]" {...{ ...fadeIn, transition: { delay: 0.8 }, duration: 0.6 }}>
                    <span className="leading-[32px] -tracking-[.5px] text-darkgray text-xlg font-serif block sm:text-lg">Teamwork is the ability to work together toward a common vision.</span>
                  </m.div> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Section Start */}
        <m.section className="bg-gradient-to-b from-[#fff] to-[#f0f2f0] pt-[130px] overflow-hidden lg:pt-[90px] md:pt-[75px] sm:pt-[50px]" {...fadeIn}>
          <Container>
            <Row className="justify-center text-center">
              <span className="mb-[5px] text-[#969896] font-serif uppercase block tracking-[1px]">TEAM</span>
              <h2 className="heading-5 font-semibold text-darkgray font-serif">Nos Directeurs</h2>

              <RotateBox grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center" data={RotateBoxData} />
            </Row>

          </Container>
          <br></br>
          <Container>
            <Row className="justify-center text-center">

              <h2 className="heading-5 font-semibold text-darkgray font-serif">Nos Managers</h2>

              <RotateBox grid="row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center" data={RotateBoxData2} />
            </Row>

          </Container>

          {/* <section>
            <Container>
              <Row className="justify-center lg:mt-[200px] md:mt-0">

              

              </Row>
            </Container>
          </section> */}

        </m.section>
        {/* Section End */}


        {/* Section Start */}
        <section className="py-[80px] overflow-hidden md:py-[40px]">
          <Container>
            <Row className="md:justify-center">
              <Col lg={7} sm={10} className="md:mt-12 md:mb-12 md:text-center">
                <m.h2 className="heading-3 font-semibold text-darkgray font-serif mb-0" {...{ ...fadeIn, transition: { delay: 0.2 } }}>Si vous souhaitez nous contacter, n'hésitez pas à nous envoyer un email </m.h2>
              </Col>
              <m.div className="col-lg-5 pl-24 lg:pl-[15px] md:mb-12 md:text-center" {...{ ...fadeIn, transition: { delay: 0.4 } }}>
                <span className="mt-[7px] text-darkgray text-xmd font-serif block">Notre Email : </span>
                <h3 className="heading-4 text-[#f4d956] font-semibold font-serif mb-0 mt-[5px]">
                  <a aria-label="mail" href="mailto:info@domain.com" className="text-decoration-line-bottom-thick hover:opacity-50 hover:text-[#828282]" style={{ color: 'red' }}>
                    contact@mada-marketing.com
                  </a>
                </h3>

              </m.div>
            </Row>
          </Container>
        </section>
        {/* Section End */}

        {/* Footer Start */}
        <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />


 

      </InViewPort>
    </div>
  )
}

export default MarketingAgencyPage
