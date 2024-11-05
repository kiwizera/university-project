import Banner from "@/components/banner";
import styles from "./page.module.css";
import bannerMain from "@/../public/banner-main.png";

export default function Home() {
  return (
    <div className={styles.page}>
        <Banner imageSrc={bannerMain} imageAlt="Banner Principal" />
    </div>
  );
}
