import Image from 'next/image';
import styles from './header.module.css';
import iconBravo from '@/../public/icon-bravo.svg';
import Nav from './nav';
import UserButton from './userButton';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={`container container_flex`}>
            <div className={styles.brand_nav}>
                <div className={styles.brand}>
                  <Link href="/">
                    <Image src={iconBravo} alt='Bravo' />
                  </Link>
                </div>
                <div>
                  <Nav />
                </div>
            </div>
            <div>
              <UserButton />
            </div>
        </div>
    </div>
  );
}