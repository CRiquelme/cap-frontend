import { OrderList } from 'primereact/orderlist';
import { Avatar } from 'primereact/avatar';
import { Rating } from 'primereact/rating';
import styles from '@styles/ResourceEvaluations.module.scss';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';

const EvaluationList = ({ evaluationsData }) => {
  const itemTemplate = (evaluation) => {
    return (
      <Card className={styles.cardFull}>
        <div className={styles.commentCard}>
          <div>
            <Avatar label="U" size="large" />
            <h5 className="mb-2">USER {evaluation.user_name}</h5>
          </div>
          <div>
            <Rating value={evaluation.evaluation} stars={5} cancel={false} readOnly="true" />
          </div>
          <InputTextarea value={evaluation.comment} disabled={true} rows={5} cols={100}></InputTextarea>
        </div>
      </Card>
    );
  };
  return <OrderList value={evaluationsData} itemTemplate={itemTemplate} header="Comentarios"></OrderList>;
};

export default EvaluationList;
