import styles from '@/styles/adminFrame.module.css';
import Logo from '../common/logo';
import Sidebar from '../common/sidebar';
import menuItems from '@/types/menuItems';
import PageTitle from '../common/pageTitle';
import Content from '../common/content';
import GlobalMenu from '../common/globalMenu';

export default function AdminFrame({ menuItems, pageNav }: { menuItems: menuItems[]; pageNav: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.globalMenu}>
        <GlobalMenu pageNav={pageNav} />
      </div>
      <Sidebar menuItems={menuItems} />
      <Content />
    </div>
  );
}
