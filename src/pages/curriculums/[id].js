import LearningUnitsDataView from '../../components/LearningUnitsDataView';
import { useRouter } from 'next/router';

import useLearningUnits from 'hooks/useLearningUnits';
import useCurriculums from 'hooks/useCurriculums';

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
      <h1>
        <div>
          <h2>{curriculum ? curriculum.name : null}</h2>
          <LearningUnitsDataView learningUnits={learningUnits} />
        </div>
      </h1>
    </div>
  );
}

export default CurriculumPage;
