import React from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

interface InputFieldProps {
  type: string;
  placeholder: string;
  labelId: string;
  labelText: string;
  isSignupForm?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, labelId, labelText, isSignupForm }) => {
  return (
    <div className='w-[25.9375rem] h-[4.375rem] flex flex-col gap-2 mb-6'>
      <div className='flex justify-between'>
        <label htmlFor={labelId} className='text-[0.875rem] text-textPrimary font-medium leading6'>
          {labelText}
        </label>
        {!isSignupForm && labelId === 'password' && (
          <label className='text-[0.75rem] text-textPrimary font-medium leading7'>Forgot password?</label>
        )}
      </div>
      <div className='flex flex-col justify-center relative'>
        <input
          id={labelId}
          type={type}
          placeholder={placeholder}
          className=' rounded-[0.375rem] border-[0.09375rem] border-[#35373B] bg-backgroundLoginForm p-3 pr-10 outline-none focus:border-buttonPrimary text-textPrimary inputPlaceholderColor'
        />
        {labelId === 'password' && <MdOutlineRemoveRedEye className='absolute right-3 text-[#7F8084] text-[1.25rem]' />}
      </div>
    </div>
  );
};

export default InputField;
