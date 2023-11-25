"use client"

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import Search from '@/components/search/Search'
import Dropdown from '@/components/dropdown/Dropdown'
import styles from './page.module.css'
import Myaccount from '../myaccount/myaccount'

const Navbar = () => {
    const t = useTranslations('lang');
    const n = useTranslations('navigation');

    const products = [
        {
            id: '01',
            title: 'Outils Collaboratifs',
            more: [
                {
                    id: 1,
                    logo: <Image className={styles.logoKsuite} src="/kSuite.png" alt="ksuite logo" width={24} height={24} priority={true} />,
                    catchPhrase: 'kSuite, la solution collaborative éthique',
                    paragraph: 'Tout pour collaborer efficacement en ligne.',
                    button: 'Découvrer les apps incluses →',
                }
            ],
            subMenus: [
                {
                    id: 1,
                    title: 'kDrive',
                    svgData: <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill='#0098FF'><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>,
                    content: 'Stockez, collaborez et partagez vos fichiers',
                },
                {
                    id: 2,
                    title: 'kChat',
                    svgData: <svg className={styles.svgChat} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(0, 136, 178)'><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>,
                    content: 'Communiquer en direct avec vos équipes',
                },
                {
                    id: 3,
                    title: 'SwissTransfer',
                    svgData: <div className={styles.greenSquare}></div>,
                    content: 'Envoyez gratuitement vos fichiers jusqu\'à 50 Go',
                },
                {
                    id: 4,
                    title: 'Custom Brand',
                    svgData: <div className={styles.blueSquare}></div>,
                    content: 'Maîtrisez l\'image de marque de vos produits',
                },
                {
                    id: 5,
                    title: 'Service Mail',
                    svgData: <svg className={styles.svgMail} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill= 'rgb(242, 53, 122)'><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg>,
                    content: 'Créez vos adresses mails avec votre domaine',
                },
                {
                    id: 6,
                    title: 'kMeet',
                    svgData: <svg className={styles.svgMeet} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(70, 203, 133)'><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>,
                    content: 'Organisez vos réunions en ligne en toute sécurité',
                },
                {
                    id: 7,
                    title: 'kPaste',
                    svgData: <div className={styles.yellowSquare}></div>,
                    content: 'Partagez et chiffrez vos informations sensibles',
                },
            ]
        },
        {
            id: '02',
            title: 'Web & Domaines',
            more: [
                {
                    id: 1,
                    logo: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>,
                    catchPhrase: 'Trouvez l\'hébergement Web qu\'il vous faut',
                    button: 'Comparez nos hébergements Web →',
                }
            ],
            subMenus: [
                {
                    id: 1,
                    title: 'Nom de domaine',
                    svgData: <svg className={styles.svgEarth} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(120, 133, 203)'><path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>,
                    content: 'Réservez votre nom de domaine au meilleur prix',
                },
                {
                    id: 2,
                    title: 'Hébergement Web',
                    svgData: <svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(4, 179, 212)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez vos sites Internet (WordPress + 100 CMS)',
                },
                {
                    id: 3,
                    title: 'Serveur Cloud',
                    svgData: <svg className={styles.svgServeur} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(0, 86, 131)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Propulsez vos sites avec des ressources garanties',
                },
                {
                    id: 4,
                    title: 'Certificat SSL',
                    svgData: <svg className={styles.svgSSL} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='rgb(70, 203, 133)'><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>,
                    content: 'Sécurisez vos sites avec un certificat EV ou DV',
                },
                {
                    id: 5,
                    title: 'Site Creator',
                    svgData: <svg className={styles.svgCreator} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(78, 189, 245)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez votre site Web en toute simplicité',
                },
                {
                    id: 6,
                    title: 'Hébergement WordPress',
                    svgData: <svg className={styles.svgWordPress} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(12, 153, 214)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez facilement votre site avec WordPress',
                },
            ],
            options: [
                {
                    id: 1,
                    title: 'Domain Privacy',
                    svgData: <svg className={styles.svgPrivacy} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(4, 179, 212)'><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>,
                    content: 'Protégez les données privées de vos domaines',
                },
                {
                    id: 2,
                    title: 'DNS FastAnycast',
                    svgData: <div className={styles.svgDNS}></div>,
                    content: 'Boostez le temps d\'accès de vos sites',
                },
                {
                    id: 3,
                    title: 'DynDns',
                    svgData: <div className={styles.svgDynDns}></div>,
                    content: 'Accédez facilement à vos appareils à distance',
                },
                {
                    id: 4,
                    title: 'Renewal Warranty',
                    svgData: <svg className={styles.svgRenewal} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(12, 153, 214)'><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>,
                    content: 'Sécurisez vos domaines contre la perte et le vol',
                },
            ]
        },
        {
            id: '03',
            title: 'Cloud Computing',
            more: [
                {
                    id: 1,
                    logo: <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>,
                    catchPhrase: 'Trouvez la solution de Cloud Computing adaptée',
                    button: 'Comparez nos solutions Cloud →',
                }
            ],
            subMenus: [
                {
                    id: 1,
                    title: 'VPS Cloud',
                    svgData: <svg className={styles.svgCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(99, 112, 235)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez un serveur Windows ou Linux',
                },
                {
                    id: 2,
                    title: 'Public Cloud (IaaS)',
                    svgData: <svg className={styles.svgPCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(0, 86, 131)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Infrastructure Cloud Haute Performance',
                },
                {
                    id: 3,
                    title: 'Swiss Backup',
                    svgData: <svg className={styles.svgBackup} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(56, 75, 100)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Sauvegardez tous vos appareils en Suisse',
                },
                {
                    id: 4,
                    title: 'Housing',
                    svgData: <svg className={styles.svgHousing} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(120, 144, 156)'><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>,
                    content: 'Installez vos serveurs dans nos datacenters',
                },
                {
                    id: 5,
                    title: 'Jelastic Cloud (PaaS)',
                    svgData: <svg className={styles.svgJCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(40, 115, 231)'><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>,
                    content: 'Vos environnements de développement sur mesure',
                },
                {
                    id: 6,
                    title: 'Très Haute Disponibilité',
                    svgData: <svg className={styles.svgDispo} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(185, 45, 95)'><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Infrastructure Cloud avec contrat SLA sur mesure',
                },
                {
                    id: 7,
                    title: 'NAS Synology',
                    svgData: <svg className={styles.svgNas} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='rgb(0, 136, 178)'><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"/></svg>,
                    content: 'Louez un NAS en Suisse avec une IP fixe',
                },
            ],
        },
        {
            id: '04',
            title: 'Events & Marketing',
            more: [
                {
                    id: 1,
                    logo: <svg className={styles.svgBlueTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill='#0098FF'><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>,
                    catchPhrase: 'Infomaniak Events, le portail évènementiel local indépendant',
                    paragraph: 'Billeterie en ligne avec un large choix de concerts, spectacles, énènements.',
                    button: 'Découvrez tous les évènements →',
                }
            ],
            subMenus: [
                {
                    id: 1,
                    title: 'Ticketing',
                    svgData: <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill= 'rgb(230, 4, 34)'><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>,
                    content: 'Créez votre billetterie et vendez des billets',
                },
                {
                    id: 2,
                    title: 'Contrôle d\'accès',
                    svgData: <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill='rgb(230, 4, 34)'><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>,
                    content: 'Contrôlez facilement l\'accès à vos évènements',
                },
                {
                    id: 3,
                    title: 'Gestionnaire d\'invités',
                    svgData: <svg className={styles.svgGuests} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill='rgb(197, 149, 205)'><path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"/></svg>,
                    content: 'Automatisez les invitations de vos events',
                },
                {
                    id: 4,
                    title: 'Newsletter',
                    svgData: <svg className={styles.svgNewsletter} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(12, 153, 214)'><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>,
                    content: 'Envoyez vos newsletters à des tarifs compétitifs',
                },
            ]
        },
        {
            id: '05',
            title: 'Streaming',
            subMenus: [
                {
                    id: 1,
                    title: 'Streaming radio',
                    svgData: <svg className={styles.svgRadio} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='rgb(237, 161, 47)'><path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z"/></svg>,
                    content: 'Créez et diffusez en direct votreradio en ligne',
                },
                {
                    id: 2,
                    title: 'Streaming vidéo',
                    svgData: <svg className={styles.svgTV} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='rgb(255, 142, 98)'><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>,
                    content: 'Créez et diffusez en direct vos évènement et TV en ligne',
                },
                {
                    id: 3,
                    title: 'Service VOD & AOD',
                    svgData: <svg className={styles.svgVOD} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill='rgb(4, 179, 212)'><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>,
                    content: 'Hébergez et diffusez vos enregistrements sans limites',
                },
            ]
        },
    ]

    const supports = [
        {
            id: 1,
            title: 'Nous contacter',
            content:'Par chat, téléphone ou e-mail',
        },
        {
            id: 2,
            title: 'Questions fréquentes',
            content:'1000 FAQ, 500 tutoriels et vidéos explicatives',
        },
        {
            id: 3,
            title: 'Contact commercial',
            content:'Pour les entreprise, ONG et administrations publique',
        },
        {
            id: 4,
            title: 'Documentation pour les développeurs',
            content:'Références API',
        },
        {
            id: 5,
            title: 'A propos du support',
            content:'Procher de nos clients et à l\'écoute',
        },
        {
            id: 6,
            title: 'Support premium',
            content:'Assistance 7/7 - 24/24',
        },
    ]

    const aboutus = [
        {
            id: 1,
            title: 'A propos d\'Infomaniak',
            elements: [
                'Notre vision, nos valeurs',
                'Nos équipes',
                'Infomaniak recrute',
                'Presse et communication',
                'Blog et actualité',
            ]
        },
        {
            id: 2,
            title: 'Partenaire et revendeurs',
            elements: [
                'Devenir partenaire Infomaniak',
                'Consulter la liste des partenaires',
                'Créer un appel d\'offre',
                'Presse et communication',
            ]
        },
        {
            id: 3,
            title: 'Sécutité',
            elements: [
                'Confidantialité des données',
                'Programme de Bug Bounty',
            ]
        },
    ]

    const [isMenu, setIsMenu] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState({
        products: false,
        supports: false,
        aboutus: false
    })

    const [openTab, setOpenTab] = useState("01")
    const [openTabSmall, setOpenTabSmall] = useState(null)
    const [rotateState, setRotateState] = useState(null)
    const menuRef = useRef()

    // add a class open to header for menu opening management for mobile
    const handleMenu = () => {
        const header = document.querySelector(`.${styles.header}`)
        const body = document.querySelector('body')

        if (header.classList.contains('open')) {
            header.classList.remove('open')
            body.classList.remove('no-scroll')
        } else {
            header.classList.add('open')
            body.classList.add('no-scroll')
        }
        setIsMenu(!isMenu)
    }

    // link opening
    const handleClick = (id) => {
        setIsSubmenuOpen(prevState => ({
            ...Object.fromEntries(Object.keys(prevState).map(key => [key, key === id])),
        }))
    }

    const closeAllSubmenus = () => {
        setIsSubmenuOpen({
            products: false,
            supports: false,
            aboutus: false,
        })
    }

    // close the menu if click outside the menu
    const handleDocumentClick = (event) => {
        const isClickInsideMenu = menuRef.current && menuRef.current.contains(event.target)
        if (!isClickInsideMenu) {
            closeAllSubmenus()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])


    const handleMobileMenu = (id) => {
        setIsSubmenuOpen((prev) => ({
            products: false,
            supports: false,
            aboutus: false,
            [id]: !prev[id],
        }))
        rotateArrows(id)
    }

    // open submenu for desktop
    const toggleTab = (id) => {
        if (openTab !== id) {
            setOpenTab(id)
        }
    }

    const rotateArrows = (id) => {
        if (rotateState === id) {
            setRotateState(null)
        } else {
            setRotateState(id)
        }
    }

    // open submenu for mobile
    const toggleTabSmall = (id) => {
        if (openTabSmall === id) {
            setOpenTabSmall(null)
        } else {
            setOpenTabSmall(id)
        }
        rotateArrows(id)
    }

    return (
        <header className={`${styles.header} ${isMenu ? 'open' : ''}`}>
            <nav className={styles.container}>
                <div className={styles.nav}>

                    <button aria-label="Ouvrir le menu" aria-roledescription="Bouton pour ouvrir le menu et accéder au lien" onClick={handleMenu} className={styles.burgerBtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <p className={styles.logo}><Link href="/">infomaniak</Link></p>
                    <div className={styles.nav_main}>
                        <ul ref={menuRef} className={styles.menu}>
                            <li onClick={() => handleClick('products')} className={`${styles.linkMenu} ${styles.hide_for_mobile}`}><Link href="#">{n("products")}</Link>
                            </li>
                            {isSubmenuOpen.products && (
                            <div className={`${styles.nav_products} ${styles.hide_for_mobile}`}>
                                <div className={styles.nav_titles}>
                                    {products.map(product => (
                                        <h3 key={product.id} onClick={() => toggleTab(product.id)} className={openTab === product.id ? styles.nav_active : ""}>{product.title}</h3>
                                    ))}
                                </div>

                                <div className={styles.nav_content}>
                                    {products.map(product => (
                                    <div key={product.id} className={openTab === product.id ? styles.nav_open : ""}>
                                        {product.more && product.more.map(m => (
                                        <div key={m.id} className={styles.nav_productAll}>
                                            <div>
                                                <figure>
                                                    {m.logo}
                                                </figure>
                                                <div className={styles.nav_catchPhrase}>
                                                    <h4>{m.catchPhrase}</h4>
                                                    {m.paragraph ? <p>{m.paragraph}</p> : ""}
                                                </div>
                                            </div>
                                            <div className={styles.nav_button}>
                                                <Link href="#">{m.button}</Link>
                                            </div>
                                        </div>
                                        ))}
                                        <div className={styles.nav_productContainer}>
                                            {product.subMenus.map(sub => (
                                                <div key={sub.id} className={styles.nav_productCard}>
                                                    <Link href="#">
                                                        <figure>
                                                            {sub.svgData}
                                                        </figure>
                                                        <div className={styles.nav_productCardContent}>
                                                            <h5>{sub.title}</h5>
                                                            <p>{sub.content}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>

                                        {product.options &&
                                        <div className={styles.nav_products_options}>
                                            <p>Options</p>
                                            <div className={styles.nav_optionsContainer}>
                                            {product.options.map(opt => (
                                                <div key={opt.id} className={styles.nav_productCard}>
                                                    <Link href="#">
                                                        <figure>
                                                            {opt.svgData}
                                                        </figure>
                                                        <div className={styles.nav_productCardContent}>
                                                            <h5>{opt.title}</h5>
                                                            <p>{opt.content}</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                                        }
                                    </div>
                                    ))}
                                </div>
                            </div>
                            )}
                            <li onClick={() => handleClick('supports')} className={`${styles.linkMenu} ${styles.hide_for_mobile}`}><Link href="#">{n("support")}</Link>
                            </li>
                            {isSubmenuOpen.supports && (
                                <ul  className={`${styles.supportCollapseMenu} ${styles.hide_for_mobile}`}>
                                    {supports.map(support => (
                                        <li key={support.id}>{support.title}
                                            <p>{support.content}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <li onClick={() => handleClick('aboutus')} className={`${styles.linkMenu} ${styles.hide_for_mobile}`}><Link href="#">{n("aboutus")}</Link>
                            </li>
                            {isSubmenuOpen.aboutus && (
                                <div className={`${styles.aboutCollapseMenu} ${styles.hide_for_mobile}`}>
                                    <figure>
                                        <Image className={styles.about_ecology} src="/nav/navi_1.png" alt="panneau solaire" width={301} height={204} priority={true} />
                                        <figcaption>
                                            <p>Engagement écologique</p>
                                            <p>Découvrie notre engagement →</p>
                                        </figcaption>
                                    </figure>
                                    <ul>
                                        {aboutus.map(about => (
                                            <div key={about.id}>
                                                <h3>{about.title}</h3>
                                                <ul>
                                                    {about.elements.map((el, index) => (
                                                        <li key={index}><Link href="#">{el}</Link></li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </ul>
                        <div className={styles.hide_for_mobile}>
                            <Search />
                        </div>
                    </div>
                </div>
                <div className={styles.muiBox}>
                    {/* <Dropdown currentLanguage={t('currentLanguage')} currentLanguageFull={t('currentLanguageFull')} /> */}

                    <figure className={`${styles.imgContainer} ${styles.hide_for_mobile}`}>
                        <Image src="/pad.png" width={20} height={20} alt="menu panel" priority={true} />
                    </figure>
                    <Myaccount />
                </div>
            </nav>

            {isMenu && (
                <div className={styles.nav_mobile_open}>
                    <Search />
                    <ul ref={menuRef} className={`${styles.toggle} ${styles.toggleContainer} ${styles.hide_for_desktop}`}>
                        <li onClick={() => handleMobileMenu('products')} className={`${styles.nav_mobile} ${styles.hide_for_desktop}`}>
                            <Link href="#">{n("products")}</Link>
                            <figure className={`${styles.arrows} ${rotateState === 'products' ? styles.arrowUp : styles.arrowDown}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#fff'>
                                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                                </svg>
                            </figure>
                        </li>
                        {isSubmenuOpen.products && (
                        <div className={styles.nav_productsMobile}>
                            <div className={styles.nav_mobileTitlesContainer}>
                                {products.map(product => (
                                    <div key={product.id}>
                                        <div onClick={() => toggleTabSmall(product.id)} className={styles.nav_titlesMobile}>
                                            <h3>{product.title}</h3>
                                            <figure className={styles.arrows}>
                                                {rotateState === product.id ? (
                                                    <svg className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#fff'><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                ) : (
                                                    <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#fff'><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                )}
                                            </figure>
                                        </div>
                                        {openTabSmall === product.id && (
                                        <div className={styles.nav_content}>
                                            {products.map(product => (
                                            <div key={product.id} className={openTabSmall === product.id ? styles.nav_open : ""}>
                                                {product.more && product.more.map(m => (
                                                <div key={m.id} className={styles.nav_productAll}>
                                                    <figure>
                                                        {m.logo}
                                                    </figure>
                                                    <div>
                                                        <div className={styles.nav_catchPhrase}>
                                                            {m.catchPhrase ? <h4>{m.catchPhrase}</h4> : ""}
                                                            <p>{m.paragraph}</p>
                                                        </div>
                                                        <div className={styles.nav_button}>
                                                            <Link href="#">{m.button}</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))}
                                                <div className={styles.nav_productContainer}>
                                                    {product.subMenus.map(sub => (
                                                        <div key={sub.id} className={styles.nav_productCard}>
                                                            <Link href="#">
                                                                <figure>
                                                                    {sub.svgData}
                                                                </figure>
                                                                <div className={styles.nav_productCardContent}>
                                                                    <h5>{sub.title}</h5>
                                                                    <p>{sub.content}</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>

                                                {product.options &&
                                                <div className={styles.nav_products_options}>
                                                    <p>Options</p>
                                                    <div className={styles.nav_optionsContainer}>
                                                    {product.options.map(opt => (
                                                        <div key={opt.id} className={styles.nav_productCard}>
                                                            <Link href="#">
                                                                <figure>
                                                                    {opt.svgData}
                                                                </figure>
                                                                <div className={styles.nav_productCardContent}>
                                                                    <h5>{opt.title}</h5>
                                                                    <p>{opt.content}</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                    </div>
                                                </div>
                                                }
                                            </div>
                                            ))}
                                        </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        )}
                        <li onClick={() => handleMobileMenu('supports')} className={`${styles.nav_mobile} ${styles.hide_for_desktop}`}>
                            <Link href="#">{n("support")}</Link>
                            <figure className={`${styles.arrows} ${rotateState === 'supports' ? styles.arrowUp : styles.arrowDown}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#fff'>
                                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                                </svg>
                            </figure>
                        </li>
                        {isSubmenuOpen.supports && (
                            <ul className={styles.nav_supportMobile}>
                                {supports.map(support => (
                                    <li key={support.id}>{support.title}
                                        <p>{support.content}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <li onClick={() => handleMobileMenu('aboutus')} className={`${styles.nav_mobile} ${styles.hide_for_desktop}`}>
                            <Link href="#">{n("aboutus")}</Link>
                            <figure className={`${styles.arrows} ${rotateState === 'aboutus' ? styles.arrowUp : styles.arrowDown}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#fff'>
                                    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                                </svg>
                            </figure>
                        </li>
                        {isSubmenuOpen.aboutus && (
                            <div  className={styles.nav_aboutMobile}>
                                <figure>
                                    <Image className={styles.about_ecology} src="/nav/navi_1.png" alt="panneau solaire" width={301} height={204} priority={true} />
                                    <figcaption>
                                        <p>Engagement écologique</p>
                                        <p>Découvrie notre engagement →</p>
                                    </figcaption>
                                </figure>
                                <ul>
                                    {aboutus.map(about => (
                                        <div key={about.id}>
                                            <h3>{about.title}</h3>
                                            <ul>
                                                {about.elements.map((el, index) => (
                                                    <li key={index}><Link href="#">{el}</Link></li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Navbar
