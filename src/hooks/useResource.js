import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useResource(id) {
  const { data, error } = useSWR(`http://localhost:3001/api/resources/${id}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useResource;
