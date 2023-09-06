import styles from '@/styles/profile.module.css';
import profile from '@/public/profile.jpg';

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
