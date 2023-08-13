import React, { useRef } from 'react'

// Libraries
import { Col, Container, Navbar, Row } from 'react-bootstrap'

import { m, AnimatePresence } from 'framer-motion';
import { Formik, Form } from 'formik';

// Components
import { fadeIn } from '../../Functions/GlobalAnimations';
import { resetForm, sendEmail } from "../../Functions/Utilities";
import Buttons from '../../Components/Button/Buttons'
import { Input } from '../../Components/Form/Form'
import { ContactFormStyle02Schema, } from '../../Components/Form/FormSchema';
import MessageBox from '../../Components/MessageBox/MessageBox';
import LogoRecrutement from "../../Assets/img/recrutement.jpg"
import Header, { HeaderNav, SearchBar, Menu } from '../../Components/Header/Header';
import { Link } from 'react-router-dom';

import LogoMM from "../../Assets/img/MM.png"
import FooterStyle01 from '../../Components/Footers/FooterStyle01';

const ContactFormPage = (props) => {
  const form1 = useRef(null)
  const recaptcha = useRef()

  return (
    <>

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
          <SearchBar />

        </HeaderNav>
      </Header>
      {/* Header End */}


      <m.section className="py-[160px] bg-cover bg-no-repeat overflow-hidden relative bg-center lg:py-[120px] md:py-[95px] xs:py-[80px] xxs:py-[50px]" style={{ backgroundImage: `url(${LogoRecrutement})` }} {...fadeIn}>
        <Container className="xs:px-0">
          <Row className="justify-end md:justify-center">
            <Col xl={7} lg={7} md={9} sm={11}>
              <div className="px-[7rem] py-[5rem] rounded-md shadow-[0_0_30px_rgb(0,0,0,0.08)] bg-white sm:p-20 xs:rounded-none xs:px-[3.5rem] xs:py-[6rem]">
                <span className="mb-[15px] font-medium text-center text-[red] text-md font-serif uppercase block sm:mb-[10px]">Sélectionnez une offre d’emploi et laissez vos coordonnées.</span>
                <h5 className="w-[80%] mb-[40px] font-bold text-center tracking-[-1px] text-black font-serif uppercase mx-auto xs:w-full">Mada Marketing (Recrutement)</h5>
                <Formik
                  initialValues={{ name: '', email: '', jobTitle: '', phone: '', cv: null }}
                  validationSchema={ContactFormStyle02Schema}
                  onSubmit={async (values, actions) => {
                    actions.setSubmitting(true)
                    const response = await sendEmail(values)
                    response.status === "success" && resetForm(actions)
                  }}
                >
                  {({ isSubmitting, status }) => (
                    <Form className="mb-[30px]">
                      <div className="mb-[25px]">
                        <label htmlFor="jobTitle" className="block mb-[5px]">Poste</label>
                        <select id="jobTitle" name="jobTitle" className="rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]">
                          <option value="" disabled selected hidden>Sélectionnez un poste</option>
                          <option value="Customer services">Customer services</option>
                          <option value="Jobsearch ">Jobsearch </option>
                          <option value="Sales agents">Sales agents</option>
                          <option value="Quality analyste">Quality analyste</option>
                          <option value="Team Leader -FR">Team Leader -FR</option>
                          <option value="Team Leader-EN">Team Leader-EN</option>
                          <option value="SMM Manager ">SMM Manager </option>
                          <option value="French Copywrither">French Copywrither</option>
                          
                        </select>
                      </div>

                      <div className="mb-[25px]">
                        <label htmlFor="name" className="block mb-[5px]">Nom et Prénoms</label>
                        <Input showErrorMsg={false} type="text" id="name" name="name" className="rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]" placeholder="RAKOTO ..." />
                      </div>

                      <div className="mb-[25px]">
                        <label htmlFor="email" className="block mb-[5px]">Email</label>
                        <Input showErrorMsg={false} type="email" id="email" name="email" className="rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]" placeholder="exemple@gmail.com" />
                      </div>

                      <div className="mb-[25px]">
                        <label htmlFor="phone" className="block mb-[5px]">Contact rapide</label>
                        <Input showErrorMsg={false} type

                          ="number" id="phone" name="phone" className="rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]"  placeholder="034 XX XXX XX"/>
                      </div>

                      <div className="mb-[25px]">
                        <label htmlFor="cv" className="block mb-[5px]">CV</label>
                        <Input showErrorMsg={false} type="file" id="cv" name="cv" className="rounded-[5px] text-md py-[15px] px-[20px] w-full border-[1px] border-solid border-[#dfdfdf]" />
                      </div>

                      <Buttons ariaLabel="form button" type="submit" className={`btn-fill text-sm leading-none font-medium tracking-[1px] py-[13px] px-[32px] rounded-[4px] w-full uppercase mb-[5px]${isSubmitting ? " loading" : ""}`} themeColor="red" color="#fff" size="lg" title="Envoyer" />
                      <AnimatePresence>
                        {status && <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><MessageBox className="mt-[20px] text-center py-[10px]" theme="message-box01" variant="success" message="Votre message a été envoyé avec succès !" /></m.div>}
                      </AnimatePresence>
                    </Form>
                  )}
                </Formik>
                <p className="w-[80%] text-xs leading-6 mx-auto xs:w-full text-center">Nous nous engageons à protéger votre vie privée. Nous ne collecterons jamais d'informations vous concernant sans votre consentement explicite.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </m.section>


      <FooterStyle01 theme="dark" className="text-slateblue bg-[#262b35]" />



    </>
  )
}

export default ContactFormPage