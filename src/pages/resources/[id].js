import ResourcePanel from 'components/resource-panel/ResourcePanel';
import { useRouter } from 'next/router';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';

const ResourcePage = () => {
  const router = useRouter();
  let resourceId = router.query.id;

  const { data: resource, isLoading: isLoadingResource, isError: isErrorResource } = useGet(endpoints('resource', resourceId));

  const { data, isLoading: isLoadingEvaluation } = useGet(endpoints('resourceEvaluation', resourceId));

  const { data: average_evaluation, isLoading: isLoadingAverage, isError: isErrorAverage, mutate } = useGet(endpoints('resourceAverage', resourceId));

  if (isLoadingResource || isLoadingEvaluation || isLoadingAverage) return 'loading';

  if (isErrorResource || isErrorAverage) return 'error';

  let current_evaluation = undefined;
  data && (current_evaluation = data.evaluation);

  return <ResourcePanel resource={resource} current_evaluation={current_evaluation} current_average={average_evaluation.average_evaluation} reload_average={mutate}></ResourcePanel>;
};

export default ResourcePage;
