import Link from 'next/link';
import styles from './sidebar.module.css';

export default function Sidebar({ data, active }) {
    return (
        <div className={styles.sidebar}>
            <h2>{data.usuario_nome}</h2>
            <h3>{data.usuario_email}</h3>
            <hr />
            <Link href='/garagem' className={`${styles.item} ${active == 'garagem' ? styles.active_item : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                    <path fill="#2E2D37" fillRule="evenodd" d="M13.399 19c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m8-3h-4.142c-.447-1.72-2-3-3.858-3s-3.411 1.28-3.858 3H4.399v-2h2a1 1 0 0 0 0-2h-2v-1.144l2.31-.361c1.907-.298 3.712-1.253 5.277-2.817C13.076 6.611 14.64 6 16.275 6h5.124a1 1 0 0 0 0-2h-5.124c-2.185 0-4.204.798-5.687 2.247l-.071.071C9.309 7.526 7.886 8.287 6.4 8.519l-3.156.493a1 1 0 0 0-.846.988v7a1 1 0 0 0 1 1H9.54c.447 1.72 2 3 3.858 3s3.41-1.28 3.858-3h4.142a1 1 0 0 0 0-2" clipRule="evenodd"></path>
                </svg>
                Pedidos
            </Link>
            <Link href='/garagem/favoritos' className={`${styles.item} ${active == 'favoritos' ? styles.active_item : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                    <path fill="#2E2D37" fillRule="evenodd" d="M8.427 6.005q-.245 0-.479.037C6.716 6.236 5.4 7.216 5.4 9.385c0 4.025 5.272 7.737 7 8.845 1.728-1.108 7-4.82 7-8.845 0-2.17-1.318-3.15-2.55-3.343-1.276-.2-2.917.403-3.499 2.204a.999.999 0 0 1-1.903 0c-.51-1.582-1.839-2.241-3.02-2.241m4.166 14.284h-.389c-.184 0-.365-.052-.523-.148C9.738 18.947 3.4 14.645 3.4 9.385c0-3.213 2.13-4.986 4.24-5.318 1.87-.294 3.634.413 4.76 1.797 1.126-1.383 2.89-2.094 4.76-1.797 2.111.332 4.24 2.105 4.24 5.318 0 5.26-6.34 9.562-8.283 10.756a1 1 0 0 1-.523.148" clipRule="evenodd"></path>
                </svg>
                Favoritos
            </Link>
            <a href={`${process.env.SITE_URL}/api/logout`} className={styles.item}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none">
                    <path fill="#2E2D37" d="M20.253 12.38c.05-.12.08-.25.08-.38a1 1 0 0 0-.3-.7l-2.72-2.72a.996.996 0 1 0-1.41 1.41l1.02 1.01h-4.59c-.55 0-1 .45-1 1s.45 1 1 1h4.59l-1.02 1.02a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l2.72-2.72q.135-.135.21-.33"></path><path fill="#2E2D37" d="M18.333 16c-.55 0-1 .45-1 1v2c0 .55-.45 1-1 1h-9c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v1.99c0 .56.45 1.01 1.01 1.01.55 0 .99-.44.99-.99V5c0-1.66-1.34-3-3-3h-9c-1.66 0-3 1.34-3 3v14c0 1.66 1.34 3 3 3h9c1.66 0 3-1.34 3-3v-2c0-.55-.45-1-1-1"></path>
                </svg>
                Sair
            </a>
        </div>
    );
}
