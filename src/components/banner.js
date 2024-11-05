import Image from 'next/image';
import styles from './banner.module.css';

export default function Banner({ imageSrc, imageAlt }) {
  return (
    <Image className={styles.banner} src={imageSrc} alt={imageAlt} />
  );
}