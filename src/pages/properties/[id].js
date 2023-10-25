import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from 'react-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';
import { faStar, faBed, faShower, faHouse, faWaterLadder, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

import ReserveCard from '@/components/Cards/Reserve';
import Button from '@/components/Button';

import { getProperty } from '@/lib/api';

export default function Property() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(['property', id], () => getProperty(id));

  if (!data) {
    return null;
  }

  const { propertyName, reviewsCount, location, image, host, hostAvatar, hostBio, price, rating } = data;

  return (
    <div className='flex flex-col flex-1 my-10 mx-[calc(50%-636px)]'>
      <div className="flex justify-between items-end">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="text-neutral-800 text-2xl font-bold">{propertyName}</div>
          <div className='flex items-center gap-2 font-medium'>
            <div className='text-neutral-800 text-sm underline'>
              {reviewsCount} Reviews
            </div>
            <div>
              &#xb7;
            </div>
            <div className='text-neutral-800 text-sm underline'>
              {location}
            </div>
          </div>
        </div>
        <div className="flex gap-4 font-medium">
          <div className="text-neutral-800 text-sm flex items-center gap-1">
            <FontAwesomeIcon icon={faShareFromSquare} className="text-black" />
            <span className='underline'>Share</span>
          </div>
          <div className="text-neutral-800 text-sm flex items-center gap-1">
            <FontAwesomeIcon icon={faHeart} className="text-black" />
            <span className='underline'>Save</span>
          </div>
        </div>
      </div>
      <div className='flex h-[500px] gap-3 mt-5 relative'>
        <div className='w-[49%] h-[100%] relative rounded-bl-xl rounded-tl-xl overflow-hidden'>
          <Image src={image} alt={propertyName} fill style={{objectFit:"cover"}} />
        </div>
        <div className='w-1/2 flex flex-wrap gap-3'>
          <div className='w-[49%] h-[49%] relative'>
            <Image src={image + '?i=1'} alt={propertyName} fill style={{objectFit:"cover"}} />
          </div>
          <div className='w-[49%] h-[49%] relative rounded-tr-xl overflow-hidden'>
            <Image src={image + '?i=2'} alt={propertyName} fill style={{objectFit:"cover"}} />
          </div>
          <div className='w-[49%] h-[49%] relative'>
            <Image src={image + '?i=3'} alt={propertyName} fill style={{objectFit:"cover"}} />
          </div>
          <div className='w-[49%] h-[49%] relative rounded-br-xl overflow-hidden'>
            <Image src={image + '?i=4'} alt={propertyName} fill style={{objectFit:"cover"}} />
          </div>
        </div>
        <div className='absolute bottom-3 right-3'>
          <Button className='bg-white hover:bg-gray-lighter text-black cursor-pointer flex gap-2 items-center'>
            <span>Show More Photos</span>
            <FontAwesomeIcon icon={faAnglesRight} className="text-black" />
          </Button>
        </div>
      </div>
      <div className='relative flex mt-10 gap-5'>
        <div className='flex flex-col flex-1 mr-10'>
          <div className='flex justify-between items-center'>
            <div className='text-neutral-800 text-xl font-bold'>Entire house hosted by {host}</div>
            <div className='w-[50px] h-[50px] rounded-full overflow-hidden relative'>
              <Image src={hostAvatar} alt={host} fill style={{objectFit:"cover"}} />
            </div>
          </div>
          <div className='flex items-center gap-2 mt-10'>
            <div className='flex-1 border-1 border-gray-light rounded-xl flex items-center p-5 text-lg font-normal gap-2 h-full'>
              <FontAwesomeIcon icon={faBed} className="text-black" size='xl' />
              <div className='text-neutral-800 ml-1'>
                4 bedrooms<br />
                4 double beds
              </div>
            </div>
            <div className='flex-1 border-1 border-gray-light rounded-xl flex items-center p-5 text-lg font-normal gap-2 h-full'>
              <FontAwesomeIcon icon={faShower} className="text-black" size='xl' />
              <div className='text-neutral-800 ml-1'>Shared bathroom</div>
            </div>
            <div className='flex-1 border-1 border-gray-light rounded-xl flex items-center p-5 text-lg font-normal gap-2 h-full'>
              <FontAwesomeIcon icon={faHouse} className="text-black" size='xl' />
              <div className='text-neutral-800 ml-1'>Host or others may share home</div>
            </div>
          </div>
          <div className='w-auto h-[1px] bg-gray-light my-10'></div>
          <div className='flex flex-col gap-5'>
            <div className='flex gap-5 text-3xl'>
              <FontAwesomeIcon icon={faBed} className="text-black" />
              <div className='flex flex-col'>
                <div className='text-neutral-800 text-lg font-bold'>Room in a bed and breakfast</div>
                <div className='text-neutral-800 text-sm font-normal'>Your own room in a home, plus access to shared spaces.</div>
              </div>
            </div>
            <div className='flex gap-5 text-3xl'>
              <FontAwesomeIcon icon={faWaterLadder} className="text-black" />
              <div className='flex flex-col'>
                <div className='text-neutral-800 text-lg font-bold'>Dive right in</div>
                <div className='text-neutral-800 text-sm font-normal'>This is one of the few places in the area with a pool.</div>
              </div>
            </div>
          </div>
          <div className='w-auto h-[1px] bg-gray-light my-10'></div>
          <div className='text-center'>
            Some info is shown in its original language. <span className='underline font-bold'>Translate</span>
          </div>
          <div className='w-auto h-[1px] bg-gray-light my-10'></div>
          <div className='flex flex-col gap-5'>
            <div className='text-3xl font-bold'>Meet your host</div>
            <div className='flex flex-col py-10 px-52 bg-gray-light rounded-2xl'>
              <div className='flex justify-between gap-10 bg-white rounded-2xl p-10'>
                <div className='w-[150px] h-[150px] rounded-full overflow-hidden relative'>
                  <Image src={hostAvatar} alt={host} fill style={{objectFit:"cover"}} />
                </div>
                <div className='flex flex-col'>
                  <div className='flex flex-col'>
                    <div className='text-neutral-800 text-xl font-bold'>{reviewsCount}</div>
                    <div className='text-neutral-800 text-sm'>reviews</div>
                  </div>
                  <div className='w-auto h-[1px] bg-gray-light my-2'></div>
                  <div className='flex flex-col'>
                    <div className='text-neutral-800 text-xl font-bold flex gap-1 items-center'>
                      <span>{rating}</span>
                      <FontAwesomeIcon icon={faStar} className="text-black" size='sm' />
                    </div>
                    <div className='text-neutral-800 text-sm'>Rating</div>
                  </div>
                  <div className='w-auto h-[1px] bg-gray-light my-2'></div>
                  <div className='flex flex-col'>
                    <div className='text-neutral-800 text-xl font-bold'>8</div>
                    <div className='text-neutral-800 text-sm'>Years hosting</div>
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='text-neutral-800 text-lg font-normal'>Lives in {location}</div>
                <div className='text-neutral-800 text-lg font-normal mt-5'>{hostBio}</div>
              </div>
              <div className='mt-3 font-bold underline'>
                Show More
              </div>
              <div className='mt-10'>
                <Button className='bg-black hover:bg-gray text-white'>Message Host</Button>
              </div>
              <div className='w-auto h-[1px] bg-gray my-10'></div>
              <div className='text-xs text-center text-gray'>
                To protect your payment, never transfer money or communicate outside of the Airbnb website or app.
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <ReserveCard price={price} rating={(Number(rating)/2.1).toFixed(2)} reviewsCount={reviewsCount} />
        </div>
      </div>
    </div>
  )
}
