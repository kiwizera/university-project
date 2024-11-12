import styles from './sign-up-form.module.css';
import AuthActions from '../actions/auth-actions';
import Link from 'next/link';

export default function SignUpForm() {
    return (
        <div className={styles.login_card}>
            <h1>Registrar-se</h1>
            <form action={AuthActions.createAccount}>
                <input type='text' id='name' name='name' placeholder='Nome' />
                <input type='email' id='email' name='email' placeholder='E-mail' required />
                <input type='password' id='password' name='password' placeholder='Senha' required />
                {/* <button onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 11C13.447 11 13 11.448 13 12C13 12.551 12.552 13 12 13C11.448 13 11 12.551 11 12C11 11.449 11.448 11 12 11C12.553 11 13 10.552 13 10C13 9.448 12.553 9 12 9C10.346 9 9 10.346 9 12C9 13.654 10.346 15 12 15C13.654 15 15 13.654 15 12C15 11.448 14.553 11 14 11ZM12 16C8.474 16 5.581 14.011 4.183 12C5.581 9.989 8.474 8 12 8C15.526 8 18.419 9.989 19.817 12C18.419 14.011 15.526 16 12 16ZM21.868 11.503C20.299 8.764 16.64 6 12 6C7.36 6 3.701 8.764 2.132 11.503C1.956 11.811 1.956 12.189 2.132 12.497C3.701 15.236 7.361 18 12 18C16.639 18 20.299 15.236 21.868 12.497C22.044 12.189 22.044 11.811 21.868 11.503Z" fill="#2E2D37"/>
                    </svg>
                </button> */}
                <button type='submit'>Criar conta</button>
            </form>
            <span>Já tem uma conta? <Link href="/login">Entrar</Link></span>
        </div>
    );
}