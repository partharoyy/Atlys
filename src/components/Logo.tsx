import { FaRegCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { IoPlayOutline } from 'react-icons/io5';
import { FaRegSquare } from 'react-icons/fa6';

function Logo() {
  return (
    <div className='w-[2.5rem] h-[2.5rem]'>
      <div className='w-[1.98125rem] h-[2.02875rem] flex flex-col text-white relative'>
        <div className='flex justify-between items-center w-full h-1/2'>
          <FaRegCircle className='w-[0.875rem] h-[0.875rem]' />
          <MdClose className='w-[1.3125rem] h-[1.3125rem]' />
        </div>
        <div className='flex justify-between items-center w-full h-1/2 absolute top-[1.25rem] left-[-8%]'>
          <IoPlayOutline className='w-[1.5rem] h-[1.5rem]' />
          <FaRegSquare className='w-[0.9375rem] h-[0.9375rem]' />
        </div>
      </div>
    </div>
  );
}

export default Logo;
