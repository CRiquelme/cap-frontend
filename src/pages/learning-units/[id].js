import { useRouter } from 'next/router';
import ResourcesSection from '@components/resources-section/ResourcesSection';
import { Skeleton } from 'primereact/skeleton';

const LearningUnitPage = () => {
  const { query, isReady } = useRouter();
  const learningUnitId = query.id;

  if (!isReady) return <Skeleton shape="rectangle" width="100%" height="100%" />;

  return <ResourcesSection learningUnitId={learningUnitId} />;
};

export default LearningUnitPage;
