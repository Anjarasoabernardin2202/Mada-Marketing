import React, { memo } from 'react'

// Component
import { Col, Row, Image } from 'react-bootstrap'
import Buttons from '../Button/Buttons'
import { m } from "framer-motion"
import { PropTypes } from "prop-types";

// Data
import RotateBoxData from './RotateBoxData'

// css
import "../../Assets/scss/components/_rotatebox.scss"

const RotateBox = (props) => {
    return (
        <Row className={`${props.grid}${props.className ? ` ${props.className}` : ""}`}>
            {props.data.map((item, i) => (
                <Col key={i}>
                    <m.div
                        className="rm-rotate-box text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, duration: 1 }}
                    >
                        <div className="flipper to-left">
                            <div className="thumb-wrap">
                                <div
                                    className="card-side front overflow-hidden rounded-[4px] h-[490px] lg:h-[450px]"
                                    style={{
                                        background: "url(" + item.img + ")",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                >
                                    <div className="absolute top-0 left-0 w-full h-full opacity-70 overlay-rotatebox"></div>
                                    <div className="content-wrap px-[15px]">
                                        <span className="text-white text-lg tracking-[1px] uppercase font-serif inline-block font-medium mb-[10px]">{item.title}</span>
                                        <span className="text-white opacity-60 text-md uppercase tracking-[.5px] font-serif block">{item.subtitle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </m.div>
                </Col>
            ))}
        </Row>

    );
};

RotateBox.defaultProps = {
    data: RotateBoxData,
}

RotateBox.propTypes = {
    className: PropTypes.string,
    grid: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            img: PropTypes.string,
            title: PropTypes.string,
            subtitle: PropTypes.string,
            content: PropTypes.string,
            btnTitle: PropTypes.string,
            btnLink: PropTypes.string,
            icon: PropTypes.string,
        })
    )
}

export default memo(RotateBox)
