import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useResourceEvaluation(id) {
  const { data, error } = useSWR(`http://localhost:3001/api/resources/${id}/evaluation`, fetcher);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
