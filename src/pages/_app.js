import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css'; //icons
import Navbar from '@components/layout/Navbar';
import AuthenticationProvider from '@components/layout/AuthenticationProvider';
import UnauthGuard from '@components/guards/UnauthGuard';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <AuthenticationProvider>
        <Navbar />
        <UnauthGuard>
          <Component {...pageProps} />
        </UnauthGuard>
      </AuthenticationProvider>
    </div>
  );
}

export default MyApp;
