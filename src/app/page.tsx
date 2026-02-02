import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <section style={{ height: '100vh' }} />
          <Hero />
          <section style={{ height: '200vh' }} />
        </div>
      </main>
    </div>
  );
}
