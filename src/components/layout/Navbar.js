import React, { useState, useEffect } from 'react';
import { useOperation } from 'react-openapi-client';
import Link from 'next/link';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import styles from '@styles/layout.module.scss';

function Navbar() {
  const [isLogged, setLogged] = useState(false);
  const { loading, data } = useOperation('getCurrentUser');

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
    if (data) {
      response.push({
        label: 'User: ' + data.name,
        icon: 'pi pi-user',
        disabled: true,
      });
    }
    return response;
  }

  function setHeader() {
    if (isLogged) {
      return <Button label="Sign Out" icon="pi pi-power-off" />;
    } else {
      return (
        <Link href="/users/sign_in">
          <Button label="Sign In" href="/users/sign-in" icon="pi pi-power-on" />
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
