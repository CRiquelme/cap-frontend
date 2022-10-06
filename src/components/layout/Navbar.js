import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import Link from 'next/link';
import styles from '@styles/layout.module.scss';

import useCurrentUser from '@hooks/useCurrentUser';
import useSignOut from '@hooks/useSignOut';
import { useRouter } from 'next/router';

function Navbar() {
  const currentUser = useCurrentUser();
  const signOut = useSignOut();
  const router = useRouter();

  function items() {
    let response = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          router.push('/');
        },
      },
    ];
    if (currentUser) {
      response.push({
        label: 'Curriculum',
        icon: 'pi pi-book',
        command: () => {
          router.push('/curriculums/1');
        },
      });
      response.push({
        label: 'User: ' + currentUser.name,
        icon: 'pi pi-user',
        disabled: true,
      });
    }
    return response;
  }

  function setHeader() {
    if (currentUser) {
      return <Button label="Sign Out" icon="pi pi-power-off" onClick={signOut} />;
    } else {
      return (
        <Link href="/users/sign_in">
          <Button label="Sign In" icon="pi pi-power-on" />
        </Link>
      );
    }
  }

  return (
    <div className={styles.nav}>
      <Menubar model={items()} end={setHeader} />
    </div>
  );
}

export default Navbar;
