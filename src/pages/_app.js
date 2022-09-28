import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import styles from '@styles/Home.module.scss';

function MyApp({ Component, pageProps }) {
  return <Component className={styles.container} {...pageProps} />;
}

export default MyApp;
