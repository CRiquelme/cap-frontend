import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'; //icons
import Navbar from '@components/layout/Navbar';
import AuthenticationProvider from '@components/layout/AuthenticationProvider';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthenticationProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthenticationProvider>
    </div>
  );
}

export default MyApp;
