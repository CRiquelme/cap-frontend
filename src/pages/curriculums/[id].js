import { useRouter } from 'next/router';
import LearningUnitsSection from '@components/learning-units-section/LearningUnitsSection';
import { Skeleton } from 'primereact/skeleton';

function CurriculumPage() {
  const { query, isReady } = useRouter();
  const curriculumId = query.id;

  if (!isReady) return <Skeleton shape="rectangle" width="100%" height="100%" />;

  return (
    <>
      <LearningUnitsSection curriculumId={curriculumId} />
    </>
  );
}

export default CurriculumPage;
