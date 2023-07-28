import Chatting from "@/component/chatting";
import ChattingComponentProvider from "@/provider/ChattingComponentProvider";

const chatting = () => {
  return (
    <ChattingComponentProvider>
      <Chatting />
    </ChattingComponentProvider>
  );
};

export default chatting;
