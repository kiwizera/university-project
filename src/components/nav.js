import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav>
        <ul className={styles.nav}>
            <li>
              <Link href="/modelos" className={styles.link}>Modelos</Link>
            </li>
            <li>Serviços</li>
            <li>Contato</li>
        </ul>
    </nav>
  );
}