import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useResource(id) {
  const { data, error } = useSWR(`http://localhost:3001/api/resources/${id}`, fetcher);

  return {
    resource: data,
    isLoading: !error && !data,
    isError: error,
  };
}
