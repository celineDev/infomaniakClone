import React from 'react'
import styles from './page.module.css'
import { useTranslations } from 'next-intl';

const Switch = () => {
    const t = useTranslations();
    return (
        <div className={styles.switch}>
            <span>{t("switch.taxes")}</span>
            <p>{t("switch.excl")}</p>
            <p>{t("switch.incl")}</p>
        </div>
    )
}

export default Switch