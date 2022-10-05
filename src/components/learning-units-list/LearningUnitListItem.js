import useGet from '@hooks/useGet';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import { Card } from 'primereact/card';
import styles from '@styles/LearningUnitsList.module.scss';
import profilePic from '@utils/images/unit.jpeg';
import { endpoints } from '@utils/endpoints';

function LearningUnitItem({ unit }) {
  const completedLearningUnit = endpoints('isLearningUnitCompleted', unit.id);

  const { data: isCompleted, isLoading, isError, mutate } = useGet(completedLearningUnit);

  const handleOnChange = (clicked) => {
    if (clicked.value) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(completedLearningUnit, requestOptions).then((response) => {
        if (response.ok) {
          mutate(completedLearningUnit);
        }
      });
    } else if (!clicked.value) {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(completedLearningUnit, requestOptions).then((response) => {
        if (response.ok) {
          mutate(completedLearningUnit);
        }
      });
    }
  };

  if (isLoading) {
    return 'loading';
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
          <div>
            <Link href={`/learning-units/${unit.id}`}>
              <Button icon="pi pi-external-link" label="Go to Learning Unit" disabled={false}></Button>
            </Link>
          </div>
          <div className={styles.checkbox}>
            <ToggleButton onLabel="Completado" offLabel="No Completado" onIcon="pi pi-check" offIcon="pi pi-times" checked={isCompleted.completed} onChange={handleOnChange} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
