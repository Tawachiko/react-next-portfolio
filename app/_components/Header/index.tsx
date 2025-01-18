import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Menu from '../Menu';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logoLink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <link href="/news">ニュース</link>
          </li>
          <li>
            <link href="/members">メンバー</link>
          </li>
            <link href="/contact">お問い合わせ</link>
        </ul>
      </nav>
      <Menu />
    </header>
  );
}