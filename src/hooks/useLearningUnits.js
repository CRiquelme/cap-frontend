import useSWR from 'swr';

export default function useLearningUnits(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://localhost:3001/api/curriculums/${id}/learning_units`, fetcher);

  return {
    learningUnits: data,
    isLoading: !error && !data,
    isError: error,
  };
}
