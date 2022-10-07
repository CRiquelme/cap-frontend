import ResourcePanel from './ResourcePanel';
import EvaluationList from './EvaluationList';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { useRef } from 'react';

const ResourceSection = ({ resourceId }) => {
  const { data: resourceData, isLoading: isLoadingResource, isError: isErrorResource } = useGet(endpoints('resource', resourceId));

  const { data, isLoading: isLoadingEvaluation, isError: isErrorEvaluation } = useGet(endpoints('resourceEvaluation', resourceId));

  const { data: average_evaluation, isLoading: isLoadingAverage, isError: isErrorAverage, mutate: updateAverage } = useGet(endpoints('resourceAverage', resourceId));

  const { data: evaluations, isLoading: isLoadingEvaluations, isError: isErrorEvaluations, mutate: updateEvaluations } = useGet(endpoints('resourceEvaluations', resourceId));

  const toast = useRef(null);

  if (isLoadingResource || isLoadingAverage || isLoadingEvaluations || isLoadingEvaluation) return 'loading';

  if (isErrorResource || isErrorAverage || isErrorEvaluations || isErrorEvaluation) return 'error';

  const showSuccess = () => toast.current.show({ severity: 'success', summary: 'Tu evaluación quedó registrada', detail: 'Gracias por contribuir!' });

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
    showSuccess();
  }

  const resource = {
    name: resourceData.name,
    url: resourceData.url,
    average_evaluation: average_evaluation.average_evaluation,
  };

  const formOptions = {
    evaluation: data.evaluation ? data.evaluation : 1,
    comment: data.comment,
    evaluated: data.evaluation ? true : false,
    handleSubmitForm: handleSubmitForm,
    toast: toast,
  };

  return (
    <>
      <ResourcePanel resource={resource} formOptions={formOptions} />
      <EvaluationList evaluationsData={evaluations} />
    </>
  );
};

export default ResourceSection;
