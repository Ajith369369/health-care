export interface MessageProps {
  message?: {
    text: string;
    createdAt: string;
  };
  own: boolean;
  receiverProfilePicture: string;
  receiverName: string;
}
