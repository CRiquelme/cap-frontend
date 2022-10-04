import ResourcePanel from 'components/resource-panel/ResourcePanel';
import { useRouter } from 'next/router';
import useResourceEvaluation from '@hooks/useResourceEvaluation';
import useResource from '@hooks/useResource';
import useResourceAverageEvaluation from 'hooks/useResourceAverageEvaluation';

const ResourcePage = () => {
  const router = useRouter();
  const resourceId = router.query.id;

  const { data: resource, isLoading: isLoadingResource, isError: isErrorResource } = useResource(resourceId);
  const { data, isLoading: isLoadingEvaluation, isError: isErrorEvaluation } = useResourceEvaluation(resourceId);
  const { data: average_evaluation, isLoading: isLoadingAverage, isError: isErrorAverage, mutate } = useResourceAverageEvaluation(resourceId);

  if (isLoadingResource || isLoadingEvaluation || isLoadingAverage) {
    return 'loading';
  }

  if (isErrorResource || isErrorAverage) {
    return 'error';
  }

  let current_evaluation = undefined;
  (data && (current_evaluation = data.evaluation))

  return <ResourcePanel resource={resource} current_evaluation={current_evaluation} current_average={average_evaluation.average_evaluation} reload_average={mutate}></ResourcePanel>;
};

export default ResourcePage;
