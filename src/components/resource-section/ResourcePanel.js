import { Panel } from 'primereact/panel';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import LinkButton from './LinkButton';
import styles from '@styles/ResourceEvaluations.module.scss';
import AddEvaluation from '@components/resource-section/AddEvaluation';

const ResourcePanel = ({ resource, formOptions }) => {
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
        <Card title="Evaluación promedio" className={styles.averageSection}>
          <h1>
            {resource.average_evaluation} <i class="pi pi-star-fill"></i>
          </h1>
          <LinkButton url={resource.url} />
        </Card>
        <AddEvaluation formOptions={formOptions} />
      </div>
    </Panel>
  );
};
export default ResourcePanel;
