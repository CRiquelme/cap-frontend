import { Panel } from 'primereact/panel';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import LearningUnitsList from './LearningUnitsList';

const LearningUnitsSection = ({ curriculumId }) => {
  const { data: learningUnits, isLoading: isLoadingCurriculum, isError: isErrorCurriculum } = useGet(endpoints('curriculumLearningUnits', curriculumId));
  const { data: curriculum, isLoading: isLoadingUnits, isError: isErrorUnit } = useGet(endpoints('curriculum', curriculumId));

  if (isLoadingUnits || isLoadingCurriculum) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorUnit || isErrorCurriculum) {
    return 'error';
  }
  return (
    <>
      <Panel header={curriculum?.name ?? null}>
        <LearningUnitsList learningUnits={learningUnits} />
      </Panel>
    </>
  );
};

export default LearningUnitsSection;
