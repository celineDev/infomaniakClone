import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

const Secure = () => {

    return (
        <section className={styles.secure}>
            <div className={styles.secure_container}>
                <div className={styles.secure_textBlock}>
                    <figure className={styles.secure_svg}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32V412.8c12.3-2.5 24.1-6.4 35.1-11.5c-2.1-10.8-3.1-21.9-3.1-33.3c0-80.3 53.8-148 127.3-169.2c.5-2.2 .7-4.5 .7-6.8c0-17.7-14.3-32-32-32H32zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
                    </figure>
                    <h3>Confiez vos données à une entreprise éthique et indépendante</h3>
                </div>

                <picture className={styles.secure_machine}>
                    <source
                        media="(max-width: 599px)"
                        srcSet='/secure/secure_smart.png'
                        sizes="582px"
                    />
                    <source
                        media="(max-width: 959px)"
                        srcSet='/secure/secure_tablet.png'
                        sizes="831px"
                    />
                    <source
                        srcSet='/secure/secure_desktop.png'
                        sizes="1280px"
                    />
                    <img src='/secure/secure_desktop.png' alt='Système de refroidissement pour local technique'/>
                </picture>

                <div className={styles.secure_textBlock}>
                    <div className={styles.secure_textBlockSm}>
                        <h4>Respect de la vie privée et des données</h4>
                        <p>Infomaniak appartient à ses fondateurs et à ses employés. Ici, vos données sont traitées par des logiciels développés en Suisse qui respectent le RGPD et la vie privée.</p>
                    </div>
                    <div className={styles.secure_textBlockSm}>
                        <h4>Sécurité et protection des données</h4>
                        <p>Infomaniak est certifiée ISO 27001 et maîtrise de bout en bout ses services pour assurer la sécurité et la confidentialité des données.</p>
                        <figure>
                            <Image src="/secure/secure_iso.png" alt="ISO" width={63} height={75} />
                        </figure>
                    </div>
                    <div className={styles.secure_textBlockSm}>
                        <h4>Un Cloud 100% souverain</h4>
                        <p>Infomaniak conçoit et gère ses propres centres de données en Suisse, et développe ses solutions en interne, à Genève et Winterthur.</p>
                        <Link href="#">Pourquoi choisir infomaniak ? →</Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Secure