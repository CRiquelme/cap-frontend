import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useResourceAverageEvaluation(id) {
  const { data, mutate, error } = useSWR(`http://localhost:3001/api/resources/${id}/average_evaluation`, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
}

export default useResourceAverageEvaluation;
