import useSWR from 'swr';

export default function useCurriculums(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`http://localhost:3001/api/curriculums/${id}`, fetcher);

  return {
    curriculum: data,
    isLoadingCurriculum: !error && !data,
    isErrorCurriculum: error,
  };
}
