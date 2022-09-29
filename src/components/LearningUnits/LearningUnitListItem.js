import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import { Card } from 'primereact/card';
import styles from '@styles/DataViewDemo.module.scss';
import profilePic from '@utils/images/unit.jpeg';

function LearningUnitItem({ unit }) {
  const [completed, setCompleted] = useState(false);

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
            <ToggleButton onLabel="Completado" offLabel="No Completado" onIcon="pi pi-check" offIcon="pi pi-times" checked={completed} onChange={(e) => setCompleted(e.value)} />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
