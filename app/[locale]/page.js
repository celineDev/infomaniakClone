'use client';

import Hero from '@/components/hero/Hero';
import Solutions from '@/components/solutions/Solutions';
import Hosting from '@/components/hosting/hosting';

import styles from './page.module.css'
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
      <Hero />
      <Solutions />
      <Hosting />
      <p>Don't Move</p>
    </main>
  )
}
