import ResourcePanel from 'components/resource-panel/ResourcePanel';
import { useRouter } from 'next/router';

import useResource from 'hooks/useResource';

function ResourcePage() {
  const router = useRouter();
  const resourceId = router.query.id;

  const { resource, isLoading, isError } = useResource(resourceId);

  if (isLoading) {
    return 'loading';
  }

  if (isError) {
    return 'error';
  }

  return <ResourcePanel resource={resource}></ResourcePanel>;
}

export default ResourcePage;
