'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize(); // 初回実行
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      {/* ハンバーガーメニュー（スマホ用） */}
      {!isDesktop && (
  <button className={cx(styles.menuButton, isOpen && 'hidden')} onClick={open}>
    <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
  </button>
)}
      {/* ナビゲーションメニュー */}
      <nav className={cx(styles.nav, (isOpen || isDesktop) && styles.open, isDesktop && styles.desktop)}>
        <ul className={styles.items}>
          <li>
            <Link href="/news" onClick={close}>ニュース</Link>
          </li>
          <li>
            <Link href="/aboutme" onClick={close}>僕のこと</Link>
          </li>
          <li>
            <Link href="/contact" onClick={close}>お問い合わせ</Link>
          </li>
        </ul>
        
        {/* 閉じるボタン（ハンバーガーメニュー内） */}
        {!isDesktop && (
  <button className={cx(styles.closeButton, !isOpen && 'hidden')} onClick={close}>
    <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
  </button>
)}
      </nav>
    </div>
  );
}
