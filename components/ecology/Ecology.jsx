import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'

const Ecology = () => {

    return (
        <section className={styles.ecology}>
            <picture className={styles.ecology_background}>
                <source
                    srcSet='/ecology/ecology_1920x1311.png'
                    sizes="1920px"
                />
                <img src='/ecology/ecology_1920x1311.png' alt='forest'/>
            </picture>
            <div className={styles.ecology_textContainer}>
                <div>
                    <div className={styles.ecology_title}>
                        <figure>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"/></svg>
                        </figure>
                        <blockquote>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>
                            Nous polluons et nous ne faisons pas de greenwashing.
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"/></svg>
                            <br />

                            <figure>
                                <Image src="/ecology/ecology_rauru.png" alt="Rauru - Tears Of The Kingdom" width={25} height={25} />
                                <figcaption>Boris Siegenthaler - CSO</figcaption>
                            </figure>

                        </blockquote>
                    </div>

                    <div className={styles.ecology_textBlock}>
                        <div className={styles.ecology_textBlockSm}>
                            <h4>Énergie 100% renouvelable</h4>
                            <p>Tous nos services et nos bureaux sont exclusivement alimentés avec de l\'énergie renouvelable certifiée.</p>
                        </div>
                        <div className={styles.ecology_textBlockSm}>
                            <h4>Datacenters sans climatisation</h4>
                            <p>Nous avons développé des datacenters qui sont refroidis uniquement avec de l'air extérieur filtré.</p>
                        </div>
                        <div className={styles.ecology_textBlockSm}>
                            <h4>Serveurs utilisés jusqu\'à 15 ans</h4>
                            <p>L'achat de nouveaux serveurs est ce qui émet le plus de CO2 chez Infomaniak. Nous agissons à la source.</p>
                        </div>
                        <div className={styles.ecology_textBlockSm}>
                            <h4>200% de compensation CO2</h4>
                            <p>La biodiversité et le climat sont des urgences.
                            Compenser à double est une nécessité.</p>
                        </div>

                        <button className={styles.ecology_button}>Tous nos engagements</button>
                        <Link  className={styles.ecology_link} href="#">Pourquoi choisir infomaniak ? →</Link>

                        <figure className={styles.ecology_iso}>
                            <Image src="/ecology/ecology_iso_01.png" alt="ISO" width={63} height={75} />
                            <Image src="/ecology/ecology_iso_02.png" alt="ISO" width={63} height={75} />
                        </figure>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ecology