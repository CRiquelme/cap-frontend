import useSWR from 'swr';
import { useRouter } from 'next/router';

export default function useResources() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const router = useRouter();
  let learningUnitIdQuery = router.query.id;
  let learningUnitId = router ? learningUnitIdQuery : null;

  const { data, error } = useSWR(`http://localhost:3001/api/learning_units/${learningUnitId}/resources`, fetcher);

  return {
    resources: data,
    isLoadingUnit: !error && !data,
    isErrorUnit: error,
  };
}
