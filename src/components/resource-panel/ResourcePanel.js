import { Panel } from 'primereact/panel';
import AverageRating from './AverageRating';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import LinkButton from './LinkButton';
import styles from '@styles/ResourceEvaluations.module.scss';
import AddEvaluation from 'components/resource-panel/AddEvaluation';

const ResourcePanel = ({ resource, myEvaluation }) => {
  const router = useRouter();
  const header = (
    <div className={styles.resourceHeader}>
      {resource.name}
      <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
    </div>
  );

  return (
    <Panel header={header} className={styles.header}>
      <div className={styles.wrapEvaluation}>
        <Card title="Agregar evaluación" className={styles.averageSection}>
          <AverageRating average={resource.average_evaluation} />
          <LinkButton url={resource.url} />
        </Card>
        <AddEvaluation myEvaluation={myEvaluation} />
      </div>
    </Panel>
  );
};
export default ResourcePanel;
