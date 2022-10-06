import { Card } from 'primereact/card';
import Image from 'next/image';
import styles from '@styles/LearningUnitsList.module.scss';
import profilePic from '@utils/images/unit.jpeg';
// import LinkButton from './LinkButton';
import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';
import { endpoints } from '@utils/endpoints';
import useGet from '@hooks/useGet';
import { Skeleton } from 'primereact/skeleton';
import Link from 'next/link';

function LearningUnitItem({ unit }) {
  const completedLearningUnitEndpoint = endpoints('isLearningUnitCompleted', unit.id);

  const { data: isCompleted, isLoading, isError, mutate } = useGet(completedLearningUnitEndpoint);

  const changeHandler = (clicked) => {
    const requestOptions = {
      method: clicked.value ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(completedLearningUnitEndpoint, requestOptions).then((response) => {
      if (response.ok) {
        mutate();
      }
    });
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
        <Link href={`/learning-units/${unit.id}`}>
          <Image className={styles.img} src={profilePic} alt={unit.name} />
        </Link>
        <div className={styles.productListDetail}>
          <div className={styles.productName}>
            <span>Learning unit</span>
            <div>
              <i className="pi pi-link">&nbsp;</i>
              <Link href={`/learning-units/${unit.id}`}>{unit.name}</Link>
            </div>
          </div>
          {/* <LinkButton url={`/learning-units/${unit.id}`} /> */}
          <CompleteLearningUnitToggle completed={isCompleted.completed} onChangeHandler={changeHandler} />
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
