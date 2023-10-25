import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useState } from 'react';
import { getProperties } from '@/lib/api';
import PlaceCard from '@/components/Cards/Place';

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['properties', { page: 1 }], getProperties);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const { data, isLoading } = useQuery(['properties', { page: currentPage }], getProperties);

  const totalPages = Math.ceil((data?.length || 0) / pageSize);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className='my-10'>
      <div className="flex flex-wrap m-auto gap-[20px] w-[1272px] mt-4">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-[900px]">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          data?.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))
        )}
      </div>
      <div className="my-10 w-full flex justify-center items-center gap-10">
        <button
          className='cursor-pointer text-pink hover:text-pink-sec disabled:text-gray disabled:opacity-70'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={isLoading || currentPage === 1}
        >
          &larr; Previous
        </button>
        <span className='border-1 rounded-full w-[30px] h-[30px] flex items-center justify-center'>
          {currentPage}
        </span>
        <button
          className='cursor-pointer text-pink hover:text-pink-sec disabled:text-gray disabled:opacity-70'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={isLoading || currentPage === totalPages}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
