import useSWR from 'swr';

export default function useResources({ learningUnitId }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://localhost:3001/api/learning_units/${learningUnitId}/resources`, fetcher);

  return {
    resources: data,
    isLoadingUnit: !error && !data,
    isErrorUnit: error,
  };
}
