import {SectionWrapper} from "../helper";
import {technologies} from "../constants";
import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion.js";

const Tech = () => {
    return (
        <motion.div className='grid grid-cols-2 md:flex flex-wrap justify-center gap-4'
                    variants={fadeIn("", "", 0.4, 1.5)}>
            {technologies.map((technology) => (
                <a href={technology.link || "/"} key={technology.name} className="flex justify-center">
                    <img className='h-28 p-6' width={technology.width} height={technology.height} src={technology.icon}
                         alt={technology.name}/>
                </a>
            ))}
        </motion.div>
    );
};

export default SectionWrapper(Tech, "");