"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Switch from '@/components/switch/Switch'
import Search from '@/components/search/Search'
import Dropdown from '@/components/dropdown/Dropdown'
import styles from './page.module.css'

const Navbar = () => {
    const t = useTranslations('lang');
    const n = useTranslations('navigation');
    const l = useTranslations('log');

    const [isMenu, setIsMenu] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState({
        submenu1: false,
        submenu2: false,
        submenu3: false,
    })
    const [isSubSubmenuOpen, setIsSubSubmenuOpen] = useState(false);

    const handleMenu = () => {
        const header = document.querySelector(`.${styles.header}`)

        if (header.classList.contains('open')) {
            header.classList.remove('open')
        } else {
            header.classList.add('open')
        }
        setIsMenu(!isMenu)
    }

    const handleClick = (submenu) => {
        console.log('submenu', submenu)
        console.log('isSubmenuOpen', isSubmenuOpen)
        console.log('isSubmenuOpen.submenu1', isSubmenuOpen.submenu1)
        console.log('isSubmenuOpen.submenu2', isSubmenuOpen.submenu2)
        console.log('isSubmenuOpen.submenu3', isSubmenuOpen.submenu3)
        setIsSubmenuOpen((prevState) => ({
            submenu1: submenu === "submenu1" ? !prevState.submenu1 : false,
            submenu2: submenu === "submenu2" ? !prevState.submenu2 : false,
            submenu3: submenu === "submenu3" ? !prevState.submenu3 : false,
        }))
    }

    const handleSubSubmenuClick = (event, stopPropagation, subsubmenu) => {
        // Arrêter la propagation de l'événement au niveau du subsubmenu
        if (stopPropagation) {
            event.stopPropagation()
        }
        setIsSubSubmenuOpen((prevState) => ({
            subsubmenu1: subsubmenu === "subsubmenu1" ? !prevState.subsubmenu1 : false,
            subsubmenu2: subsubmenu === "subsubmenu2" ? !prevState.subsubmenu2 : false,
            subsubmenu3: subsubmenu === "subsubmenu3" ? !prevState.subsubmenu3 : false,
            subsubmenu4: subsubmenu === "subsubmenu4" ? !prevState.subsubmenu4 : false,
            subsubmenu5: subsubmenu === "subsubmenu5" ? !prevState.subsubmenu5 : false,
            subsubmenu6: subsubmenu === "subsubmenu6" ? !prevState.subsubmenu6 : false,
            subsubmenu7: subsubmenu === "subsubmenu7" ? !prevState.subsubmenu7 : false,
            subsubmenu8: subsubmenu === "subsubmenu8" ? !prevState.subsubmenu8 : false,
            subsubmenu9: subsubmenu === "subsubmenu9" ? !prevState.subsubmenu9 : false,
        }))
    }

    return (
        <header className={`${styles.header} ${isMenu ? 'open' : ''}`}>
            <nav className={styles.container}>
                <div className={styles.nav}>

                    <button aria-roledescription="Bouton pour ouvrir le menu et accéder au lien" onClick={handleMenu} className={styles.burgerBtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <p className={styles.logo}><Link href="/">infomaniak</Link></p>
                    <ul className={styles.menu}>
                        <li className={`${styles.linkMenu} ${styles.hide_for_mobile}`}><Link href="#">{n("products")}</Link>
                            <ul className={styles.collapseMenu}>
                                <li>Nos Best Sellers
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <p>Nos produits phares du moment</p>
                                                <div className={styles.threeColumns}>
                                                    <div>
                                                        <h4>
                                                            <figure>
                                                                <Image className={styles.logoKsuite} src="/kSuite.png" alt="ksuite logo" width={24} height={24} priority={true} />
                                                            </figure>
                                                            kSuite
                                                        </h4>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>
                                                                kDrive
                                                                </h5>
                                                                <p>Stockez, collaborez et partagez vos fichiers</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgMail} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg>
                                                                    kMail
                                                                </h5>
                                                                <p>Créez vos adresses mails avec votre domaine</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgChat} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                                                    kChat <span className={styles.info}>Beta</span></h5>
                                                                <p>Communiquer en direct avec votre équipe</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>
                                                            Grand Public
                                                        </h4>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgEarth} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                                                    Nom de domaine</h5>
                                                                <p>Réserver votre nom de domaine au meilleur prix</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                    Hébergement Web</h5>
                                                                <p>Créez vos sites internet (WordPress + 100 CMS)</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgWordPress} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                    Hébergement <br /> WordPress</h5>
                                                                <p>Créer facilement votre site avec WordPress</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgCreator} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                    Site Creator</h5>
                                                                <p>Construisez votre Site <br /> Web pas à pas</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4>Cloud Computing</h4>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                    VPS Cloud</h5>
                                                                <p>Créez un serveur <br /> Windows ou Linux</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgPCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                    Public Cloud (laaS)</h5>
                                                                <p>Infrastructure Cloud <br /> Haute Performance</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgJCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>
                                                                    Jelastic Cloud <br /> (PaaS)</h5>
                                                                <p>Vos environnements de développement sur <br /> mesure</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgBackup} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                    Swiss Backup</h5>
                                                                <p>Sauvegarder tous vos appareils en Suisse</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Transférer un domaine →</Link></p>
                                                        <p><Link href="#">Comparer nos solutions cloud et d'hébergement →</Link></p>
                                                        <p><Link href="#">Migrer des adresses mail →</Link></p>
                                                        <p><Link href="#">Renewal Warranty →</Link></p>
                                                        <p><Link href="#">Payer une facture →</Link></p>
                                                        <p><Link href="#">Guides et questions <br /> fréquentes →</Link></p>
                                                    </div>
                                                </div>
                                                <div className={styles.read}>
                                                    <h6>Etude de cas</h6>
                                                    <div className={styles.pictureInfomaniak}></div>
                                                    <p>Infomaniak, le Cloud Ethique</p>
                                                    <Link href="#">Lire l'article →</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Je souhaite
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={`${styles.leftMenu} ${styles.bigMenu}`}>
                                            <div>
                                                <p>Que souhaitez-vous faire ?</p>
                                                <div className={`${styles.threeColumns} ${styles.threeColumnsMargin}`}>
                                                    <div>
                                                        <div>
                                                            <h4>Créer un site Internet</h4>
                                                            <div className={styles.services}>
                                                                <Link href="#"><p>Découvrir nos solutions cloud et d'hébergement</p></Link>
                                                                <Link href="#"><p><span className={styles.info2}>Nouveau</span>Créer un site avec le générateur de site Infomaniak</p></Link>
                                                                <Link href="#"><p>Créer un site avec WordPress</p></Link>
                                                                <Link href="#"><p>Créer un site avec CMS</p></Link>
                                                                <Link href="#"><p>Rechercher un agence web pour créer mon site</p></Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4>Gérer mon nom de domaine</h4>
                                                            <div className={styles.services}>
                                                                <Link href="#"><p>Transférer un domaine</p></Link>
                                                                <Link href="#"><p>Enregistrer/transférer plusieurs domaines</p></Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div>
                                                            <h4>
                                                                <figure>
                                                                    <Image className={styles.logoKsuite} src="/kSuite.png" alt="kSuite logo" width={24} height={24} priority={true} />
                                                                </figure>
                                                                Collaborer en ligne
                                                            </h4>
                                                            <div className={styles.services}>
                                                                <Link href="#"><p>Créer une adresse mail</p></Link>
                                                                <Link href="#"><p>Stocker des fichier en ligne avec kDrive</p></Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4>Stocker mes données</h4>
                                                            <div className={styles.services}>
                                                                <Link href="#"><p>kDrive</p></Link>
                                                                <Link href="#"><p>Swiss Backup</p></Link>
                                                                <Link href="#"><p>Nas Synology</p></Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4>Gérer mon organisation</h4>
                                                        <div className={styles.services}>
                                                            <Link href="#"><p>Payer une facture</p></Link>
                                                            <Link href="#"><p>Renouveler un produit</p></Link>
                                                            <Link href="#"><p>Obtenir Renewal Warranty</p></Link>
                                                            <Link href="#"><p>Devenir partenaire</p></Link>
                                                            <Link href="#"><p>Devenir affilié</p></Link>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </li>
                                <li>Nom de domaine
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <p>Tous ce dont vous avez besoin pour vous assurer votre présence sur internet</p>
                                                <div className={styles.threeColumns}>
                                                    <div>

                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgEarth} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                                                    Nom de domaine</h5>
                                                                <p>Réserver votre nom de domaine au meilleur prix</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgRenewal} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>
                                                                    Renewal Warranty
                                                                </h5>
                                                                <p>Sécurisez vos domaines contre la perte et le vol</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgPrivacy} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>
                                                                    Domaine privacy</h5>
                                                                <p>Protégez les données privées de vos domaines</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <div className={styles.svgDNS}></div>
                                                                    DNS FastAnycast</h5>
                                                                <p>Boostez le temps d'accès <br /> de vos sites</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div>

                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                <svg className={styles.svgSSL} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                                                                Certificats SSL</h5>
                                                                <p>Sécurisez vos sites avec <br /> un certificat EV ou DV</p>
                                                            </Link>
                                                        </div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                <div className={styles.svgDynDns}></div>
                                                                DynDNS</h5>
                                                                <p>Accédez facilement à vos appareils à distance</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Transférer un domaine →</Link></p>
                                                        <p><Link href="#">Lancer une recherche Whols →</Link></p>
                                                        <p><Link href="#">Comparer les prix des <br /> domaines →</Link></p>
                                                        <p><Link href="#">Nos conseils →</Link></p>
                                                        <p><Link href="#">Renouveler un nom de <br /> domaine →</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Hébergement et Cloud
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <div className={styles.twoFloors}>
                                                    <div>
                                                        <h3><svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>Web & Cloud Computing</h3>
                                                        <p>Découvrez toutes nos solutions d'hébergement et de cloud <br /> computing pour le grand public et les professionnels</p>
                                                        <Link href="/" className={styles.blueButton}>Trouver la solution adaptée à mon besoin</Link>
                                                    </div>

                                                    <div className={`${styles.threeColumns} ${styles.columsContainer}`}>
                                                        <div>
                                                            <h3>
                                                                Web
                                                            </h3>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Hébergement <br /> Web</h5>
                                                                    <p>Créez vos sites internet (WordPress + 100 CMS)</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgWordPress} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Hébergement <br /> WordPress</h5>
                                                                    <p>Créer facilement votre <br /> site avec WordPress</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgCreator} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Site Creator</h5>
                                                                    <p>Construisez votre Site <br /> Web pas à pas</p>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgServeur} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Serveur Cloud managé</h5>
                                                                    <p>Créez vos sites avec <br /> des ressources 100% <br /> dédiées</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgInfrastructure} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Infrastructure Cloud</h5>
                                                                    <p>Infrastructure Cloud <br /> avec contrat SLA sur <br /> mesure</p>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <h3>
                                                                Cloud
                                                            </h3>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        VPS Cloud</h5>
                                                                    <p>Créez un serveur <br /> Windows ou Linux</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgJCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>
                                                                        Jelastic Cloud <br /> (PaaS)</h5>
                                                                    <p>Vos environnements de développement sur <br /> mesure</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgPCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Public Cloud <br /> (laaS)</h5>
                                                                    <p>Infrastructure Cloud <br /> Haute Performance</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Offre tout en un Web + Mail →</Link></p>
                                                        <p><Link href="#">Migrer des adresses mail →</Link></p>
                                                        <p><Link href="#">Renewal Warranty →</Link></p>
                                                        <p><Link href="#">Guides et ressources →</Link></p>
                                                        <p><Link href="#">Renouveler un hébergement →</Link></p>
                                                    </div>
                                                </div>
                                                <div className={styles.read}>
                                                    <h6>Etude de cas</h6>
                                                    <div className={styles.pictureInfomaniak}></div>
                                                    <p>Etudes de cas : Axium IT crée une nouvelle offre laaS pour migrer des clients dans le Public Cloud d'infomaniak</p>
                                                    <Link href="#">Lire l'article →</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <figure>
                                        <Image className={styles.logoKsuiteWhite} src="/kSuite.png" alt="kSuite logo" width={18} height={18} priority={true} />
                                    </figure>
                                    kSuite
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <div className={styles.twoFloors}>
                                                    <div>
                                                        <h3>
                                                            <figure>
                                                                <Image className={styles.logoKsuite} src="/kSuite.png" alt="kSuite logo" width={26} height={26} priority={true} />
                                                            </figure>
                                                            kSuite, la solution collaborative éthique
                                                        </h3>
                                                        <p>Retrouvez toutes les applications dont vous avez besoin <br /> pour collaborer en ligne.</p>
                                                        <Link href="/" className={styles.pinkButton}>Découvrez kSuite →</Link>
                                                    </div>

                                                    <div className={`${styles.threeColumns} ${styles.columsContainer}`}>
                                                        <div>
                                                            <h3>
                                                                Inclus avec kSuite
                                                            </h3>
                                                            <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>
                                                                    kDrive
                                                                    </h5>
                                                                    <p>Stockez, collaborez et partagez vos fichiers</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <div className={styles.yellowSquare}></div>
                                                                        kPaste</h5>
                                                                    <p>Partagez et chiffrez vos <br /> information sensibles</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                    <div className={styles.blueSquare}></div>
                                                                        Custom Brand</h5>
                                                                    <p>Maitrisez l'image de <br /> marque de vos produits</p>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgMail} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg>
                                                                        kMail
                                                                    </h5>
                                                                    <p>La boîte mail  qui <br />respecte votre vie <br />privée</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                    <div className={styles.greenSquare}></div>
                                                                        Swiss Transfer</h5>
                                                                    <p>Partager des fichiers en toute sécurité</p>
                                                                </Link>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div  className={`${styles.vignette} ${styles.vignetteKChat}`}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgChat} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                                                        kChat<span className={styles.info}>Beta</span></h5>
                                                                    <p>Communiquer en direct avec votre équipe</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                    <svg className={styles.svgMeet} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                                                        kMeet</h5>
                                                                    <p>Organisez vos réunions <br />en ligne en toute <br />sécurité</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Migrer des adresses mail →</Link></p>
                                                        <p><Link href="#">Renewal Warranty →</Link></p>
                                                        <p><Link href="#">Guides et questions <br /> fréquentes →</Link></p>
                                                        <p><Link href="#">Renouveler →</Link></p>
                                                    </div>
                                                </div>
                                                <div className={styles.read}>
                                                    <h6>Etude de cas</h6>
                                                    <div className={styles.pictureInfomaniak}></div>
                                                    <p>Un Webmail 100% indépendant : Infomaniak propose une alternative auw GAFAM qui fait figure d'exception</p>
                                                    <Link href="#">Lire l'article →</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Sauvergarde & Stockage
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <p>Sauvegardez, partagez et travaillez en ligne en toute sécurité.</p>
                                                <div className={styles.threeColumns}>
                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                                <svg className={styles.svgBackup} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                Swiss Backup</h5>
                                                            <p>Sauvegardez tous vos appareils en Suisse</p>
                                                        </Link>
                                                    </div>

                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                                <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>
                                                            kDrive
                                                            </h5>
                                                            <p>Stockez, collaborez et partagez vos fichiers</p>
                                                        </Link>
                                                    </div>

                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                            <svg className={styles.svgNas} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"/></svg>
                                                            NAS Synology</h5>
                                                            <p>Louez un NAS en Suisse <br />avec une IP fixe</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Renewal Warranty →</Link></p>
                                                        <p><Link href="#">Guides et questions <br /> fréquentes →</Link></p>
                                                        <p><Link href="#">Renouveler →</Link></p>
                                                        <p><Link href="#">Pourquoi stocker ses données <br />chez Infomaniak ? →</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Marketing
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <p>Gardez le contact et communiquez facilement avec votre audience</p>
                                                <div className={styles.longVignette}>
                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                                <svg className={styles.svgNewsletter} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                                                                Newsletter</h5>
                                                            <p>Envoyez vos newsletters à des <br />tarifs avantageux</p>
                                                        </Link>
                                                    </div>

                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                            <svg className={styles.svgGuests} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"/></svg>
                                                            Gestionnaire d'invitées
                                                            </h5>
                                                            <p>Gérez facilement les invitations <br />de vos events</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Guides et questions <br /> fréquentes →</Link></p>
                                                        <p><Link href="#">Acheter des crédits →</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Billeterie
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <div>
                                                    <p>Organisez vos évènements avec une billeterie approuvée</p>
                                                    <div className={styles.threeColumns}>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                                                                    Ticketing</h5>
                                                                <p>Créez votre billeterie et<br />vendez des billets</p>
                                                            </Link>
                                                        </div>

                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                                                                Contrôle d'accès
                                                                </h5>
                                                                <p>Contrôlez facilement<br />l'accès à vos évènemenents</p>
                                                            </Link>
                                                        </div>

                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                    <svg className={styles.svgEvents} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                                                                Portail <br />d'évènements</h5>
                                                                <p>Faites la promotion et<br />achetez vos billets</p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={styles.cultureContainer}>
                                                    <p>Faites la promotion et vendez vos billets</p>
                                                    <div className={styles.culture}>
                                                        <div className={styles.pictureInfomaniak}></div>
                                                        <div>
                                                            <Link href="#">Festival</Link>
                                                            <Link href="#">Concert</Link>
                                                            <Link href="#">Théâtre</Link>
                                                            <Link href="#">Sport</Link>
                                                        </div>
                                                        <div>
                                                            <Link href="#">Expo - Musée</Link>
                                                            <Link href="#">Humour</Link>
                                                            <Link href="#">Famille</Link>
                                                            <Link href="#">Loisirs</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Tarifs et questions <br /> fréquentes →</Link></p>
                                                        <p><Link href="#">Matériel de vente, d'impression <br />et de contrôle →</Link></p>
                                                        <p><Link href="#">Se connecter à ma billeterie →</Link></p>
                                                    </div>
                                                </div>
                                                <div className={styles.read}>
                                                    <h6>Etude de cas</h6>
                                                    <div className={styles.pictureInfomaniak}></div>
                                                    <p>Evènements en streaming : le <br />théâtre Confiture devient un <br /> laboratoire d'innovation pour <br />Infomaniak Tickets</p>
                                                    <Link href="#">Lire l'article →</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>Multimédia
                                    <div className={styles.menuContainer}>
                                        <Search />

                                        <div className={styles.leftMenu}>
                                            <div>
                                                <p>Diffusez vos émissions et vidéos à grande échelle</p>
                                                <div className={styles.longVignette}>
                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                            <svg className={styles.svgRadio} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z"/></svg>
                                                                Streaming radio</h5>
                                                            <p>Créez votre radio en ligne et <br />monétisez vos directs</p>
                                                        </Link>
                                                    </div>

                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                            <svg className={styles.svgTV} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                                                            Streaming vidéo
                                                            </h5>
                                                            <p>Créez votre TV en ligne et <br />monétisez vos diffusions</p>
                                                        </Link>
                                                    </div>

                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                            <svg className={styles.svgVOD} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                                            Service VOD & AOD
                                                            </h5>
                                                            <p>Hébergez et monétisez vos<br />vidéos et podcasts</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.sideMenu}>
                                                <div>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Guides et questions <br /> fréquentes →</Link></p>
                                                        <p><Link href="#">Renouveler →</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className={`${styles.linkMenu} ${styles.hide_for_mobile}`}><Link href="#">{n("aboutus")}
                        </Link>
                            <ul className={styles.aboutCollapseMenu}>
                                <li>Vision et valeurs
                                    <p>Notre vision, nos engagements</p>
                                    <div className={styles.aboutContainer}>
                                        <blockquote>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                                            Choisir Infomaniak, c'est être engagé dans l'économie de demain. Vie privée, local et durable sont les valeurs d'Infomaniak depuis 29 ans.
                                            <br />
                                            <cite>Boris Siegenthaler, Co-fondateur et CSO</cite>
                                        </blockquote>
                                    </div>
                                </li>
                                <li>L'équipe
                                    <p>Infomaniak, c'est avant tout une aventure humaine</p>
                                    <div className={styles.aboutContainer}>
                                        <figure>
                                            <Image src="/team.jpg" alt="zelda" width={824} height={660} priority={true} />
                                        </figure>

                                    </div>
                                </li>
                                <li>Infomaniak Ecologie
                                    <p>Notre engagement écologique</p>
                                    <div className={styles.aboutContainer}>
                                        <figure>
                                            <Image src="/darkForest.jpg" alt="forest" width={824} height={660} priority={true} />
                                            <figcaption>
                                                <blockquote>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                                                    Nous ne pouvons pas sauver le monde en respectant les règles actuelles, car les règles ont besoin d'être changées. Tout dois changer et cela doit démarrer aujourd'hui
                                                    <br />
                                                    <cite>Alexandre Patti, Compliance Officer (CO)</cite>
                                                </blockquote>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>Infomaniak recrute
                                    <p>Envie de contribuer à un Web plus éthique ?</p>
                                    <div className={styles.aboutContainer}>
                                        <figure>
                                            <Image src="/living.jpg" alt="living room" width={824} height={660} priority={true} />
                                            <figcaption>
                                                <blockquote>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                                                    Ne venez pas travaillez ici... Vous n'allez plus pouvoir repartir !
                                                    <br />
                                                    <cite>Thibaut, Front-end developer</cite>
                                                </blockquote>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>Presse et communications
                                    <p>Logos , communiqués de presse et RP (Relations <br /> Presse)</p>
                                    <div className={styles.aboutContainer}>
                                        <blockquote>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                                            Infomaniak est une entreprise indépendante et engagée pour l'écologie, une économie durable et un internet respectueux de la vie privée.
                                        </blockquote>
                                    </div>
                                </li>
                                <li>Blog & actualités
                                    <p>Suivez et partagez notre actualité</p>
                                    <div className={styles.aboutContainer}>
                                        <figure>
                                            <Image src="/stormtrooper.jpg" alt="stormtrooper" width={824} height={660} priority={true} />
                                            <figcaption>
                                                <blockquote>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                                                    Le meilleur endroit pour suivre l'évolution de nos services et notre vision du numérique.
                                                </blockquote>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>Devenir partenaire
                                    <p>Rechercher ou devenez partenaire Infomaniak</p>
                                    <div className={styles.aboutContainer}>
                                        <figure>
                                            <Image src="/reunion.jpg" alt="reunion" width={824} height={660} priority={true} />
                                            <figcaption>
                                                <Link href="#">
                                                    <h6>Programme partenaire</h6>
                                                    <p>Bénéficiez de notre savoir-faire et élargissez votre clientèle</p>
                                                    <p>Devenir partenaire →</p>
                                                </Link>
                                                <Link href="#">
                                                    <h6>Les partenaires Infomaniak</h6>
                                                    <p>Rechercher parmi plus de 1000 partenaires</p>
                                                    <p>Voir les partenaires →</p>
                                                </Link>
                                                <Link href="#">
                                                    <h6>Appel d'offres</h6>
                                                    <p>Faites appel à nos partenaires pour vous aider dans votre projet</p>
                                                    <p>Créer un appel d'offre →</p>
                                                </Link>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className={`${styles.linkMenu} ${styles.hide_for_mobile}`}><Link href="#">{n("support")}</Link>
                            <ul className={styles.supportCollapseMenu}>
                                <li>Questions fréquentes
                                    <p>1000 FAQ, 500 tutoriels et vidéos explicatives</p>
                                </li>
                                <li>Contact commercial
                                    <p>Pour les entreprises, ONG et administratives publiques</p>
                                </li>
                                <li>Documentation pour les développeurs
                                    <p>Intégrez nos services et créez vos apps avec notre API.</p>
                                </li>
                                <li>A propos du support
                                    <p>Proche de nos clients et à l'écoute</p>
                                </li>
                                <li>Offre Support Premium
                                    <p>un support dédié à vos besoins</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className={`${styles.muiBox} ${styles.hide_for_mobile}`}>
                    <Dropdown currentLanguage={t('currentLanguage')} currentLanguageFull={t('currentLanguageFull')} />

                    {/* HT/TTC files */}
                    <Switch />
                    <figure className={styles.imgContainer}>
                        <Image src="/menu.png" width={20} height={20} alt="menu panel" priority={true} />
                    </figure>
                    <div className={styles.auth}>
                        <Link href="#">{l("signup")}</Link>
                        <Link href="#">{l("loggin")}</Link>
                    </div>
                </div>
            </nav>

            {isMenu && (
                <div>
                    <div className={`${styles.toggleContainer} ${styles.hide_for_desktop}`}>
                        <Search />

                        <ul className={styles.toggle}>
                            <li onClick={() => handleClick('submenu1')} className={styles.linkMenuMobile}>
                                <div>
                                    <Link href="#">{n("products")}
                                    </Link>
                                    {!isSubmenuOpen.submenu1 ? (
                                        <figure>
                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                        </figure>
                                        ) : (
                                        <figure>
                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                        </figure>
                                    )}
                                </div>
                                {isSubmenuOpen.submenu1 && (
                                    <ul className={`${styles.submenu} ${styles.firstSubmenu}`}>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu1')}>Nos Best Sellers
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu1 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu1 && (
                                                <div className={styles.subContainer}>
                                                    <div className={styles.subColumns}>
                                                        <div>
                                                            <h4>
                                                                <figure>
                                                                    <Image className={styles.logoKsuite} src="/kSuite.png" alt="ksuite logo" width={24} height={24} priority={true} />
                                                                </figure>
                                                                kSuite
                                                            </h4>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>
                                                                    kDrive
                                                                    </h5>
                                                                    <p>Stockez, collaborez et partagez vos fichiers</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgMail} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg>
                                                                        kMail
                                                                    </h5>
                                                                    <p>Créez vos adresses mails avec votre domaine</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgChat} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                                                        kChat <span className={styles.info}>Beta</span></h5>
                                                                    <p>Communiquer en direct avec votre équipe</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4>
                                                                Grand Public
                                                            </h4>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgEarth} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                                                        Nom de domaine</h5>
                                                                    <p>Réserver votre nom de domaine au meilleur prix</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Hébergement Web</h5>
                                                                    <p>Créez vos sites internet (WordPress + 100 CMS)</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgWordPress} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Hébergement <br /> WordPress</h5>
                                                                    <p>Créer facilement votre site avec WordPress</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgCreator} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Site Creator</h5>
                                                                    <p>Construisez votre Site <br /> Web pas à pas</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <h4>Cloud Computing</h4>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        VPS Cloud</h5>
                                                                    <p>Créez un serveur <br /> Windows ou Linux</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgPCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Public Cloud (laaS)</h5>
                                                                    <p>Infrastructure Cloud <br /> Haute Performance</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgJCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>
                                                                        Jelastic Cloud <br /> (PaaS)</h5>
                                                                    <p>Vos environnements de développement sur <br /> mesure</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgBackup} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Swiss Backup</h5>
                                                                    <p>Sauvegarder tous vos appareils en Suisse</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.actionsContainer}>
                                                        <h6>Actions rapides</h6>
                                                        <div className={styles.actions}>
                                                            <p><Link href="#">Transférer un domaine →</Link></p>
                                                            <p><Link href="#">Comparer nos solutions cloud et d'hébergement →</Link></p>
                                                            <p><Link href="#">Migrer des adresses mail →</Link></p>
                                                            <p><Link href="#">Renewal Warranty →</Link></p>
                                                            <p><Link href="#">Payer une facture →</Link></p>
                                                            <p><Link href="#">Guides et questions fréquentes →</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu2')}>Je souhaite
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu2 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu2 && (
                                                <div className={styles.subContainer}>
                                                    <div>
                                                        <div className={styles.subColumns}>
                                                            <div>
                                                                <div>
                                                                    <h4>Créer un site Internet</h4>
                                                                    <div className={styles.services}>
                                                                        <Link href="#"><p>Découvrir nos solutions cloud et d'hébergement</p></Link>
                                                                        <Link href="#"><p><span className={styles.info2}>Nouveau</span>Créer un site avec le générateur de site Infomaniak</p></Link>
                                                                        <Link href="#"><p>Créer un site avec WordPress</p></Link>
                                                                        <Link href="#"><p>Créer un site avec CMS</p></Link>
                                                                        <Link href="#"><p>Rechercher un agence web pour créer mon site</p></Link>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h4>Gérer mon nom de domaine</h4>
                                                                    <div className={styles.services}>
                                                                        <Link href="#"><p>Transférer un domaine</p></Link>
                                                                        <Link href="#"><p>Enregistrer/transférer plusieurs domaines</p></Link>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={styles.borderLeft}>
                                                                <div>
                                                                    <h4>
                                                                        <figure className={styles.image}>
                                                                            <Image className={styles.logoKsuite} src="/kSuite.png" alt="kSuite logo" width={14} height={14} priority={true} />
                                                                        </figure>
                                                                        Collaborer en ligne
                                                                    </h4>
                                                                    <div className={styles.services}>
                                                                        <Link href="#"><p>Créer une adresse mail</p></Link>
                                                                        <Link href="#"><p>Stocker des fichier en ligne avec kDrive</p></Link>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h4>Stocker mes données</h4>
                                                                    <div className={styles.services}>
                                                                        <Link href="#"><p>kDrive</p></Link>
                                                                        <Link href="#"><p>Swiss Backup</p></Link>
                                                                        <Link href="#"><p>Nas Synology</p></Link>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className={styles.borderLeft}>
                                                                <h4>Gérer mon organisation</h4>
                                                                <div className={styles.services}>
                                                                    <Link href="#"><p>Payer une facture</p></Link>
                                                                    <Link href="#"><p>Renouveler un produit</p></Link>
                                                                    <Link href="#"><p>Obtenir Renewal Warranty</p></Link>
                                                                    <Link href="#"><p>Devenir partenaire</p></Link>
                                                                    <Link href="#"><p>Devenir affilié</p></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu3')}>Nom de domaine
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu3 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu3 && (
                                                <div className={styles.subContainer}>
                                                    <div className={styles.subColumns}>
                                                        <div>

                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgEarth} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                                                        Nom de domaine</h5>
                                                                    <p>Réserver votre nom de domaine au meilleur prix</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgRenewal} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>
                                                                        Renewal Warranty
                                                                    </h5>
                                                                    <p>Sécurisez vos domaines contre la perte et le vol</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgPrivacy} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>
                                                                        Domaine privacy</h5>
                                                                    <p>Protégez les données privées de vos domaines</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <div className={styles.svgDNS}></div>
                                                                        DNS FastAnycast</h5>
                                                                    <p>Boostez le temps d'accès <br /> de vos sites</p>
                                                                </Link>
                                                            </div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                    <div className={styles.svgDynDns}></div>
                                                                    DynDNS</h5>
                                                                    <p>Accédez facilement à vos appareils à distance</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                    <svg className={styles.svgSSL} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                                                                    Certificats SSL</h5>
                                                                    <p>Sécurisez vos sites avec <br /> un certificat EV ou DV</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.actionsContainer}>
                                                        <h6>Actions rapides</h6>
                                                        <div className={styles.actions}>
                                                            <p><Link href="#">Transférer un domaine →</Link></p>
                                                            <p><Link href="#">Lancer une recherche Whols →</Link></p>
                                                            <p><Link href="#">Comparer les prix des domaines →</Link></p>
                                                            <p><Link href="#">Nos conseils →</Link></p>
                                                            <p><Link href="#">Renouveler un nom de domaine →</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu4')}>Hébergement et Cloud
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu4 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu4 && (
                                                <div className={styles.subContainer}>
                                                    <div>
                                                        <div className={styles.subTitles}>
                                                            <div>
                                                                <h3><svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>Web & Cloud Computing</h3>
                                                                <p>Découvrez toutes nos solutions d'hébergement et de cloud computing pour le grand public et les professionnels</p>
                                                                <Link href="/" className={styles.blueButton}>Trouver la solution adaptée à mon besoin　→</Link>
                                                            </div>

                                                            <div className={styles.subColumns}>
                                                                <div>
                                                                    <h3>
                                                                        Web
                                                                    </h3>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                                Hébergement Web</h5>
                                                                            <p>Créez vos sites internet (WordPress + 100 CMS)</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgWordPress} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                                Hébergement <br /> WordPress</h5>
                                                                            <p>Créer facilement votre site <br /> avec WordPress</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgCreator} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                                Site Creator</h5>
                                                                            <p>Construisez votre Site Web <br /> pas à pas</p>
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                                <div className={styles.subColumnsK}>
                                                                    <h3></h3>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgServeur} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                                Serveur Cloud <br /> managé</h5>
                                                                            <p>Créez vos sites avec des<br />ressources 100% dédiées</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgInfrastructure} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                                Très Haute <br />Disponibilité</h5>
                                                                            <p>Infrastructure Cloud avec <br /> contrat SLA sur mesure</p>
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <h3>
                                                                        Cloud
                                                                    </h3>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                                VPS Cloud</h5>
                                                                            <p>Créez un serveur Windows ou <br /> Linux</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgPCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                                Public Cloud (laaS)</h5>
                                                                            <p>Infrastructure Cloud Haute <br /> Performance</p>
                                                                        </Link>
                                                                    </div>
                                                                    <div className={styles.vignette}>
                                                                        <Link href="#">
                                                                            <h5>
                                                                                <svg className={styles.svgJCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>
                                                                                Jelastic Cloud (PaaS)</h5>
                                                                            <p>Vos environnements de <br /> développement sur mesure</p>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.actionsContainer}>
                                                        <h6>Actions rapides</h6>
                                                        <div className={styles.actions}>
                                                            <p><Link href="#">Offre tout en un Web + Mail →</Link></p>
                                                            <p><Link href="#">Migrer des adresses mail →</Link></p>
                                                            <p><Link href="#">Renewal Warranty →</Link></p>
                                                            <p><Link href="#">Guides et ressources →</Link></p>
                                                            <p><Link href="#">Renouveler un hébergement →</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu5')}>
                                                <div className={styles.kstyleFlex}>
                                                    <figure>
                                                    <Image className={styles.logoKsuiteWhite} src="/kSuite.png" alt="kSuite logo" width={18} height={18} priority={true} />
                                                    </figure>
                                                    kSuite
                                                </div>
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu5 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu5 && (
                                                <div className={styles.subContainer}>
                                                    <div className={styles.subTitles}>
                                                        <div>
                                                            <h3>
                                                                <figure>
                                                                    <Image className={styles.logoKsuite} src="/kSuite.png" alt="kSuite logo" width={26} height={26} priority={true} />
                                                                </figure>
                                                                kSuite, la solution collaborative éthique
                                                            </h3>
                                                            <p>Retrouvez toutes les applications dont vous avez besoin pour collaborer en ligne.</p>
                                                            <Link href="/" className={styles.pinkButton}>Découvrez kSuite →</Link>
                                                        </div>

                                                        <div className={styles.subColumns}>
                                                            <div className={styles.subColumnsK}>
                                                                <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>
                                                                        kDrive
                                                                        </h5>
                                                                        <p>Stockez, collaborez et partagez vos fichiers</p>
                                                                    </Link>
                                                                </div>
                                                                <div className={styles.vignette}>
                                                                    <Link href="#">
                                                                        <h5>
                                                                            <div className={styles.yellowSquare}></div>
                                                                            kPaste</h5>
                                                                        <p>Partagez et chiffrez vos <br /> information sensibles</p>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className={styles.subColumnsK}>
                                                                <div className={styles.vignette}>
                                                                    <Link href="#">
                                                                        <h5>
                                                                            <svg className={styles.svgMail} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg>
                                                                            Service Mail
                                                                        </h5>
                                                                        <p>La boîte mail  qui respecte <br />votre vie privée</p>
                                                                    </Link>
                                                                </div>
                                                                <div className={styles.vignette}>
                                                                    <Link href="#">
                                                                        <h5>
                                                                        <div className={styles.greenSquare}></div>
                                                                            Swiss Transfer</h5>
                                                                        <p>Partager des fichiers en toute sécurité</p>
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className={styles.subColumnsK}>
                                                                <div  className={`${styles.vignette}`}>
                                                                    <Link href="#">
                                                                        <h5>
                                                                            <svg className={styles.svgChat} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                                                            kChat<span className={styles.info}>Beta</span></h5>
                                                                        <p>Communiquer en direct avec votre équipe</p>
                                                                    </Link>
                                                                </div>
                                                                <div className={styles.vignette}>
                                                                    <Link href="#">
                                                                        <h5>
                                                                        <svg className={styles.svgMeet} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                                                                            kMeet</h5>
                                                                        <p>Organisez vos réunions en <br />ligne en toute sécurité</p>
                                                                    </Link>
                                                                </div>
                                                                <div className={styles.vignette}>
                                                                    <Link href="#">
                                                                        <h5>
                                                                        <div className={styles.blueSquare}></div>
                                                                            Custom Brand</h5>
                                                                        <p>Maitrisez l'image de marque <br /> de vos produits</p>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.actionsContainer}>
                                                        <h6>Actions rapides</h6>
                                                        <div className={styles.actions}>
                                                            <p><Link href="#">Migrer des adresses mail →</Link></p>
                                                            <p><Link href="#">Importer des fichiers d'un autre Cloud →</Link></p>
                                                            <p><Link href="#">Renewal Warranty →</Link></p>
                                                            <p><Link href="#">Guides et questions fréquentes →</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu6')}>Sauvergarde & Stockage
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu6 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu6 && (
                                                <div className={styles.subContainer}>
                                                    <div>
                                                        <div className={styles.subColumns}>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgBackup} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>
                                                                        Swiss Backup</h5>
                                                                    <p>Sauvegardez tous vos appareils en Suisse</p>
                                                                </Link>
                                                            </div>

                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>
                                                                    kDrive
                                                                    </h5>
                                                                    <p>Stockez, collaborez et partagez vos fichiers</p>
                                                                </Link>
                                                            </div>

                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                    <svg className={styles.svgNas} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"/></svg>
                                                                    NAS Synology</h5>
                                                                    <p>Louez un NAS en Suisse <br />avec une IP fixe</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.actionsContainer}>
                                                        <div>
                                                            <h6>Actions rapides</h6>
                                                            <div className={styles.actions}>
                                                                <p><Link href="#">Pourquoi stocker ses données chez Infomaniak ? →</Link></p>
                                                                <p><Link href="#">Renewal Warranty →</Link></p>
                                                                <p><Link href="#">Guides et questions fréquentes →</Link></p>
                                                                <p><Link href="#">Renouveler →</Link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu7')}>Marketing
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu7 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu7 && (
                                                <div className={styles.subContainer}>
                                                    <div>
                                                        <div>
                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                        <svg className={styles.svgNewsletter} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>
                                                                        Newsletter</h5>
                                                                    <p>Envoyez vos newsletters à des <br />tarifs avantageux</p>
                                                                </Link>
                                                            </div>

                                                            <div className={styles.vignette}>
                                                                <Link href="#">
                                                                    <h5>
                                                                    <svg className={styles.svgGuests} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"/></svg>
                                                                    Gestionnaire d'invitées
                                                                    </h5>
                                                                    <p>Gérez facilement les invitations <br />de vos events</p>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className={styles.actionsContainer}>
                                                        <div>
                                                            <h6>Actions rapides</h6>
                                                            <div className={styles.actions}>
                                                                <p><Link href="#">Guides et questions fréquentes →</Link></p>
                                                                <p><Link href="#">Acheter des crédits →</Link></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu8')}>Billeterie
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu8 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu8 && (
                                            <div className={styles.subContainer}>
                                                <div className={styles.subColumns}>
                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                            <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                                                                Ticketing</h5>
                                                            <p>Créez votre billeterie et<br />vendez des billets</p>
                                                        </Link>
                                                    </div>

                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                                <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                                                            Contrôle d'accès
                                                            </h5>
                                                            <p>Contrôlez facilement<br />l'accès à vos évènemenents</p>
                                                        </Link>
                                                    </div>

                                                    <div className={styles.vignette}>
                                                        <Link href="#">
                                                            <h5>
                                                                <svg className={styles.svgEvents} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
                                                            Portail <br />d'évènements</h5>
                                                            <p>Faites la promotion et<br />achetez vos billets</p>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className={styles.actionsContainer}>
                                                    <h6>Actions rapides</h6>
                                                    <div className={styles.actions}>
                                                        <p><Link href="#">Tarifs et questions fréquentes →</Link></p>
                                                        <p><Link href="#">Matériel de vente, d'impression et de contrôle →</Link></p>
                                                        <p><Link href="#">Se connecter à ma billeterie →</Link></p>
                                                    </div>
                                                </div>
                                            </div>
                                            )}
                                        </div>
                                        <div>
                                            <li onClick={(event) => handleSubSubmenuClick(event, true, 'subsubmenu9')}>Multimédia
                                                <div>
                                                    {!isSubSubmenuOpen.subsubmenu9 ? (
                                                        <figure>
                                                            <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                        ) : (
                                                        <figure>
                                                            <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                        </figure>
                                                    )}
                                                </div>
                                            </li>
                                            {isSubSubmenuOpen.subsubmenu9 && (
                                                <div className={styles.subContainer}>
                                                    <div>
                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                <svg className={styles.svgRadio} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z"/></svg>
                                                                    Streaming radio</h5>
                                                                <p>Créez votre radio en ligne et <br />monétisez vos directs</p>
                                                            </Link>
                                                        </div>

                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                <svg className={styles.svgTV} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
                                                                Streaming vidéo
                                                                </h5>
                                                                <p>Créez votre TV en ligne et <br />monétisez vos diffusions</p>
                                                            </Link>
                                                        </div>

                                                        <div className={styles.vignette}>
                                                            <Link href="#">
                                                                <h5>
                                                                <svg className={styles.svgVOD} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                                                Service VOD & AOD
                                                                </h5>
                                                                <p>Hébergez et monétisez vos<br />vidéos et podcasts</p>
                                                            </Link>
                                                        </div>
                                                    </div>

                                                    <div className={styles.actionsContainer}>
                                                        <h6>Actions rapides</h6>
                                                        <div className={styles.actions}>
                                                            <p><Link href="#">Guides et questions fréquentes →</Link></p>
                                                            <p><Link href="#">Renouveler →</Link></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </ul>
                                )}

                            </li>
                            <li onClick={() => handleClick('submenu2')} className={styles.linkMenuMobile}>
                                <div>
                                    <Link href="#">{n("aboutus")}
                                    </Link>
                                    {!isSubmenuOpen.submenu2 ? (
                                    <figure>
                                        <svg  className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                    </figure>
                                    ) : (
                                    <figure>
                                        <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                    </figure>
                                    )}
                                </div>
                                {isSubmenuOpen.submenu2 && (
                                <ul className={`${styles.submenu} ${styles.secondSubmenu}`}>
                                    <Link href="#">
                                        <li>Vision et valeurs
                                            <p>Notre vision, nos engagements</p>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li>L'équipe
                                            <p>Infomaniak, c'est avant tout une aventure humaine</p>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li>Infomaniak Ecologie
                                            <p>Notre engagement écologique</p>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li>Infomaniak recrute
                                            <p>Envie de contribuer à un Web plus éthique ?</p>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li>Presse et communications
                                            <p>Logos , communiqués de presse et RP (Relations Presse)</p>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li>Blog & actualités
                                            <p>Suivez et partagez notre actualité</p>
                                        </li>
                                    </Link>
                                    <Link href="#">
                                        <li>Devenir partenaire
                                            <p>Rechercher ou devenez partenaire Infomaniak</p>
                                        </li>
                                    </Link>
                                    <div className={styles.secondSubmenu_plus}>
                                        <div>
                                            <Link href="#">
                                                <h6>Programme partenaire</h6>
                                                <p>Bénéficiez de notre savoir-faire et élargissez votre clientèle</p>
                                                <p>Devenir partenaire →</p>
                                            </Link>
                                            <Link href="#">
                                                <h6>Les partenaires Infomaniak</h6>
                                                <p>Rechercher parmi plus de 1000 partenaires</p>
                                                <p>Voir les partenaires →</p>
                                            </Link>
                                            <Link href="#">
                                                <h6>Appel d'offres</h6>
                                                <p>Faites appel à nos partenaires pour vous aider dans votre projet</p>
                                                <p>Créer un appel d'offre →</p>
                                            </Link>
                                        </div>
                                    </div>
                                </ul>
                                )}
                            </li>
                            <li onClick={() => handleClick('submenu3')} className={styles.linkMenuMobile}>
                                <div>
                                    <Link href="#">{n("support")}
                                    </Link>
                                    {!isSubmenuOpen.submenu3 ? (
                                    <figure>
                                        <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                    </figure>
                                    ) : (
                                    <figure>
                                        <svg  className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                    </figure>
                                    )}
                                </div>
                                {isSubmenuOpen.submenu3 && (
                                    <ul className={`${styles.submenu} ${styles.thirdSubmenu}`}>
                                        <li>Questions fréquentes
                                            <p>1000 FAQ, 500 tutoriels et vidéos explicatives</p>
                                        </li>
                                        <li>Contact commercial
                                            <p>Pour les entreprises, ONG et administratives publiques</p>
                                        </li>
                                        <li>Documentation pour les développeurs
                                            <p>Intégrez nos services et créez vos apps avec notre API.</p>
                                        </li>
                                        <li>A propos du support
                                            <p>Proche de nos clients et à l'écoute</p>
                                        </li>
                                        <li>Offre Support Premium
                                            <p>Un support dédié à vos besoins</p>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className={styles.linkMenuMobile}>
                                <div>
                                    <Link href="#">{n("price")}
                                    </Link>
                                    <Switch />
                                </div>
                            </li>
                            <li onClick={handleClick} className={styles.linkMenuMobile}>
                                <div>
                                    <Link href="#">{n("language")}
                                    </Link>
                                    <Dropdown currentLanguage={t('currentLanguage')} currentLanguageFull={t('currentLanguageFull')}  />
                                </div>
                            </li>

                            <div className={styles.auth}>
                                <Link href="#">{l("signupShort")}</Link>
                                <Link href="#">{l("logginShort")}</Link>
                            </div>
                        </ul>
                    </div>
                </div>
                )}
        </header>
    )
}

export default Navbar
