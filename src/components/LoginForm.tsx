import React from 'react';
import InputField from './InputField';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';
import Logo from './Logo';
import { useLocation } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onRegisterClick: () => void;
  isModal?: boolean;
  closeModal: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ isModal, onRegisterClick, closeModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
    if (closeModal) closeModal();
  };

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      {!isModal && location.pathname === '/' && <Logo />}
      <div className='rounded-[0.5rem] bg-custom-gradient p-[0.125rem]'>
        <div className='w-[28.9375rem] h-[26.25rem] bg-backgroundLoginForm p-6 flex flex-col justify-center items-center rounded-[0.5rem] relative'>
          {isModal && (
            <div
              className='absolute right-4 top-6 rounded-full w-8 h-8 bg-backgroundBlack flex justify-center items-center cursor-pointer'
              onClick={closeModal}
            >
              <IoMdClose className='text-white text-base' />
            </div>
          )}
          <p className='text-[0.875rem] font-medium text-[#6B6C70] p-2 leading6'>WELCOME BACK</p>
          <p className='font-semibold text-[1.125rem] text-white leading2'>Log into your account</p>
          <div className='mt-10 mb-1'>
            <InputField
              type='text'
              placeholder='Enter your email or username'
              labelId='email'
              labelText='Email or Username'
            />
            <InputField type='password' placeholder='Enter your password' labelId='password' labelText='Password' />
          </div>
          <div className='w-full pb-3'>
            <Button text='Login now' onClick={handleLogin} />
            <p className='text-[0.875rem] text-[#7F8084] mt-3 flex items-center font-medium leading6'>
              Not registered yet?
              <span
                className={`text-textPrimary px-1 font-medium leading6 ${isModal && 'cursor-pointer'}`}
                onClick={isModal ? onRegisterClick : () => {}}
              >
                Register
              </span>
              <FiArrowRight className='text-textPrimary ' />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
