import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { getProperty } from '../../lib/api';

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(['property', id], () => getProperty(id));

  console.log(data);

  return (
    <div>
    </div>
  )
}
