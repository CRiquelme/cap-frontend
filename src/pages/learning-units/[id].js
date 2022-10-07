import { useRouter } from 'next/router';
import ResourcesSection from '@components/resources-section/ResourcesSection';

const LearningUnitPage = () => {
  const { query, isReady } = useRouter();
  const learningUnitId = query.id;

  if (!isReady) return 'loading';

  return <ResourcesSection learningUnitId={learningUnitId} />;
};

export default LearningUnitPage;
