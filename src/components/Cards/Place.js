import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function Place({ place: { id, location, price, host, rating } }) {
  return (
    <Link href="/properties/[id]" as={`/properties/${id}`}>
      <div className="flex-col w-[303px]">
        <div className="h-[287px] bg-[url('https://loremflickr.com/640/480/abstract')] rounded-xl mb-4 relative">
          <FontAwesomeIcon icon={faHeart} className="absolute top-[20px] right-[20px] text-white w-[30px] h-[30px] cursor-pointer hover:fill-pink" />
        </div>
        <div className="flex justify-between">
          <div className="flex-col justify-start items-start gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-neutral-800 text-sm font-bold">{location}</div>
              <div className="text-zinc-600 text-sm">Hosted by {host}</div>
              <div className="text-zinc-600 text-sm">Oct 23 - 28</div>
            </div>
            <div className="justify-start items-center gap-1 inline-flex">
              <div>
                <span className="text-neutral-800 text-sm font-bold">${Number(price)}</span>
                <span className="text-neutral-800 text-sm"> / night</span>
              </div>
            </div>
          </div>
          <div className="gap-1 inline-flex">
            <div className="text-neutral-800 text-sm">
              <FontAwesomeIcon icon={faStar} className="text-black" />
            </div>
            <div className="text-neutral-800 text-sm">
              {(Number(rating)/2.1).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
