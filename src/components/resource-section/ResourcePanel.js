import { Panel } from 'primereact/panel';
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Rating } from 'primereact/rating';
import LinkButton from './LinkButton';
import styles from '@styles/ResourceEvaluations.module.scss';
import AddEvaluation from '@components/resource-section/AddEvaluation';

const ResourcePanel = ({ resource, myEvaluation }) => {
  const router = useRouter();
  const header = (
    <div className={styles.resourceHeader}>
      {resource.name}
      <Button label="Volver" icon="pi pi-arrow-left" onClick={() => router.back()} />
    </div>
  );

  const formOptions = {
    evaluation: myEvaluation.evaluation ? myEvaluation.evaluation : 1,
    comment: myEvaluation.comment,
    evaluated: myEvaluation.evaluation ? true : false,
    handleSubmitForm: myEvaluation.handleSubmitForm,
  };

  return (
    <Panel header={header} className={styles.header}>
      <div className={styles.wrapEvaluation}>
        <Card title="Evaluación promedio" className={styles.averageSection}>
          <h1>{resource.average_evaluation}</h1>
          <Rating value={resource.average_evaluation} cancel={false} readOnly={true} />
          <LinkButton url={resource.url} />
        </Card>
        <AddEvaluation formOptions={formOptions} />
      </div>
    </Panel>
  );
};
export default ResourcePanel;
