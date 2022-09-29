import ResourceCard from 'components/resource-card/ResourceCard';
import { useRouter } from 'next/router';


import useResource from 'hooks/useResource';

function ResourcePage() {
  const router = useRouter();
  const resourceId = router.query.id;

  const { resource, isLoading, isError } = useResource(resourceId);

  if (isLoading) {
    return 'loading';}

  if (isError) {
    return 'error';
  }

  return (
    <ResourceCard resource={resource}></ResourceCard>
  );
}

export default ResourcePage;
