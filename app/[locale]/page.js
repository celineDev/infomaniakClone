'use client';

import Hero from '@/components/hero/Hero';
import Solutions from '@/components/solutions/Solutions';
import Hosting from '@/components/hosting/hosting';
import Features from '@/components/features/Features';
import Secure from '@/components/secure/Secure';
import Expertise from '@/components/expertise/Expertise';
import Ecology from '@/components/ecology/Ecology';

import styles from './page.module.css'
import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className={styles.main}>
       <Hero />
      <Solutions />
      <Hosting />
      {/* <Features /> */}
     <Secure />
     <Expertise />
      <Ecology />
      <p>Don't Move</p>
    </main>
  )
}
