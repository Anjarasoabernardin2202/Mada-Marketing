import React, { memo } from 'react'

//Libraries
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PropTypes } from "prop-types";
import { m } from "framer-motion";

// Components
import Buttons from '../Button/Buttons'
import Pagination from './HelperComponents/Pagination';

//Data
import { authorData, blogData } from './BlogData';

// Filter the blog data category wise
const blogStandardData = blogData.filter((item) => item.blogType === "standard");

const BlogStandard = (props) => {
    return (
        <>
            {
                props.data.map((item, i) => {
                    return (
                        <m.div className="visible overflow-hidden mb-[4.5rem] rounded-[6px] border-mediumgray border text-center p-0" key={i} {...{ ...props.animation, transition: { delay: (i * 0.36) * props.animationDelay } }}>
                            <div className='blog-image'>
                                {item.img && <Link aria-label=""><img height="" width="" src={item.img} alt="" /></Link>}
                            </div>
                            <div className="blog-text inline-block w-full">
                                <div className='w-[90%] p-[5.5rem] relative lg:p-16 xs:px-[20px] xs:py-[40px] mx-auto lg:w-full'>
                                    <div className='blog-details-overlap font-serif absolute left-1/2 top-0 pt-[6px] px-[20px] pb-[5px] whitespace-nowrap rounded-[4px] bg-fastblue font-medium text-white text-sm uppercase' style={{backgroundColor : "red"}}>
                                        {item.date && <span  className="text-white">{item.date}</span>}
                                        <span className="mx-[5px]">•</span>
                                       
                                    </div>
                                    {item.title && <h6 className="font-medium font-serif">
                                        <span aria-label="link" to={`${props.link}${[item.id]}`} className="text-darkgray">{item.title}</span>
                                    </h6>}
                                    {item.content && <p className='mb-[25px]'>{item.content}</p>}

                                </div>

                            </div>
                        </m.div>

                    )
                })
            }
            {props.pagination === true && (
                <div className="flex justify-center mt-[7.5rem] md:mt-20">
                    <Pagination />
                </div>
            )}
        </>
    )
}


BlogStandard.defaultProps = {
    data: blogStandardData,
    link: "/blog-types/blog-standard-post/"
};

BlogStandard.propTypes = {
    grid: PropTypes.string,
    animation: PropTypes.object,
    link: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            category: PropTypes.array,
            tags: PropTypes.array,
            blogType: PropTypes.string,
            img: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.string,
            author: PropTypes.number,
            likes: PropTypes.number,
            comments: PropTypes.number,
            date: PropTypes.string,
            double_col: PropTypes.bool
        })
    ),
};

export default memo(BlogStandard)