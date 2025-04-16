import { newMessageInterface } from "../../../types/chat";
import { ChatDbRepositoryInterace } from "../../interfaces/chatDbRepository";

export const addNewChat = async (
  senderId: string,
  receiverId: string,
  chatRepository: ReturnType<ChatDbRepositoryInterace>
) => {
  const isChatExist = await chatRepository.isChatExists(senderId, receiverId);
  if (isChatExist) return isChatExist;
  return await chatRepository.createNewChat([senderId, receiverId]);
};

export const newMessage = async (
  newMessageData: newMessageInterface,
  chatRepository: ReturnType<ChatDbRepositoryInterace>
) => await chatRepository.addNewMessage(newMessageData);
