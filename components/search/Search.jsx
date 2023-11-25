import React, { useState, useEffect } from 'react'
import styles from './page.module.css'

const Search = () => {
    const [placeholder, setPlaceholder] = useState('Rechercher un produit, un mot clé')

    useEffect(() => {
        const updatePlaceholder = () => {
            if (window.innerWidth < 1253) {
                setPlaceholder('Rechercher un produit ...')
            } else {
                setPlaceholder('Rechercher un produit, un service ...')
            }
        }

        updatePlaceholder();
        window.addEventListener('resize', updatePlaceholder);

        return () => {
            window.removeEventListener('resize', updatePlaceholder)
        };
    }, []);

    return (
        <form className={`${styles.container} ${styles.hide_for_desktop}`}>
            <input aria-label="Ce que vous recherchez" type="text" placeholder={placeholder} />
            <div className={styles.control}>
                <figure className={styles.search}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#666666'>{/* Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                </figure>
                <div className={styles.cross}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </form>
    )
}

export default Search