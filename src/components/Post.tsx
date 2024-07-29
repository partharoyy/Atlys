import { User } from '../types/User';
import { RxChatBubble } from 'react-icons/rx';

const Post: React.FC<User> = ({ profileImageUrl, profileName, lastSeen, isEdited, emoji, message, commentsList }) => {
  return (
    <div className='w-[43.75rem] h-[15.625rem] bg-backgroundPost border-[0.125rem] border-borderPost rounded-[0.5rem] py-6 px-5 mt-3'>
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex justify-start items-center gap-5'>
            <img
              src={profileImageUrl}
              alt={`${profileName}'s profile`}
              className='w-[2.75rem] h-[2.75rem] rounded-full object-cover'
            />
            <div className='flex flex-col justify-center gap-1'>
              <h2 className='text-[1rem] font-medium text-textPrimary leading3'>{profileName}</h2>
              <div className='flex justify-start items-center gap-1 text-textPara text-[0.875rem] font-medium leading6'>
                <p>{lastSeen}</p>
                {isEdited && (
                  <>
                    <span className='text-3xl mt-[-0.9375rem]'>.</span>
                    <span>Edited</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='w-[1.25rem] h-[1.25rem] text-textPrimary text-2xl'>...</div>
        </div>
        <div className='w-full h-[6.6875rem] border-[0.125rem] rounded-[0.5rem] border-transparent bg-backgroundCreatePost flex items-center'>
          <div className='flex justify-start gap-4 ml-4 w-full'>
            <div className='rounded-full w-12 h-12 bg-backgroundPost flex justify-center items-center text-[1.125rem] leading2 font-medium'>
              {emoji}
            </div>
            <div className='flex w-[85%]'>
              <h2 className='text-[1rem] font-normal text-textPara leading4'>{message}</h2>
            </div>
          </div>
        </div>
        <div className='flex justify-start items-center gap-[0.5rem]'>
          <RxChatBubble className='h-[1.25rem] w-[1.25rem] text-textPrimary' />
          <p className='font-medium text-[0.875rem] text-textPara leading6'>{`${commentsList.length} ${
            commentsList.length > 1 ? 'comments' : 'comment'
          }`}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
