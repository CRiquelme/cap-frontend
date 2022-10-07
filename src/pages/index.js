import Head from 'next/head';
import Image from 'next/image';
import styles from '@styles/Index.module.scss';
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function Home() {
  return (
    <>
      <Head>
        <title>TEAM CAP</title>
        <meta name="Team CAP" content="Esta es la plataforma desarrollada para la ejecución del FIN" />
        <link rel="shortcut icon" href="/src/public/vercel.svg" />
      </Head>

      <main className={styles.page}>
        <section className={styles.sectionOne}>
          <div className={styles.container}>
            <h1 className={styles.title}>
              BIENVENIDOS A LA FIN <Image src="https://fintualist.com/content/images/2022/05/Fintual-Intensivo-Natales--N.gif" alt="" width="100%" height="100%" />
            </h1>
            <p className={styles.par}>El intensivo de programación de 3 meses en Puerto Natales para convertirnos en dev, con apoyo de desarrolladores senior y junior de Fintual.</p>
            <Button className={styles.homeButton}>
              <Link href="/curriculums/1">IR AL CAMINO DE APRENDIZAJE</Link>
            </Button>
          </div>
        </section>

        <section className={styles.sectionTwo}>
          <div className={styles.containerTwo}>
            <div className={`${styles.containerTwoContent} ${styles.content}`}>
              <h1>QUÉ ES?</h1>
              <p className={styles.par}>Fintual seleccionó en todo Latinoamérica a personas que ya saben programar, para transformarlas en reales desarrolladores.</p>
              <h1>POR QUÉ?</h1>
              <p className={styles.par}>
                En Fintual les pasó ya con dos personas muy talentosas que trabajaban en consultoras que terminaron siendo devs excelentes en Fintual y creyeron que hay muchas más por ahí.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
