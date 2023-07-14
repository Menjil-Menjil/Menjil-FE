// import {SendMessageContainerForm, ChatLogContainerDiv} from "@/component/chatting/chatting.style";
// import {useCallback, useRef, useState} from "react";
// const ChatLog = () => {
//   const chatLogWindow = useRef(null);
//   const [typedMessage, setTypedMessage] = useState("");

//   // 새 메시지를 받으면 스크롤을 이동하는 함수
//   const moveScrollToReceiveMessage = useCallback(() => {
//     if (chatLogWindow.current) {

//     }
//   }, []);

//   const onChangeInputMessage = useCallback((e: any) => {
//     setTypedMessage(e.target.value);
//   }, []);
//   const handleSendMessage = useCallback((e: any) => {
//     // 공백을 trim()으로 제거합니다.
//     const noContent = typedMessage.trim() === "";
//     // 아무 메시지도 없으면 아무 일도 발생하지 않습니다.
//     if (noContent) { return; }

//     /*
//       send typed message
//     */

//     setTypedMessage("");
//   }, []);

//   return (
//     <>
//       <ChatLogContainerDiv ref={chatLogWindow}>
//         <div className="messageBoxServer">안녕 반가워 호잇호잇 으아아아 헬로! 랄라 라랄 바나나 오징어 달구지 XSaR nZ 5 hsKHW 6BQ ob3EtSvz pkjlt K3LWl9 7aEm GZk3L ptj CtRDf61 n8limNiY UlmJ Fia4NRZ cd9I8w1Aq 1ZJV0azadf rixBLvjy0pVCUB 2FRSx7 rBJH9 0noi3kx0U3TPtCJEN HcxmS </div>
//         <div className="messageBoxServer">chat</div>
//         <div className="messageBoxClient">chat</div>
//       </ChatLogContainerDiv>
//       <SendMessageContainerForm>
//         <input type="text" value={typedMessage} onChange={onChangeInputMessage}/>
//         <button type="button" className="submitBtn" onClick={handleSendMessage}>전송</button>
//       </SendMessageContainerForm>
//     </>
//   );
// };

// export default ChatLog;
