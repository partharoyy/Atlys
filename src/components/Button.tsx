import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, width = '100%', height = '2.6875rem' }) => {
  return (
    <button
      className='p-2 text-white font-medium text-[1rem] bg-buttonPrimary rounded-[0.25rem] leading1'
      onClick={onClick}
      style={{ width, height }}
    >
      {text}
    </button>
  );
};

export default Button;
