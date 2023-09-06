import styles from '@/styles/sidebar.module.css';
import Link from 'next/link';
import upArrow from '@/public/up.png';
import downArrow from '@/public/down.png';
import { useState, useEffect } from 'react';
import menuItems from '@/types/menuItems';

// 수정사항
// - 화살표 변경시 menuItems.dropActive 변화x -> menuItems 자체 정보값 변경 후 재렌더링하도록 수정 필요

export default function Sidebar({ menuItems }: { menuItems: menuItems[] }) {
  function initArrow(dropActive: boolean) {
    return dropActive ? upArrow.src : downArrow.src;
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {menuItems?.map((menuItem) => {
          if (!menuItem.hasDrop) {
            const link = `/${menuItem.link}`;
            return (
              <div>
                <Link href={link} className={styles.link}>
                  {menuItem.name}
                </Link>
              </div>
            );
          } else {
            const [dropActive, setDropActive] = useState(menuItem.dropActive);
            let arrow = initArrow(dropActive);

            useEffect(() => {
              arrow = initArrow(dropActive);
            }, [dropActive]);

            return (
              <>
                <div
                  onClick={() => {
                    console.log(`${dropActive} ${menuItem.dropActive}`);
                    setDropActive(!dropActive);
                    initArrow(dropActive);
                  }}
                >
                  <span>{menuItem.name}</span>
                  <img src={arrow} alt="arrow" className={styles.arrow} />
                </div>
                {menuItem.subItems?.map((subItem) => {
                  const link = `/${subItem.link}`;
                  const className = dropActive ? styles.dropTrue : styles.dropFalse;
                  return (
                    <div className={className}>
                      <Link href={link} className={styles.link}>
                        {subItem.name}
                      </Link>
                    </div>
                  );
                })}
              </>
            );
          }
        })}
      </div>
    </div>
  );
}
