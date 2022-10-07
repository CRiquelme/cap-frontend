import { Button } from 'primereact/button';
import styles from '@styles/ResourceEvaluations.module.scss';

const LinkButton = ({ url }) => {
  if (!url) return <></>;

  return (
    <p>
      <a className={styles.link} href={url} target="blank">
        <Button icon="pi pi-external-link" label={'Ir a recurso'}></Button>
      </a>
    </p>
  );
};

export default LinkButton;
