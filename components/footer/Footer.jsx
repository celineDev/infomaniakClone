"use client"

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import Links from './data'

import Dropdown from '@/components/dropdown/Dropdown'

const Footer = () => {
    const t = useTranslations('lang')
    const [windowWidth, setWindowWidth] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [rotateState, setRotateState] = useState({})
    const [menuOpen, setIsMenuOpen] = useState({})
    const currentYear = new Date().getFullYear()

    // screen resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.addEventListener('resize', handleResize)
        }
    }, [])

    // form validation
    const checked = () => {
        setIsVisible((prev) => !prev)
    }

    const handleMenu = (id) => {
        setIsMenuOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
    }

    // rotate arrows
    const rotateArrows = (id) => {
        const updatedRotateState = { ...rotateState }

        if (updatedRotateState[id]) {
            delete updatedRotateState[id]
        } else {
            updatedRotateState[id] = true
        }

        setRotateState(updatedRotateState)
    }

    return (
        <footer className={styles.footer}>
            {windowWidth > 959 ? (
            <div className={styles.footer_container}>
                <div className={styles.footer_container_top}>
                    <div>
                        <figure className={styles.footer_logo}>
                            <Image src="/footer/footer_logo.png" width={38} height={38} alt="infomaniak logo" />
                        </figure>

                        <p>Les prix n'incluent pas la TVA</p>
                    </div>

                    <div className={styles.footer_social}>
                        <Link aria-label="Lien Facebook" href="#">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                            </figure>
                        </Link>
                        <Link aria-label="Lien X (anciennement Twitter)" href="#">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                            </figure>
                        </Link>
                        <Link aria-label="Lien Linkedin" href="#">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                            </figure>
                        </Link>
                        <Link aria-label="Lien Instagram" href="#">
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                            </figure>
                        </Link>
                    </div>
                </div>

                <div className={styles.footer_container_middle}>
                    <div className={styles.footer_categories}>
                        {Links.map(link => (
                            <div key={link.id}>
                                <h3>{link.title}</h3>
                                <ul>
                                    {link.elements.map((element, index) => (
                                        <li key={index}><Link href="#">{element}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className={styles.footer_form}>
                        <h3>Suivez notre évolution</h3>
                        <form>
                            <div>
                                <input aria-label="Votre email" type="text" placeholder='Entrez votre mail' />
                                <div className={styles.footer_button}>
                                    <button>Je m'abonne !</button>
                                </div>
                            </div>

                            <div onClick={checked} className={styles.footer_checkbox}>
                                <span></span>
                                <figure>
                                    <svg style={{visibility: isVisible ? 'inherit' : 'hidden'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </figure>
                                <input id="checkbox" aria-label="Checkbox" type="checkbox" />
                                <label htmlFor="checkbox">J'accepte de recevoir la newsletter mensuelle et les nouveaux articles de blog d'infomaniak. <Link href="#">Nous respectons vox données</Link> et vous pourrez vous désinscrire à tout moment.</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={styles.footer_container_bottom}>
                    <div  className={styles.footer_dropdown}>
                        <Dropdown currentLanguage={t('currentLanguage')} />
                    </div>

                    <div className={styles.footer_copyright}>
                        <p>&copy; {currentYear} Infomaniak</p>
                        <Link href="#">Documents légaux</Link>
                        <Link href="#">Mentions légales</Link>
                        <Link href="#">Protection des données</Link>
                        <Link href="#">Politique de confidentialité</Link>
                        <Link href="#">Plan de site</Link>
                    </div>

                    <div className={styles.footer_others}>
                        <figure>
                            <img src="/footer/footer_01.png" alt="icann" />
                        </figure>
                        <figure>
                            <img src="/footer/footer_02.png" alt="swiss" />
                        </figure>
                        <figure>
                            <img src="/footer/footer_03.png" alt="iso" />
                        </figure>
                        <figure>
                            <img src="/footer/footer_04.png" alt="swiss hosting" />
                        </figure>
                    </div>
                </div>
            </div>
            ) : (
            <div className={styles.footer_container}>
                <div className={styles.footer_logosContainer}>
                    <div className={styles.footer_logos}>
                        <figure className={styles.footer_logo}>
                            <Image src="/footer/footer_logo.png" width={38} height={38} alt="infomaniak logo" />
                        </figure>

                        <p>Les prix n'incluent pas la TVA</p>
                    </div>

                    <div className={styles.footer_categories}>
                        {Links.map(link => (
                            <div key={link.id}>
                                <div onClick={() => {handleMenu(link.id), rotateArrows(link.id)}}>
                                    <h3>{link.title}</h3>
                                    <figure>
                                        {!rotateState[link.id] ? (
                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                        ) : (
                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                        )}
                                    </figure>
                                </div>

                                <ul className={menuOpen[link.id] ? styles.link : ""}>
                                    {menuOpen[link.id] && link.elements.map((element, index) => ((
                                        <li key={index}><Link href="#">{element}</Link></li>
                                    )))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className={styles.footer_form}>
                        <h3>Suivez notre évolution</h3>
                        <form>
                            <div>
                                <input aria-label="Votre email" type="text" placeholder='Entrez votre mail' />

                                {windowWidth > 599 ? (
                                    <div className={styles.footer_button}>
                                        <button>Je m'abonne !</button>
                                    </div>
                                ) : (
                                    <div className={styles.footer_button}>
                                        <button aria-label="send button">
                                            <figure>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
                                            </figure>
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div onClick={checked} className={styles.footer_checkbox}>
                                <span></span>
                                <figure>
                                    <svg style={{visibility: isVisible ? 'inherit' : 'hidden'}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                                </figure>
                                <input aria-label="Checkbox" id="Checkbox" type="checkbox" />
                                <label htmlFor="Checkbox">J'accepte de recevoir la newsletter mensuelle et les nouveaux articles de blog d'infomaniak. <Link href="#">Nous respectons vox données</Link> et vous pourrez vous désinscrire à tout moment.</label>
                            </div>
                        </form>
                    </div>

                    <div className={styles.footer_others}>
                        <figure>
                            <img src="/footer/footer_01.png" alt="icann" />
                        </figure>
                        <figure>
                            <img src="/footer/footer_02.png" alt="swiss" />
                        </figure>
                        <figure>
                            <img src="/footer/footer_03.png" alt="iso" />
                        </figure>
                        <figure>
                            <img src="/footer/footer_04.png" alt="swiss hosting" />
                        </figure>
                    </div>
                </div>

                <div className={styles.footer_social}>
                    <Link aria-label="Lien Facebook" href="#">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                        </figure>
                    </Link>
                    <Link aria-label="Lien X (anciennement Twitter)" href="#">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg>
                        </figure>
                    </Link>
                    <Link aria-label="Lien Linkedin" href="#">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </figure>
                    </Link>
                    <Link aria-label="Lien Instagram" href="#">
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">{/* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </figure>
                    </Link>
                </div>

                <div className={styles.footer_copyright}>
                    <p>© {currentYear} Infomaniak</p>
                    <Link href="#">Documents légaux</Link>
                    <Link href="#">Mentions légales</Link>
                    <Link href="#">Protection des données</Link>
                    <Link href="#">Politique de confidentialité</Link>
                    <Link href="#">Plan de site</Link>
                </div>

                <div className={styles.footer_dropdown}>
                    <Dropdown currentLanguage={t('currentLanguage')} />
                </div>
            </div>
            )}
        </footer>
    )
}

export default Footer
