import styles from '@/styles/adminFrame.module.css';
import Sidebar from '../common/sidebar';
import menuItems from '@/types/menuItems';
import Content from '../common/content';
import GlobalMenu from '../common/globalMenu';

export default function AdminFrame({ menuItems, pageNav }: { menuItems: menuItems[]; pageNav: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.globalMenu}>
        <GlobalMenu pageNav={pageNav} />
      </div>
      <div className={styles.subContainer}>
        <div className={styles.leftMenu}>
          <Sidebar menuItems={menuItems} />
        </div>
        <div className={styles.content}>
          <Content />
        </div>
      </div>
    </div>
  );
}
