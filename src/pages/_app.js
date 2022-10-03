import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'; //icons
import Navbar from '@components/layout/Navbar';
import styles from '@styles/Home.module.scss';
import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <OpenAPIProvider definition="http://localhost:3001/api-docs/swagger.json">
        <Navbar />
        <Component className={styles.container} {...pageProps} />
      </OpenAPIProvider>
    </div>
  );
}

export default MyApp;
