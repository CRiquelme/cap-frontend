import useCompletedLearningUnit from '@hooks/useCompletedLearningUnit';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import { Card } from 'primereact/card';
import styles from '@styles/LearningUnitsList.module.scss';
import profilePic from '@utils/images/unit.jpeg';

function LearningUnitItem({ unit }) {
  const [isCompleted, setCompleted] = useState(false);

  const { data, isLoading, isError } = useCompletedLearningUnit(unit.id);

  useEffect(() => {
    data ? setCompleted(data.completed) : false;
  }, [data]);

  const handleOnChange = (e) => {
    setCompleted(e.value);
  };

  if (isLoading) {
    return 'loading';
  }
  if (isError) {
    return 'error';
  }

  return (
    <Card>
      <div className={styles.productListItem}>
        <Image className={styles.img} src={profilePic} alt={unit.name} />
        <div className={styles.productListDetail}>
          <div className={styles.productName}>{unit.name}</div>
          <div>
            <Button icon="pi pi-external-link" label="Go to Learning Unit" disabled={false}></Button>
          </div>
          <div className={styles.checkbox}>
            <ToggleButton onLabel="Completado" offLabel="No Completado" onIcon="pi pi-check" offIcon="pi pi-times" checked={isCompleted} onChange={handleOnChange} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
