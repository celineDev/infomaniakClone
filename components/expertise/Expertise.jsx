import React from 'react'
import styles from './page.module.css'

const Expertise = () => {

    return (
        <section className={styles.expertise}>
            <div className={styles.expertise_container}>
                <div className={styles.expertise_infomaniak}>
                    <h3>infomaniak</h3>
                    <p>+25ans d'expertise et d'innovation</p>
                </div>
                <div className={styles.expertise_numbers}>
                    <div>
                        <p>+ 1 Mio</p>
                        <p>d'utilisateurs</p>
                    </div>
                    <div>
                        <p>+ 200</p>
                        <p>employé(e)s</p>
                    </div>
                    <div>
                        <p>+ 70%</p>
                        <p>des effectifs en R&D</p>
                    </div>
                    <div>
                        <p>32,35%</p>
                        <p>de croissance en Europe en 2020</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise