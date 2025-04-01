import axios from "axios";
import { CHAT_API } from "../Config";

export default async function getConversations(
  conversationId: string,
  receiverId: string,
  senderId?: string
) {
  try {
    const { data } = await axios.get(
      CHAT_API + `/conversation/${conversationId}`,
      {
        params: {
          receiverId,
          senderId,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
