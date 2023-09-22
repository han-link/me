import React from "react";
import { useTranslation } from "react-i18next";
import {languages} from "../constants.js";

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (e) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
    };

    return (
        <select defaultValue={"es"}>
            {languages.map(({ code, label }) => (
                <option key={code} value={code}>
                    {label}
                </option>
            ))}
        </select>
    );
};