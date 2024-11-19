import Nav from './nav';

import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className='container container_flex'>
            <div>
              <Nav />
            </div>
            <div>Social Media</div>
        </div>
        <div className='container'>
            <p>Copyright © 2024 Bravo Automóveis.</p>
            <p>All rights reserved.</p>
        </div>
    </div>
  );
}