import useSWR from 'swr';

export default function useUsersOut() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://localhost:3001/api/sign_out`, fetcher);

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}

// const fetcher = async (url) => {
//   const res = await fetch(url);

//   // If the status code is not in the range 200-299,
//   // we still try to parse and throw it.
//   if (!res.ok) {
//     const error = new Error('An error occurred while fetching the data.');
//     // Attach extra info to the error object.
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };
