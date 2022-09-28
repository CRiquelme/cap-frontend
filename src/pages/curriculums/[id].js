import React, { useEffect } from 'react';
import LearningUnitList from 'components/LearningUnitList';
// import { LearningUnitService } from '../../service/LearningUnitService';
import { useRouter } from 'next/router';

import useLearningUnits from '../../hooks/useLearningUnits';

function CurriculumPage() {
  const router = useRouter();
  const curriculumId = router.query.id;
  const curriculumTitle = 'Full Stack Developer';
  const learningUnitId = router ? curriculumId : null;

  const { learningUnits, isLoading, isError } = useLearningUnits(learningUnitId);

  if (isLoading) {
    return 'loading';
  }
  if (isError) {
    return 'error';
  }

  return (
    <div>
      <h1>
        <div>
          <h2>{curriculumTitle}</h2>
          <LearningUnitList learningUnits={learningUnits} />
        </div>
      </h1>
    </div>
  );
}

export default CurriculumPage;
