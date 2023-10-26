// noinspection HtmlUnknownAttribute

import React from 'react';
import { Tilt as Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import {services} from "../constants";
import {fadeIn, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../helper";
import {useTranslation} from "react-i18next";

const ServiceCard = ({index, title, icon}) => {
    return (
        <Tilt className='xs:w-[250px] w-full'>
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                className='w-full border-black-200 p-[1px] rounded-[5px] shadow-card'
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
                    className='card-gradient rounded-[5px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                >
                    <img
                        src={icon}
                        alt='web-development'
                        className='w-16 h-16 object-contain'
                    />

                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

const About = () => {
    const { t } = useTranslation();
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">{t('about.caption')}</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{t('about.title')}</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-red text-[17px] max-w-3xl leading-[30px]'
            >
                {t('about.text')}
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </>
    )
}

export default SectionWrapper(About, "about");