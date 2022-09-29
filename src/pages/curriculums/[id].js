import useLearningUnits from '@hooks/useLearningUnits';
import useCurriculums from '@hooks/useCurriculums';
import LearningUnitsList from '@components/learning-units-list/LearningUnitsList';
import { useRouter } from 'next/router';
import { Panel } from 'primereact/panel';

function CurriculumPage() {
  const router = useRouter();
  let curriculumId = router.query.id;
  curriculumId = router ? curriculumId : null;

  const { learningUnits, isLoadingUnit, isErrorUnit } = useLearningUnits(curriculumId);
  const { curriculum, isLoadingCurriculum, isErrorCurriculum } = useCurriculums(curriculumId);

  if (isLoadingUnit || isLoadingCurriculum) {
    return 'loading';
  }
  if (isErrorUnit || isErrorCurriculum) {
    return 'error';
  }

  return (
    <div>
      <Panel header={curriculum ? curriculum.name : null}>
        <LearningUnitsList learningUnits={learningUnits} />
      </Panel>
    </div>
  );
}

export default CurriculumPage;
