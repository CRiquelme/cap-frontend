import { Panel } from 'primereact/panel';
import AverageRating from './AverageRating';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import LinkButton from './LinkButton';
import styles from '@styles/ResourceEvaluations.module.scss';

const ResourcePanel = ({ resource }) => {
  const router = useRouter();
  const header = (
    <div className={styles.resourceHeader}>
      {resource.name}
      <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
    </div>
  );

  return (
    <Panel header={header} className={styles.header}>
      <AverageRating average={resource.average_evaluation} />
      <LinkButton url={resource.url} />
    </Panel>
  );
};
export default ResourcePanel;
