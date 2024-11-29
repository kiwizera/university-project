import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav>
        <ul className={styles.nav}>
            <li>
              <Link href="/modelos" className={styles.link}>Modelos</Link>
            </li>
        </ul>
    </nav>
  );
}