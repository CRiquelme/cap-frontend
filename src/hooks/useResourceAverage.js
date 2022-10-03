import useSWR from 'swr';

export default function useResourceAverage(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://localhost:3001/api/resources/${id}/average_evaluation`, fetcher);

  return {
    resourceAverage: data,
    isLoadingUnit: !error && !data,
    isErrorUnit: error,
  };
}
