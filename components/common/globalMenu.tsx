import styles from '@/styles/globalMenu.module.css';
import Logo from './logo';

export default function GlobalMenu({ pageNav }: { pageNav: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.pageNav}>
        <div>{pageNav}</div>
      </div>
    </div>
  );
}
