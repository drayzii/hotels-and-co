import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button';

export default function Reserve({ price, rating, reviewsCount }) {
  return (
    <div className="flex-col w-[303px] border-gray-light border-1 rounded-xl p-3">
      <div className="flex justify-between items-center">
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <div className="flex items-center gap-1">
            <div className="text-neutral-800 text-lg font-bold">${price}</div>
            <div className="text-zinc-600 text-sm">/night</div>
          </div>
        </div>
        <div className="gap-2 flex items-center h-fit">
          <div className="gap-1 flex">
            <div className="text-neutral-800 text-sm">
              <FontAwesomeIcon icon={faStar} className="text-black" />
            </div>
            <div className="text-neutral-800 text-sm">
              {rating}
            </div>
          </div>
          <div>
            &#xb7;
          </div>
          <div>
            <span className="text-neutral-800 text-sm font-light">{reviewsCount} reviews</span>
          </div>
        </div>
      </div>
      <div className='w-full border-1 rounded-lg flex-col mt-4'>
        <div className='flex border-b-1'>
          <div className='flex-col w-1/2 p-2 border-r-1'>
            <div className='text-neutral-800 text-xs font-medium'>CHECKIN</div>
            <div className='text-neutral-800 text-xs font-light'>2/6/2023</div>
          </div>
          <div className='flex-col w-1/2 p-2'>
            <div className='text-neutral-800 text-xs font-medium'>CHECKOUT</div>
            <div className='text-neutral-800 text-xs font-light'>2/16/2023</div>
          </div>
        </div>
        <div className='flex-col w-full p-2'>
          <div className='text-neutral-800 text-xs font-medium'>CHECKOUT</div>
          <div className='text-neutral-800 text-xs font-light'>2/16/2023</div>
        </div>
      </div>
      <Button className="w-full mt-4 text-white bg-pink hover:bg-pink-sec">Reserve</Button>
      <div className='w-full mt-4 text-sm text-center'>
        You won’t be charged yet
      </div>
      <div className='w-full mt-4 flex flex-col gap-2'>
        <div className='flex justify-between'>
          <div className='text-neutral-800 text-xs font-light underline'>500 x 5 nights</div>
          <div className='text-neutral-800 text-xs font-light'>$2,500</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-neutral-800 text-xs font-light underline'>Long stay discount</div>
          <div className='text-neutral-800 text-xs font-light text-green'>-$300</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-neutral-800 text-xs font-light underline'>Cleaning fee</div>
          <div className='text-neutral-800 text-xs font-light'>$200</div>
        </div>
        <div className='flex justify-between'>
          <div className='text-neutral-800 text-xs font-light underline'>Service fee</div>
          <div className='text-neutral-800 text-xs font-light'>$0</div>
        </div>
        <div className='w-auto h-[1px] bg-gray-light m-3'></div> 
        <div className='flex justify-between'>
          <div className='text-neutral-800 text-xs font-bold'>Total before taxes</div>
          <div className='text-neutral-800 text-xs font-light'>$2,400</div>
        </div>
      </div>
    </div>
  );
};
