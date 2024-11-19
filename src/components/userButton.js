import userIcon from '@/../public/user-icon.png';

import styles from './userButton.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function UserButton() {
  return (
    <Link href="/login">
      <Image src={userIcon} alt='Usuário' className={styles.user} />
    </Link>
  )
}