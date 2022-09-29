import LearningUnitItem from '@components/LearningUnits/LearningUnitListItem';
import { DataView } from 'primereact/dataview';

import styles from '@styles/DataViewDemo.module.scss';

const LearningUnitsList = ({ learningUnits }) => {
  const renderListItem = (unit) => {
    return <LearningUnitItem unit={unit} />;
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
