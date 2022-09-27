import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import styles from '@styles/Home.module.scss';
import { OpenAPIProvider } from 'react-openapi-client';

function MyApp({ Component, pageProps }) {
  return (
    <OpenAPIProvider definition="http://localhost:3001/api-docs/swagger.json">
      <Component className={styles.container} {...pageProps} />
    </OpenAPIProvider>
  );
}

export default MyApp;
