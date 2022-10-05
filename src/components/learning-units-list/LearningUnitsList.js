import LearningUnitListItem from '@components/learning-units-list/LearningUnitListItem';
import { DataView } from 'primereact/dataview';

import styles from '@styles/LearningUnitsList.module.scss';

const LearningUnitsList = ({ learningUnits }) => {
  const renderListItem = (unit) => {
    return <LearningUnitListItem unit={unit} />;
  };

  return (
    <div>
      <div className={styles.listLayout}>
        <DataView value={learningUnits} layout="list" itemTemplate={renderListItem} paginator rows={9} />
      </div>
    </div>
  );
};

export default LearningUnitsList;
