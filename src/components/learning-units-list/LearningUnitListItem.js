import useCompletedLearningUnit from '@hooks/useCompletedLearningUnit';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

  const handleOnChange = (clicked) => {
    if (clicked.value) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(`http://localhost:3001/api/learning_units/${unit.id}/completed`, requestOptions)
        .then((response) => response.json())
        .then(() => setCompleted(clicked.value));
    } else if (!clicked.value) {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(`http://localhost:3001/api/learning_units/${unit.id}/completed`, requestOptions)
        .then((response) => response.json())
        .then(() => setCompleted(clicked.value));
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
            <ToggleButton onLabel="Completado" offLabel="No Completado" onIcon="pi pi-check" offIcon="pi pi-times" checked={isCompleted} onChange={handleOnChange} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
