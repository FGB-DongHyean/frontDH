import styles from '@/styles/profile.module.css';
import profile from '@/public/profile.jpg';

/* 수정 - parameter로 onClick / onClick 함수로 profile page 이동 기능 구현*/

export default function Profile() {
  return (
    <button
      className={styles.container}
      onClick={() => {
        console.log('Clcik!');
      }}
    >
      <img src={profile.src} alt="profile" />
    </button>
  );
}
