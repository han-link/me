import { motion } from "framer-motion";
import {useTranslation} from "react-i18next";

export const Landing = () => {
    const { t } = useTranslation();
    return (
        <section className="relative w-full h-screen mx-auto">
            <div className="sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-signature"/>
                    <div className="w-1 sm:h-80 h-40 bg-signal-gradient" />
                </div>
                <div className="z-10">
                    <h1 className="font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
                        {t('landing.greeting.intro')}  <span className="text-signature">{t("landing.greeting.name")}</span>
                    </h1>
                    <p className="max-w-xl text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                        {t('landing.greeting.text')}
                    </p>
                </div>
            </div>
            <div className='absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-tertiary mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    )
}