import userIcon from '@/../public/user-icon.png';

import styles from './userButton.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AuthService from '@/modules/auth/services/auth-service';
import { cookies } from 'next/headers';

export default async function UserButton() {

  const session = await AuthService.isSessionValid();
  let userName;

  if (session) {
    const jwt = (await cookies()).get('session').value;
    const {name} = await AuthService.openSessionToken(jwt);
    userName = name
  }

  return (
    <Link href={`/${session ? 'garagem' : 'login'}`} className={styles.link}>
      <Image src={userIcon} alt='Usuário' className={styles.user} />
      <span>{session ? userName : 'Entrar'}</span>
    </Link>
  )
}