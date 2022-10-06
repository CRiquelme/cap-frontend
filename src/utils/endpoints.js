export const endpoints = (operationId, param) => {
  const baseUrl = 'http://localhost:3001/api';

  const endpointsList = {
    curriculum: baseUrl + `/curriculums/${param}`,
    learningUnit: baseUrl + `/learning_units/${param}`,
    resource: baseUrl + `/resources/${param}`,
    curriculumLearningUnits: baseUrl + `/curriculums/${param}/learning_units`,
    isLearningUnitCompleted: baseUrl + `/learning_units/${param}/completed`,
    learningUnitResources: baseUrl + `/learning_units/${param}/resources`,
    resourceEvaluation: baseUrl + `/resources/${param}/evaluation`,
    resourceAverage: baseUrl + `/resources/${param}/average_evaluation`,
  };

  return endpointsList[operationId];
};
