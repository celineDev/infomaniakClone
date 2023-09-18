"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import IntlLink from 'next-intl/link'
import styles from './page.module.css'

const Dropdown = ({ currentLanguage, currentLanguageFull }) => {

    const [isOpen, setIsOpen] = useState(false)

    const [windowWidth, setWindowWidth] = useState(0);

    const [language, setLanguage] = useState({
        fr: 'FR',
        en: 'EN',
        de: 'DE',
        it: 'IT',
        es: 'ES'
    })

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const updateLanguage = () => {
            if (window.innerWidth < 1253) {
                setLanguage({
                    fr: 'Français',
                    en: 'English',
                    de: 'Deutsch',
                    it: 'Italiano',
                    es: 'Español'
                })
            } else {
                setLanguage({
                    fr: 'FR',
                    en: 'EN',
                    de: 'DE',
                    it: 'IT',
                    es: 'ES'
                })
            }
        }

        updateLanguage();
        window.addEventListener('resize', updateLanguage);

        return () => {
            window.removeEventListener('resize', updateLanguage)
        };
    }, []);

    return (
        <div aria-label="Button" onClick={() => setIsOpen((prev) => !prev)} className={styles.container}>
            {windowWidth < 1253 ? (
                <p>{currentLanguageFull}</p>
            ) : (
                <p>{currentLanguage}</p>
            )}
            <figure>
                {windowWidth < 1253 ? (
                    !isOpen ? (
                        <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                    ) : (
                        <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                    )
                    ) : (
                        !isOpen ? (
                            <Image src="/caretdown.svg" width={15} height={15} alt="caret down" priority={true} />
                    ) : (
                            <Image src="/caretup.svg" width={15} height={15} alt="caret up" priority={true} />
                    )
                )}
            </figure>

            {isOpen && (
                <ul className={styles.dropdownList}>
                    <li><IntlLink href="/" locale="fr">{language.fr}</IntlLink></li>
                    <li><IntlLink href="/" locale="de">{language.de}</IntlLink></li>
                    <li><IntlLink href="/" locale="en">{language.en}</IntlLink></li>
                    <li><IntlLink href="/" locale="es">{language.es}</IntlLink></li>
                    <li><IntlLink href="/" locale="it">{language.it}</IntlLink></li>
                </ul>
            )}
        </div>
    )
}

export default Dropdown