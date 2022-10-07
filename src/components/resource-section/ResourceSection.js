import ResourcePanel from './ResourcePanel';
import EvaluationList from './EvaluationList';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';

const ResourceSection = ({ resourceId }) => {
  const { data: resourceData, isLoading: isLoadingResource, isError: isErrorResource } = useGet(endpoints('resource', resourceId));

  const { data, isLoading: isLoadingEvaluation, isError: isErrorEvaluation } = useGet(endpoints('resourceEvaluation', resourceId));

  const { data: average_evaluation, isLoading: isLoadingAverage, isError: isErrorAverage, mutate: updateAverage } = useGet(endpoints('resourceAverage', resourceId));

  const { data: evaluations, isLoading: isLoadingEvaluations, isError: isErrorEvaluations, mutate: updateEvaluations } = useGet(endpoints('resourceEvaluations', resourceId));

  if (isLoadingResource || isLoadingAverage || isLoadingEvaluations || isLoadingEvaluation) return 'loading';

  if (isErrorResource || isErrorAverage || isErrorEvaluations || isErrorEvaluation) return 'error';

  async function handleSubmitForm(evaluation, comment) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ evaluation: evaluation, comment: comment }),
    };
    const response = await fetch(endpoints('resourceEvaluation', resourceId), requestOptions);
    await response.json();
    updateEvaluations();
    updateAverage();
  }

  const resource = {
    name: resourceData.name,
    url: resourceData.url,
    average_evaluation: average_evaluation.average_evaluation,
  };

  const myEvaluation = {
    resourceId: resourceData.id,
    evaluation: data.evaluation,
    comment: data.comment,
    handleSubmitForm: handleSubmitForm,
  };

  return (
    <>
      <ResourcePanel resource={resource} myEvaluation={myEvaluation} />
      <EvaluationList evaluationsData={evaluations} />
    </>
  );
};

export default ResourceSection;
