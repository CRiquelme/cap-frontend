import useUsers from '@hooks/useUsers';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import styles from '@styles/layout.module.scss';
import { useRouter } from 'next/router';

function Navbar() {
  const [isLogged, setLogged] = useState(false);
  const { data, loading } = useUsers();
  const router = useRouter();

  useEffect(() => {
    data ? setLogged(data.name) : false;
  }, [data]);

  if (loading) {
    return 'loading';
  }

  function items() {
    let response = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        url: '/',
      },
    ];
    if (data && data.code != 401) {
      response.push({
        label: 'Curriculum',
        icon: 'pi pi-book',
        url: '/curriculums/1',
      });
      response.push({
        label: 'User: ' + data.name,
        icon: 'pi pi-user',
        disabled: true,
      });
    }
    return response;
  }

  const handleSignOut = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`http://localhost:3001/users/sign_out`, requestOptions)
      .then(() => setLogged(false))
      .then(() => router.push('/'));
  };

  function setHeader() {
    if (isLogged) {
      return <Button label="Sign Out" icon="pi pi-power-off" onClick={handleSignOut} />;
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
