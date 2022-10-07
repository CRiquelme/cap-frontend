import { useRouter } from 'next/router';
import ResourceSection from '@components/resource-section/ResourceSection';
import { Skeleton } from 'primereact/skeleton';

const ResourcePage = () => {
  const { query, isReady } = useRouter();
  const resourceId = query.id;

  if (!isReady) return <Skeleton shape="rectangle" width="100%" height="100%" />;

  return <ResourceSection resourceId={resourceId} />;
};

export default ResourcePage;
