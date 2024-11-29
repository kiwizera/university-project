import styles from './container.module.css';

export default function Container({ children, className=null }) {
    return (
        <div className={`${styles.container} ${className ? className : ''}`}>{children}</div>
    );
}