import useSWR from 'swr';

export default function useUsers() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://localhost:3001/api/current_user`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
