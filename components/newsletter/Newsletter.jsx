import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const Newsletter = () => {
    const [windowWidth, setWindowWidth] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

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

    const checkbox = () => {
        setIsVisible((prev) => !prev);
    }

    return (
    <section className={styles.newsletter}>
        <div className={styles.newsletter_container}>
            <div className={styles.newsletter_titles}>
                <p>Restez aux premières loges</p>
                <p>Pas de spam - Uniquement des articles rédigés avec ❤️</p>
            </div>
            <form className={styles.newsletter_form}>
                {windowWidth > 959 ? (
                <div className={styles.newsletter_input}>
                    <input type="text" placeholder='Entrez votre meilleure adresse mail' />
                    <div className={styles.newsletter_button}>
                        <button>Je m'abonne !</button>
                    </div>
                </div>
                ) : windowWidth > 599 ? (
                <div className={styles.newsletter_input}>
                    <input type="text" placeholder='Entrez votre e-mail' />
                    <div className={styles.newsletter_button}>
                        <button>Je m'abonne !</button>
                    </div>
                </div>
                ) : (
                <div className={styles.newsletter_input}>
                    <input type="text" placeholder='Entrez votre e-mail' />
                    <div  className={styles.newsletter_button}>
                        <button>
                            <figure>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
                            </figure>
                        </button>
                    </div>
                </div>
                )}

                <div className={`${styles.newsletter_checkbox}`} onClick={checkbox}>
                    <span></span>
                    <figure>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" style={{ visibility: isVisible ? 'inherit' : 'hidden' }}><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    </figure>
                    <input type="checkbox" />
                    <label>J'accepte de recevoir la newsletter mensuelle et les nouveaux articles de blog d'infomaniak. <a href="#">Nous respectons vox données</a> et vous pourrez vous désinscrire à tout moment.</label>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Newsletter