import {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailJs from "@emailjs/browser";

import {SectionWrapper} from "../helper";
import {slideIn} from "../utils/motion";
import {useTranslation} from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailJs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Hannes",
                    from_email: form.email,
                    to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL,
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] card-gradient p-8 rounded-[5px] max-w-3xl mx-auto shadow-lg'
        >
            <p className="sm:text-[18px] text-[14px] text-tertiary uppercase tracking-wider">{t('contact.caption')}</p>
            <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{t('contact.title')}</h3>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='mt-12 flex flex-col gap-8'
            >
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>{t('contact.form.name.text')}</span>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.name.placeholder')}
                        className='bg-secondary py-4 px-6 placeholder:text-gray-400 text-tertiary rounded-[5px] outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>{t('contact.form.email.text')}</span>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t('contact.form.email.placeholder')}
                        className='bg-secondary py-4 px-6 placeholder:text-gray-400 text-white rounded-[5px] outline-none border-none font-medium'
                    />
                </label>
                <label className='flex flex-col'>
                    <span className='text-white font-medium mb-4'>{t('contact.form.message.text')}</span>
                    <textarea
                        rows={7}
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.email.placeholder')}
                        className='bg-secondary py-4 px-6 placeholder:text-gray-400 text-white rounded-[5px] outline-none border-none font-medium'
                    />
                </label>

                <button
                    type='submit'
                    className='relative bg-signature py-3 px-8 rounded-[5px] outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                    <span className="absolute inset-0 animate-ping-slow border-2 rounded-[5px] border-signature opacity-75"></span>
                    {loading ? t('contact.form.submit.text-waiting') : t('contact.form.submit.text-send')}
                </button>


            </form>
        </motion.div>
    );
};

export default SectionWrapper(Contact, "contact");