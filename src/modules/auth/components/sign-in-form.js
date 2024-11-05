import styles from './sign-up-form.module.css';
import AuthActions from '../actions/auth-actions';
import Link from 'next/link';

export default function SignInForm() {
    return (
        <div className={styles.login_card}>
            <h1>Login</h1>
            <form action={AuthActions.login}>
                <input type='email' id='email' name='email' placeholder='E-mail' />
                <input type='password' id='password' name='password' placeholder='Senha' />
                <input type='submit' value='Entrar' />
            </form>
            <span>Não tem uma conta? <Link href="/registrar">Crie a sua</Link></span>
        </div>
    );
}