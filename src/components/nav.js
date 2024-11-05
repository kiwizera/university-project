import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav>
        <ul className={styles.nav}>
            <li>Modelos</li>
            <li>Serviços</li>
            <li>Contato</li>
        </ul>
    </nav>
  );
}