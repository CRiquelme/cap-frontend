import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import styles from '@styles/layout.module.scss';

import useCurrentUser from '@hooks/useCurrentUser';
import useSignOut from '@hooks/useSignOut';

function Navbar() {
  const currentUser = useCurrentUser();
  const signOut = useSignOut();

  function items() {
    let response = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url: '/',
      },
    ];
    if (currentUser) {
      response.push({
        label: 'Curriculum',
        icon: 'pi pi-book',
        url: '/curriculums/1',
      });
      response.push({
        label: 'User: ' + currentUser,
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
      return <Button label="Sign In" icon="pi pi-power-on" />;
    }
  }

  return (
    <div className={styles.nav}>
      <Menubar model={items()} end={setHeader} />
    </div>
  );
}

export default Navbar;
