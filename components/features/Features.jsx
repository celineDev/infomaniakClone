import React, { useState, useRef, useEffect } from 'react'
import styles from './page.module.css'
import useRipple from "use-ripple-hook"

const Features = () => {
    const links = [
        {
            id: 1,
            title: 'Nom de domaine',
            subMenus: [
                {
                    id: '01',
                    title: 'Nom de domaine',
                    svgData: <svg className={styles.svgEarth} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.4-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>,
                    content: 'Réservez votre nom de domaine au meilleur prix',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'La référence pour acheter vos nom de domaine au meilleur prix',
                            svgData: <svg className={`${styles.circle} ${styles.svgEarth}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Gestion DNS incluse et configuration facile.',
                                '1 adresse mail professionnelle et 1 espace Web de 10 Mo inclus.',
                                'Sécurité DNSSEC et service DynDNS gratuitement inclus.',
                                'Infomaniak est un registrar suisse accrédité par l\'ICANN.',
                            ]
                        }
                    ],
                },
                {
                    id: '02',
                    title: 'Domain Privacy',
                    svgData: <svg className={styles.svgPrivacy} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>,
                    content: 'Protégez les données privées de vos domaines',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: '1 clic pour élever la confidentialité de vos coordonnées dans les Whois',
                            svgData: <svg className={`${styles.circle} ${styles.svgPrivacy}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Domain Privacy cache votre nom, téléphone et adresse dans les registres Whois.',
                                'Bloque les pirates et les robots qui utilisent les Whois des registres pour spammer.',
                                'Configuration automatique avec les noms de domaine gérés par Infomaniak.',
                                'Résiliable à tout moment. Vous gardez le contrôle.',
                            ]
                        }
                    ]
                },
                {
                    id: '03',
                    title: 'Certificat SSL',
                    svgData: <svg className={styles.svgSSL} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>,
                    content: 'Sécurisez vos sites avec un certificat EV ou DV',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une protection totale pour les boutiques en ligne et sites professionnels',
                            svgData: <svg className={`${styles.circle} ${styles.svgSSL}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Certificat SSL gratuit (Let\'s Encrypt) ou payants (Sectigo).',
                                'En partenariat avec la première autorité de certification au monde.',
                                'Installation automatique avec vos sites hébergés chez Infomaniak.',
                            ]
                        }
                    ],
                },
                {
                    id: '04',
                    title: 'Renewal Warranty',
                    svgData: <svg className={styles.svgRenewal} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/></svg>,
                    content: 'Sécurisez vos domaines contre la perte et le vol',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: '1 clic pour ne jamais perdre vos données et vos services en ligne',
                            svgData: <svg className={`${styles.circle} ${styles.svgRenewal}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'En cas d\'absence ou de moyen de paiement bloqué, Infomaniak renouvelle vos services.',
                                'La sérénité de ne jamais perdre vos données et l\'accès à vos services en ligne.',
                                'Aucun frais supplémentaire en cas de renouvellement par Renewal Warranty.',
                                'Résiliable à tout moment. Vous gardez le contrôle.',
                            ]
                        }
                    ],
                },
                {
                    id: '05',
                    title: 'DNS FastAnycast',
                    svgData: <div className={styles.svgDNS}></div>,
                    content: 'Boostez le temps d\'accès de vos sites',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: '1 clic pour accélérer l\'accès de vos sites dans le monde entier',
                            svgData: <div className={`${styles.customCircle} ${styles.circleDNS}`}></div>,
                            elements : [
                                'DNS Fast Anycast réplique vos DNS dans le monde entier.',
                                'Réduit jusqu\'à 34% la latence liée à la recherche DNS de votre domaine.',
                                'Renforce la disponibilité des sites Internet lors d\'attaques DDoS.',
                                'Compatible avec tous les sites Internet dont le domaine est géré par Infomaniak.',
                            ]
                        }
                    ],
                },
                {
                    id: '06',
                    title: 'DynDns',
                    svgData: <div className={styles.svgDynDns}></div>,
                    content: 'Accédez facilement à vos appareils à distance',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Le moyen le plus simple d’accéder à distance à vos appareils',
                            svgData: <div className={`${styles.customCircle} ${styles.circleDynDns}`}></div>,
                            elements : [
                                'DynDNS est un pont entre votre routeur et les appareils qui y sont connectés.',
                                'Pratique pour accéder à un NAS ou à une box Internet via son nom de domaine.',
                                'Personnalisation avancée via une API pour les utilisateurs expérimentés.',
                                'Gratuit avec chaque nom de domaine géré chez Infomaniak.',
                            ]
                        }
                    ],
                },
            ],
        },
        {
            id: 2,
            title: 'Hébergement et Cloud',
            subMenus: [
                {
                    id: '01',
                    title: 'Sites + Mail',
                    svgData: <div className={styles.svgSpace}><svg className={styles.svgMail} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg><svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg></div>,
                    content: 'Créez vos sites Internet et adresses mails',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Notre offre phare pour créer facilement des sites internet avec vos adresses e-mail',
                            svgData: <svg className={`${styles.circle}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Optimisé pour WordPress et plus de 100 CMS (Joomla, Drupal, PrestaShop, etc.).',
                                'Toutes vos données sont stockées en Suisse dans nos datacenters écologiques.',
                                'Gratuit : outil de newsletter et plateforme audio et vidéo à la demande.',
                            ]
                        }
                    ],
                },
                {
                    id: '02',
                    title: 'Serveur Cloud Managé',
                    svgData: <svg className={styles.svgServeur} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez vos sites avec des ressources 100% dédiées',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Des ressources 100% dédiées et évolutives pour vos sites Internet et applications',
                            svgData: <svg className={`${styles.circle} ${styles.svgServeur}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Configuration logicielle personnalisée (Node.js, MongoDB, Memcached, Varnish, etc.).',
                                'Toutes vos données sont stockées en Suisse dans nos datacenters écologiques.',
                                'Gratuit : outil de newsletter et plateforme audio et vidéo à la demande.',
                            ]
                        }
                    ],
                },
                {
                    id: '03',
                    title: 'Public Cloud (IaaS)',
                    svgData: <svg className={styles.svgPCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Infrastructure Cloud Haute Performance',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'L\'infrastructure en tant que service (IaaS) la plus avantageuse pour les entreprises',
                            svgData: <svg className={`${styles.circle} ${styles.svgPCloud}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Une alternative indépendante et souveraine à AWS, Microsfot Azure et GCP.',
                                'Technologie OpenStack interopérable avec la majorité des technologies cloud.',
                                'Matériel haut de gamme, support local et accessible, +10 ans d\'expérience.',
                                'Tarification à la demande ultra compétitive : vous payez ce que vous utilisez.',
                            ]
                        }
                    ],
                },
                {
                    id: '04',
                    title: 'Hébergement Web',
                    svgData: <svg className={styles.svgWeb} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez vos sites Internet (WordPress + 100 CMS)',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Le meilleur hébergement Web pour créer des sites internet professionnels',
                            svgData: <svg className={`${styles.circle} ${styles.svgWeb}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Optimisé pour WordPress et plus de 100 CMS (Joomla, Drupal, PrestaShop, etc.).',
                                'Toutes vos données sont stockées en Suisse dans nos datacenters écologiques.',
                                'Gratuit : outil de newsletter et plateforme audio et vidéo à la demande.',
                            ]
                        }
                    ],
                },
                {
                    id: '05',
                    title: 'Très Haute Disponibilité',
                    svgData: <svg className={styles.svgDispo} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Infrastructure Cloud avec contrat SLA sur mesure',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Pour les entreprises établies qui doivent répondre aux besoins les plus exigeants',
                            svgData: <svg className={`${styles.circle} ${styles.svgDispo}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Redondance et fiabilité totale avec contrat SLA sur mesure.',
                                'Infrastructure Cloud multi-datacenters et entièrement redondante.',
                                'Monitoring et accès direct 24/7 à nos ingénieurs.',
                            ]
                        }
                    ],
                },
                {
                    id: '06',
                    title: 'Jelastic Cloud (PaaS)',
                    svgData: <svg className={styles.svgJCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"/></svg>,
                    content: 'Vos environnements de développement sur mesure',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'La plateforme en tant que service (PaaS) clé en main pour les PME et les startups',
                            svgData: <svg className={`${styles.circle} ${styles.svgJCloud}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Une interface intuitive pour déployer l\'architecture et les technologies de votre choix.',
                                'Architecture automatisée: load balancing, redondance, scaling, etc.',
                                'Tarification à la demande avantageuse : vous payez ce que vous utilisez.',
                            ]
                        }
                    ],
                },
                {
                    id: '07',
                    title: 'Hébergement WordPress',
                    svgData: <svg className={styles.svgWordPress} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez facilement votre site avec WordPress',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'L\'hébergement WordPress tout compris',
                            svgData: <svg className={`${styles.circle} ${styles.svgWordPress}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Installation automatique et performances optimisées pour WordPress.',
                                'Divi inclus, le constructeur de pages WordPress le plus utilisé au monde.',
                                'Facile et sécurisé : sauvegarde automatique et protection complète (malwares, DDoS, etc.)..',
                            ]
                        }
                    ],
                },
                {
                    id: '08',
                    title: 'VPS Cloud',
                    svgData: <svg className={styles.svgCloud} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez un serveur Windows ou Linux',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Des ressources 100% dédiées et évolutives pour vos sites Internet et applications',
                            svgData: <svg className={`${styles.circle} ${styles.svgCloud}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Configuration logicielle personnalisée (Node.js, MongoDB, Memcached, Varnish, etc.).',
                                'Toutes vos données sont stockées en Suisse dans nos datacenters écologiques.',
                                'Gratuit : outil de newsletter et plateforme audio et vidéo à la demande.',
                            ]
                        }
                    ],
                },
                {
                    id: '09',
                    title: 'Housing',
                    svgData: <svg className={styles.svgHousing} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>,
                    content: 'Installez vos serveurs dans nos datacenters',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Datacenter Tier 3+ à Genève en Suisse pour vos infrastructures',
                            svgData: <svg className={`${styles.circle} ${styles.svgHousing}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Un endroit sûr, redondant et fiable pour vos serveurs.',
                                'NSA non-compatible et certifié ISO 27001, ISO 14001 et ISO 50001.',
                                'Interconnexions personnalisées et sécurisées avec votre organisation.',
                                'Des offres flexibles, avantageuses et adaptées à tous les besoins.',
                            ]
                        }
                    ],
                },
                {
                    id: '10',
                    title: 'Site Creator',
                    svgData: <svg className={styles.svgCreator} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Créez votre site Web en toute simplicité',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'La solution pour créer un site web sans aucune connaissance technique',
                            svgData: <svg className={`${styles.circle} ${styles.svgCreator}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Facile et rapide à prendre en main',
                                '100% personnalisable par glisser-déposer',
                                'Convient pour tous vos projets : site vitrine, boutique en ligne, portfolio, blog, etc',
                            ]
                        }
                    ],
                },
                {
                    id: '11',
                    title: 'Certificats SSL',
                    svgData: <svg className={styles.svgSSL} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>,
                    content: 'Sécurisez vos sites avec un certificat EV ou DV',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une protection totale pour les boutiques en ligne et sites professionnels',
                            svgData: <svg className={`${styles.circle} ${styles.svgSSL}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Certificat SSL gratuit (Let\'s Encrypt) ou payants (Sectigo).',
                                'En partenariat avec la première autorité de certification au monde.',
                                'Installation automatique avec vos sites hébergés chez Infomaniak.',
                            ]
                        }
                    ],
                },
            ],
        },
        {
            id: 3,
            title: 'kSuite',
            subMenus: [
                {
                    id: '01',
                    title: 'kDrive',
                    svgData: <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>,
                    content: 'Stockez, collaborez et partagez vos fichiers',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Un endroit sûr pour stocker vos données et travailler en ligne',
                            svgData: <svg className={`${styles.circle} ${styles.svgFolder}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Suite OnlyOffice compatible avec Microsoft Office.',
                                'Tout l\'espace dont vous avez besoin pour vos photos et documents.',
                                'Importation automatique depuis Google Drive, Dropbox, etc.',
                                'Exclusivement développé et hébergé en Suisse.',
                            ]
                        }
                    ],
                },
                {
                    id: '02',
                    title: 'Service Mail',
                    svgData: <svg className={styles.svgMail} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"/></svg>,
                    content: 'Créez vos adresses mails avec votre domaine',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une messagerie sécurisée, indépendante et respectueuse de la vie privée',
                            svgData: <svg className={`${styles.circle} ${styles.svgMail}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Une interface en ligne attractive utilisée par plus d\'un million d\'utilisateurs.',
                                'Synchronisation des contacts et des rendez-vous avec tous vos appareils.',
                                'Configuration facile avec vos appareils (iOS, Android) et vos logiciels (Outlook, etc.).',
                                'Importation automatique de votre boîte de messagerie actuelle (Gmail, Outlook, etc.)',
                            ]
                        }
                    ],
                },
                {
                    id: '03',
                    title: 'kMeet',
                    svgData: <svg className={styles.svgMeet} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>,
                    content: 'Organisez vos réunions en ligne en toute sécurité',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une solution de vidéoconférence gratuite et illimitée qui respecte votre vie privée',
                            svgData: <svg className={`${styles.circle} ${styles.svgMeet}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Sans inscription, sans limite de temps et sécurisé par défaut pour tout le monde.',
                                'Partage d’écran avec dessin, chat, réactions, enregistrement, arrière-plans virtuels, etc.',
                                'Salle d\'attente avec protection par mot de passe & gestion de salles virtuelles.',
                                'Application kMeet gratuite et également compatible avec tous les navigateurs.',
                            ]
                        }
                    ],
                },
                {
                    id: '04',
                    title: 'Custom Brand',
                    svgData: <div className={styles.blueSquare}></div>,
                    content: 'Maîtrisez l\'image de marque de vos produits',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Vos outils de productivité en ligne avec l\'identité de votre entreprise',
                            svgData: <div className={`${styles.customCircle} ${styles.blueCircle}`}></div>,
                            elements : [
                                'Personnalisation complète de kDrive, kMeet, Mail, Calendar, etc.',
                                'Votre nom de domaine, votre logo, vos couleurs et votre style.',
                                'Configuration automatique avec un nom de domaine géré chez Infomaniak.',
                                'Gratuit 100 jours et ensuite environ CHF 50/an',
                            ]
                        }
                    ],
                },
                {
                    id: '05',
                    title: 'SwissTransfer',
                    svgData: <div className={styles.greenSquare}></div>,
                    content: 'Envoyez gratuitement vos fichiers jusqu\'à 50 Go',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Le service de transfert le plus sécurisé et complet pour envoyer des gros fichiers',
                            svgData: <div className={`${styles.customCircle} ${styles.greenCircle}`}></div>,
                            elements : [
                                'Jusqu\'à 50 Go pour transférer des photos, des vidéos et des fichiers lourds.',
                                'Liens de transfert valides jusqu\'à 30 jours sans inscription.',
                                'Protection par mot de passe et respect de la vie privée.',
                                'Sans publicité, sans inscription et hébergé en Suisse.',
                            ]
                        }
                    ],
                },
                {
                    id: '06',
                    title: 'kPaste',
                    svgData: <div className={styles.yellowSquare}></div>,
                    content: 'Partagez et chiffrez vos informations sensibles',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Un service gratuit pour chiffrer et partager en sécurité des informations sensibles',
                            svgData: <div className={`${styles.customCircle} ${styles.yellowCircle}`}></div>,
                            elements : [
                                'Chiffrement de bout en bout de texte.',
                                'Personnalisation de la durée de validité des messages.',
                                'Suppression des messages dès leur lecture.',
                                'Protection des messages par mot de passe.',
                            ]
                        }
                    ],
                },
            ]
        },
        {
            id: 4,
            title: 'Sauvegarde & stockage',
            subMenus: [
                {
                    id: '01',
                    title: 'Swiss Backup',
                    svgData: <svg className={styles.svgBackup} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"/></svg>,
                    content: 'Sauvegardez tous vos appareils en Suisse',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une solution de sauvegarde et de cybersécurité complète et avantageuse',
                            svgData: <svg className={`${styles.circle} ${styles.svgBackup}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Compatible avec Windows, macOS, Linux, Windows Server, Android, iOS, etc.',
                                'Logiciel de sauvegarde Acronis inclus avec Cyber Protect Cloud contre les cybermenaces.',
                                'Gestion unifiée des sauvegardes et de la cybersécurité d\'un parc informatique.',
                                'Toutes vos données sont stockées en Suisse dans nos datacenters écologiques.',
                            ]
                        }
                    ],
                },
                {
                    id: '02',
                    title: 'kDrive',
                    svgData: <svg className={styles.svgFolder} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z"/></svg>,
                    content: 'Stockez, collaborez et partagez vos fichiers',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Un endroit sûr pour stocker vos données et travailler en ligne',
                            svgData: <svg className={`${styles.circle} ${styles.svgFolder}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Suite OnlyOffice compatible avec Microsoft Office.',
                                'Tout l\'espace dont vous avez besoin pour vos photos et documents.',
                                'Importation automatique depuis Google Drive, Dropbox, etc.',
                                'Exclusivement développé et hébergé en Suisse.',
                            ]
                        }
                    ],
                },
                {
                    id: '03',
                    title: 'NAS Synology',
                    svgData: <svg className={styles.svgNas} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"/></svg>,
                    content: 'Louez un NAS en Suisse avec une IP fixe',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Votre NAS Synology avec une IP fixe dans un datacenter Suisse sécurisé',
                            svgData: <svg className={`${styles.circle} ${styles.svgNas}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Une solution indépendante pour sauvegarder vos données dans un lieu distant.',
                                'Des possibilités infinies : surveillance vidéo, albums en ligne, partage de fichiers, etc.',
                                'Trafic illimité, mise en place gratuite, remplacement du matériel, etc.',
                            ]
                        }
                    ],
                },
            ]
        },
        {
            id: 5,
            title: 'Marketing',
            subMenus: [
                {
                    id: '01',
                    title: 'Newsletter',
                    svgData: <svg className={styles.svgNewsletter} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>,
                    content: 'Envoyez vos newsletters à des tarifs avantageux',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'La solution d\'e-mail marketing la plus facile et avantageuse',
                            svgData: <svg className={`${styles.circle} ${styles.svgNewsletter}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Une interface intuitive pour créer et envoyer des newsletters.',
                                'Des modèles de newsletter personnalisables et prêts à l\'emploi.',
                                'Toutes les statistiques pour suivre le succès de vos campagnes d\'e-mailing.',
                                'Un générateur de formulaires facile à intégrer sur votre site Internet.',
                            ]
                        }
                    ],
                },
                {
                    id: '02',
                    title: 'Gestionnaire d\'invités',
                    svgData: <svg className={styles.svgGuests} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"/></svg>,
                    content: 'Gérez facilement les invitations de vos évents',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'La solution clé en main pour gérer les invitations de vos événements',
                            svgData: <svg className={`${styles.circle} ${styles.svgGuests}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Pour les sorties d\'entreprise, des repas, des anniversaires, des conférences, etc.',
                                'De nombreux modèles d\'invitation personnalisables et prêts à l\'emploi.',
                                'Gestion automatique des relances de vos invités.',
                                'Statistiques et suivi en temps réel de vos invités.',
                            ]
                        }
                    ],
                },
            ]
        },
        {
            id: 6,
            title: 'Billeterie',
            subMenus: [
                {
                    id: '01',
                    title: 'Ticketing',
                    svgData: <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>,
                    content: 'Créez votre billetterie et vendez des billets',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une solution de billetterie en ligne complète pour tous vos évènements',
                            svgData: <svg className={`${styles.circle} ${styles.svgTicket}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Pour les concerts, festivals, spectacles, matchs, conférences, expositions, etc.',
                                'Un seul outil pour contrôler les accès et vendre vos billets sur place et en ligne.',
                                'Sans abonnement et sans engagement : vous payez que si vous vendez.',
                                '100% personnalisable et interopérable avec notre API Rest.',
                            ]
                        }
                    ],
                },
                {
                    id: '02',
                    title: 'Contrôle d\'accès',
                    svgData: <svg className={styles.svgTicket} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>,
                    content: 'Contrôlez facilement l\'accès à vos évènements',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'La solution clé en main pour gérer les invitations de vos événements',
                            svgData: <svg className={`${styles.circle} ${styles.svgTicket}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Un contrôle d\accès fiable, rapide et intuitif pour votre staff.',
                                'Recherche, contrôle des abonnements, statistiques, tout est prévu.',
                                '100% fiable et fonctionnel, même sans connexion Internet.',
                                'Location du matériel de contrôle possible en cas de besoin',
                            ]
                        }
                    ],
                },
                {
                    id: '03',
                    title: 'Portail d\'évènements',
                    svgData: <svg className={styles.svgEvents} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>,
                    content: 'Faites la promotion et achetez vos billets',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Le meilleur endroit pour découvrir les évènements proche de chez vous',
                            svgData: <svg className={`${styles.circle} ${styles.svgEvents}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Idéal pour trouver des idées de sortie et des activités à faire avec vos ami(e)s.',
                                'Il y en a pour tous les goûts : Festival, Concert, Théâtre, Sport, Expo, Humour...',
                                'Réservation et achat des billets de vos évènements au meilleur tarif.',
                                'Disponible dans toute la Suisse et les régions voisines.',
                            ]
                        }
                    ],
                },
            ]
        },
        {
            id: 7,
            title: 'Multimédia',
            subMenus: [
                {
                    id: '01',
                    title: 'Streaming radio',
                    svgData: <svg className={styles.svgRadio} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M494.8 47c12.7-3.7 20-17.1 16.3-29.8S494-2.8 481.2 1L51.7 126.9c-9.4 2.7-17.9 7.3-25.1 13.2C10.5 151.7 0 170.6 0 192v4V304 448c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H218.5L494.8 47zM368 240a80 80 0 1 1 0 160 80 80 0 1 1 0-160zM80 256c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM64 320c0-8.8 7.2-16 16-16H208c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-8.8 0-16-7.2-16-16zm16 64c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16z"/></svg>,
                    content: 'Créez votre radio en ligne et monétisez vos directs',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une plateforme de streaming radio indépendante pour votre webradio',
                            svgData: <svg className={`${styles.circle} ${styles.svgRadio}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'La solution de streaming utilisée par plus de 2600 radios suisses et européennes.',
                                'Ajustement automatique de la qualité des radios (HLS multi-bitrate) et player HTML5.',
                                'Libre monétisation des radios via Adswizz.',
                                'Statistiques et suivi d\'audience en temps réel.',
                            ]
                        }
                    ],
                },
                {
                    id: '02',
                    title: 'Streaming vidéo',
                    svgData: <svg className={styles.svgTV} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>,
                    content: 'Créez votre TV en ligne et monétisez vos diffusions',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une plateforme de streaming vidéo indépendante pour votre Web TV',
                            svgData: <svg className={`${styles.circle} ${styles.svgTicket}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Pour tous les événements : Web TV & radio, festival, e-learning, webcam, etc.',
                                'Transcodage automatique dans le Cloud et enregistrement des directs.',
                                'Streaming adaptatif, Live 360°, Timeshift, tout est possible !',
                                'Statistiques et suivi d\'audience en temps réel.',
                            ]
                        }
                    ],
                },
                {
                    id: '03',
                    title: 'Service VOD & AOD',
                    svgData: <svg className={styles.svgVOD} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>,
                    content: 'Hébergez et monétisez vos vidéos et podcasts',
                    subsubMenu: [
                        {
                            id: '01',
                            paragraph: 'Une plateforme de stockage et de diffusion vidéo/audio indépendante',
                            svgData: <svg className={`${styles.circle} ${styles.svgVOD}`} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>,
                            elements : [
                                'Compatible avec tous les formats vidéo et audio courants.',
                                'Importation automatique depuis YouTube ou Vimeo.',
                                'Libre monétisation de vos podcasts et vidéos via VAST/VPAID.',
                                'API REST, statistiques, playlists, sous-titre, chapitrage, etc.',
                            ]
                        }
                    ],
                },
            ]
        },
    ]
    const internalRef = useRef(null)
    const elementsRef = useRef(null)
    const [active, setActive] = useState(false)
    const [rotateState, setRotateState] = useState({});
    const [openTab, setOpenTab] = useState(1)
    const [openTabSmall, setOpenTabSmall] = useState(null)
    const [menuOpen, setIsMenuOpen] = useState(null)
    const [windowWidth, setWindowWidth] = useState(0)

    const [ripple, event] = useRipple({
        duration: 450,
        color: "rgba(0, 152, 255, .3)",
        cancelAutomatically: false,
        className: "__useRipple--ripple",
        containerClassName: "__useRipple--ripple-container",
        ignoreNonLeftClick: true,
        timingFunction: "cubic-bezier(.42,.36,.28,.88)",
        disabled: false,
        ref: internalRef,
        onSpawn: undefined,
    })

    // screen resize
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

    // open tab for computer
    const toggleTab = (tabId) => {
        console.log('cliqué', tabId)
        if (openTab !== tabId) {
            setOpenTab(tabId)
        }
    }

    // open tab for tablets and smartphones
    const toggleTabSmall = (tabId) => {
        if (openTabSmall === tabId) {
            // if already open, will close
            setOpenTabSmall(null)
        } else {
            setOpenTabSmall(tabId)
        }
    }

    // open menu which contains CTA and rotate arrows
    const openMenu = (id) => {
        if (menuOpen === id) {
            // if already open, will close
            setIsMenuOpen(null)
        } else {
            setIsMenuOpen(id)
        }
    }

    // rotate arrows
    const rotateArrows = (id) => {
        // copy rotation state
        const updatedRotateState = { ...rotateState }

        if (updatedRotateState[id]) {
          delete updatedRotateState[id];
        } else {
          updatedRotateState[id] = true;
        }

        setRotateState(updatedRotateState);
      }


    return (
        <section className={styles.features}>
            <div className={styles.features_title}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M326.6 104H110.4c-51.1 0-91.2 43.3-91.2 93.5V427c0 50.5 40.1 85 91.2 85h227.2c51.1 0 91.2-34.5 91.2-85V0L326.6 104zM153.9 416.5c-17.7 0-32.4-15.1-32.4-32.8V240.8c0-17.7 14.7-32.5 32.4-32.5h140.7c17.7 0 32 14.8 32 32.5v123.5l51.1 52.3H153.9z"/></svg>
                </div>
                <h2>Toutes les solutions web dont vous avez besoin pour évoluer en ligne</h2>
                <p>Pour les entreprises, les organisations publiques et les particuliers exigeants</p>
            </div>
            <form className={styles.features_form}>
                <input type="text" placeholder='Quel service recherchez-vous ?' />
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </figure>
            </form>

            {windowWidth > 959 ? (
            <div className={styles.features_all}>
                <div ref={elementsRef} className={styles.features_choice}>
                    {links.map(link => (
                        <h4 key={link.id} onClick={() => toggleTab(link.id)}
                            ref={ripple}
                            onMouseDown={event}
                            className={`${openTab === link.id ? styles.feature_active : ""} ${styles.ripple_effect}`}>
                            {link.title}
                        </h4>
                    ))}
                </div>

                <div className={styles.features_type}>
                    {links.map(link => (
                    <div key={link.id} className={openTab === link.id ? styles.feature_open : ""}>
                        <div className={styles.features_cards}>
                            {link.subMenus.map(subMenu => (
                                <div key={subMenu.id}>
                                    <div
                                        onClick={() => {
                                            openMenu(subMenu.id),
                                            rotateArrows(subMenu.id)
                                            }}
                                        className={`
                                            ${styles.features_card}
                                            ${active ? styles.active : ""}
                                            ${rotateState[subMenu.id] ? styles.active : ""
                                        }`}>
                                        <div>
                                            {subMenu.svgData}
                                            <h5>{subMenu.title}</h5>
                                        </div>
                                        <p>{subMenu.content}</p>
                                        <figure className={styles.arrows}>
                                            {!rotateState[subMenu.id] ? (
                                                <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                            ) : (
                                                <svg className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                            )}
                                        </figure>
                                    </div>
                                    {menuOpen === subMenu.id && (
                                    <div className={styles.features_cardContent}>
                                        {subMenu.subsubMenu.map(sub => (
                                        <div key={sub.id}>
                                            <p>{sub.paragraph}</p>
                                            <ul>
                                                {sub.elements.map((element, index) => (
                                                    <li key={index}>
                                                        <div>{sub.svgData}</div>
                                                        <p>{element}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div>
                                                <button>Commander</button>
                                                <a href="#">En savoir plus →</a>
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            ) : (
                <div>
                    <div className={styles.features_all}>
                        <div ref={elementsRef} className={styles.features_choice}>
                            {links.map(link => (
                                <div key={link.id}>
                                    <div onClick={() => {toggleTabSmall(link.id), rotateArrows(link.id)}}
                                    className={`${openTabSmall === link.id ? styles.feature_active : ""}`}>
                                        <h4>
                                            {link.title}
                                        </h4>
                                        <figure className={styles.arrowsSmallDevice}>
                                            {!rotateState[link.id] ? (
                                                <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                            ) : (
                                                <svg className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                            )}
                                        </figure>
                                    </div>

                                    {openTabSmall === link.id && (
                                    <div className={styles.features_type}>
                                        <div className={openTabSmall === link.id ? styles.feature_open : ""}>
                                            <div className={styles.features_cards}>
                                                {link.subMenus.map(subMenu => (
                                                    <div key={subMenu.id}>
                                                        <div onClick={() => {openMenu(subMenu.id), rotateArrows(subMenu.id)}} className={`${styles.features_card} ${active ? styles.active : ""}`}>
                                                            <div>
                                                                {subMenu.svgData}
                                                                <h5>{subMenu.title}</h5>
                                                            </div>
                                                            <p>{subMenu.content}</p>
                                                            <figure className={styles.arrowsSmallDevice}>
                                                                {!rotateState[subMenu.id] ? (
                                                                    <svg className={styles.arrowDown} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                                ) : (
                                                                    <svg className={styles.arrowUp} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                                                                )}
                                                            </figure>
                                                        </div>
                                                        {menuOpen === subMenu.id && (
                                                            <div className={styles.features_cardContent}>
                                                                {subMenu.subsubMenu.map(sub => (
                                                                    <div key={sub.id}>
                                                                        <p>{sub.paragraph}</p>
                                                                        <ul>
                                                                            {sub.elements.map((element, index) => (
                                                                            <li key={index}>
                                                                                <div>{sub.svgData}</div>
                                                                                <p>{element}</p>
                                                                            </li>
                                                                            ))}
                                                                        </ul>
                                                                        <div>
                                                                            <button>Commander</button>
                                                                            <a href="#">En savoir plus →</a>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Features