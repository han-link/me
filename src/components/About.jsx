import React, {useState} from 'react';
import {motion} from 'framer-motion';

import {services} from "../constants";
import {fadeIn, slideIn, textVariant} from "../utils/motion.js";
import {SectionWrapper} from "../helper";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

const ServiceCard = ({ title, icon, text}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div className="flip-card w-[600px] h-[280px] xs:w-[250px]" onClick={handleFlip}>
            <motion.div
                className='flip-card-inner h-full w-full border-black-200 p-[1px] rounded-[5px] shadow-card cursor-pointer'
                initial={false}
                animate={{rotateY: isFlipped ? 180 : 360}}
                transition={{duration: 0.6, animationDirection: "normal"}}
                onAnimationComplete={() => setIsAnimating(false)}>
                <div
                    className="flip-card-front card-gradient rounded-[5px] py-5 px-12 w-full h-full flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt='web-development'
                        className='w-16 h-16 object-contain'
                    />
                    <h3 className='text-white text-[20px] font-bold text-center'>
                        {title}
                    </h3>
                </div>
                <div className="flip-card-back card-gradient rounded-[5px] w-full h-full p-4">
                    <p>{text[i18n.language]}</p>
                </div>
            </motion.div>
        </div>
    )
}

const About = () => {
    const {t} = useTranslation();
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

            <motion.div className='mt-20 flex flex-wrap gap-10 justify-center'

                        variants={slideIn("down", "tween", 0.2, 1)}
            >
                {services.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </motion.div>

        </>
    )
}

export default SectionWrapper(About, "about");