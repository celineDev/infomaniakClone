import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '🚀  Hébergement Web, Cloud Computing, Serveur Cloud, Nom de domaine, Messagerie, Streaming Radio et plus encore ! | InfomaniakCreate Next App',
  description: 'Infomaniak, le Cloud Ethique - Nous concevons ce qui se fait de mieux en terme d\'infrastructure web pour faciliter votre succès. Support local et accessible 7/7',
}

export function generateStaticParams() {
  return [{locale: 'fr'}, {locale: 'de'}, {locale: 'en'}, {locale: 'es'}, {locale: 'it'}];
}

export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar/>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
