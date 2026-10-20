import styles from './Features.module.css';

export default function Features() {
  const features = [
    { title: "Быстрый старт", desc: "Начните работу за 5 минут без сложных настроек." },
    { title: "Безопасность", desc: "Ваши данные надежно защищены по стандартам шифрования." },
    { title: "Высокая скорость", desc: "Оптимизированная архитектура для мгновенного отклика." },
  ];

  return (
    <section id="features" className={styles.section}>
      <h2 className={styles.heading}>Почему выбирают нас</h2>
      <div className={styles.grid}>
        {features.map((f, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
