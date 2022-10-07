import Link from 'next/link';
import doh from '@utils/images/doh.png';
import Image from 'next/image';
import { Button } from 'primereact/button';
import styles from '@styles/errorPage.module.scss';

export default function FourOhFour() {
  return (
    <>
      <div className={styles.errorPage}>
        <Image src={doh} alt="404" />
        <div className={styles.wrapInfoError}>
          <h1>404 - Página no encontrada</h1>
          <div className={styles.wrapButtons}>
            <Link href="/">
              <Button label="Ir a home" />
            </Link>
            <Link href="/curriculums/1">
              <Button label="Ir a curriculums" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
