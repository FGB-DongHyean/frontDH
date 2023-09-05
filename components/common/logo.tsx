import logo from '@/public/logo.png';
import styles from '@/styles/logo.module.css';

export default function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={logo.src} alt="logo" />
      </div>
    </div>
  );
}
