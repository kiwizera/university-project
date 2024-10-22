import styles from "./page.module.css";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className={styles.page}>
        <Header></Header>
    </div>
  );
}
