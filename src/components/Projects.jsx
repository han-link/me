import {Tilt as Tilt} from 'react-tilt';
import {motion} from "framer-motion";

import {SectionWrapper} from "../helper";
import {projects} from "../constants";
import {github} from "../assets"
import {fadeIn, textVariant} from "../utils/motion";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

const ProjectCard = ({
                         index,
                         name,
                         description, //{link.title[i18n.language]}
                         tags,
                         image,
                         source_code_link,
                     }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-secondary p-5 rounded-[5px] sm:w-[360px] w-full cursor-pointer min-h-[560px]'
            >
                <a href={source_code_link} target="_blank">
                    <div className='relative w-full h-[230px] flex justify-center items-center'>
                        <img src={github} alt="decorative" className={`w-1/2 h-1/2 object-contain ${image ? 'hidden' : 'block'}`}/>

                        <img
                            src={image}
                            alt='project image'
                            className={`${image ? 'block' : 'hidden'} w-full h-full object-cover rounded-[5px]}`}
                        />

                        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                            <div
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center'
                            >
                                <img src={github} alt="decorative" className={`w-1/2 h-1/2 object-contain ${image ? 'block' : 'hidden'}`}/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2 flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-white font-bold text-[24px]'>{name[i18n.language]}</h3>
                        <p className='mt-2 text-tertiary text-[14px]'>{description[i18n.language]}</p>
                    </div>
                    <p className="text-purple-500 underline mt-4">View more</p>
                </a>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    const {t} = useTranslation();
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">{t('projects.caption')}</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{t('projects.title')}</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-tertiary text-[17px] max-w-3xl leading-[30px]'
                >
                    {t('projects.text')}
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "work");