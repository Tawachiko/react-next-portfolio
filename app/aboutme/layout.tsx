import Script from 'next/script';
import Sheet from '@/app/_components/Sheet';
import Hero from '@/app/_components/Hero';

export const metadata = {
  title: '僕のこと',
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="about me" sub="僕のこと" />
      <Sheet>{children}</Sheet>
      
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXX');
        `}
      </Script>
    </>
  );
}
