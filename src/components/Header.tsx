interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <div>
      <div className='flex flex-col gap-2 w-[43.75rem]'>
        <h1 className='text-[1.75rem] text-textPrimary font-medium text-left leading5'>{userName}</h1>
        <p className='w-[36.25rem] h-[3rem] text-textPara font-normal text-[1rem] leading4'>
          How are you doing today? Would you like to share something with the community 🤗
        </p>
      </div>
    </div>
  );
};

export default Header;
