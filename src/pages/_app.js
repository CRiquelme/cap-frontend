import '../styles/globals.css';
import { OpenAPIProvider } from 'react-openapi-client';

function MyApp({ Component, pageProps }) {
  return (
    <OpenAPIProvider definition="http://localhost:3001/api-docs/index.html">
      <Component {...pageProps} />
    </OpenAPIProvider>
  );
}

export default MyApp;
