import Banner from "@/components/banner";
import styles from "./page.module.css";
import urusIMG from "@/../public/urus.jpg";
import tigerIMG from "@/../public/tiger.jpg";

export default function Home() {
  return (
    <div className={styles.page}>
        <Banner imageSrc={urusIMG} />
        <Banner imageSrc={tigerIMG} />
    </div>
  );
}
