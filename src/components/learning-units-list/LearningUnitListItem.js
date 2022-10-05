import { Card } from 'primereact/card';
import Image from 'next/image';
import styles from '@styles/LearningUnitsList.module.scss';
import profilePic from '@utils/images/unit.jpeg';
import LinkButton from './LinkButton';
import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';
import { endpoints } from '@utils/endpoints';
import useGet from '@hooks/useGet';
import { Skeleton } from 'primereact/skeleton';

function LearningUnitItem({ unit }) {
  const completedLearningUnitEndpoint = endpoints('isLearningUnitCompleted', unit.id);

  const { data: isCompleted, isLoading, isError, mutate } = useGet(completedLearningUnitEndpoint);

  const changeHandler = (clicked) => {
    if (clicked.value) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(completedLearningUnitEndpoint, requestOptions).then((response) => {
        if (response.ok) {
          mutate(completedLearningUnitEndpoint);
        }
      });
    } else if (!clicked.value) {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(completedLearningUnitEndpoint, requestOptions).then((response) => {
        if (response.ok) {
          mutate(completedLearningUnitEndpoint);
        }
      });
    }
  };

  if (isLoading) {
    return <Skeleton shape="rectangle" width="50%" />;
  }
  if (isError) {
    return 'error';
  }

  return (
    <Card className={styles.cardFull}>
      <div className={styles.productListItem}>
        <Image className={styles.img} src={profilePic} alt={unit.name} />
        <div className={styles.productListDetail}>
          <div className={styles.productName}>{unit.name}</div>
          <LinkButton url={`/learning-units/${unit.id}`} />
          <CompleteLearningUnitToggle completed={isCompleted.completed} onChangeHandler={changeHandler} completedLearningUnitEndpoint={completedLearningUnitEndpoint} />
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
