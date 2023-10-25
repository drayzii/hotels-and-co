import { dehydrate, QueryClient, useQuery } from 'react-query';

import { getProperties } from '../lib/api';
import PlaceCard from '../components/Cards/Place';

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['properties'], getProperties)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  const { data } = useQuery({ queryKey: ['properties'], queryFn: getProperties })

  return (
    <div className="flex flex-wrap m-auto gap-[20px] w-[1272px] mt-4">
      {data?.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  )
}
