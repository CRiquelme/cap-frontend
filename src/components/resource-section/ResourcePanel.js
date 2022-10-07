import { Panel } from 'primereact/panel';
import AverageRating from './AverageRating';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import LinkButton from './LinkButton';
import styles from '@styles/ResourceEvaluations.module.scss';
import AddEvaluation from '@components/resource-section/AddEvaluation';
import { endpoints } from 'utils/endpoints';

const ResourcePanel = ({ resource, myEvaluation }) => {
  const router = useRouter();
  const header = (
    <div className={styles.resourceHeader}>
      {resource.name}
      <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
    </div>
  );

  async function handleSubmit(evaluation, comment) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ evaluation: evaluation, comment: comment }),
    };
    const response = await fetch(endpoints('resourceEvaluation', myEvaluation.resourceId), requestOptions);
    await response.json();
    myEvaluation.updateEvaluations();
    myEvaluation.updateAverage();
  }

  const defaultOptions = {
    evaluation: myEvaluation.evaluation? myEvaluation.evaluation : 1,
    comment: myEvaluation.comment,
    evaluated: myEvaluation.evaluation? true : false,
  }

  return (
    <Panel header={header} className={styles.header}>
      <div className={styles.wrapEvaluation}>
        <Card title="Agregar evaluación" className={styles.averageSection}>
          <AverageRating average={resource.average_evaluation} />
          <LinkButton url={resource.url} />
        </Card>
        <AddEvaluation handleSubmit={handleSubmit} defaultOptions={defaultOptions} />
      </div>
    </Panel>
  );
};
export default ResourcePanel;
