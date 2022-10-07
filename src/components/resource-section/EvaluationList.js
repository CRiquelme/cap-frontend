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
          <div className={styles.commentUserInfo}>
            <Avatar label={evaluation.user_name.charAt(0)} size="large" />
            <Rating value={evaluation.evaluation} stars={5} cancel={false} readOnly="true" />
          </div>
          <div className={styles.rating}>
            <h5 className="mb-2">{evaluation.user_name + ' escribió el ' + evaluation.created_at}</h5>
            <InputTextarea value={evaluation.comment} disabled={true} rows={4} cols={50}></InputTextarea>
          </div>
        </div>
      </Card>
    );
  };
  return <OrderList value={evaluationsData} itemTemplate={itemTemplate} header="Comentarios"></OrderList>;
};

export default EvaluationList;
