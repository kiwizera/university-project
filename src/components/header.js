import Image from 'next/image';
import styles from './header.module.css';
import iconBravo from '@/../public/icon-bravo.svg';

export default function Header() {
  return (
    <div className={styles.header}>
        <div className={`container container_flex`}>
            <div className={styles.brand_nav}>
                <div className={styles.brand}><Image src={iconBravo} alt='Bravo' /></div>
                <div>Nav</div>
            </div>
            <div>Nav 2</div>
        </div>
    </div>
  );
}