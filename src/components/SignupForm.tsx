import React from 'react';
import InputField from './InputField';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { IoMdClose } from 'react-icons/io';

interface SignupFormProps {
  onLoginClick: () => void;
  isModal?: boolean;
  closeModal: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ isModal, onLoginClick, closeModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/home');
    if (closeModal) closeModal();
  };

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      {!isModal && location.pathname === '/signup' && <Logo />}
      <div className='rounded-[0.5rem] bg-custom-gradient p-[0.125rem]'>
        <div className='w-[28.9375rem] h-[31.625rem] bg-backgroundLoginForm p-[1.5rem] flex flex-col justify-center items-center rounded-[0.5rem] relative'>
          {isModal && (
            <div
              className='absolute right-4 top-6 rounded-full w-8 h-8 bg-backgroundBlack flex justify-center items-center cursor-pointer'
              onClick={closeModal}
            >
              <IoMdClose className='text-white text-base' />
            </div>
          )}
          <p className='text-[0.875rem] font-medium text-[#6B6C70] p-2'>SIGN UP</p>
          <p className='font-semibold text-[1.125rem] text-white'>Create an account to continue</p>
          <div className='mt-10 mb-1'>
            <InputField type='text' placeholder='Enter your email' labelId='email' labelText='Email' />
            <InputField type='text' placeholder='Choose a preferred username' labelId='username' labelText='Username' />
            <InputField
              type='password'
              placeholder='Choose a strong password'
              labelId='password'
              labelText='Password'
              isSignupForm={true}
            />
          </div>
          <div className='w-full pb-3'>
            <Button text='Continue' onClick={handleContinue} />
            <p className='text-[0.875rem] text-[#7F8084] mt-3 flex items-center font-medium'>
              Already have an account?
              <span className='text-textPrimary px-1 font-medium cursor-pointer' onClick={onLoginClick}>
                Login
              </span>
              <FiArrowRight className='text-textPrimary ' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
