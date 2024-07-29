import useModal from '../hooks/useModal';
import Button from './Button';
import LoginForm from './LoginForm';
import Modal from './Modal';
import SignupForm from './SignupForm';

function CreatePost() {
  const { modalType, openLoginModal, openSignupModal, closeModal } = useModal();

  return (
    <div className='w-[43.75rem] h-[13.9375rem] bg-backgroundPost border-[0.125rem] border-borderPost rounded-[0.5rem] py-6 px-5'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-[1.125rem] font-medium text-textPrimary leading2'>Create post</h2>
        <div className='w-full h-[4.875rem] border-[0.125rem] rounded-[0.5rem] border-transparent bg-backgroundCreatePost flex items-center'>
          <div className='flex items-center gap-4 ml-4 w-[95%]'>
            <div className='rounded-full w-12 h-12 bg-backgroundPost flex justify-center items-center text-[1.125rem] leading2 font-medium'>
              💬
            </div>
            <input
              type='text'
              placeholder='How are you feeling today?'
              className='flex-1 inputPlaceholderColor bg-transparent outline-none text-textPara font-normal text-[1rem] leading-[1rem]'
            />
          </div>
        </div>
        <div className='flex justify-end'>
          <Button text='Post' onClick={openSignupModal} width='6.9375rem' />
        </div>
        <Modal isOpen={modalType === 'signup'}>
          <SignupForm isModal onLoginClick={openLoginModal} closeModal={closeModal} />
        </Modal>
        <Modal isOpen={modalType === 'login'}>
          <LoginForm isModal onRegisterClick={openSignupModal} closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
}

export default CreatePost;
