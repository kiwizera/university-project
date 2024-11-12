// import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner({ imageSrc }) {
  return (
    <div className={styles.banner} style={{backgroundImage: `url(${imageSrc.src})`}}></div>
  );
}