import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

import  { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Services = () => {
    const [windowWidth, setWindowWidth] = useState(0)

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

    return (
    <section className={styles.services}>
        <div className={styles.services_title}>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M480 32c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9L381.7 53c-48 48-113.1 75-181 75H192 160 64c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64l0 128c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V352l8.7 0c67.9 0 133 27 181 75l43.6 43.6c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V300.4c18.6-8.8 32-32.5 32-60.4s-13.4-51.6-32-60.4V32zm-64 76.7V240 371.3C357.2 317.8 280.5 288 200.7 288H192V192h8.7c79.8 0 156.5-29.8 215.3-83.3z"/></svg>
            </div>
            <h3>Nos services évoluent en permanence</h3>
            <Link href="#">Suivre les actualités d'Infomaniak →</Link>
        </div>

        {windowWidth > 959 ? (
            <div className={styles.service_cards}>
                <article className={styles.service_card}>
                    <figure>
                        <Image src="/services/service_01.png" alt="Une data center" width={390} height={207} />
                    </figure>
                    <div className={styles.service_info}>
                        <p>Datacenter</p>
                        <h4>Les datacenters doivent chauffer nos villes</h4>
                    </div>
                </article>
                <article className={styles.service_card}>
                    <figure>
                        <Image src="/services/service_02.png" alt="messagerie kChat" width={390} height={207} />
                    </figure>
                    <div className={styles.service_info}>
                        <p>kSuite</p>
                        <h4>kChat : la messagerie instantannée sécurisée avec une IA souveraine</h4>
                    </div>
                </article>
                <article className={styles.service_card}>
                    <figure>
                        <Image src="/services/service_03.png" alt="Alexandre Patti - Compliance officer" width={390} height={207} />
                    </figure>
                    <div className={styles.service_info}>
                        <p>Entreprise</p>
                        <h4>Comprendre les certifications ISO : à quoi servent-elles et sont-elles vraiment utiles ?</h4>
                    </div>
                </article>
            </div>
        ) : (
            <Swiper pagination={true} modules={[Pagination]} className={styles.service_cards}>
                <SwiperSlide className={styles.service_card}>
                    <figure>
                        <Image src="/services/service_01.png" alt="Une data center" width={390} height={207} />
                    </figure>
                    <div className={styles.service_info}>
                        <p>Datacenter</p>
                        <h4>Les datacenters doivent chauffer nos villes</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.service_card}>
                    <figure>
                        <Image src="/services/service_02.png" alt="messagerie kChat" width={390} height={207} />
                    </figure>
                    <div className={styles.service_info}>
                        <p>kSuite</p>
                        <h4>kChat : la messagerie instantannée sécurisée avec une IA souveraine</h4>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.service_card}>
                    <figure>
                        <Image src="/services/service_03.png" alt="Alexandre Patti - Compliance officer" width={390} height={207} />
                    </figure>
                    <div className={styles.service_info}>
                        <p>Entreprise</p>
                        <h4>Comprendre les certifications ISO : à quoi servent-elles et sont-elles vraiment utiles ?</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        )}
    </section>
    )
}

export default Services