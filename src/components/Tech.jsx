import { SectionWrapper } from "../helper";
import { technologies } from "../constants";

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <a href={technology.link} key={technology.name}>
                    <img className='h-28 p-6' src={technology.icon} alt={technology.name}/>
                </a>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");