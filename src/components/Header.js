import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div className="flex justify-between items-center border-b-[1px] border-gray-light px-[calc(50%-636px)] py-5">
      <Link href='/'>
        <span className="text-3xl font-bold text-pink">Hotels&Co.</span>
      </Link>
      <Link href='https://github.com/drayzii/hotels-and-co' target='_blank'>
        <span className="text-sm font-normal flex gap-2 items-center cursor-pointer hover:text-pink-sec">
          Go to repo
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </span>
      </Link>
    </div>
  )
}
