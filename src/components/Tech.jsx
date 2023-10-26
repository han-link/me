import {SectionWrapper} from "../helper";
import {technologies} from "../constants";

const Tech = () => {
    return (
        <div className='grid grid-cols-2 md:flex flex-wrap justify-center gap-4'>
            {technologies.map((technology) => (
                <a href={technology.link || "/"} key={technology.name} className="flex justify-center">
                    <img className='h-28 p-6' width={technology.width} height={technology.height} src={technology.icon}
                         alt={technology.name}/>
                </a>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");