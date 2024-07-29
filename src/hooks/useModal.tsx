import { useState } from 'react';

const useModal = () => {
  const [modalType, setModalType] = useState<string | null>(null);

  const openLoginModal = () => setModalType('login');
  const openSignupModal = () => setModalType('signup');
  const closeModal = () => setModalType(null);

  return {
    modalType,
    openLoginModal,
    openSignupModal,
    closeModal,
  };
};

export default useModal;
