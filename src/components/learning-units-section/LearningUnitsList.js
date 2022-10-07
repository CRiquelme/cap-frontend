import React, { useRef } from 'react';
import LearningUnitListItem from '@components/learning-units-section/LearningUnitListItem';
import { Toast } from 'primereact/toast';
import { DataView } from 'primereact/dataview';

import styles from '@styles/LearningUnitsList.module.scss';

const LearningUnitsList = ({ learningUnits }) => {
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({ severity: 'success', summary: 'Learning unit actualizado', life: 2000 });
  };

  const renderListItem = (unit) => {
    return <LearningUnitListItem unit={unit} showSuccess={showSuccess} />;
  };

  return (
    <div>
      <Toast ref={toast} position="bottom-center" />
      <div className={styles.listLayout}>
        <DataView value={learningUnits} layout="list" itemTemplate={renderListItem} paginator rows={9} />
      </div>
    </div>
  );
};

export default LearningUnitsList;
