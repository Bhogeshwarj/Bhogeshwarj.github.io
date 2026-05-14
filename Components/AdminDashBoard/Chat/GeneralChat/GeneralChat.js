import {
  GenralChatDiv,
  GenralChatHead,
  TextInput,
  Input,
  Button,
} from "./GeneralChatComponents";
import Chat from "./Chats/ChatData";
function GeneralChat(props) {
  const data = props.Data;
  return (
    <GenralChatDiv>
      <GenralChatHead>Message</GenralChatHead>
      <Chat data={data}></Chat>
    </GenralChatDiv>
  );
}

export default GeneralChat;
