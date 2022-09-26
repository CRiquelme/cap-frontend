import styles from '@styles/Home.module.scss';
import { OpenAPIProvider } from 'react-openapi-client';

function MyApp({ Component, pageProps }) {
  return (
    <OpenAPIProvider definition="http://localhost:3001/api-docs/index.html">
      <Component className={styles.container} {...pageProps} />
    </OpenAPIProvider>
  );
}

export default MyApp;
