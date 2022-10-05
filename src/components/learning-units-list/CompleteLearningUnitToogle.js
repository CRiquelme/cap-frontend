import { ToggleButton } from 'primereact/togglebutton';
import styles from '@styles/LearningUnitsList.module.scss';
import { endpoints } from '@utils/endpoints';
import useGet from '@hooks/useGet';
import { Skeleton } from 'primereact/skeleton';

export const CompleteLearningUnitToggle = ({ unit_id }) => {
  const completedLearningUnitEndpoint = endpoints('isLearningUnitCompleted', unit_id);

  const { data: isCompleted, isLoading, isError, mutate } = useGet(completedLearningUnitEndpoint);

  if (isLoading) {
    return <Skeleton shape="rectangle" width="50%" />;
  }
  if (isError) {
    return 'error';
  }

  const handleOnChange = (clicked) => {
    if (clicked.value) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(completedLearningUnitEndpoint, requestOptions).then((response) => {
        if (response.ok) {
          mutate(completedLearningUnitEndpoint);
        }
      });
    } else if (!clicked.value) {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch(completedLearningUnitEndpoint, requestOptions).then((response) => {
        if (response.ok) {
          mutate(completedLearningUnitEndpoint);
        }
      });
    }
  };

  return (
    <div className={styles.checkbox}>
      <ToggleButton onLabel="Completado" offLabel="No Completado" onIcon="pi pi-check" offIcon="pi pi-times" checked={isCompleted.completed} onChange={handleOnChange} />
    </div>
  );
};
