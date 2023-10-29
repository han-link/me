import React from "react";
import {useTranslation} from "react-i18next";
import {languages} from "../constants.js";

import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'

import {ChevronDownIcon} from "@heroicons/react/24/solid/index.js";

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
    };

    const getFlagIconForLanguage = (languageCode) => {
        const selectedLanguage = languages.find((lang) => lang.code === languageCode);
        return selectedLanguage ? selectedLanguage.flag : "";
    };

    const getCountryCodeForLanguage = (languageCode) => {
        const selectedLanguage = languages.find((lang) => lang.code === languageCode);
        return selectedLanguage ? selectedLanguage.code : "";
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="inline-flex w-full items-center gap-x-1.5 rounded-md px-3 py-2 text-sm bg-transparent font-semibold uppercase bg-white bg-opacity-5 hover:bg-white hover:bg-opacity-10">
                    <img src={getFlagIconForLanguage(i18n.language)} alt="Flag" className="w-4 h-4 mr-2"/>
                    {getCountryCodeForLanguage(i18n.language)}
                    <ChevronDownIcon className="ml-1 w-3 h-3 text-gray-400" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute right-0 z-50 mt-2 origin-top-right rounded-md bg-primary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {languages.map(({code, label}) => (
                            <Menu.Item key={code} className="text-white hover:text-gray-500">
                                <div className="">
                                    <option className="px-6 py-3 text-lg cursor-pointer flex items-center w-fit" value={code} onClick={handleLanguageChange}>
                                        {label}
                                    </option>
                                </div>
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};
