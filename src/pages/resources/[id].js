import ResourcePanel from 'components/resource-panel/ResourcePanel';
import { useRouter } from 'next/router';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';

const ResourcePage = () => {
  const router = useRouter();
  let resourceId = router.query.id;

  const { data: resourceData, isLoading: isLoadingResource, isError: isErrorResource } = useGet(endpoints('resource', resourceId));

  const { data, isLoading: isLoadingEvaluation } = useGet(endpoints('resourceEvaluation', resourceId));
  console.log(endpoints('resourceEvaluation', resourceId));

  const { data: average_evaluation, isLoading: isLoadingAverage, isError: isErrorAverage, mutate } = useGet(endpoints('resourceAverage', resourceId));
  console.log(endpoints('resourceAverage', resourceId));

  if (isLoadingResource || isLoadingAverage || isLoadingEvaluation) return 'loading';

  if (isErrorResource || isErrorAverage) return 'error';

  let current_evaluation = undefined;
  data && (current_evaluation = data.evaluation);

  const resource = {
    name: resourceData.name,
    url: resourceData.url,
    id: resourceData.id,
    current_evaluation: current_evaluation,
    average_evaluation: average_evaluation.average_evaluation,
    update_evaluation: mutate,
  };

  return <ResourcePanel resource={resource} />;
};

export default ResourcePage;
