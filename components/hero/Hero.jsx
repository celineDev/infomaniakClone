import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <picture className={styles.hero_banner}>
                <source
                    media="(max-width: 620px)"
                    srcSet='/hero/banner_smart.png'
                    sizes="620px"
                />
                <source
                    media="(max-width: 1254px)"
                    srcSet='/hero/banner_tablet.png'
                    sizes="1254px"
                />
                <source
                    srcSet='/hero/banner_desktop.png'
                    sizes="1280px"
                />
                <img src='/hero/banner_desktop.png' alt='banner'/>
            </picture>
            <div className={styles.hero_titles}>
                <div className={styles.hero_title}>
                    <p>infomaniak</p>
                    <div>
                        <p>The Ethical Cloud</p>
                        <figure>
                            <img src="/hero/flag_ch.png" alt="Suisse Flag" width={10} height={10} />
                        </figure>
                    </div>
                </div>
                <div className={styles.hero_form}>
                    <div className={styles.hero_input}>
                        <p>Commencez par un nom de domaine :</p>
                        <form>
                            <p>www.</p>
                            <div className={styles.input}>
                                <input  type="text" placeholder='votre-domaine.com' />
                                <div className={styles.slide}>
                                    <button>
                                        <figure>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">{/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                                        </figure>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={styles.hero_price}>
                        <div>
                            <div className={styles.hero_priceContainer}>
                                <figure>
                                    <Image src="/hero/flag_fr.png" alt="French Flag" width={17} height={17} />
                                    <figcaption>.FR <span>6,49€</span></figcaption>
                                </figure>
                                <div>
                                    <p>pour
                                        <span>4,50€</span>
                                    </p>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                    </figure>
                                </div>
                            </div>
                            <div className={styles.hero_priceContainer}>
                                <p>.COM <span>11,40€</span></p>
                                <div>
                                    <p>pour
                                        <span>7,40€</span>
                                    </p>
                                    <figure>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <Link href="#">Toutes les extensions →</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero