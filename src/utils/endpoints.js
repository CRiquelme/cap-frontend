export const endpoints = (operationId, param) => {
  const baseUrl = 'http://localhost:3001';

  const endpointsList = {
    curriculum: baseUrl + `/api/curriculums/${param}`,
    curriculumLearningUnits: baseUrl + `/api/curriculums/${param}/learning_units`,
    isLearningUnitCompleted: baseUrl + `/api/learning_units/${param}/completed`,
  };

  return endpointsList[operationId];
};
