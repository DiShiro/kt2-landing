import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Создавайте будущее вместе с нами</h1>
      <p className={styles.subtitle}>Инновационная платформа для вашего бизнеса. Начните прямо сейчас.</p>
      <button className={styles.cta}>Попробовать бесплатно</button>
    </section>
  );
}
