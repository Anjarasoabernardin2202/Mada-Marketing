import React, { useRef, useState } from "react";

// Libraries
import { Link } from "react-router-dom";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-scroll-parallax";
import { motion } from 'framer-motion'

// Components
import Header, { HeaderNav, Menu, } from "../../Components/Header/Header";
import { fadeIn } from "../../Functions/GlobalAnimations";

import FooterStyle01 from "../../Components/Footers/FooterStyle01";
import SideButtons from "../../Components/SideButtons";



// Data
// import { blogData } from "../../Components/Blogs/BlogData";
import LogoMM from "../../Assets/img/MM.png"

import LogoRecrutementFR from "../../Assets/img/recrutement_news.jpg"
import LogoFormation from "../../Assets/img/formation.jpg"
import BlogStandard from "../../Components/Blogs/BlogStandard";

import PhotoPartenaria from "../../Assets/img/partenariaISSOF.jpg"



const TestimonialsCarouselData = [
  {
    img: LogoRecrutementFR,
    title: "Nous recrutons des télévendeurs français à temps plein.",
    dedline: "08 Juin 2023",
    authorname: "Avis de recrutement",
    link: "/blogs/blog-post-layout-01",
    messageDate: "Dernier délai de dépôt des dossiers :"

  },
  {
    img: LogoFormation,
    title: "Nous appelons tous les candidats validés à assister à la formation.",
    dedline: "13 Juin 2023",
    authorname: "Avis au candidat(e) validé(e)",
    link: "/blogs/blog-post-layout-01",
    messageDate: "Début de formation :"

  },
  {
    img: LogoFormation,
    title: "We are hiring full-time English telesales representatives.",
    dedline: "17 Juin 2023",
    authorname: "Job Vacancy Announcement",
    link: "/blogs/blog-post-layout-01",
    messageDate: "Début de formation :"

  },


];

const blogData = [
  {
    id: 1,
    category: ["Web design", "Concept"],
    blogType: "clean",
    tags: ["Development", "Events", "Media", "Mountains"],
    img: "https://via.placeholder.com/800x560",
    title: "Creativity is nothing but a mind set free",
    content: "Lorem ipsum is simply dummy text printing typesetting industry lorem ipsum been dummy...",
    author: 2,
    likes: 28,
    comments: 0,
    date: "18 February 2020"

  },

  {
    id: 2,
    category: ["Web design", "Concept"],
    blogType: "standard",
    tags: ["Development", "Events", "Media", "Mountains"],
    img: PhotoPartenaria,
    title: "Patenaria avec ISSOF",
    content: "Antananarivo, Madagascar - Dans une initiative visant à soutenir l'employabilité des jeunes en situation d'insertion professionnelle ainsi que des travailleurs désireux de bénéficier d'une mobilité de carrière et d'une réinsertion professionnelle, MADA Marketing, spécialiste de la relation client-service d'immigration au Canada, et ISSOF, une organisation axée sur la formation professionnelle, ont annoncé leur partenariat stratégique. Cette collaboration vise à mettre en place une formation professionnalisante complète et enrichissante qui offrira aux participants les compétences nécessaires pour réussir sur le marché du travail.",
    author: 2,
    likes: 28,
    comments: 0,
    date: "1 Juin 2023"

  },



]

// Filter the blog data category wise

const blogStandardData = blogData.filter((item) => item.blogType === "standard");

const LatestNewsPage = (props) => {
  const swiperRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0)

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
          <Navbar.Collapse className="col-auto px-0 justify-center">
            <Menu {...props} />
          </Navbar.Collapse>

        </HeaderNav>
      </Header>
      {/* Header End */}
      <SideButtons />
      {/* Section Start */}
      <section className="py-0 relative latestnews-swiper">
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          spaceBetween={20}
          speed={1000}
          pagination={{ clickable: true }}
          onSlideChange={(swiperCore) => {
            const { realIndex } = swiperCore;
            setActiveSlide(realIndex)
          }}
          loop={true}
          modules={[Autoplay]}
          // autoplay={{ delay: 2000, disableOnInteraction: false }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          centeredSlides={true}
          className="relative swiper-default-nav-hidden" >
          {TestimonialsCarouselData.map((item, i) => {
            return (
              <SwiperSlide key={i} className="w-[55%] md:w-full">
                <motion.div className="relative overflow-hidden py-[130px] h-[700px] md:h-[484px] sm:h-[690px] xs:h-[528px;] bg-no-repeat  bg-cover bg-[center_center] flex justify-center" {...fadeIn}>
                  <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[-30px] left-0 h-[100vh] lg:h-[64vh] lg:top-[-75px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-0 sm:h-[56vh] xs:h-[50vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(${item.img})` }}></Parallax>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: activeSlide === i ? 1 : 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-[200px] px-[180px] absolute xl:px-[50px] lg:px-[15px] lg:mt-[160px] md:px-[150px] md:mt-0 sm:px-[80px] sm:mt-[225px] sm:mx-0 sm:mb-[20px] xs:px-[15px] xs:mt-[185px] xs:mb-[15px]">
                    <div className="text-center pt-[50px] px-[45px] py-[30px] sm:pt-[40px] bg-gradient-to-r from-[#0039e3] via-[#5e28dd] to-[#8600d4] xs:px-[25px] xxs:pt-[20px]">
                      <motion.div
                        initial={{ opacity: 0, y: "30%" }}
                        whileInView={{ opacity: activeSlide === i ? 1 : 0, y: activeSlide === i ? "0" : "30%" }}
                        transition={{ delay: 0.9 }}
                        className="mb-[20px] lg:mb-0">
                        <Link aria-label="author-name" to="#" className="uppercase text-center mb-[20px] md:mb-0 sm:mb-[20px] xs:mb-[13px] py-[5px] px-[15px] text-[10px] inline-block leading-[20px] bg-black text-white font-serif">{item.authorname}</Link>
                      </motion.div>
                      {item.link && <motion.div

                        initial={{ opacity: 0, y: "30%" }}
                        whileInView={{ opacity: activeSlide === i ? 1 : 0, y: activeSlide === i ? "0" : "30%" }}
                        transition={{ delay: 1 }}
                        className="text-white text-[26px] max-w-[530px] leading-[34px] mx-[40px] font-serif px-[5px] pb-[10px] text-center lg:text-[25px] lg:leading-[33px] xs:text-[16px] xs:leading-[21px] md:mx-[75px] sm:mx-0">
                        <Link className="hover:text-white" >{item.title}</Link>
                      </motion.div>}
                      <motion.div
                        initial={{ opacity: 0, y: "30%" }}
                        whileInView={{ opacity: activeSlide === i ? 0.2 : 0, y: activeSlide === i ? "0" : "30%" }}
                        transition={{ delay: 1.1 }}
                        className="h-[1px] bg-white opacity-20 my-[20px] mx-[80px] xs:m-[13px]"></motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: "30%" }}
                        whileInView={{ opacity: activeSlide === i ? 1 : 0, y: activeSlide === i ? "0" : "30%" }}
                        transition={{ delay: 1.3 }}
                        className="p-[5px] text-[14px] xs:text-[11px] xs:leading-[16px] leading-[20px] text-white">
                        <Link aria-label="blog-category" to="/blogs/blog-grid" className="font-serif hover:text-white">{item.messageDate}</Link>
                        <span className="mx-[10px]">•</span>
                        <Link aria-label="date" to="/blogs/blog-grid" className="font-serif hover:text-white">{item.dedline}</Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {
          <div className="swiper-navigation-01 swiper-navigation-light">
            <div onClick={() => swiperRef.current.swiper.slidePrev()} className="left-[40px] w-[60px] h-[60px] swiper-button-prev xs:left-[10px] !z-[1]">
            </div>
            <div onClick={() => swiperRef.current.swiper.slideNext()} className="right-[40px] w-[60px] h-[60px] swiper-button-next xs:right-[10px] !z-[1]">
            </div>
          </div>
        }
      </section>
      {/* Section End */}

      {/* Section Start */}
      <section className="bg-lightgray mt-[20px] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="justify-center">
            <Col lg={6} className="text-center mb-16 sm:mb-12">
            <h6 className="font-serif font-semibold text-darkgray uppercase" style={{ color: "red" }}>NOUVELLES LES PLUS POPULAIRES</h6>
         
            </Col>
          </Row>
        </Container>
        <section className="pt-0 overflow-hidden pb-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px] relative xs:pt-[15px]">
          <Container>
            <Row className="justify-center">
              <Col lg={8} className="md:mb-[60px] sm:mb-[40px]">
                <BlogStandard  data={blogStandardData} animation={fadeIn} />
              </Col>

            </Row>
          </Container>
        </section>

      </section>
      {/* Section End */}




      {/* Footer Start */}
      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />
      {/* Footer End */}
    </div>
  )
}

export default LatestNewsPage