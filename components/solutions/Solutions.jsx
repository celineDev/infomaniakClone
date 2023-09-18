import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'

const Solutions = () => {
    return (
        <section className={styles.solutions}>
            <div className={styles.solutions_container}>
                <article className={styles.solution}>
                    <div className={styles.solution_videoContainer}>
                        <video controls>
                            <source src="/solutions/Présentation dinfomaniak, alternative européenne aux GAFAM.mp4" type="video/mp4" />
                            <source src="/videos/ma_video.webm" type="video/webm" />
                            <source src="/videos/ma_video.ogv" type="video/ogg" />
                            Votre navigateur ne prend pas en charge la vidéo.
                        </video>
                    </div>
                    <div className={styles.solution_infoContainer}>
                        <p>Dès 5,75 € / mois</p>
                        <h3>Créez votre site et vos e-mails en un clic !</h3>
                        <p>Votre domaine avec un hébergement web optimisé pour WordPress, Joomla, Drupal et +100 CMS</p>
                        <button>Je me lance</button>
                    </div>
                </article>

                <article className={styles.solution}>
                    <figure>
                        <Image src="/solutions/solution_02.png" alt="Collaborez pour un cloud éthique" height={268} width={580} />
                    </figure>
                    <div className={styles.solution_infoContainer}>
                        <p className={styles.tag}>Nouveau</p>
                        <h3>Collaborez au sein de votre entreprise dans un cloud éthique</h3>
                        <p>Simplifiez la gestion de vos applications de productivité avec une solution unifiée et un support local pour votre entreprise.</p>
                        <button>Découvrir kSuite</button>
                    </div>
                </article>
            </div>

            <div className={styles.solution_company}>
                <h3>Ils nous font confiance</h3>
                <div className={styles.carousel_wrapper}>
                    <div className={styles.solution_carousel}>
                        <figure>
                            <Image src="/solutions/rtbf.png" alt="rtbf" height={26} width={98} />
                        </figure>
                        <figure>
                            <Image src="/solutions/coop.png" alt="coop" height={30} width={99} />
                        </figure>
                        <figure>
                            <Image src="/solutions/efpl.png" alt="efpl" height={30} width={100} />
                        </figure>
                    </div>
                    <div className={styles.solution_carousel}>
                        <figure>
                            <Image src="/solutions/rtbf.png" alt="rtbf" height={26} width={98} />
                        </figure>
                        <figure>
                            <Image src="/solutions/coop.png" alt="coop" height={30} width={99} />
                        </figure>
                        <figure>
                            <Image src="/solutions/efpl.png" alt="efpl" height={30} width={100} />
                        </figure>
                    </div>
                    <div className={styles.solution_carousel}>
                        <figure>
                            <Image src="/solutions/rtbf.png" alt="rtbf" height={26} width={98} />
                        </figure>
                        <figure>
                            <Image src="/solutions/coop.png" alt="coop" height={30} width={99} />
                        </figure>
                        <figure>
                            <Image src="/solutions/efpl.png" alt="efpl" height={30} width={100} />
                        </figure>
                    </div>
                    <div className={styles.solution_carousel}>
                        <figure>
                            <Image src="/solutions/rtbf.png" alt="rtbf" height={26} width={98} />
                        </figure>
                        <figure>
                            <Image src="/solutions/coop.png" alt="coop" height={30} width={99} />
                        </figure>
                        <figure>
                            <Image src="/solutions/efpl.png" alt="efpl" height={30} width={100} />
                        </figure>
                    </div>
                    <div className={styles.solution_carousel}>
                        <figure>
                            <Image src="/solutions/rtbf.png" alt="rtbf" height={26} width={98} />
                        </figure>
                        <figure>
                            <Image src="/solutions/coop.png" alt="coop" height={30} width={99} />
                        </figure>
                        <figure>
                            <Image src="/solutions/efpl.png" alt="efpl" height={30} width={100} />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions