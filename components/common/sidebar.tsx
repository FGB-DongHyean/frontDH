import styles from '@/styles/sidebar.module.css';
import Link from 'next/link';
import upArrow from '@/public/up.png';
import downArrow from '@/public/down.png';
import { useState, useEffect } from 'react';
import menuItems from '@/types/menuItems';

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
              <div className={styles.category}>
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
                  className={styles.category}
                  onClick={() => {
                    //console.log(`${dropActive} ${menuItem.dropActive}`);
                    setDropActive(!dropActive);
                    initArrow(dropActive);
                  }}
                >
                  <span>{menuItem.name}</span>
                  <div className={styles.arrow}>
                    <img src={arrow} alt="arrow" />
                  </div>
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
