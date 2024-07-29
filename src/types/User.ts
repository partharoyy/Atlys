export interface User {
  id: number;
  profileImageUrl: string;
  profileName: string;
  lastSeen: string;
  emoji: string;
  message: string;
  commentsList: CommentProps[];
  isEdited?: boolean;
}

interface CommentProps {
  user: string;
  comment: string;
  timestamp: string;
}
