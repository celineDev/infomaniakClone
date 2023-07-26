'use client';

import Hero from '@/components/hero/Hero';
import styles from './page.module.css'
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
      <Hero />
      <p>Don't Move</p>
    </main>
  )
}
