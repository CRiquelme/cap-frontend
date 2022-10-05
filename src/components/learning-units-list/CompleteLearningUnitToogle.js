import { ToggleButton } from 'primereact/togglebutton';
import styles from '@styles/LearningUnitsList.module.scss';
import { endpoints } from '@utils/endpoints';
import useGet from '@hooks/useGet';
import { Skeleton } from 'primereact/skeleton';

export const CompleteLearningUnitToggle = ({ completed, onChangeHandler, completedLearningUnitEndpoint }) => {

  return (
    <div className={styles.checkbox}>
      <ToggleButton onLabel="Completado" offLabel="No Completado" onIcon="pi pi-check" offIcon="pi pi-times" checked={completed} onChange={onChangeHandler} />
    </div>
  );
};
