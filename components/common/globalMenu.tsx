import styles from '@/styles/globalMenu.module.css';
import Logo from './logo';
import profile from '@/public/profile.jpg';
import Profile from './profile';

// 수정사항
// - pageNav > 를 기준으로 점차 크기 작아지도록 설정

export default function GlobalMenu({ pageNav }: { pageNav: string }) {
  const pageNavs = pageNav.split(' > ');

  function clickEvent() {
    console.log('Click!');
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.pageNav}>
        <div>
          {pageNavs?.map((pageNav) => {
            return <span>{pageNav}</span>;
          })}
        </div>
        <div className={styles.profile}>
          <Profile></Profile>
        </div>
        <button className={styles.profile} onClick={clickEvent}>
          <img src={profile.src} alt="profile"></img>
        </button>
      </div>
    </div>
  );
}
