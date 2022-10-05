import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import LearningUnitsList from '@components/learning-units-list/LearningUnitsList';
import { useRouter } from 'next/router';
import { Panel } from 'primereact/panel';
import { Skeleton } from 'primereact/skeleton';

function CurriculumPage() {
  const router = useRouter();
  const curriculumId = router.query.id;

  const { data: learningUnits, isLoading: isLoadingCurriculum, isError: isErrorCurriculum } = useGet(endpoints('curriculumLearningUnits', curriculumId));
  const { data: curriculum, isLoading: isLoadingUnits, isError: isErrorUnit } = useGet(endpoints('curriculum', curriculumId));

  if (isLoadingUnits || isLoadingCurriculum) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorUnit || isErrorCurriculum) {
    return 'error';
  }

  return (
    <div>
      <Panel header={curriculum?.name ?? null}>
        <LearningUnitsList learningUnits={learningUnits} />
      </Panel>
    </div>
  );
}

export default CurriculumPage;
