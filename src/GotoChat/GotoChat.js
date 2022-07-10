import GotoChatS from "./GotoChat.module.css";
import profileImg from "../Images/profile-img.png";

function GotoChat() {
  return (
    <div className={GotoChatS.GotoChat}>
      <img
        src={profileImg}
        alt="profile pic"
        className={`${GotoChatS.profileImg} ${GotoChatS.Animation}`}
      />
    </div>
  );
}

export default GotoChat;
