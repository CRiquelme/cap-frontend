import ResourcePanel from 'components/resource-panel/ResourcePanel';
import { useRouter } from 'next/router';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import AddEvaluation from 'components/resource-panel/AddEvaluation';
import React from 'react';

const ResourcePage = () => {
  const router = useRouter();
  let resourceId = router.query.id;

  const { data: resourceData, isLoading: isLoadingResource, isError: isErrorResource } = useGet(endpoints('resource', resourceId));

  const { data, isLoading: isLoadingEvaluation } = useGet(endpoints('resourceEvaluation', resourceId));

  const { data: average_evaluation, isLoading: isLoadingAverage, isError: isErrorAverage, mutate: updateAverage } = useGet(endpoints('resourceAverage', resourceId));

  const { data: evaluations, isLoading: isLoadingEvaluations, isError: isErrorEvaluations, mutate: updateEvaluations } = useGet(endpoints('resourceEvaluations', resourceId));

  if (isLoadingResource || isLoadingAverage  || isLoadingEvaluations) return 'loading';

  if (isErrorResource || isErrorAverage || isErrorEvaluations) return 'error';

  const hasEvaluated = data.evaluation ? true : false; // revisar

  const resource = {
    name: resourceData.name,
    url: resourceData.url,
    average_evaluation: average_evaluation.average_evaluation,
  };

  const myEvaluation = {
    resourceId: resourceData.id,
    updateAverage: updateAverage,
    updateEvaluations: updateEvaluations,
    hasEvaluated: hasEvaluated,
  };

  const allEvaluations = {

  }

  return (
    <>
      <ResourcePanel resource={resource} />
      <AddEvaluation myEvaluation={myEvaluation}/>
      <EvaluationList allEvaluations={allEvaluations} />
    </>
  )
};

export default ResourcePage;
