'use client';

import Hero from '@/components/hero/Hero';
import Solutions from '@/components/solutions/Solutions';
import Hosting from '@/components/hosting/hosting';
import Features from '@/components/features/Features';
import Secure from '@/components/secure/Secure';
import Expertise from '@/components/expertise/Expertise';
import Ecology from '@/components/ecology/Ecology';
import Services from '@/components/services/Services';
import Newsletter from '@/components/newsletter/Newsletter';
import Support from '@/components/support/Support';

import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <Hero />
      <Solutions />
      <Hosting />
      <Features />
      <Secure />
      <Expertise />
      <Ecology />
      <Services />
      <Newsletter />
      <Support />
    </main>
  )
}
