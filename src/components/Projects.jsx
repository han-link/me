import {Tilt as Tilt} from 'react-tilt';
import {motion} from "framer-motion";

import {github} from "../assets";
import {SectionWrapper} from "../helper";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ProjectCard = ({
                         index,
                         name,
                         description,
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
                className='bg-secondary p-5 rounded-[5px] sm:w-[360px] w-full cursor-pointer'
            >
                <a href={source_code_link} target="_blank">
                    <div className='relative w-full h-[230px] flex justify-center items-center'>
                        <img
                            src={github}
                            alt="github logo as default project image"
                            className={`${image ? 'hidden' : 'block'} `}
                        />
                        <img
                            src={image}
                            alt='project image'
                            className={`${image ? 'block' : 'hidden'} w-full h-full object-cover rounded-[5px]}`}
                        />

                        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                            <div
                                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center'
                            >
                                <img
                                    src={github}
                                    alt='source code'
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                        <p className='mt-2 text-tertiary text-[14px]'>{description}</p>
                    </div>

                    <div className='mt-4 flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`text-[14px] ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </a>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">My work</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-tertiary text-[17px] max-w-3xl leading-[30px]'
                >
                    Coming soon.
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