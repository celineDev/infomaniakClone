import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const Hosting = () => {
    return (
    <section className={styles.hosting}>
        <div className={styles.hosting_title}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/></svg>
            </div>
            <h1>Découvrez nos solutions de productivité et choisissez le meilleur hébergement pour vos sites et vos e-mails</h1>
            <p>Prestataire cloud majeur en Europe et développeur leader de technologies Web en Suisse, Infomaniak est une entreprise indépendante et durable en pleine croissance.</p>
        </div>

        <div className={styles.hosting_cards}>
            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_1.png" alt="service de mail" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <div>
                        <h3>Service Mail</h3>
                        <p>inclus avec kSuite</p>
                    </div>
                    <p>Gérez vos e-mails, contacts et calendriers en Suisse avec un service mail puissant et évolutif.</p>
                    <Link href="#">Créer des adresses mails →</Link>
                </div>
            </article>
            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_2.png" alt="espace de stockage" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <div>
                        <h3>kDrive</h3>
                        <p>inclus avec kSuite</p>
                    </div>
                    <p>Stockez, partagez et synchronisez vos données dans un cloud souverain qui inclut une suite bureautique.</p>
                    <Link href="#">Stocker, partager et collaborer en ligne →</Link>
                </div>
            </article>
            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_3.png" alt="messagerie gratuite" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <h3>Adresse mail gratuite</h3>
                    <p>Découvrez notre messagerie mail en créant une adresse mail ik.me, etik.com, ikmail.com gratuitement.</p>
                    <Link href="#">Créer une adresse mail gratuitement →</Link>
                </div>
            </article>

            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_4.png" alt="réaliser votre propre site web" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <h3>Site Creator</h3>
                    <p>Réalisez vous-même votre site web à partir de thèmes existants avec notre outil de création facile à prendre en main.</p>
                    <Link href="#">Créer un site professionnel →</Link>
                </div>
            </article>
            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_5.png" alt="réaliser facilement des sites web avec les technologies que vous choisissez" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <h3>Serveur Cloud Managé</h3>
                    <p>Créez facilement des sites ou des apps avec des ressources garanties et les technologies de votre choix.</p>
                    <Link href="#">Créer un Serveur Cloud →</Link>
                </div>
            </article>
            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_6.png" alt="Un service backup pour tout vos appareils" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <h3>Swiss Backup</h3>
                    <p>Une solution de sauvegarde cloud sécurisée pour tous vos appareils : ordinateurs, serveurs, NAS, mobiles, etc.</p>
                    <Link href="#">Sauvegarder des données dans le cloud →</Link>
                </div>
            </article>

            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_7.png" alt="Gérer votre serveur" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <h3>VPS Cloud</h3>
                    <p>Gérez librement votre serveur avec des ressources garanties et la distribution Linux/Windows de votre choix.</p>
                    <Link href="#">Créer un Serveur Cloud Windows/Linux →</Link>
                </div>
            </article>
            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_8.png" alt="Créez vos propres environnements de développement sur mesure" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <h3>Jelastic Cloud (PaaS)</h3>
                    <p>Créez vos environnements de développement sur mesure, payez à la demande et déployez vos applications.</p>
                    <Link href="#">Créer un environnement →</Link>
                </div>
            </article>
            <article className={styles.hosting_card}>
                <figure>
                    <Image src="/hosting/hosting_9.png" alt="Créez vos propres infrastucture sur mesure" width={390} height={207} />
                </figure>
                <div className={styles.hosting_info}>
                    <h3>Public Cloud (IaaS)</h3>
                    <p>Créez votre infrastructure sur mesure, payez à la demande, sans 'vendor lock-in' et avec un support local.</p>
                    <Link href="#">Créer une infrastructure cloud →</Link>
                </div>
            </article>
        </div>
    </section>
    )
}

export default Hosting