import LearningUnitListItem from '@components/learning-units-list/LearningUnitListItem';
import { DataView } from 'primereact/dataview';

import styles from '@styles/LearningUnitsList.module.scss';

const LearningUnitsList = ({ learningUnits }) => {
  const renderListItem = (unit) => {
    return <LearningUnitListItem unit={unit} />;
  };

  const itemTemplate = (unit, layout) => {
    if (!unit) {
      return;
    }

    if (layout === 'list') return renderListItem(unit);
    // else if (layout === 'grid') return renderGridItem(unit);
  };

  return (
    <div>
      <div className={styles.listLayout}>
        <DataView value={learningUnits} layout="list" itemTemplate={itemTemplate} paginator rows={9} />
      </div>
    </div>
  );
};

export default LearningUnitsList;
