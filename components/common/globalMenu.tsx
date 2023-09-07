import styles from '@/styles/globalMenu.module.css';
import Logo from './logo';
import Profile from './profile';
import React from 'react';

// 수정사항
// - pageNav > 를 기준으로 점차 크기 작아지도록 설정

export default function GlobalMenu({ pageNav }: { pageNav: string }) {
  const pageNavs = pageNav.split(' > ');
  var pageNavSize = 26;

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.pageTitle}>
        <div className={styles.pageNav}>
          {pageNavs?.map((pageNav) => {
            pageNavSize -= 4;

            if (pageNav === pageNavs[0]) {
              return (
                <>
                  <span></span>
                  <span
                    style={
                      {
                        'font-size': pageNavSize,
                      } as React.CSSProperties
                    }
                  >
                    {pageNav}
                  </span>
                </>
              );
            }
            return (
              <>
                <span></span>
                <span
                  style={
                    {
                      'font-size': pageNavSize,
                    } as React.CSSProperties
                  }
                >
                  &nbsp;&gt; {pageNav}
                </span>
              </>
            );
          })}
        </div>
        <div className={styles.profile}>
          <Profile></Profile>
        </div>
      </div>
    </div>
  );
}
