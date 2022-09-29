import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import React, { useState, useEffect } from 'react';
import useUsers from 'hooks/useUsers';
import styles from '@styles/layout.module.scss';

function Navbar() {
  const { data, isLoading, isError } = useUsers();
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    data ? setLogged(!!data) : false;
  }, [data]);

  if (isLoading) {
    return 'loading';
  }
  if (isError) {
    return 'Usuario no autenticado';
  }

  let items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/',
    },
  ];

  function setHeader() {
    if (isLogged) {
      return <Button label="Sign Out" icon="pi pi-power-off" />;
    } else {
      return <Button label="Sign In" icon="pi pi-power-on" />;
    }
  }

  return (
    <div className={styles.nav}>
      <Menubar model={items} end={setHeader} />
    </div>
  );
}

export default Navbar;
